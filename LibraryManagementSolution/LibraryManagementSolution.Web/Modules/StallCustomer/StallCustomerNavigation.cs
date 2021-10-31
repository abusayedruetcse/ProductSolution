using Serenity.Navigation;
using MyPages = LibraryManagementSolution.StallCustomer.Pages;

[assembly: NavigationLink(int.MaxValue, "StallCustomer/Customer", typeof(MyPages.CustomerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "StallCustomer/Product Sale", typeof(MyPages.ProductSaleController), icon: null)]





