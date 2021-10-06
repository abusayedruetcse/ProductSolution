using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LibraryManagementSolution.AdminManagement.TopicRow>;
using MyRow = LibraryManagementSolution.AdminManagement.TopicRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface ITopicListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TopicListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITopicListHandler
    {
        public TopicListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}