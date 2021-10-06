using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Columns
{
    [ColumnsScript("AdminManagement.Topic")]
    [BasedOnRow(typeof(TopicRow), CheckNames = true)]
    public class TopicColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 TopicId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String NameBn { get; set; }
    }
}