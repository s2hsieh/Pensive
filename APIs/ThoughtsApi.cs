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
		public IActionResult GetThought(int id)
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
		public async Task<IActionResult> CreateThought([FromBody] Thought thought)
		{
			try
			{
				if (ModelState.IsValid)
				{
					thought.DateAdded = DateTime.UtcNow;
					thought.DateModified = thought.DateAdded;
					thought.UserName = this.User.Identity.Name;
					_repo.CreateThought(thought);
					if (await _repo.SaveAllAsync())
					{
						return Created($"/api/thoughts/{thought.Id}", thought);
					}
					else
					{
						return BadRequest("Faield to create thought in database.");
					}
				}
				else
				{
					return BadRequest("Invalid ModelState");
				}
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> EditThought(int id, [FromBody] Thought thought)
		{
			if (ModelState.IsValid)
			{
				if (thought.UserName == this.User.Identity.Name && id == thought.Id)
				{
					try
					{
						var oldThought = _repo.GetThoughtById(thought.UserName, id);
						if (oldThought.DateAdded == thought.DateAdded)
						{
							thought.DateModified = DateTime.UtcNow;
							_repo.EditThought(thought);
							if (await _repo.SaveAllAsync())
							{
								return Challenge();
							}
						}
					}
					catch (Exception ex)
					{
						return BadRequest(ex.Message);
					}
				}
				else
				{
					return BadRequest("Unauthorized access.");
				}
			}
			return BadRequest("Invalid ModelState");
		}
	}
}
