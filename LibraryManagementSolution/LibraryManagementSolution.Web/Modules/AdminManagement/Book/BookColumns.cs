using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Columns
{
    [ColumnsScript("AdminManagement.Book")]
    [BasedOnRow(typeof(BookRow), CheckNames = true)]
    public class BookColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 BookId { get; set; }
        [EditLink]
        public String NameBn { get; set; }
        public String AuthorNameBn { get; set; }
        public String PublisherNameBn { get; set; }
        public String TopicNameBn { get; set; }
        public String Edition { get; set; }     
        public Decimal Price { get; set; }
        public Int32 Discount { get; set; }
        public Int32 Availability { get; set; }
        public Int32 SortOrder { get; set; }
        [QuickFilter, Visible(false)]
        public Int64 TopicId { get; set; }
        [QuickFilter, Visible(false)]
        public Int64 PublisherId { get; set; }
        [QuickFilter, Visible(false)]
        public Int64 AuthorId { get; set; }
        [QuickFilter, Visible(false)]
        public Int64 TranslatorId { get; set; }
        [QuickFilter, Visible(false)]
        public Int32 LanguageId { get; set; }
    }
}