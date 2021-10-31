using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.StallCustomer
{
    [ConnectionKey("LibraryManagement"), Module("StallCustomer"), TableName("[dbo].[SC_Customer]")]
    [DisplayName("Customer"), InstanceName("Customer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("StallCustomer.Customer")]
    public sealed class CustomerRow : Row<CustomerRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), Identity, IdProperty]
        public Int64? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
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

        [DisplayName("About"), Size(1000)]
        public String About
        {
            get => fields.About[this];
            set => fields.About[this] = value;
        }
        [DisplayName("LookupText"), Expression("CONCAT(T0.ContactNo, CONCAT(' ', CONCAT(T0.[NameBn], CONCAT(' ', T0.[Name]))))"), QuickSearch, NameProperty]
        public String LookupText
        {
            get => fields.LookupText[this];
            set => fields.LookupText[this] = value;
        }
        public CustomerRow()
            : base()
        {
        }

        public CustomerRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field CustomerId;
            public StringField Name;
            public StringField NameBn;
            public StringField ContactNo;
            public StringField Mail;
            public StringField About;
            public StringField LookupText;
        }
    }
}
