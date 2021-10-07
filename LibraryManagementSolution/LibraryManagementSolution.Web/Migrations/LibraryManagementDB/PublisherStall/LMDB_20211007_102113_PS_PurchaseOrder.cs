using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20211007_102113)]
    public class LMDB_20211007_102113_PS_PurchaseOrder : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PS_PurchaseOrder")
                .WithColumn("PurchaseOrderId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("TokenNo").AsString(50).NotNullable()
                .WithColumn("PublisherId").AsInt64().Nullable().ForeignKey("AM_Publisher", "PublisherId")
                .WithColumn("OrderDate").AsDateTime().Nullable()
                .WithColumn("SubTotal").AsDecimal(8,2).Nullable()
                .WithColumn("ServiceCharge").AsDecimal(8, 2).Nullable()
                .WithColumn("Other").AsDecimal(8, 2).Nullable()
                .WithColumn("InitialLess").AsDecimal(8, 2).Nullable()
                .WithColumn("InitialPaid").AsDecimal(8, 2).Nullable()
                .WithColumn("TotalPayable").AsDecimal(8, 2).Nullable();
        }
        
    }    
}