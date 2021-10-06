﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.AdminManagement.CountryRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface ICountryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CountryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICountryDeleteHandler
    {
        public CountryDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}