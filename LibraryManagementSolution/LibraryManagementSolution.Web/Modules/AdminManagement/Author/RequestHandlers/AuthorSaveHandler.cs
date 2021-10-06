using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.AdminManagement.AuthorRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.AdminManagement.AuthorRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IAuthorSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AuthorSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAuthorSaveHandler
    {
        public AuthorSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}