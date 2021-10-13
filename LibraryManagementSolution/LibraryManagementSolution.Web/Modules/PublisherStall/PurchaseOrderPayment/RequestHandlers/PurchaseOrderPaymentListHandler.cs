using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.PublisherStall.PurchaseOrderPaymentRow>;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderPaymentRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderPaymentListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderPaymentListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderPaymentListHandler
    {
        public PurchaseOrderPaymentListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}