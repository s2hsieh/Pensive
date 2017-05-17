using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
		[Required]
		[MinLength(3), MaxLength(20)]
		public string Title { get; set; }
		[Required]
		[MaxLength(200)]
		public string Content { get; set; }
		[Required]
		public string Color { get; set; }
	}
}
