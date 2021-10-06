using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Columns
{
    [ColumnsScript("AdminManagement.Publisher")]
    [BasedOnRow(typeof(PublisherRow), CheckNames = true)]
    public class PublisherColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 PublisherId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String NameBn { get; set; }
        public String ContactNo { get; set; }
        public String Mail { get; set; }
        public String Description { get; set; }
        public DateTime StartDate { get; set; }
    }
}