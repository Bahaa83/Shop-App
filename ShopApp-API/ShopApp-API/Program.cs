using Microsoft.EntityFrameworkCore;
using ShopApp_API.Data;
using ShopApp_API.Services.IRepo;
using ShopApp_API.Services.Repo;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IProduct, ProductsRepo>();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ShopContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("Default Connection"));
});
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(opt =>opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:3000"));
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
using var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<ShopContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try
{
    // Create Data base === update-database
    context.Database.Migrate();
    // Start seed data
    SeedData.seedData(context);
}
catch (Exception ex)
{

    logger.LogError(ex, "Error occurs while migrating data");
}
app.Run();
