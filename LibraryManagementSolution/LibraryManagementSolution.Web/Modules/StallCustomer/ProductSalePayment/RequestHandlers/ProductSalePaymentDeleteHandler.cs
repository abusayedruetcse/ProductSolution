using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSalePaymentRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSalePaymentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSalePaymentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IProductSalePaymentDeleteHandler
    {
        public ProductSalePaymentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}