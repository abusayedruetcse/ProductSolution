using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.StallCustomer.ProductSaleDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSaleDetailRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSaleDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaleDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaleDetailSaveHandler
    {
        public ProductSaleDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}