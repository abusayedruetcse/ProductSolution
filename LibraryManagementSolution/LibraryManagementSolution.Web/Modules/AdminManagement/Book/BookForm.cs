using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Forms
{
    [FormScript("AdminManagement.Book")]
    [BasedOnRow(typeof(BookRow), CheckNames = true)]
    public class BookForm
    {
        public String Name { get; set; }
        public String NameBn { get; set; }
        public Int64 AuthorId { get; set; }
        public Int64 TranslatorId { get; set; }
        public Int64 PublisherId { get; set; }
        public Int64 TopicId { get; set; }
        public Int64 CategoryId { get; set; }
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