using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.StallCustomer.ReturnOrExchangeRow>;
using MyRow = LibraryManagementSolution.StallCustomer.ReturnOrExchangeRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IReturnOrExchangeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReturnOrExchangeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IReturnOrExchangeRetrieveHandler
    {
        public ReturnOrExchangeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}