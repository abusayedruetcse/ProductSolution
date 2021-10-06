using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20210930_091913)]
    public class LMDB_20210930_091913_AM_Book : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AM_Book")
                .WithColumn("BookId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable()
                .WithColumn("AuthorId").AsInt64().Nullable().ForeignKey("AM_Author", "AuthorId")
                .WithColumn("TranslatorId").AsInt64().Nullable().ForeignKey("AM_Author", "AuthorId")
                .WithColumn("PublisherId").AsInt64().Nullable().ForeignKey("AM_Publisher", "PublisherId")
                .WithColumn("TopicId").AsInt64().Nullable().ForeignKey("AM_Topic", "TopicId")
                .WithColumn("CategoryId").AsInt64().Nullable().ForeignKey("AM_Category", "CategoryId")
                .WithColumn("Edition").AsString(75).Nullable()
                .WithColumn("NumberOfPages").AsInt32().Nullable()
                .WithColumn("CountryId").AsInt32().Nullable()
                .WithColumn("LanguageId").AsInt32().Nullable()
                .WithColumn("Summary").AsString(1500).Nullable()
                .WithColumn("CoverImage").AsString(100).Nullable()
                .WithColumn("PreviewAttachment").AsString(100).Nullable()
                .WithColumn("Price").AsDecimal().Nullable()
                .WithColumn("Discount").AsInt32().Nullable()
                .WithColumn("Availability").AsInt32().Nullable()
                .WithColumn("SortOrder").AsInt32().Nullable();
        }
        
    }
}