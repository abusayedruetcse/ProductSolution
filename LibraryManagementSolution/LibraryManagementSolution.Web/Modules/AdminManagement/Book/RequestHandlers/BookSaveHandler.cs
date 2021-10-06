using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.AdminManagement.BookRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.AdminManagement.BookRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IBookSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BookSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBookSaveHandler
    {
        public BookSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}