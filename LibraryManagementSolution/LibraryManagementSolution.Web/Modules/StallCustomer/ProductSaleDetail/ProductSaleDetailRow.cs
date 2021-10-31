using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.StallCustomer
{
    [ConnectionKey("LibraryManagement"), Module("StallCustomer"), TableName("[dbo].[SC_ProductSaleDetail]")]
    [DisplayName("Product Sale Detail"), InstanceName("Product Sale Detail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProductSaleDetailRow : Row<ProductSaleDetailRow.RowFields>, IIdRow
    {
        [DisplayName("Product Sale Detail Id"), Identity, IdProperty]
        public Int64? ProductSaleDetailId
        {
            get => fields.ProductSaleDetailId[this];
            set => fields.ProductSaleDetailId[this] = value;
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

        [DisplayName("Book"), ForeignKey("[dbo].[AM_Book]", "BookId"), LeftJoin("jBook"), TextualField("BookNameBn")]
        public Int64? BookId
        {
            get => fields.BookId[this];
            set => fields.BookId[this] = value;
        }

        [DisplayName("Quantity"), NotNull, AlignRight, DefaultValue(1)]
        public Int32? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("Unit Price"), Size(8), Scale(2), NotNull, AlignRight, DisplayFormat("#,##0.00")]
        public Decimal? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Discount"), DefaultValue(0), NotNull, AlignRight]
        public Int32? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }


        [DisplayName("Line Total"), Expression("(T0.[UnitPrice] * T0.[Quantity] * ( 1 - T0.[Discount] * 0.01))")]
        [ReadOnly(true), AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [DisplayName("Book Name"), Expression("jBook.[Name]")]
        public String BookName
        {
            get => fields.BookName[this];
            set => fields.BookName[this] = value;
        }

        [DisplayName("Book Name Bn"), Expression("jBook.[NameBn]"), MinSelectLevel(SelectLevel.List)]
        public String BookNameBn
        {
            get => fields.BookNameBn[this];
            set => fields.BookNameBn[this] = value;
        }

        public ProductSaleDetailRow()
            : base()
        {
        }

        public ProductSaleDetailRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ProductSaleDetailId;
            public StringField __id;
            public Int64Field ProductSaleId;
            public Int64Field BookId;
            public Int32Field Quantity;
            public DecimalField UnitPrice;
            public Int32Field Discount;
            public DecimalField LineTotal;

            public StringField BookName;
            public StringField BookNameBn;
        }
    }
}
