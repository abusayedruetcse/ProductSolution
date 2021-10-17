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

    [Migration(20211009_081013)]
    public class LMDB_20211009_081013_PS_PurchaseOrderAlter : Migration
    {
        public override void Up()
        {
            Alter.Table("PS_PurchaseOrder")
                .AddColumn("Status").AsInt32().Nullable();
        }
        public override void Down()
        {
        }
    }

    [Migration(20211009_082813)]
    public class LMDB_20211009_082813_PS_PurchaseOrderDetailList : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PS_PurchaseOrderDetailList")
                .WithColumn("PurchaseOrderDetailListId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("PurchaseOrderId").AsInt64().Nullable().ForeignKey("PS_PurchaseOrder", "PurchaseOrderId")
                .WithColumn("BookId").AsInt64().Nullable().ForeignKey("AM_Book", "BookId")
                .WithColumn("Quantity").AsInt32().Nullable()
                .WithColumn("UnitPrice").AsDecimal(8, 2).Nullable()
                .WithColumn("Discount").AsInt32().Nullable()
                .WithColumn("Total").AsDecimal(8, 2).Nullable();
        }
    }
    [Migration(20211009_090513)]
    public class LMDB_20211009_090513_PS_PurchaseOrderPayment : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PS_PurchaseOrderPayment")
                .WithColumn("PurchaseOrderPaymentId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("PurchaseOrderId").AsInt64().Nullable().ForeignKey("PS_PurchaseOrder", "PurchaseOrderId")
                .WithColumn("PaymentDate").AsDateTime().Nullable()
                .WithColumn("PaymentAmount").AsDecimal(8, 2).Nullable();
        }
    }
    [Migration(20211012_091813)]
    public class LMDB_20211012_091813_PS_PurchaseOrderDetailList : Migration
    {
        public override void Up()
        {            
            Delete.Column("Total").FromTable("PS_PurchaseOrderDetailList");
        }
        public override void Down()
        {
        }
    }
    [Migration(20211015_115513)]
    public class LMDB_20211015_115513_PS_PurchaseOrderPaymentAlter : Migration
    {
        public override void Up()
        {
            Alter.Table("PS_PurchaseOrderPayment")
                .AddColumn("PaymentType").AsInt32().Nullable();
        }
        public override void Down()
        {
        }
    }

}