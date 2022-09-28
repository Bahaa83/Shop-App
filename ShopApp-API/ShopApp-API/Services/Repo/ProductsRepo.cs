using Microsoft.EntityFrameworkCore;
using ShopApp_API.Data;
using ShopApp_API.Entiteis;
using ShopApp_API.Services.IRepo;

namespace ShopApp_API.Services.Repo
{
    public class ProductsRepo : IProduct
    {
        private readonly ShopContext context;

        public ProductsRepo(ShopContext context)
        {
            this.context = context;
        }

        public async Task<Product> getProductById(int id)
        {
            var product = await context.Products!.FirstOrDefaultAsync(p => p.Id == id);
            return product!;
        }

        public async Task<List<Product>> getProducts()
        {
            var products = await context.Products!.ToListAsync();
            return products;
        }
    }
}
