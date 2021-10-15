using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.PublisherStall.PurchaseOrderDetailListRow>;
using MyRow = LibraryManagementSolution.PublisherStall.PurchaseOrderDetailListRow;

namespace LibraryManagementSolution.PublisherStall
{
    public interface IPurchaseOrderDetailListListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderDetailListListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderDetailListListHandler
    {
        public PurchaseOrderDetailListListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}