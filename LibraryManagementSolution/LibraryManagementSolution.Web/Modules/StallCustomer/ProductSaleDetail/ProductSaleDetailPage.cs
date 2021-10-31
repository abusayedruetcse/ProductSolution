using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.StallCustomer.Pages
{

    [PageAuthorize(typeof(ProductSaleDetailRow))]
    public class ProductSaleDetailController : Controller
    {
        [Route("StallCustomer/ProductSaleDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/StallCustomer/ProductSaleDetail/ProductSaleDetailIndex.cshtml");
        }
    }
}