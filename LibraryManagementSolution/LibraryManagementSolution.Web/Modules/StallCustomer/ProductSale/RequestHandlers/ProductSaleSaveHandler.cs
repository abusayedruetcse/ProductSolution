using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.StallCustomer.ProductSaleRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSaleRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSaleSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaleSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaleSaveHandler
    {
        public ProductSaleSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}