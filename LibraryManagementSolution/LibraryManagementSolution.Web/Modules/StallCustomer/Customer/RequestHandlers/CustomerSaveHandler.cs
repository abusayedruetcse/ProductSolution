using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.StallCustomer.CustomerRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.StallCustomer.CustomerRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface ICustomerSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerSaveHandler
    {
        public CustomerSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}