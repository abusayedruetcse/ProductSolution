using FluentMigrator;
using System;

namespace LibraryManagementSolution.Migrations.LibraryManagementDB
{
    [Migration(20211020_104613)]
    public class LMDB_20211020_104613_SC_ProductSale : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SC_ProductSale")
                .WithColumn("ProductSaleId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("TokenNo").AsString(50).NotNullable()
                .WithColumn("CustomerId").AsInt64().Nullable().ForeignKey("SC_Customer", "CustomerId")
                .WithColumn("SaleDate").AsDateTime().Nullable()
                .WithColumn("SubTotal").AsDecimal(8, 2).Nullable()
                .WithColumn("ServiceCharge").AsDecimal(8, 2).Nullable()
                .WithColumn("Other").AsDecimal(8, 2).Nullable()
                .WithColumn("InitialLess").AsDecimal(8, 2).Nullable()
                .WithColumn("InitialPaid").AsDecimal(8, 2).Nullable()
                .WithColumn("TotalPayable").AsDecimal(8, 2).Nullable()
                .WithColumn("PreparedBy").AsInt64().Nullable()
                .WithColumn("Status").AsInt32().Nullable();
        }
    }

    [Migration(20211031_073113)]
    public class LMDB_20211031_073113_SC_ProductSaleDetail : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SC_ProductSaleDetail")
                .WithColumn("ProductSaleDetailId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("ProductSaleId").AsInt64().Nullable().ForeignKey("SC_ProductSale", "ProductSaleId")
                .WithColumn("BookId").AsInt64().Nullable().ForeignKey("AM_Book", "BookId")
                .WithColumn("Quantity").AsInt32().Nullable()
                .WithColumn("UnitPrice").AsDecimal(8, 2).Nullable()
                .WithColumn("Discount").AsInt32().Nullable();
        }
    }

    [Migration(20211031_073513)]
    public class LMDB_20211031_073513_SC_ProductSalePayment : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SC_ProductSalePayment")
                .WithColumn("ProductSalePaymentId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("ProductSaleId").AsInt64().Nullable().ForeignKey("SC_ProductSale", "ProductSaleId")
                .WithColumn("PaymentDate").AsDateTime().Nullable()
                .WithColumn("PaymentAmount").AsDecimal(8, 2).Nullable()
                .WithColumn("PaymentType").AsInt32().Nullable();
        }
    }

}