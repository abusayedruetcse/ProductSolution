using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.AdminManagement.CountryRow>;
using MyRow = LibraryManagementSolution.AdminManagement.CountryRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface ICountryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CountryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICountryListHandler
    {
        public CountryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}