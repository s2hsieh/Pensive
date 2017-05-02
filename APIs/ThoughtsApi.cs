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
		private IPensiveRepo _repo;

		public ThoughtsApi(IPensiveRepo repo)
		{
			_repo = repo;
		}

		[HttpGet("")]
		public IActionResult GetAll()
		{
			try
			{
				return Ok(_repo.GetAllThoughtsByUser(this.User.Identity.Name));
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);

			}
		}

		[HttpGet("{id}")]
		public IActionResult GetOne(int id)
		{
			try
			{
				return Ok(_repo.GetThoughtById(this.User.Identity.Name, id));
			}
			catch (Exception ex)
			{

				return BadRequest(ex.Message);
			}
		}

		[HttpPost("")]
		public IActionResult CreateOne([FromBody] Thought thought)
		{
			try
			{
				thought.DateAdded = DateTime.UtcNow;
				thought.DateModified = thought.DateAdded;
				thought.UserName = this.User.Identity.Name;
				_repo.CreateThought(thought);
				if (_repo.SaveAllAsync())
				{
					return Created($"/api/thoughts/{thought.Id}", thought);
				}
				else
				{
					return BadRequest("Faield to create thought in database.");
				}
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPut("{id}")]
		public IActionResult EditOne(int id, [FromBody] Thought parent, [FromBody] Thought child)
		{

		}
	}
}
