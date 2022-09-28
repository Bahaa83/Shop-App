using ShopApp_API.Entiteis;

namespace ShopApp_API.Services.IRepo
{
    public interface IBasket
    {
        Task<Basket>GetBasket(string buyerId);
        Task<Basket>CreateBasket(string buyerId);
        Task<bool> AddBasketItem(int productId, int quantity);
        Task<bool> RemoveBasketItem(int productId, int quantity);
    }
}
