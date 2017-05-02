using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pensive.Models
{
    public class PensiveRepo : IPensiveRepo
	{
		private PensiveContext _db;

		public PensiveRepo(PensiveContext db)
		{
			_db = db;
		}

		public void CreateThought(Thought thought)
		{
			_db.Thoughts.Add(thought);
		}

		public void CreateThought(Thought child, Thought parent)
		{

		}

		public void EditThought(Thought thought)
		{

		}

		public void EditThought(Thought child, Thought parent)
		{

		}

		public IEnumerable<Thought> GetAllThoughtsByUser(string userName) {
			return _db.Thoughts.Where(t => t.UserName == userName).ToList();
		}

		public Thought GetThoughtById(string userName, int id) {
			return GetAllThoughtsByUser(userName).FirstOrDefault(t => t.Id == id);
		}

		public async Task<bool> SaveAllAsync()
		{
			return (await _db.SaveChangesAsync() > 0);
		}
	}
}
