using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.PublisherStall.PurchaseOrderPaymentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderPaymentRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderPaymentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderPaymentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderPaymentSaveHandler
    {
        public PurchaseOrderPaymentSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}