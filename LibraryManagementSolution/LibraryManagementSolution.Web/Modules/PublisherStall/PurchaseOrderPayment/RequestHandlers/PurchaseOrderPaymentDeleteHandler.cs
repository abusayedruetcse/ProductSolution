using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderPaymentRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderPaymentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderPaymentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderPaymentDeleteHandler
    {
        public PurchaseOrderPaymentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}