using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.AdminManagement.PublisherRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IPublisherDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PublisherDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPublisherDeleteHandler
    {
        public PublisherDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}