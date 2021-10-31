using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.StallCustomer.ReturnOrExchangeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.StallCustomer.ReturnOrExchangeRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IReturnOrExchangeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReturnOrExchangeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IReturnOrExchangeSaveHandler
    {
        public ReturnOrExchangeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}