using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20211006_095013)]
    public class LMDB_20211006_095013_AM_Language : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AM_Language")
                .WithColumn("LanguageId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable()
                .WithColumn("Code").AsString(15).Nullable()
                .WithColumn("SortOrder").AsInt32().Nullable();
        }
        
    }
}