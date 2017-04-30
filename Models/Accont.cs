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
		public string Email { get; set; }
		[Required]
		[MinLength(8)]
		public string ConfirmPassword { get; set; }
	}
}
