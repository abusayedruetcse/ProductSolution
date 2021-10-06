using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.AdminManagement
{
    [ConnectionKey("LibraryManagement"), Module("AdminManagement"), TableName("[dbo].[AM_Topic]")]
    [DisplayName("Topic"), InstanceName("Topic")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("AdminManagement.Topic")]
    public sealed class TopicRow : Row<TopicRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Topic Id"), Identity, IdProperty]
        public Int64? TopicId
        {
            get => fields.TopicId[this];
            set => fields.TopicId[this] = value;
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

        public TopicRow()
            : base()
        {
        }

        public TopicRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field TopicId;
            public StringField Name;
            public StringField NameBn;
        }
    }
}
