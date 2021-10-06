using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.AdminManagement.AuthorRow>;
using MyRow = LibraryManagementSolution.AdminManagement.AuthorRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IAuthorListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AuthorListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAuthorListHandler
    {
        public AuthorListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}