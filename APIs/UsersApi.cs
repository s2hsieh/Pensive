using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pensive.APIs
{
	[Authorize]
	[Route("api/user")]
    public class UsersApi : Controller
    {
		[HttpGet("id")]
		public IActionResult GetUserName() {
			try
			{
				return Ok(this.User.Identity.Name);
			}
			catch (Exception ex)
			{
				return BadRequest(ex);
			}
		}

    }
}
