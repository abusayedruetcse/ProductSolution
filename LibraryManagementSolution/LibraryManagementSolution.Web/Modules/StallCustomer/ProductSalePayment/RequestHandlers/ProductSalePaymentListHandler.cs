using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.StallCustomer.ProductSalePaymentRow>;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSalePaymentRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSalePaymentListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSalePaymentListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductSalePaymentListHandler
    {
        public ProductSalePaymentListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}