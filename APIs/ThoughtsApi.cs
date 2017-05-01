using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Pensive.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pensive.APIs
{
	[Authorize]
	[Route("api/thoughts")]
	public class ThoughtsApi : Controller
    {
		private PensiveRepo _repo;

		public ThoughtsApi(PensiveRepo repo)
		{
			_repo = repo;
		}

		[HttpGet("")]
		public IActionResult Get() {
			return Ok(_repo.GetAllThoughtsByUser(this.User.Identity.Name));
		}
        
    }
}
