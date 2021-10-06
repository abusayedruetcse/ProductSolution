using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20211006_095713)]
    public class LMDB_20211006_095713_AM_Country : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AM_Country")
                .WithColumn("CountryId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable()
                .WithColumn("Code").AsString(15).Nullable()
                .WithColumn("SortOrder").AsInt32().Nullable();
        }
        
    }
}