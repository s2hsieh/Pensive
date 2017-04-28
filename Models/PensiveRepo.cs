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

		public IEnumerable<Thought> GetAllThoughtsByUser(string user) {
			return _db.Thoughts.Where(t => t.UserName == user);
		}

		public Thought GetThoughtById(int id) {
			return _db.Thoughts.Find(id);
		}
    }
}
