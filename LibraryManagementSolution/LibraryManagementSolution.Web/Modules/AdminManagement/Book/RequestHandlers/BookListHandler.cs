using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.AdminManagement.BookRow>;
using MyRow = LibraryManagementSolution.AdminManagement.BookRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IBookListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BookListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBookListHandler
    {
        public BookListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}