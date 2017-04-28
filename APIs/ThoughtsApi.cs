using Microsoft.AspNetCore.Mvc;
using Pensive.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pensive.APIs
{
    public class ThoughtsApi : Controller
    {
		private PensiveRepo _repo;

		public ThoughtsApi(PensiveRepo repo)
		{
			_repo = repo;
		}

		[HttpGet("api/thoughts/:user")]
		public IActionResult Get(string user) {
			return Ok(_repo.GetAllThoughtsByUser(user));
		}
        
    }
}
