using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LibraryManagementSolution.AdminManagement.TopicRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LibraryManagementSolution.AdminManagement.TopicRow;

namespace LibraryManagementSolution.AdminManagement
{
    public interface ITopicSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TopicSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITopicSaveHandler
    {
        public TopicSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}