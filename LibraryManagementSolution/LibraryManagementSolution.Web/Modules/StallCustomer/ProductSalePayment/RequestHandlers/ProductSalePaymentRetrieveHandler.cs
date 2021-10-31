using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.StallCustomer.ProductSalePaymentRow>;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSalePaymentRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSalePaymentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSalePaymentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductSalePaymentRetrieveHandler
    {
        public ProductSalePaymentRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}