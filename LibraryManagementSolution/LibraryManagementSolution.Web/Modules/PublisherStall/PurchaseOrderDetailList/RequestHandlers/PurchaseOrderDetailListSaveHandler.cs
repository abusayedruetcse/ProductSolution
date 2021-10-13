using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.PublisherStall.PurchaseOrderDetailListRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderDetailListRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderDetailListSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderDetailListSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderDetailListSaveHandler
    {
        public PurchaseOrderDetailListSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}