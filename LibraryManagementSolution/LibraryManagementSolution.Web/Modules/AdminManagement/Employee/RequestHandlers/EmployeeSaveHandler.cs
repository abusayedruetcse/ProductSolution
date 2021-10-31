using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.AdminManagement.EmployeeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.AdminManagement.EmployeeRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IEmployeeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSaveHandler
    {
        public EmployeeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}