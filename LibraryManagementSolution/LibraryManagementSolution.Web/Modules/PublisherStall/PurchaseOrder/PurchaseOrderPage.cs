using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.PublisherStall.Pages
{

    [PageAuthorize(typeof(PurchaseOrderRow))]
    public class PurchaseOrderController : Controller
    {
        [Route("PublisherStall/PurchaseOrder")]
        public ActionResult Index()
        {
            return View("~/Modules/PublisherStall/PurchaseOrder/PurchaseOrderIndex.cshtml");
        }
    }
}