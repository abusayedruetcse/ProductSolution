using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Columns
{
    [ColumnsScript("AdminManagement.Category")]
    [BasedOnRow(typeof(CategoryRow), CheckNames = true)]
    public class CategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 CategoryId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String NameBn { get; set; }
        public String TopicName { get; set; }
        public Int32 SortOrder { get; set; }
    }
}