using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSaleRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSaleDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaleDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaleDeleteHandler
    {
        public ProductSaleDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}