using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace courses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {


        public static List<Course> courses = new List<Course>
{

          new Course(
           "Introduction to Python",
            1, // categoryId
            10, // accountLessons
           "2024-03-15", // dateStart
            new string[] { "Python Basics", "Data Structures", "Functions and Modules" }, // Syllabus
            wayOfLearn.frontal, // wayOfLearning
            1, // lecturerId
            "https://example.com/python-course-image.jpg" // imageUrl
           ),
           new Course(
           "Web Development Bootcamp",
            2, // categoryId
            15, // accountLessons
            "2024-04-01", // dateStart
            new string[] { "HTML/CSS", "JavaScript", "Node.js", "React" }, // Syllabus
            wayOfLearn.zoom, // wayOfLearning
            2, // lecturerId
           "https://example.com/web-development-course-image.jpg" // imageUrl
            ),
           new Course(
           "Java Programming Masterclass",
            1, // categoryId
            20, // accountLessons
            "2024-03-20", // dateStart
            new string[] { "Java Basics", "Object-Oriented Programming", "GUI Development" }, // Syllabus
            wayOfLearn.zoom, // wayOfLearning
            3, // lecturerId
            "https://example.com/java-course-image.jpg" // imageUrl
             ),
           new Course(
           "Data Science Fundamentals",
            3, // categoryId
            12, // accountLessons
            "2024-04-10", // dateStart
            new string[] { "Data Analysis", "Machine Learning", "Data Visualization" }, // Syllabus
            wayOfLearn.frontal, // wayOfLearning
            4, // lecturerId
            "https://example.com/data-science-course-image.jpg" // imageUrl
               ),
            new Course(
           "iOS App Development with Swift",
           2, // categoryId
           18, // accountLessons
           "2024-04-15", // dateStart
           new string[] { "Swift Basics", "iOS UI Design", "Networking with URLSession" }, // Syllabus
           wayOfLearn.zoom, // wayOfLearning
           5, // lecturerId
          "https://example.com/ios-development-course-image.jpg" // imageUrl
                )
            };


        // GET: api/<CourseController>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return courses;
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public ActionResult<Course> Get(int id)
        {
            var course1 = courses.Find(c => c.codeCourse == id);
            if (course1 == null)
            {
                return NotFound();
            }
            return Ok(course1);
        }

        // POST api/<CourseController>
        [HttpPost]
        public void Post([FromBody] Course cou)
        {
            courses.Add(cou);
        }
        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Course course)
        {
            var cour = courses.Find(c => c.codeCourse == id);
            if (cour == null)
            {
                return NotFound();
            }
            cour.codeCourse = course.codeCourse;
            cour.namecourse = course.namecourse;
            cour.categoryId = course.categoryId;
            cour.accountLessons = course.accountLessons;
            cour.dateStart = course.dateStart;
            cour.Syllabus = course.Syllabus;
            cour.wayOfLearning = course.wayOfLearning;
            cour.lecturerId = course.lecturerId;
            cour.imageUrl = course.imageUrl;
            return NoContent();
        }


        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var cour = courses.Find(c => c.codeCourse == id);
            if (cour == null)
            {
                return NotFound();
            }
            courses.Remove(cour);
            return NoContent();
        }
    }
}
