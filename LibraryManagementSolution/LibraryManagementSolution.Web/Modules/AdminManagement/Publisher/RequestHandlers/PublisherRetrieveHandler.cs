using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.AdminManagement.PublisherRow>;
using MyRow = LibraryManagementSolution.AdminManagement.PublisherRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IPublisherRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PublisherRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPublisherRetrieveHandler
    {
        public PublisherRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}