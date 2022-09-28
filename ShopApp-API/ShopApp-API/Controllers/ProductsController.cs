using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopApp_API.Data;
using ShopApp_API.Entiteis;
using ShopApp_API.Services.IRepo;

namespace ShopApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProduct _repo;

        public ProductsController(IProduct repo)
        {
            this._repo = repo;
        }
        /// <summary>
        /// Function to get all products
        /// </summary>
        /// <returns> list of product</returns>
        [HttpGet]
        public async Task< ActionResult<List<Product>>> getProducts()
        {
            return await _repo.getProducts();
            
        }
        /// <summary>
        /// Function to get product by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Product opject</returns>
        [HttpGet("{id}")]
        public async Task< ActionResult<Product>> getProducById(int id)
        {
            return await _repo.getProductById(id);  
           
        }
    }
}
