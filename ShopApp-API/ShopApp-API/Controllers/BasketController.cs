using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using ShopApp_API.Data;
using ShopApp_API.Dto;
using ShopApp_API.Entiteis;
using ShopApp_API.Services.IRepo;
using System.Reflection;

namespace ShopApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketController : ControllerBase
    {
        private readonly ShopContext _context;

        public BasketController(ShopContext context)
        {
            this._context = context;
        }
        /// <summary>
        /// Get Basket By BuyerId
        /// </summary>
        /// <returns>Basket object</returns>
        [HttpGet]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket();
            if(basket == null) return NotFound("Your basket is empty!!");
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.BasketItems.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    Description = item.Product.Description,
                    Brand = item.Product.Brand,
                    PictureUrl = item.Product.PictureUrl,
                    QuantityInStock = item.Product.QuantityInStock,
                    Type = item.Product.Type,
                    Quantity = item.Quantity
                }).ToList()
            };
        }
        /// <summary>
        /// Add product to basket
        /// </summary>
        /// <param name="productId"></param>
        /// <param name="quantity"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult> AddBasketItem(int productId, int quantity)
        {
            
                //Get Basket
                 var basket = await RetrieveBasket();
                 //check basket
                 if (basket == null) basket = createBasket();
                //Get Product
                var product = await _context.Products.FindAsync(productId);
                if (product == null) return NotFound();
                //Add Product to the basket
                basket.AddBasketItem(product, quantity);
                //Save change and return result
                return await _context.SaveChangesAsync() > 0 ? StatusCode(201) :
                BadRequest(new ProblemDetails { Title = "Problem saving Item to basket" });

        }

        [HttpDelete]
        public async Task<ActionResult> RemoveItem(int productId,int quantity)
        {
           var basket = await RetrieveBasket();
            if (basket == null) return NotFound();
            basket.RemoveBasketItem(productId, quantity);
           return await _context.SaveChangesAsync() > 0 ? Ok() :
                 BadRequest(new ProblemDetails { Title = "Problem Deleating Item to basket" });
        }

        private  Basket createBasket()
        {
            // Generate BuyerId
            string buyerId = Guid.NewGuid().ToString();
            
            // Create basket
           var basket = new Basket
            {
                BuyerId = buyerId,
            };
            var cookiesOption = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.Now.AddDays(10),
                SameSite=Microsoft.AspNetCore.Http.SameSiteMode.None,
                Secure = true
            };
            Response.Cookies.Append("buyerId", buyerId,cookiesOption);
            _context.Baskets.Add(basket);
            return basket;
           
        }

        private async Task<Basket> RetrieveBasket()
        {
            var basket = await _context.Baskets
                .Include(b => b.BasketItems)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(b => b.BuyerId.Equals(Request.Cookies["buyerId"]));
            return basket;

        }
    }
}
