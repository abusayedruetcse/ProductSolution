using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20211020_104013)]
    public class LMDB_20211020_104013_SC_Customer : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SC_Customer")
                .WithColumn("CustomerId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable()
                .WithColumn("ContactNo").AsString(25).Nullable()
                .WithColumn("Mail").AsString(50).Nullable()
                .WithColumn("About").AsString(1000).Nullable();
        }
        
    }
}