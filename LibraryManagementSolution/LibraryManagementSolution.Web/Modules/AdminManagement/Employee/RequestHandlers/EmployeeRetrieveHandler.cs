using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.AdminManagement.EmployeeRow>;
using MyRow = LibraryManagementSolution.AdminManagement.EmployeeRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IEmployeeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeRetrieveHandler
    {
        public EmployeeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}