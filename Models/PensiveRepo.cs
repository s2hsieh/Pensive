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

		public async Task CreateThought(Thought thought)
		{
			_db.Thoughts.Add(thought);
			await _db.SaveChangesAsync();
		}

		public void CreateThought(Thought child, Thought parent)
		{
			throw new NotImplementedException();
		}

		public void EditThought(Thought thought)
		{

		}

		public void EditThought(Thought child, Thought parent)
		{
			throw new NotImplementedException();
		}

		public IEnumerable<Thought> GetAllThoughtsByUser(string userName) {
			return _db.Thoughts.Where(t => t.UserName == userName).ToList();
		}

		public Thought GetThoughtById(string userName, int id) {
			return _db.Thoughts.Where(t => t.UserName == userName && t.Id == id).FirstOrDefault()
		}
    }
}
