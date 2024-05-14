using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace courses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
  

        public static List<User> users = new List<User>() { new User("שולמית","123 Main St","sh@gmail.com","123",true,"Introduction to Python"),
                                                            new User("Jonatan","12 king gorg","jt053@gmail.com","Bb1234",false,"Web Development Bootcamp"),
                                                            new User("Shanni","CCC","CCC@gmail.com","Cc1234",false,"Java Programming Masterclass"),
                                                            new User("Efrat","DDD","ef3492@gmail.com","Dd1234",false,"iOS App Development with Swift")
        };

        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult <User> Get(int id)
        {
            var user = users.Find(u=>u.codeUser==id); 
            if(user == null) 
                return NotFound();
            return Ok(user);
        }

        // GET api/<LecturerController>/5
        [HttpGet("{name}")]
        public User Get(string name)
        {
            return users.Find(l => l.nameUser == name);
        }
        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User user )
        {
            users.Add(user);    
       
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User updateUser)
        {
            var user = users.Find(u => u.codeUser == id);
            if (user == null)
            {
                return NotFound();
            }
            user.nameUser= updateUser.nameUser;
            user.address = updateUser.address;
            user.email = updateUser.email;
            user.password = updateUser.password;
            return NoContent();
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = users.Find(u => u.codeUser == id);
            if (user == null)
            {
                return NotFound();
            }
            users.Remove(user);
            return NoContent();
        }
    }
}
