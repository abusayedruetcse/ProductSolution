using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.AdminManagement.Pages
{

    [PageAuthorize(typeof(TopicRow))]
    public class TopicController : Controller
    {
        [Route("AdminManagement/Topic")]
        public ActionResult Index()
        {
            return View("~/Modules/AdminManagement/Topic/TopicIndex.cshtml");
        }
    }
}