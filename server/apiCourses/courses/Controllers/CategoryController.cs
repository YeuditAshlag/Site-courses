using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace courses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public static List<Category> categories = new List<Category> {
           new Category("Programming", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-affiliate-filled\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#ff2825\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M18.5 3a2.5 2.5 0 1 1 -.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624 .787a2.5 2.5 0 1 1 -.575 1.916l-2.623 -.788a5.5 5.5 0 0 1 -10.39 -2.29l-.004 -.222l.004 -.221a5.5 5.5 0 0 1 2.984 -4.673l-.788 -2.624a2.498 2.498 0 0 1 -2.194 -2.304l-.006 -.178l.005 -.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714 .936l4.555 -4.556a2.487 2.487 0 0 1 -.167 -.748l-.005 -.164l.005 -.164a2.5 2.5 0 0 1 2.495 -2.336z\" stroke-width=\"0\" fill=\"currentColor\" />\r\n</svg>"),
            new Category("Web Development", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-api\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#000000\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M4 13h5\" />\r\n  <path d=\"M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3\" />\r\n  <path d=\"M20 8v8\" />\r\n  <path d=\"M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5\" />\r\n</svg>"),
            new Category("Data Science", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-affiliate-filled\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#ff2825\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M18.5 3a2.5 2.5 0 1 1 -.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624 .787a2.5 2.5 0 1 1 -.575 1.916l-2.623 -.788a5.5 5.5 0 0 1 -10.39 -2.29l-.004 -.222l.004 -.221a5.5 5.5 0 0 1 2.984 -4.673l-.788 -2.624a2.498 2.498 0 0 1 -2.194 -2.304l-.006 -.178l.005 -.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714 .936l4.555 -4.556a2.487 2.487 0 0 1 -.167 -.748l-.005 -.164l.005 -.164a2.5 2.5 0 0 1 2.495 -2.336z\" stroke-width=\"0\" fill=\"currentColor\" />\r\n</svg>"),
            new Category("Mobile Development", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-analyze-filled\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#ff2825\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M4.99 12.862a7.1 7.1 0 0 0 12.171 3.924a1.956 1.956 0 0 1 -.156 -.637l-.005 -.149l.005 -.15a2 2 0 1 1 1.769 2.137a9.099 9.099 0 0 1 -15.764 -4.85a1 1 0 0 1 1.98 -.275z\" stroke-width=\"0\" fill=\"currentColor\" />\r\n  <path d=\"M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z\" stroke-width=\"0\" fill=\"currentColor\" />\r\n  <path d=\"M13.142 3.09a9.1 9.1 0 0 1 7.848 7.772a1 1 0 0 1 -1.98 .276a7.1 7.1 0 0 0 -6.125 -6.064a7.096 7.096 0 0 0 -6.048 2.136a2 2 0 1 1 -3.831 .939l-.006 -.149l.005 -.15a2 2 0 0 1 2.216 -1.838a9.094 9.094 0 0 1 7.921 -2.922z\" stroke-width=\"0\" fill=\"currentColor\" />\r\n</svg>"),
            new Category("UI/UX Design", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-augmented-reality\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#000000\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M4 8v-2a2 2 0 0 1 2 -2h2\" />\r\n  <path d=\"M4 16v2a2 2 0 0 0 2 2h2\" />\r\n  <path d=\"M16 4h2a2 2 0 0 1 2 2v2\" />\r\n  <path d=\"M16 20h2a2 2 0 0 0 2 -2v-2\" />\r\n  <path d=\"M12 12.5l4 -2.5\" />\r\n  <path d=\"M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5z\" />\r\n  <path d=\"M8 10v4.5l4 2.5\" />\r\n</svg>"),
            new Category("Cloud Computing", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-brand-aws\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#000000\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94\" />\r\n  <path d=\"M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1\" />\r\n  <path d=\"M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5\" />\r\n  <path d=\"M3 9h3\" />\r\n  <path d=\"M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6\" />\r\n  <path d=\"M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75\" />\r\n</svg>"),
            new Category("Cybersecurity", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-asset\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#ff2825\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n  <path d=\"M9 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\" />\r\n  <path d=\"M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" />\r\n  <path d=\"M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" />\r\n  <path d=\"M14.218 17.975l6.619 -12.174\" />\r\n  <path d=\"M6.079 9.756l12.217 -6.631\" />\r\n  <path d=\"M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" />\r\n</svg>")
        };
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var cat=categories.Find(c=>c.codeCategory==id);
            if (cat == null)
                return NotFound();
            return Ok(cat);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category category)
        {
            categories.Add(category);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Category category)
        {
            var cat = categories.Find(c => c.codeCategory == id);
            if (cat == null)
                return NotFound();
            cat.codeCategory=category.codeCategory;
            cat.nameCategory=category.nameCategory;
            cat.icon=category.icon;
            return NoContent(); 

        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var category=categories.Find(c=>c.codeCategory==id);
            if(category == null)
                return NotFound();  
            categories.Remove(category);
            return Ok(category);
        }
    }
}
