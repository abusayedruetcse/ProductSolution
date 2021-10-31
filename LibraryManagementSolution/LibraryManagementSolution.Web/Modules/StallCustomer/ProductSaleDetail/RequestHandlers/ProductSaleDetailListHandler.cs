using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.StallCustomer.ProductSaleDetailRow>;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSaleDetailRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSaleDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaleDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaleDetailListHandler
    {
        public ProductSaleDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}