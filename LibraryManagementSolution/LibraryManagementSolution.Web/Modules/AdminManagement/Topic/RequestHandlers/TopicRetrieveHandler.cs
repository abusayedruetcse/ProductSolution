using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LibraryManagementSolution.AdminManagement.TopicRow>;
using MyRow = LibraryManagementSolution.AdminManagement.TopicRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface ITopicRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TopicRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITopicRetrieveHandler
    {
        public TopicRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}