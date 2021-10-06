using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20210930_080213)]
    public class LMDB_20210930_080213_AM_Category : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AM_Category")
                .WithColumn("CategoryId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable()
                .WithColumn("TopicId").AsInt64().Nullable().ForeignKey("AM_Topic", "TopicId")
                .WithColumn("SortOrder").AsInt32().Nullable();
        }
        
    }
}