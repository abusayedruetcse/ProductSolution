using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.AdminManagement
{
    [ConnectionKey("LibraryManagement"), Module("AdminManagement"), TableName("[dbo].[AM_Employee]")]
    [DisplayName("Employee"), InstanceName("Employee")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmployeeRow : Row<EmployeeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Identity, IdProperty]
        public Int64? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty]
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

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get => fields.BirthDate[this];
            set => fields.BirthDate[this] = value;
        }

        public EmployeeRow()
            : base()
        {
        }

        public EmployeeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field EmployeeId;
            public StringField Name;
            public StringField NameBn;
            public StringField ContactNo;
            public StringField Mail;
            public StringField About;
            public DateTimeField BirthDate;
        }
    }
}
