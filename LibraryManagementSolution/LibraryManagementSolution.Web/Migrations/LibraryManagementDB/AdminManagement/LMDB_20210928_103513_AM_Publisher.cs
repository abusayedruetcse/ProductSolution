using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20210926_105413)]
    public class LMDB_20210928_103513_AM_Publisher : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AM_Publisher")
                .WithColumn("PublisherId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable()
                .WithColumn("ContactNo").AsString(25).NotNullable()
                .WithColumn("Mail").AsString(50).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("StartDate").AsDateTime().Nullable();
        }
        
    }
    [Migration(20210929_091213)]
    public class LMDB_20210929_091213_AM_Publisher_Alter : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("AM_Publisher")
                .AlterColumn("ContactNo").AsString(25).Nullable()
                .AlterColumn("Mail").AsString(50).Nullable();
        }
        
    }
}