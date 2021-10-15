using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.PublisherStall.Pages
{

    [PageAuthorize(typeof(PurchaseOrderPaymentRow))]
    public class PurchaseOrderPaymentController : Controller
    {
        [Route("PublisherStall/PurchaseOrderPayment")]
        public ActionResult Index()
        {
            return View("~/Modules/PublisherStall/PurchaseOrderPayment/PurchaseOrderPaymentIndex.cshtml");
        }
    }
}