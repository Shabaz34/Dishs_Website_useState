using exe3.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace exe3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngreToRecController : ControllerBase
    {
        // GET: api/<IngreToRecController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<IngreToRecController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public int Post([FromBody] IngreToRec value)
        {
            if (value.Insert() == 1)
                return 1;
            else
                return 0;
        }

        // PUT api/<IngreToRecController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<IngreToRecController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
