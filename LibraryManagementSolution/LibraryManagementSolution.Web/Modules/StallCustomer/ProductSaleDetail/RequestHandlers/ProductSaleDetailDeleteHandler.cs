using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSaleDetailRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSaleDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaleDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaleDetailDeleteHandler
    {
        public ProductSaleDetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}