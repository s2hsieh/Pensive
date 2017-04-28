using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pensive.Models
{
    public class PensiveContext : IdentityDbContext
    {
		private IConfigurationRoot _config;

		public PensiveContext(IConfigurationRoot config, DbContextOptions options) : base(options)
		{
			_config = config;
		}

		public DbSet<Thought> Thoughts { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			base.OnConfiguring(optionsBuilder);
			optionsBuilder.UseSqlServer(_config["AppData:ConnectionString"]);
		}
	}
}
