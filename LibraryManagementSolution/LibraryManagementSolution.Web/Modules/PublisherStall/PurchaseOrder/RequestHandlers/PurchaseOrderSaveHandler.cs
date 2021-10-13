using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.PublisherStall.PurchaseOrderRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderSaveHandler
    {
        public PurchaseOrderSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}