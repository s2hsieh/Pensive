using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Pensive.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pensive.Controllers
{
    public class AuthController : Controller
    {
		private SignInManager<IdentityUser> _sm;
		private UserManager<IdentityUser> _um;

		public AuthController(SignInManager<IdentityUser> sm, UserManager<IdentityUser> um)
		{
			_sm = sm;
			_um = um;
		}

		public IActionResult Login()
		{
			if (User.Identity.IsAuthenticated)
			{
				return Redirect("/Home/Index");
			}
			return View();
		}

		[HttpPost]
		public async Task<IActionResult> Login(Credential credentials, string returnUrl)
		{
			if (ModelState.IsValid)
			{
				var signIn = await _sm.PasswordSignInAsync(credentials.UserName, credentials.Password, true, false);
				if (signIn.Succeeded)
				{
					if (string.IsNullOrWhiteSpace(returnUrl))
					{
						return Redirect("/Home/Index");
					}
					else
					{
						return Redirect(returnUrl);
					}
				}
				else
				{
					ModelState.AddModelError("", "Incorrect username or password.");
				}
			}
			return View();
		}

		public async Task<IActionResult> Logout()
		{
			if (User.Identity.IsAuthenticated)
			{
				await _sm.SignOutAsync();
			}
			return Redirect("/Home/Index");
		}

		public IActionResult Register()
		{
			return View();
		}

		[HttpPost]
		public async Task<IActionResult> Register(Accont account)
		{
			if (ModelState.IsValid)
			{
				if (await _um.FindByEmailAsync(account.Email) == null)
				{
					if (await _um.FindByNameAsync(account.UserName) == null)
					{
						if (account.Password == account.ConfirmPassword)
						{
							var user = new IdentityUser()
							{
								UserName = account.UserName,
								Email = account.Email
							};
							await _um.CreateAsync(user, account.Password);
						}
						else
						{
							ModelState.AddModelError("", "Passwords must match.");
						}
					}
					else
					{
						ModelState.AddModelError("", "This username already exist.");
					}
				}
				else
				{
					ModelState.AddModelError("", "This email is already registered.");
				}
			}
			else
			{
				ModelState.AddModelError("","Cannot use thease credentials"):
			}
			return View();
		}
    }
}
