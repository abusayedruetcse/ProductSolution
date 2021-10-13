using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderDetailListRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderDetailListDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderDetailListDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderDetailListDeleteHandler
    {
        public PurchaseOrderDetailListDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}