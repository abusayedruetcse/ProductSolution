using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.AdminManagement.Pages
{

    [PageAuthorize(typeof(LanguageRow))]
    public class LanguageController : Controller
    {
        [Route("AdminManagement/Language")]
        public ActionResult Index()
        {
            return View("~/Modules/AdminManagement/Language/LanguageIndex.cshtml");
        }
    }
}