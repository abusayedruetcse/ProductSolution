using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.AdminManagement.Pages
{

    [PageAuthorize(typeof(BookRow))]
    public class BookController : Controller
    {
        [Route("AdminManagement/Book")]
        public ActionResult Index()
        {
            return View("~/Modules/AdminManagement/Book/BookIndex.cshtml");
        }
    }
}