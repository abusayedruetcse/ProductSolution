using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20210929_091913)]
    public class LMDB_20210929_091913_AM_Author : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AM_Author")
                .WithColumn("AuthorId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable()
                .WithColumn("ContactNo").AsString(25).Nullable()
                .WithColumn("Mail").AsString(50).Nullable()
                .WithColumn("About").AsString(1000).Nullable()
                .WithColumn("BirthDate").AsDateTime().Nullable();
        }
        
    }
}