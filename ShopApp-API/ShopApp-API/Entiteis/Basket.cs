namespace ShopApp_API.Entiteis
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItem> BasketItems { get; set; } = new();
        public void AddBasketItem(Product product,int quantity)
        {
            // Check if this products is exist
            if(BasketItems.All(x => x.Id == product.Id))
            {
                var existingItem = BasketItems.FirstOrDefault(x => x.Id == product.Id);
                if(existingItem != null) existingItem.Quantity += quantity;
            }
            // Else
            BasketItems.Add(new BasketItem { Product = product, Quantity = quantity });

        }
        public void RemoveBasketItem (int productId,int quantity)
        {
            var deletedItem = BasketItems.FirstOrDefault(x=> x.Id == productId);
            if (deletedItem == null) return;
            deletedItem.Quantity -= quantity;
            if (deletedItem.Quantity == 0) BasketItems.Remove(deletedItem);
                    
            

        }

    }
}
