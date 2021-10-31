using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.StallCustomer.ReturnOrExchangeRow>;
using MyRow = LibraryManagementSolution.StallCustomer.ReturnOrExchangeRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IReturnOrExchangeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ReturnOrExchangeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IReturnOrExchangeListHandler
    {
        public ReturnOrExchangeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}