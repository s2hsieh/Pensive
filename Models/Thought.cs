using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pensive.Models
{
    public class Thought
    {
		public int Id { get; set; }
		public string UserName { get; set; }
		public DateTime DateAdded { get; set; }
		public DateTime DateModified { get; set; }
		public string Content { get; set; }
		public string Color { get; set; }
		public ICollection<Thought> Links { get; set; }
	}
}
