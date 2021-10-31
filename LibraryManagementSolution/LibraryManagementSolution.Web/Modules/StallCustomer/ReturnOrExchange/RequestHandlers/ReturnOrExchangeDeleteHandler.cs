using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.StallCustomer.ReturnOrExchangeRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IReturnOrExchangeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ReturnOrExchangeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IReturnOrExchangeDeleteHandler
    {
        public ReturnOrExchangeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}