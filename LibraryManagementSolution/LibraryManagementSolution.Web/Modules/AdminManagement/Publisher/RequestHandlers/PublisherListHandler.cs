using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.AdminManagement.PublisherRow>;
using MyRow = LibraryManagementSolution.AdminManagement.PublisherRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IPublisherListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PublisherListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPublisherListHandler
    {
        public PublisherListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}