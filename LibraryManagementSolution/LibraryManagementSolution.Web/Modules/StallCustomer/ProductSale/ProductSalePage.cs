using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.StallCustomer.Pages
{

    [PageAuthorize(typeof(ProductSaleRow))]
    public class ProductSaleController : Controller
    {
        [Route("StallCustomer/ProductSale")]
        public ActionResult Index()
        {
            return View("~/Modules/StallCustomer/ProductSale/ProductSaleIndex.cshtml");
        }
    }
}