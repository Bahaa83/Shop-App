﻿using Microsoft.EntityFrameworkCore;
using ShopApp_API.Entiteis;

namespace ShopApp_API.Data
{
    public class ShopContext:DbContext
    {
        public ShopContext(DbContextOptions<ShopContext> options):base(options)
        {

        }
        public DbSet<Product>?Products { get; set; }

    }
}