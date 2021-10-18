using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.AdminManagement
{
    [ConnectionKey("LibraryManagement"), Module("AdminManagement"), TableName("[dbo].[AM_Publisher]")]
    [DisplayName("Publisher"), InstanceName("Publisher")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("AdminManagement.Publisher")]
    public sealed class PublisherRow : Row<PublisherRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Publisher Id"), Identity, IdProperty]
        public Int64? PublisherId
        {
            get => fields.PublisherId[this];
            set => fields.PublisherId[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Name Bn"), Size(200), NotNull]
        public String NameBn
        {
            get => fields.NameBn[this];
            set => fields.NameBn[this] = value;
        }

        [DisplayName("Contact No"), Size(25)]
        public String ContactNo
        {
            get => fields.ContactNo[this];
            set => fields.ContactNo[this] = value;
        }

        [DisplayName("Mail"), Size(50)]
        public String Mail
        {
            get => fields.Mail[this];
            set => fields.Mail[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Start Date")]
        public DateTime? StartDate
        {
            get => fields.StartDate[this];
            set => fields.StartDate[this] = value;
        }
        [DisplayName("LookupText"), Expression("CONCAT(T0.[NameBn], CONCAT(' ', T0.[Name]))"), QuickSearch, NameProperty]
        public String LookupText
        {
            get => fields.LookupText[this];
            set => fields.LookupText[this] = value;
        }

        public PublisherRow()
            : base()
        {
        }

        public PublisherRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field PublisherId;
            public StringField Name;
            public StringField NameBn;
            public StringField ContactNo;
            public StringField Mail;
            public StringField Description;
            public StringField LookupText;
            public DateTimeField StartDate;
        }
    }
}
