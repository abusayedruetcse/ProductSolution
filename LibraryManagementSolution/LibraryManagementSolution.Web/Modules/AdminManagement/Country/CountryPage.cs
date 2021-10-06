using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.AdminManagement.Pages
{

    [PageAuthorize(typeof(CountryRow))]
    public class CountryController : Controller
    {
        [Route("AdminManagement/Country")]
        public ActionResult Index()
        {
            return View("~/Modules/AdminManagement/Country/CountryIndex.cshtml");
        }
    }
}