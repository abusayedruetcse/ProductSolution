using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.AdminManagement.AuthorRow>;
using MyRow = LibraryManagementSolution.AdminManagement.AuthorRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IAuthorRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AuthorRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAuthorRetrieveHandler
    {
        public AuthorRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}