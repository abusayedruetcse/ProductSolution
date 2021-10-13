using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.PublisherStall.PurchaseOrderPaymentRow>;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderPaymentRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderPaymentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderPaymentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderPaymentRetrieveHandler
    {
        public PurchaseOrderPaymentRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}