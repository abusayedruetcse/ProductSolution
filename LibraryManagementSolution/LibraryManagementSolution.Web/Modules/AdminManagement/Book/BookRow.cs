using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.AdminManagement
{
    [ConnectionKey("LibraryManagement"), Module("AdminManagement"), TableName("[dbo].[AM_Book]")]
    [DisplayName("Book"), InstanceName("Book")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("AdminManagement.Book")]
    public sealed class BookRow : Row<BookRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Book Id"), Identity, IdProperty]
        public Int64? BookId
        {
            get => fields.BookId[this];
            set => fields.BookId[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Name Bn"), Size(200), NotNull, LookupInclude]
        public String NameBn
        {
            get => fields.NameBn[this];
            set => fields.NameBn[this] = value;
        }

        [LookupEditor(typeof(AuthorRow))]
        [DisplayName("Author"), ForeignKey("[dbo].[AM_Author]", "AuthorId"), LeftJoin("jAuthor"), TextualField("AuthorName")]
        public Int64? AuthorId
        {
            get => fields.AuthorId[this];
            set => fields.AuthorId[this] = value;
        }

        [LookupEditor(typeof(AuthorRow))]
        [DisplayName("Translator"), ForeignKey("[dbo].[AM_Author]", "AuthorId"), LeftJoin("jTranslator"), TextualField("TranslatorName")]
        public Int64? TranslatorId
        {
            get => fields.TranslatorId[this];
            set => fields.TranslatorId[this] = value;
        }

        [LookupEditor(typeof(PublisherRow))]
        [DisplayName("Publisher"), ForeignKey("[dbo].[AM_Publisher]", "PublisherId"), LeftJoin("jPublisher"), TextualField("PublisherName")]
        public Int64? PublisherId
        {
            get => fields.PublisherId[this];
            set => fields.PublisherId[this] = value;
        }

        [LookupEditor(typeof(TopicRow))]
        [DisplayName("Topic"), ForeignKey("[dbo].[AM_Topic]", "TopicId"), LeftJoin("jTopic"), TextualField("TopicName")]
        public Int64? TopicId
        {
            get => fields.TopicId[this];
            set => fields.TopicId[this] = value;
        }

        [LookupEditor(typeof(CategoryRow), CascadeFrom = "TopicId", CascadeField = "TopicId")]
        [DisplayName("Category"), ForeignKey("[dbo].[AM_Category]", "CategoryId"), LeftJoin("jCategory"), TextualField("CategoryName")]
        public Int64? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
        }

        [DisplayName("Edition"), Size(75)]
        public String Edition
        {
            get => fields.Edition[this];
            set => fields.Edition[this] = value;
        }

        [DisplayName("Number Of Pages")]
        public Int32? NumberOfPages
        {
            get => fields.NumberOfPages[this];
            set => fields.NumberOfPages[this] = value;
        }

        [LookupEditor(typeof(CountryRow))]
        [DisplayName("Country")]
        public Int32? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

        [LookupEditor(typeof(LanguageRow))]
        [DisplayName("Language")]
        public Int32? LanguageId
        {
            get => fields.LanguageId[this];
            set => fields.LanguageId[this] = value;
        }

        [DisplayName("Summary"), Size(1500)]
        public String Summary
        {
            get => fields.Summary[this];
            set => fields.Summary[this] = value;
        }

        [DisplayName("Cover Image"), Size(100)]
        public String CoverImage
        {
            get => fields.CoverImage[this];
            set => fields.CoverImage[this] = value;
        }

        [DisplayName("Preview Attachment"), Size(100)]
        public String PreviewAttachment
        {
            get => fields.PreviewAttachment[this];
            set => fields.PreviewAttachment[this] = value;
        }

        [DisplayName("Price"), Size(19), Scale(2), AlignRight, DisplayFormat("#,##0.00"), LookupInclude]
        public Decimal? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("Discount")]
        public Int32? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Availability")]
        public Int32? Availability
        {
            get => fields.Availability[this];
            set => fields.Availability[this] = value;
        }

        [DisplayName("Sort Order")]
        public Int32? SortOrder
        {
            get => fields.SortOrder[this];
            set => fields.SortOrder[this] = value;
        }

        [DisplayName("LookupText"), Expression("CONCAT(T0.[NameBn], CONCAT(' ', T0.[Name]))"), QuickSearch, NameProperty]
        public String LookupText
        {
            get => fields.LookupText[this];
            set => fields.LookupText[this] = value;
        }

        [DisplayName("Author Name"), Expression("jAuthor.[Name]")]
        public String AuthorName
        {
            get => fields.AuthorName[this];
            set => fields.AuthorName[this] = value;
        }

        [DisplayName("Author Name Bn"), Expression("jAuthor.[NameBn]")]
        public String AuthorNameBn
        {
            get => fields.AuthorNameBn[this];
            set => fields.AuthorNameBn[this] = value;
        }   

        [DisplayName("Translator Name"), Expression("jTranslator.[Name]")]
        public String TranslatorName
        {
            get => fields.TranslatorName[this];
            set => fields.TranslatorName[this] = value;
        }

        [DisplayName("Translator Name Bn"), Expression("jTranslator.[NameBn]")]
        public String TranslatorNameBn
        {
            get => fields.TranslatorNameBn[this];
            set => fields.TranslatorNameBn[this] = value;
        }
        
        [DisplayName("Publisher Name"), Expression("jPublisher.[Name]")]
        public String PublisherName
        {
            get => fields.PublisherName[this];
            set => fields.PublisherName[this] = value;
        }

        [DisplayName("Publisher Name Bn"), Expression("jPublisher.[NameBn]")]
        public String PublisherNameBn
        {
            get => fields.PublisherNameBn[this];
            set => fields.PublisherNameBn[this] = value;
        }
        
        [DisplayName("Topic Name"), Expression("jTopic.[Name]")]
        public String TopicName
        {
            get => fields.TopicName[this];
            set => fields.TopicName[this] = value;
        }

        [DisplayName("Topic Name Bn"), Expression("jTopic.[NameBn]")]
        public String TopicNameBn
        {
            get => fields.TopicNameBn[this];
            set => fields.TopicNameBn[this] = value;
        }

        [DisplayName("Category Name"), Expression("jCategory.[Name]")]
        public String CategoryName
        {
            get => fields.CategoryName[this];
            set => fields.CategoryName[this] = value;
        }

        [DisplayName("Category Name Bn"), Expression("jCategory.[NameBn]")]
        public String CategoryNameBn
        {
            get => fields.CategoryNameBn[this];
            set => fields.CategoryNameBn[this] = value;
        }

        [DisplayName("Category Topic Id"), Expression("jCategory.[TopicId]")]
        public Int64? CategoryTopicId
        {
            get => fields.CategoryTopicId[this];
            set => fields.CategoryTopicId[this] = value;
        }

        [DisplayName("Category Sort Order"), Expression("jCategory.[SortOrder]")]
        public Int32? CategorySortOrder
        {
            get => fields.CategorySortOrder[this];
            set => fields.CategorySortOrder[this] = value;
        }

        public BookRow()
            : base()
        {
        }

        public BookRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field BookId;
            public StringField Name;
            public StringField NameBn;
            public Int64Field AuthorId;
            public Int64Field TranslatorId;
            public Int64Field PublisherId;
            public Int64Field TopicId;
            public Int64Field CategoryId;
            public StringField Edition;
            public Int32Field NumberOfPages;
            public Int32Field CountryId;
            public Int32Field LanguageId;
            public StringField Summary;
            public StringField CoverImage;
            public StringField PreviewAttachment;
            public DecimalField Price;
            public Int32Field Discount;
            public Int32Field Availability;
            public Int32Field SortOrder;
            public StringField LookupText;

            public StringField AuthorName;
            public StringField AuthorNameBn;

            public StringField TranslatorName;
            public StringField TranslatorNameBn;

            public StringField PublisherName;
            public StringField PublisherNameBn;

            public StringField TopicName;
            public StringField TopicNameBn;

            public StringField CategoryName;
            public StringField CategoryNameBn;
            public Int64Field CategoryTopicId;
            public Int32Field CategorySortOrder;
        }
    }
}
