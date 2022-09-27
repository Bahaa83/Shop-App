namespace ShopApp_API.Entiteis
{
    public class Basket
    {
        public int Id { get; set; }
        public string? BuyerId { get; set; }
        public List<BasketItem> BasketItems { get; set; } = new();

    }
}
