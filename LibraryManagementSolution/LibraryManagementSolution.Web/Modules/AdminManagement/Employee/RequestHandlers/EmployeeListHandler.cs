﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.AdminManagement.EmployeeRow>;
using MyRow = LibraryManagementSolution.AdminManagement.EmployeeRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IEmployeeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeListHandler
    {
        public EmployeeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}