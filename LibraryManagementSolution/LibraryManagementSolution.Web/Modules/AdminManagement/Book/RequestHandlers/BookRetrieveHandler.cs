using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.AdminManagement.BookRow>;
using MyRow = LibraryManagementSolution.AdminManagement.BookRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IBookRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BookRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBookRetrieveHandler
    {
        public BookRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}