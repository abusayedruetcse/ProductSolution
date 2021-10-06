using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.AdminManagement
{
    [ConnectionKey("LibraryManagement"), Module("AdminManagement"), TableName("[dbo].[AM_Author]")]
    [DisplayName("Author"), InstanceName("Author")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("AdminManagement.Author")]
    public sealed class AuthorRow : Row<AuthorRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Author Id"), Identity, IdProperty]
        public Int64? AuthorId
        {
            get => fields.AuthorId[this];
            set => fields.AuthorId[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Name Bn"), Size(200), NotNull, NameProperty]
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

        [DisplayName("About"), Size(1000)]
        public String About
        {
            get => fields.About[this];
            set => fields.About[this] = value;
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get => fields.BirthDate[this];
            set => fields.BirthDate[this] = value;
        }

        public AuthorRow()
            : base()
        {
        }

        public AuthorRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field AuthorId;
            public StringField Name;
            public StringField NameBn;
            public StringField ContactNo;
            public StringField Mail;
            public StringField About;
            public DateTimeField BirthDate;
        }
    }
}
