using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.AdminManagement.Pages
{

    [PageAuthorize(typeof(AuthorRow))]
    public class AuthorController : Controller
    {
        [Route("AdminManagement/Author")]
        public ActionResult Index()
        {
            return View("~/Modules/AdminManagement/Author/AuthorIndex.cshtml");
        }
    }
}