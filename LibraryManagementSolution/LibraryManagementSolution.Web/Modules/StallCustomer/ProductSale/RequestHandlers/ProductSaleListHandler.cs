using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.StallCustomer.ProductSaleRow>;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSaleRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSaleListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaleListHandler
    {
        public ProductSaleListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}