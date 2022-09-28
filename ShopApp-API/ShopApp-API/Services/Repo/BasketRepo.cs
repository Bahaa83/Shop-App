using Microsoft.EntityFrameworkCore;
using ShopApp_API.Data;
using ShopApp_API.Entiteis;
using ShopApp_API.Services.IRepo;
using System.Reflection.Metadata.Ecma335;

namespace ShopApp_API.Services.Repo
{
    public class BasketRepo : IBasket
    {
        private readonly ShopContext _context;
        private readonly Basket _basketItems;

        public BasketRepo(ShopContext context,Basket basketItems)
        {
            this._context = context;
            this._basketItems = basketItems;
        }
        public  async Task<bool> AddBasketItem(int productId, int quantity)
        {
            var product = await _context.Products!.FirstOrDefaultAsync(p=>p.Id==productId);
            if(product == null)return false;
            _basketItems.AddBasketItem(product, quantity);
            if (await _context.SaveChangesAsync() > 0) return true;
            return false;
    

        }

        public async Task<Basket> CreateBasket(string buyerId)
        {
            var basket = new Basket
            {
                  BuyerId = buyerId,
            };
           await _context.Baskets!.AddAsync(basket);
            return basket;
        }

        
        public async Task<Basket> GetBasket(string buyerId)
        {
            Basket? basket = await _context.Baskets!.Include(b=>b.BasketItems)
                .ThenInclude(b=>b.Product).FirstOrDefaultAsync(b => b.BuyerId == buyerId);
            
            return basket!;
        }

        public async Task<bool> RemoveBasketItem(int productId, int quantity)
        {
           _basketItems.RemoveBasketItem(productId, quantity);
            if(await _context.SaveChangesAsync() > 0) return true;  
            return false;
        }
    }
}
