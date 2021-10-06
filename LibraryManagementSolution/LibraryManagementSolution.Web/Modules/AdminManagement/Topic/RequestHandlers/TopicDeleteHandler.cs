using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LibraryManagementSolution.AdminManagement.TopicRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface ITopicDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TopicDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITopicDeleteHandler
    {
        public TopicDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}