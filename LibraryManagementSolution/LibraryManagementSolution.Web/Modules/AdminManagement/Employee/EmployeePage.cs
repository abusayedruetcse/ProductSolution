using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementSolution.AdminManagement.Pages
{

    [PageAuthorize(typeof(EmployeeRow))]
    public class EmployeeController : Controller
    {
        [Route("AdminManagement/Employee")]
        public ActionResult Index()
        {
            return View("~/Modules/AdminManagement/Employee/EmployeeIndex.cshtml");
        }
    }
}