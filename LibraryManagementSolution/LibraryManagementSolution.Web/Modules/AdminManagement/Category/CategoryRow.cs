using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.AdminManagement
{
    [ConnectionKey("LibraryManagement"), Module("AdminManagement"), TableName("[dbo].[AM_Category]")]
    [DisplayName("Category"), InstanceName("Category")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CategoryRow : Row<CategoryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Category Id"), Identity, IdProperty]
        public Int64? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
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

        [DisplayName("Topic"), ForeignKey("[dbo].[AM_Topic]", "TopicId"), LeftJoin("jTopic"), TextualField("TopicName")]
        public Int64? TopicId
        {
            get => fields.TopicId[this];
            set => fields.TopicId[this] = value;
        }

        [DisplayName("Sort Order")]
        public Int32? SortOrder
        {
            get => fields.SortOrder[this];
            set => fields.SortOrder[this] = value;
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

        public CategoryRow()
            : base()
        {
        }

        public CategoryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field CategoryId;
            public StringField Name;
            public StringField NameBn;
            public Int64Field TopicId;
            public Int32Field SortOrder;

            public StringField TopicName;
            public StringField TopicNameBn;
        }
    }
}
