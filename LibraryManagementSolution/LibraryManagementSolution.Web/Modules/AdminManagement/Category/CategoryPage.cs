using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.AdminManagement.Pages
{

    [PageAuthorize(typeof(CategoryRow))]
    public class CategoryController : Controller
    {
        [Route("AdminManagement/Category")]
        public ActionResult Index()
        {
            return View("~/Modules/AdminManagement/Category/CategoryIndex.cshtml");
        }
    }
}