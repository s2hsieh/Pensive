using System.Collections.Generic;

namespace Pensive.Models
{
	public interface IPensiveRepo
	{
		IEnumerable<Thought> GetAllThoughtsByUser(string userName);
		Thought GetThoughtById(string userName, int id);
		void CreateThought(Thought thought);
		void CreateThought(Thought child, Thought parent);
		void EditThought(Thought thought);
		void EditThought(Thought child, Thought parent);
		bool SaveAllAsync();
	}
}