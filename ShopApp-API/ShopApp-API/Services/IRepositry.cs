using ShopApp_API.Entiteis;

namespace ShopApp_API.Services
{
    public interface IRepositry
    {
        List<Product> getProducts();
        Product getProductById(int id); 
    }
}
