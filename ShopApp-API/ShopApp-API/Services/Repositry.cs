using ShopApp_API.Data;
using ShopApp_API.Entiteis;

namespace ShopApp_API.Services
{
    public class Repositry : IRepositry
    {
        private readonly ShopContext context;

        public Repositry(ShopContext context)
        {
            this.context = context;
        }

        public Product getProductById(int id)
        {
            var product = context.Products!.FirstOrDefault(p => p.Id == id);
            return product!;
        }

        public List<Product> getProducts()
        {
            var products = context.Products!.ToList();
            return products;
        }
    }
}
