using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20210929_095213)]
    public class LMDB_20210929_095213_AM_Topic : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AM_Topic")
                .WithColumn("TopicId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable();
        }
        
    }
}