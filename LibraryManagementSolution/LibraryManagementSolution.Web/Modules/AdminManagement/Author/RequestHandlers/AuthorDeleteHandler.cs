using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.AdminManagement.AuthorRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IAuthorDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AuthorDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAuthorDeleteHandler
    {
        public AuthorDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}