using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pensive.Models
{
	public class Accont : Credential
	{
		[Required]
		[EmailAddress]
		[Display(Name ="Email Address")]
		public string Email { get; set; }
		[Required]
		[MinLength(8), MaxLength(50)]
		[Display(Name ="Confirm Password")]
		public string ConfirmPassword { get; set; }
	}
}
