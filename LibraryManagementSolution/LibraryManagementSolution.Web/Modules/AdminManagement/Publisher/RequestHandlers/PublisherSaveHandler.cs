using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.AdminManagement.PublisherRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.AdminManagement.PublisherRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface IPublisherSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PublisherSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPublisherSaveHandler
    {
        public PublisherSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}