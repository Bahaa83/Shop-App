using ShopApp_API.Entiteis;

namespace ShopApp_API.Services.IRepo
{
    public interface IRepositry
    {
        Task<List<Product>> getProducts();
        Task<Product> getProductById(int id);
    }
}
