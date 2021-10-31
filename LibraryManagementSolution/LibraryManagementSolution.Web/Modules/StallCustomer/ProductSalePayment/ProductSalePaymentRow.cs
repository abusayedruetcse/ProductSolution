using LibraryManagementSolution.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.StallCustomer
{
    [ConnectionKey("LibraryManagement"), Module("StallCustomer"), TableName("[dbo].[SC_ProductSalePayment]")]
    [DisplayName("Product Sale Payment"), InstanceName("Product Sale Payment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductSalePaymentRow : Row<ProductSalePaymentRow.RowFields>, IIdRow
    {
        [DisplayName("Product Sale Payment Id"), Identity, IdProperty]
        public Int64? ProductSalePaymentId
        {
            get => fields.ProductSalePaymentId[this];
            set => fields.ProductSalePaymentId[this] = value;
        }

        [DisplayName("id"), NotMapped]
        public String? __id
        {
            get => fields.__id[this];
            set => fields.__id[this] = value;

        }
        [DisplayName("Product Sale"), ForeignKey("[dbo].[SC_ProductSale]", "ProductSaleId"), LeftJoin("jProductSale"), TextualField("ProductSaleTokenNo")]
        public Int64? ProductSaleId
        {
            get => fields.ProductSaleId[this];
            set => fields.ProductSaleId[this] = value;
        }

        [DisplayName("Payment Date")]
        public DateTime? PaymentDate
        {
            get => fields.PaymentDate[this];
            set => fields.PaymentDate[this] = value;
        }

        [DisplayName("Payment Amount"), Size(8), Scale(2)]
        public Decimal? PaymentAmount
        {
            get => fields.PaymentAmount[this];
            set => fields.PaymentAmount[this] = value;
        }

        [DisplayName("Payment Type")]
        public SalePaymentType? PaymentType
        {
            get => (SalePaymentType?)fields.PaymentType[this];
            set => fields.PaymentType[this] = (Int32?)value;
        }        

        public ProductSalePaymentRow()
            : base()
        {
        }

        public ProductSalePaymentRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ProductSalePaymentId;
            public StringField __id;
            public Int64Field ProductSaleId;
            public DateTimeField PaymentDate;
            public DecimalField PaymentAmount;
            public Int32Field PaymentType;

        }
    }
}
