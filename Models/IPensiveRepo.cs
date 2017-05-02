using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pensive.Models
{
	public interface IPensiveRepo
	{
		IEnumerable<Thought> GetAllThoughtsByUser(string userName);
		Thought GetThoughtById(string userName, int id);
		void CreateThought(Thought thought);
		void EditThought(Thought thought);
		Task<bool> SaveAllAsync();
	}
}