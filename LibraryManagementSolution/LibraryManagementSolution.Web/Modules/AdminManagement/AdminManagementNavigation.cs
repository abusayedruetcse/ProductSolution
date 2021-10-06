using Serenity.Navigation;
using MyPages = LibraryManagementSolution.AdminManagement.Pages;

[assembly: NavigationLink(int.MaxValue, "AdminManagement/Publisher", typeof(MyPages.PublisherController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "AdminManagement/Author", typeof(MyPages.AuthorController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "AdminManagement/Topic", typeof(MyPages.TopicController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "AdminManagement/Category", typeof(MyPages.CategoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "AdminManagement/Book", typeof(MyPages.BookController), icon: null)]