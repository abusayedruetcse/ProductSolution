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

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Name Bn"), Size(200), NotNull, NameProperty, LookupInclude]
        public String NameBn
        {
            get => fields.NameBn[this];
            set => fields.NameBn[this] = value;
        }

        [DisplayName("Author"), ForeignKey("[dbo].[AM_Author]", "AuthorId"), LeftJoin("jAuthor"), TextualField("AuthorName")]
        public Int64? AuthorId
        {
            get => fields.AuthorId[this];
            set => fields.AuthorId[this] = value;
        }

        [DisplayName("Translator"), ForeignKey("[dbo].[AM_Author]", "AuthorId"), LeftJoin("jTranslator"), TextualField("TranslatorName")]
        public Int64? TranslatorId
        {
            get => fields.TranslatorId[this];
            set => fields.TranslatorId[this] = value;
        }

        [DisplayName("Publisher"), ForeignKey("[dbo].[AM_Publisher]", "PublisherId"), LeftJoin("jPublisher"), TextualField("PublisherName")]
        public Int64? PublisherId
        {
            get => fields.PublisherId[this];
            set => fields.PublisherId[this] = value;
        }

        [DisplayName("Topic"), ForeignKey("[dbo].[AM_Topic]", "TopicId"), LeftJoin("jTopic"), TextualField("TopicName")]
        public Int64? TopicId
        {
            get => fields.TopicId[this];
            set => fields.TopicId[this] = value;
        }

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

        [DisplayName("Country")]
        public Int32? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

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

        [DisplayName("Author Contact No"), Expression("jAuthor.[ContactNo]")]
        public String AuthorContactNo
        {
            get => fields.AuthorContactNo[this];
            set => fields.AuthorContactNo[this] = value;
        }

        [DisplayName("Author Mail"), Expression("jAuthor.[Mail]")]
        public String AuthorMail
        {
            get => fields.AuthorMail[this];
            set => fields.AuthorMail[this] = value;
        }

        [DisplayName("Author About"), Expression("jAuthor.[About]")]
        public String AuthorAbout
        {
            get => fields.AuthorAbout[this];
            set => fields.AuthorAbout[this] = value;
        }

        [DisplayName("Author Birth Date"), Expression("jAuthor.[BirthDate]")]
        public DateTime? AuthorBirthDate
        {
            get => fields.AuthorBirthDate[this];
            set => fields.AuthorBirthDate[this] = value;
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

        [DisplayName("Translator Contact No"), Expression("jTranslator.[ContactNo]")]
        public String TranslatorContactNo
        {
            get => fields.TranslatorContactNo[this];
            set => fields.TranslatorContactNo[this] = value;
        }

        [DisplayName("Translator Mail"), Expression("jTranslator.[Mail]")]
        public String TranslatorMail
        {
            get => fields.TranslatorMail[this];
            set => fields.TranslatorMail[this] = value;
        }

        [DisplayName("Translator About"), Expression("jTranslator.[About]")]
        public String TranslatorAbout
        {
            get => fields.TranslatorAbout[this];
            set => fields.TranslatorAbout[this] = value;
        }

        [DisplayName("Translator Birth Date"), Expression("jTranslator.[BirthDate]")]
        public DateTime? TranslatorBirthDate
        {
            get => fields.TranslatorBirthDate[this];
            set => fields.TranslatorBirthDate[this] = value;
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

        [DisplayName("Publisher Contact No"), Expression("jPublisher.[ContactNo]")]
        public String PublisherContactNo
        {
            get => fields.PublisherContactNo[this];
            set => fields.PublisherContactNo[this] = value;
        }

        [DisplayName("Publisher Mail"), Expression("jPublisher.[Mail]")]
        public String PublisherMail
        {
            get => fields.PublisherMail[this];
            set => fields.PublisherMail[this] = value;
        }

        [DisplayName("Publisher Description"), Expression("jPublisher.[Description]")]
        public String PublisherDescription
        {
            get => fields.PublisherDescription[this];
            set => fields.PublisherDescription[this] = value;
        }

        [DisplayName("Publisher Start Date"), Expression("jPublisher.[StartDate]")]
        public DateTime? PublisherStartDate
        {
            get => fields.PublisherStartDate[this];
            set => fields.PublisherStartDate[this] = value;
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

            public StringField AuthorName;
            public StringField AuthorNameBn;
            public StringField AuthorContactNo;
            public StringField AuthorMail;
            public StringField AuthorAbout;
            public DateTimeField AuthorBirthDate;

            public StringField TranslatorName;
            public StringField TranslatorNameBn;
            public StringField TranslatorContactNo;
            public StringField TranslatorMail;
            public StringField TranslatorAbout;
            public DateTimeField TranslatorBirthDate;

            public StringField PublisherName;
            public StringField PublisherNameBn;
            public StringField PublisherContactNo;
            public StringField PublisherMail;
            public StringField PublisherDescription;
            public DateTimeField PublisherStartDate;

            public StringField TopicName;
            public StringField TopicNameBn;

            public StringField CategoryName;
            public StringField CategoryNameBn;
            public Int64Field CategoryTopicId;
            public Int32Field CategorySortOrder;
        }
    }
}
