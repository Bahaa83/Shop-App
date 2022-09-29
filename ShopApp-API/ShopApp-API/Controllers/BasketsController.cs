using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopApp_API.Data;
using ShopApp_API.Entiteis;
using ShopApp_API.Services.IRepo;
using System.Reflection;

namespace ShopApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketsController : ControllerBase
    {
        private readonly ShopContext _context;

        public BasketsController(ShopContext context)
        {
            this._context = context;
        }
     /// <summary>
     /// Get basket function
     /// </summary>
     /// <returns>Basket object</returns>
        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            Basket basket = await RetrieveBasket();
            if(basket == null) return NotFound("Your basket is empty!!");
            return Ok(basket);
        }
        /// <summary>
        /// Add Product to Basket
        /// </summary>
        /// <param name="productId"></param>
        /// <param name="quantity"></param>
        /// <returns>StatusCode(201)</returns>
        [HttpPost]
        public async Task<ActionResult> AddBasketItem(int productId, int quantity)
        {
            // Get basket
            var basket = await RetrieveBasket();
            if(basket == null) basket = createBasket();
            //Get Product
            var product = await _context.Products!.FindAsync(productId);
            if (product == null) return NotFound();
            //Add Product to the basket
            basket.AddBasketItem(product!, quantity);
            //Save change and return result
            return await _context.SaveChangesAsync() > 0 ? StatusCode(201) :
            BadRequest(new ProblemDetails { Title = "Problem saving Item to basket" });
        }
        [HttpDelete]
        public async Task<ActionResult> RemoveItem(int productId,int quantity)
        {
           var basket = await RetrieveBasket();
            basket.RemoveBasketItem(productId, quantity);
           return await _context.SaveChangesAsync() > 0 ? Ok() :
                 BadRequest(new ProblemDetails { Title = "Problem Deleating Item to basket" });
        }

        private  Basket createBasket()
        {
            // Generate BuyerId
            var buyerId = Guid.NewGuid().ToString();
            //Create cookies object to put the buyerId in the cookies and send it with the response
            var cookiesOption = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.Now.AddDays(10)
            };
            Response.Cookies.Append("buyerId", buyerId, cookiesOption);
            // Create basket
           var basket = new Basket
            {
                BuyerId = buyerId,
            };
            _context.Baskets!.Add(basket);
            return basket;
           
        }

        private async Task<Basket> RetrieveBasket()
        {
            var basket = await _context.Baskets!
                .Include(b => b.BasketItems)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(b => b.BuyerId == Request.Cookies["buyerId"]);
            return basket!;

        }
    }
}
