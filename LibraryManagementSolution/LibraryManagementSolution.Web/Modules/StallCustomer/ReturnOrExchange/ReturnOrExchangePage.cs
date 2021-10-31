using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.StallCustomer.Pages
{

    [PageAuthorize(typeof(ReturnOrExchangeRow))]
    public class ReturnOrExchangeController : Controller
    {
        [Route("StallCustomer/ReturnOrExchange")]
        public ActionResult Index()
        {
            return View("~/Modules/StallCustomer/ReturnOrExchange/ReturnOrExchangeIndex.cshtml");
        }
    }
}