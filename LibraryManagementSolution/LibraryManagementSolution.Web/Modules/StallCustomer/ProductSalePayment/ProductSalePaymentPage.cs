using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.StallCustomer.Pages
{

    [PageAuthorize(typeof(ProductSalePaymentRow))]
    public class ProductSalePaymentController : Controller
    {
        [Route("StallCustomer/ProductSalePayment")]
        public ActionResult Index()
        {
            return View("~/Modules/StallCustomer/ProductSalePayment/ProductSalePaymentIndex.cshtml");
        }
    }
}