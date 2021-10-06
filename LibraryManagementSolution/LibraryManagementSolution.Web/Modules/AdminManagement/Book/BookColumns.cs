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
        public String Name { get; set; }
        public String NameBn { get; set; }
        public String AuthorName { get; set; }
        public String TranslatorName { get; set; }
        public String PublisherName { get; set; }
        public String TopicName { get; set; }
        public String CategoryName { get; set; }
        public String Edition { get; set; }
        public Int32 NumberOfPages { get; set; }
        public Int32 CountryId { get; set; }
        public Int32 LanguageId { get; set; }
        public String Summary { get; set; }
        public String CoverImage { get; set; }
        public String PreviewAttachment { get; set; }
        public Decimal Price { get; set; }
        public Int32 Discount { get; set; }
        public Int32 Availability { get; set; }
        public Int32 SortOrder { get; set; }
    }
}