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
		public async Task<IActionResult> CreateThought([FromBody] Thought newThought)
		{
			try
			{
				if (ModelState.IsValid)
				{
					newThought.DateAdded = DateTime.UtcNow;
					newThought.DateModified = newThought.DateAdded;
					newThought.UserName = this.User.Identity.Name;
					_repo.CreateThought(newThought);
					if (await _repo.SaveAllAsync())
					{
						return Created($"/api/thoughts/{newThought.Id}", newThought);
					}
					else
					{
						return BadRequest("Faield to create thought in database.");
					}
				}
				else
				{
					return BadRequest(ModelState);
				}
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> EditThought(int id, [FromBody] Thought newThought)
		{
			if (ModelState.IsValid)
			{
				if (newThought.UserName == this.User.Identity.Name && id == newThought.Id)
				{
					try
					{
						var oldThought = _repo.GetThoughtById(newThought.UserName, id);
						if (oldThought.DateAdded == newThought.DateAdded)
						{
							newThought.DateModified = DateTime.UtcNow;
							_repo.EditThought(newThought);
							if (await _repo.SaveAllAsync())
							{
								return Challenge();
							}
							else
							{
								return BadRequest("Error manipulating database.");
							}
						}
					}
					catch (Exception ex)
					{
						return BadRequest(ex);
					}
				}
				else
				{
					return Unauthorized();
				}
			}
			return BadRequest(ModelState);
		}
	}
}
