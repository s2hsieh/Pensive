using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Pensive.Models;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace Pensive
{
	public class Startup
	{
		private IConfigurationRoot _config;

		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
				.AddJsonFile("config.json")
				.AddEnvironmentVariables();
			_config = builder.Build();
		}

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// Add framework services.
			services.AddSingleton(_config);
			services.AddIdentity<IdentityUser, IdentityRole>(config =>
			{
				config.User.RequireUniqueEmail = true;
				config.Password.RequiredLength = 8;
				config.Cookies.ApplicationCookie.LoginPath = "/Auth/Login";
				config.Cookies.ApplicationCookie.Events = new CookieAuthenticationEvents()
				{
					OnRedirectToLogin = async ctx =>
					 {
						 if (ctx.Request.Path.StartsWithSegments("/api") && ctx.Response.StatusCode == 200)
						 {
							 ctx.Response.StatusCode = 401;
						 }
						 else
						 {
							 ctx.Response.Redirect(ctx.RedirectUri);
						 }
						 await Task.Yield();
					 }
				};
			}).AddEntityFrameworkStores<PensiveContext>();
			services.AddDbContext<PensiveContext>();
			services.AddScoped<IPensiveRepo, PensiveRepo>();
			services.AddMvc()
				.AddJsonOptions(config => config.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver());
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(_config.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
				{
					HotModuleReplacement = true
				});
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseStaticFiles();

			app.UseIdentity();

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");

				routes.MapSpaFallbackRoute(
					name: "spa-fallback",
					defaults: new { controller = "Home", action = "Index" });
			});
		}
	}
}
