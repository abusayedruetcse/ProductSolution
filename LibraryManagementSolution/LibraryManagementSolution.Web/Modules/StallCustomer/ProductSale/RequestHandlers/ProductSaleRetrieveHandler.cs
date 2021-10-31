using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.StallCustomer.ProductSaleRow>;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSaleRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSaleRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaleRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaleRetrieveHandler
    {
        public ProductSaleRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}