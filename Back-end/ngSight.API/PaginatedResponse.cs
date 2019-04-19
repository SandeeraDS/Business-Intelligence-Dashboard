using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngSight.API
{
    public class PaginatedResponse<T>
    {
        public PaginatedResponse(IEnumerable<T> data, int i, int len)
        {
            // [1] page,10 result
            // [2] page,10  result
            //this is the way padgination work
            Data = data.Skip((i - 1) * len).Take(len).ToList();
            Total = data.Count();
        }

        public int Total { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}
