using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using System.Globalization;
using MyRow = LibraryManagementSolution.AdminManagement.TopicRow;

namespace LibraryManagementSolution.AdminManagement.Endpoints
{
    [Route("Services/AdminManagement/Topic/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TopicController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] ITopicSaveHandler handler)
        {
            return handler.Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] ITopicSaveHandler handler)
        {
            return handler.Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
            [FromServices] ITopicDeleteHandler handler)
        {
            return handler.Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
            [FromServices] ITopicRetrieveHandler handler)
        {
            return handler.Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
            [FromServices] ITopicListHandler handler)
        {
            return handler.List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
            [FromServices] ITopicListHandler handler,
            [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request, handler).Entities;
            var bytes = exporter.Export(data, typeof(Columns.TopicColumns), request.ExportColumns);
            return ExcelContentResult.Create(bytes, "TopicList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
        }
    }
}