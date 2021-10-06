using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.AdminManagement.BookRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IBookDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BookDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBookDeleteHandler
    {
        public BookDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}