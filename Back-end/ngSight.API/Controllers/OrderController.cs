using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ngSight.API.Models;

namespace ngSight.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Order")]
    public class OrderController : Controller
    {
        private readonly NgSightDbContext _ctx;

        public OrderController(NgSightDbContext ctx)
        {
            _ctx = ctx;
        }

        //Get api/order/pageNumber/pageSize
        [HttpGet("{pageIndex:int}/{pageSize:int}")]
        public IActionResult Get(int pageIndex, int pageSize)
        {
            var data = _ctx.Orders.Include(c => c.Customer).OrderByDescending(o => o.Placed);

            var page = new PaginatedResponse<Order>(data, pageIndex, pageSize);

            var totalCount = data.Count();
            var totalPages = Math.Ceiling((double) totalCount / pageSize);

            //creating new object
            var response = new
            {
                Page = page,
                TotalPages = totalPages
            };

            return Ok(response);
        }

        //public IActionResult Get()
        //{
        //    var data = _ctx.Orders.OrderBy(c => c.Id);

        //    return Ok(data);
        //}

        //[HttpGet("{id}", Name = "GetOrder")]
        //public IActionResult Get(int id)
        //{
        //    var order = _ctx.Orders.Find(id);
        //    return Ok(order);
        //}

        //[HttpPost]
        //public IActionResult Post([FromBody] Order order)
        //{
        //    if (order == null)
        //    {
        //        return BadRequest();
        //    }

        //    _ctx.Orders.Add(order);
        //    _ctx.SaveChanges();

        //    return CreatedAtRoute("GetOrder", new { id = order.Id }, order);
        //}
    }
}