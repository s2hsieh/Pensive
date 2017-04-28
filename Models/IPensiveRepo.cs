using System.Collections.Generic;

namespace Pensive.Models
{
	public interface IPensiveRepo
	{
		IEnumerable<Thought> GetAllThoughtsByUser(string user);
		Thought GetThoughtById(int id);
	}
}