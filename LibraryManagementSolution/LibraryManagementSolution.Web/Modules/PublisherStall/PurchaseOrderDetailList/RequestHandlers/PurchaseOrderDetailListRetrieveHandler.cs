using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.PublisherStall.PurchaseOrderDetailListRow>;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderDetailListRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderDetailListRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderDetailListRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderDetailListRetrieveHandler
    {
        public PurchaseOrderDetailListRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}