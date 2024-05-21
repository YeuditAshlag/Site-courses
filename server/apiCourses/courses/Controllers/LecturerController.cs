using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace courses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        
        public static List<Lecturer> lecturers = new List<Lecturer>() { new Lecturer("שולמית","123 Main St","sh@gmail.com","123"),
                                                                        new Lecturer("Eden","zaeet 5","BBB@gmail.com","Bb1234"),
                                                                        new Lecturer("Noha","Sharet 20","CCC@gmail.com","Cc1234"),
                                                                        new Lecturer("Yael","Mualem 1","Y0345@gmail.com","Dd1234"),
                                                                        new Lecturer("שולמית","123 Main St","sh@gmail.com","123")

        };
        // GET: api/<LecturerController>
        [HttpGet]
        public IEnumerable<Lecturer> Get()
        {
            return lecturers;
        }

        // GET api/<LecturerController>/5
        [HttpGet("{id}")]
        public ActionResult<Lecturer> Get(int id)
        {
            var lecturer = lecturers.Find(u => u.codeLecturer == id);
            if (lecturer == null)
                return NotFound();
            return Ok(lecturer);
        }

        // POST api/<LecturerController>
        [HttpPost]
        public void Post([FromBody] Lecturer lecturer)
        {
            lecturers.Add(lecturer);
        }

        // PUT api/<LecturerController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Lecturer updateLecturer)
        {
            var lecturer = lecturers.Find(u => u.codeLecturer == id);
            if (lecturer == null)
            {
                return NotFound();
            }
            lecturer.codeLecturer=updateLecturer.codeLecturer;
            lecturer.nameLecturer = updateLecturer.nameLecturer;
            lecturer.address = updateLecturer.address;
            lecturer.email = updateLecturer.email;
            lecturer.password = updateLecturer.password;
            return NoContent();
        }

        // DELETE api/<LecturerController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var lecturer = lecturers.Find(u => u.codeLecturer == id);
            if (lecturer == null)
            {
                return NotFound();
            }
            lecturers.Remove(lecturer);
            return NoContent();
        }
    }
}
