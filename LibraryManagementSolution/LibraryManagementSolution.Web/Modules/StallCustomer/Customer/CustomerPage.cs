using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.StallCustomer.Pages
{

    [PageAuthorize(typeof(CustomerRow))]
    public class CustomerController : Controller
    {
        [Route("StallCustomer/Customer")]
        public ActionResult Index()
        {
            return View("~/Modules/StallCustomer/Customer/CustomerIndex.cshtml");
        }
    }
}