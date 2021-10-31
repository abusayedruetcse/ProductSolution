using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.StallCustomer.ProductSaleDetailRow>;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSaleDetailRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSaleDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaleDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaleDetailRetrieveHandler
    {
        public ProductSaleDetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}