using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20211031_071913)]
    public class LMDB_20211031_071913_AM_Employee : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("AM_Employee")
                .WithColumn("EmployeeId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("NameBn").AsString(200).NotNullable()
                .WithColumn("ContactNo").AsString(25).Nullable()
                .WithColumn("Mail").AsString(50).Nullable()
                .WithColumn("About").AsString(1000).Nullable()
                .WithColumn("BirthDate").AsDateTime().Nullable();
        }
        
    }
}