using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.PublisherStall.Pages
{

    [PageAuthorize(typeof(PurchaseOrderDetailListRow))]
    public class PurchaseOrderDetailListController : Controller
    {
        [Route("PublisherStall/PurchaseOrderDetailList")]
        public ActionResult Index()
        {
            return View("~/Modules/PublisherStall/PurchaseOrderDetailList/PurchaseOrderDetailListIndex.cshtml");
        }
    }
}