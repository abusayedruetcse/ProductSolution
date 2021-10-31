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
        [TwoThirdWidth(JustThis = true)]
        public String Name { get; set; }
        [TwoThirdWidth(JustThis = true)]
        public String NameBn { get; set; }
        [TwoThirdWidth(JustThis = true)]
        public Int64 PublisherId { get; set; }
        [HalfWidth(JustThis = true)]
        public Int64 AuthorId { get; set; }
        [HalfWidth(JustThis = true)]
        public Int64 TranslatorId { get; set; }                
        [HalfWidth(JustThis = true)]
        public Int64 TopicId { get; set; }
        [HalfWidth(JustThis = true)]
        public Int64 CategoryId { get; set; }
        [HalfWidth(JustThis = true)]
        public String Edition { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 NumberOfPages { get; set; }
        [HalfWidth(JustThis = true)]        
        public Int32 CountryId { get; set; }
        [HalfWidth(JustThis = true)]        
        public Int32 LanguageId { get; set; }
        [OneThirdWidth(JustThis = true)]
        public Decimal Price { get; set; }
        [OneThirdWidth(JustThis = true)]
        public Int32 Discount { get; set; }
        [OneThirdWidth(JustThis = true)]
        public Int32 Availability { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Summary { get; set; }
        [HalfWidth(JustThis = true)]
        [ImageUploadEditor]
        public String CoverImage { get; set; }
        [HalfWidth(JustThis = true)]
        [FileUploadEditor]
        public String PreviewAttachment { get; set; }
        
        [HalfWidth(JustThis = true)]
        public Int32 SortOrder { get; set; }
    }
}