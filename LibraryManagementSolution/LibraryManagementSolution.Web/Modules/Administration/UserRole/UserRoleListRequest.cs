using Serenity.Services;

namespace LibraryManagementSolution.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}