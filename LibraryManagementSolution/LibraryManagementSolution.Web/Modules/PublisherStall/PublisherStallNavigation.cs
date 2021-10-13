using Serenity.Navigation;
using MyPages = LibraryManagementSolution.PublisherStall.Pages;

[assembly: NavigationLink(int.MaxValue, "PublisherStall/Purchase Order", typeof(MyPages.PurchaseOrderController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PublisherStall/Purchase Order Detail List", typeof(MyPages.PurchaseOrderDetailListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PublisherStall/Purchase Order Payment", typeof(MyPages.PurchaseOrderPaymentController), icon: null)]