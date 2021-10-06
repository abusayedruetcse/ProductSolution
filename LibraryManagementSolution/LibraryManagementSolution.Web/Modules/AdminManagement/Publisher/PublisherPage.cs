using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.AdminManagement.Pages
{

    [PageAuthorize(typeof(PublisherRow))]
    public class PublisherController : Controller
    {
        [Route("AdminManagement/Publisher")]
        public ActionResult Index()
        {
            return View("~/Modules/AdminManagement/Publisher/PublisherIndex.cshtml");
        }
    }
}