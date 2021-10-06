using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Forms
{
    [FormScript("AdminManagement.Category")]
    [BasedOnRow(typeof(CategoryRow), CheckNames = true)]
    public class CategoryForm
    {
        public String Name { get; set; }
        public String NameBn { get; set; }
        [LookupEditor(typeof(TopicRow))]
        public Int64 TopicId { get; set; }
        public Int32 SortOrder { get; set; }
    }
}