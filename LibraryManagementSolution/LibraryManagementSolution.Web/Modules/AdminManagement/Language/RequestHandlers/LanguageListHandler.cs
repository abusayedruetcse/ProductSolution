using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.AdminManagement.LanguageRow>;
using MyRow = LibraryManagementSolution.AdminManagement.LanguageRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface ILanguageListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LanguageListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageListHandler
    {
        public LanguageListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}