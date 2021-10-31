using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.StallCustomer.CustomerRow>;
using MyRow = LibraryManagementSolution.StallCustomer.CustomerRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface ICustomerListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerListHandler
    {
        public CustomerListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}