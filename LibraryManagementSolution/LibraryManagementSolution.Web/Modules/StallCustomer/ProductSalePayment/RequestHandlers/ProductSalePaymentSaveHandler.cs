using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.StallCustomer.ProductSalePaymentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.StallCustomer.ProductSalePaymentRow;

namespace LibraryManagementSolution.StallCustomer
{
    public interface IProductSalePaymentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSalePaymentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductSalePaymentSaveHandler
    {
        public ProductSalePaymentSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}