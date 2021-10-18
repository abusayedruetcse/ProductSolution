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
        [HalfWidth(JustThis = true)]
        public String Edition { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 NumberOfPages { get; set; }
        [HalfWidth(JustThis = true)]        
        public Int32 CountryId { get; set; }
        [HalfWidth(JustThis = true)]        
        public Int32 LanguageId { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Summary { get; set; }
        [ImageUploadEditor]
        public String CoverImage { get; set; }
        [FileUploadEditor]
        public String PreviewAttachment { get; set; }
        [HalfWidth(JustThis = true)]
        public Decimal Price { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 Discount { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 Availability { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 SortOrder { get; set; }
    }
}