using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Columns
{
    [ColumnsScript("AdminManagement.Author")]
    [BasedOnRow(typeof(AuthorRow), CheckNames = true)]
    public class AuthorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 AuthorId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String NameBn { get; set; }
        public String ContactNo { get; set; }
        public String Mail { get; set; }
        public DateTime BirthDate { get; set; }
    }
}