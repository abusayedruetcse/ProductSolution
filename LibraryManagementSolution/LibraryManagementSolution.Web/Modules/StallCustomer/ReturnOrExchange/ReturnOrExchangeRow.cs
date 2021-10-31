using LibraryManagementSolution.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.StallCustomer
{
    [ConnectionKey("LibraryManagement"), Module("StallCustomer"), TableName("[dbo].[SC_ProductSale]")]
    [DisplayName("Product Sale"), InstanceName("Product Sale")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ReturnOrExchangeRow : Row<ReturnOrExchangeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Product Sale Id"), Identity, IdProperty]
        public Int64? ProductSaleId
        {
            get => fields.ProductSaleId[this];
            set => fields.ProductSaleId[this] = value;
        }

        [DisplayName("Token No"), Size(50), NotNull, QuickSearch, NameProperty]
        public String TokenNo
        {
            get => fields.TokenNo[this];
            set => fields.TokenNo[this] = value;
        }

        [LookupEditor(typeof(CustomerRow), InplaceAdd = true)]
        [DisplayName("Customer"), ForeignKey("[dbo].[SC_Customer]", "CustomerId"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        public Int64? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Sale Date")]
        public DateTime? SaleDate
        {
            get => fields.SaleDate[this];
            set => fields.SaleDate[this] = value;
        }

        [DisplayName("Sub Total"), Size(8), Scale(2)]
        public Decimal? SubTotal
        {
            get => fields.SubTotal[this];
            set => fields.SubTotal[this] = value;
        }

        [DisplayName("Service Charge"), Size(8), Scale(2)]
        public Decimal? ServiceCharge
        {
            get => fields.ServiceCharge[this];
            set => fields.ServiceCharge[this] = value;
        }

        [DisplayName("Other"), Size(8), Scale(2)]
        public Decimal? Other
        {
            get => fields.Other[this];
            set => fields.Other[this] = value;
        }

        [DisplayName("Initial Less"), Size(8), Scale(2)]
        public Decimal? InitialLess
        {
            get => fields.InitialLess[this];
            set => fields.InitialLess[this] = value;
        }

        [DisplayName("Total Less"), Size(8), Scale(2), NotMapped]
        public Decimal? TotalLess
        {
            get => fields.TotalLess[this];
            set => fields.TotalLess[this] = value;
        }

        [DisplayName("Initial Paid"), Size(8), Scale(2)]
        public Decimal? InitialPaid
        {
            get => fields.InitialPaid[this];
            set => fields.InitialPaid[this] = value;
        }

        [DisplayName("Total Paid"), Size(8), Scale(2), NotMapped]
        public Decimal? TotalPaid
        {
            get => fields.TotalPaid[this];
            set => fields.TotalPaid[this] = value;
        }

        [DisplayName("Total Payable"), Size(8), Scale(2)]
        public Decimal? TotalPayable
        {
            get => fields.TotalPayable[this];
            set => fields.TotalPayable[this] = value;
        }

        [DisplayName("Remaining Due"), Size(8), Scale(2), NotMapped]
        public Decimal? RemainingDue
        {
            get => fields.RemainingDue[this];
            set => fields.RemainingDue[this] = value;

        }

        [DisplayName("Status")]
        public SaleStatus? Status
        {
            get => (SaleStatus?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }

        [DisplayName("Prepared By")]
        public Int64? PreparedBy
        {
            get => fields.PreparedBy[this];
            set => fields.PreparedBy[this] = value;
        }

        #region MasterDetails
        [DisplayName("Return List")]
        [MasterDetailRelation(foreignKey: nameof(ProductSaleDetailRow.ProductSaleId)), NotMapped]
        public List<ProductSaleDetailRow> ReturnBookList
        {
            get => fields.ReturnBookList[this];
            set => fields.ReturnBookList[this] = value;
        }
        [DisplayName("Item List")]
        [MasterDetailRelation(foreignKey: nameof(ProductSaleDetailRow.ProductSaleId)), NotMapped]
        public List<ProductSaleDetailRow> OrderDetailList
        {
            get => fields.OrderDetailList[this];
            set => fields.OrderDetailList[this] = value;
        }
        [DisplayName("Pay List")]
        [MasterDetailRelation(foreignKey: nameof(ProductSalePaymentRow.ProductSaleId), FilterField = nameof(ProductSalePaymentRow.PaymentType), FilterValue = SalePaymentType.Pay), NotMapped]
        public List<ProductSalePaymentRow> OrderPayList
        {
            get => fields.OrderPayList[this];
            set => fields.OrderPayList[this] = value;
        }

        [DisplayName("CashBack List")]
        [MasterDetailRelation(foreignKey: nameof(ProductSalePaymentRow.ProductSaleId), FilterField = nameof(ProductSalePaymentRow.PaymentType), FilterValue = SalePaymentType.CashBack), NotMapped]
        public List<ProductSalePaymentRow> CashBackList
        {
            get => fields.CashBackList[this];
            set => fields.CashBackList[this] = value;
        }
        [DisplayName("Less List")]
        [MasterDetailRelation(foreignKey: nameof(ProductSalePaymentRow.ProductSaleId), FilterField = nameof(ProductSalePaymentRow.PaymentType), FilterValue = SalePaymentType.Less), NotMapped]
        public List<ProductSalePaymentRow> OrderLessList
        {
            get => fields.OrderLessList[this];
            set => fields.OrderLessList[this] = value;
        }
        #endregion 
        #region Return Detail Fields & AddButton
        [DisplayName("Book"), NotMapped]
        public Int64? BookId2
        {
            get => fields.BookId2[this];
            set => fields.BookId2[this] = value;
        }

        [DisplayName("Quantity"), AlignRight, NotMapped]
        public Int32? Quantity2
        {
            get => fields.Quantity2[this];
            set => fields.Quantity2[this] = value;
        }

        [DisplayName("Unit Price"), Size(8), Scale(2), AlignRight, DisplayFormat("#,##0.00"), NotMapped]
        public Decimal? UnitPrice2
        {
            get => fields.UnitPrice2[this];
            set => fields.UnitPrice2[this] = value;
        }

        [DisplayName("Discount"), AlignRight, NotMapped]
        public Int32? Discount2
        {
            get => fields.Discount2[this];
            set => fields.Discount2[this] = value;
        }

        [DisplayName("Line Total")]
        [ReadOnly(true), AlignRight, DisplayFormat("#,##0.00"), NotMapped]
        public Decimal? LineTotal2
        {
            get { return Fields.LineTotal2[this]; }
            set { Fields.LineTotal2[this] = value; }
        }

        [DisplayName("AddOrder Detail"), NotMapped]
        public String AddOrderDetail2
        {
            get => fields.AddOrderDetail2[this];
            set => fields.AddOrderDetail2[this] = value;
        }
        #endregion
        #region OrderDetail Fields & AddButton
        [DisplayName("Book"), NotMapped]
        public Int64? BookId
        {
            get => fields.BookId[this];
            set => fields.BookId[this] = value;
        }

        [DisplayName("Quantity"), AlignRight, NotMapped]
        public Int32? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("Unit Price"), Size(8), Scale(2), AlignRight, DisplayFormat("#,##0.00"), NotMapped]
        public Decimal? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Discount"), AlignRight, NotMapped]
        public Int32? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Line Total")]
        [ReadOnly(true), AlignRight, DisplayFormat("#,##0.00"), NotMapped]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [DisplayName("AddOrder Detail"), NotMapped]
        public String AddOrderDetail
        {
            get => fields.AddOrderDetail[this];
            set => fields.AddOrderDetail[this] = value;
        }
        #endregion
        #region Pay Fields & AddButton
        [DisplayName("Payment Date"), NotMapped]
        public DateTime? PaymentDate
        {
            get => fields.PaymentDate[this];
            set => fields.PaymentDate[this] = value;
        }

        [DisplayName("Amount"), Size(8), Scale(2), AlignRight, NotMapped]
        public Decimal? PaymentAmount
        {
            get => fields.PaymentAmount[this];
            set => fields.PaymentAmount[this] = value;
        }

        [DisplayName("Payment Type"), NotMapped]
        public PurchasePaymentType? PaymentType
        {
            get => (PurchasePaymentType?)fields.PaymentType[this];
            set => fields.PaymentType[this] = (Int32?)value;
        }
        [DisplayName("Add Pay"), NotMapped]
        public String AddPay
        {
            get => fields.AddPay[this];
            set => fields.AddPay[this] = value;
        }
        #endregion

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public String CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Name Bn"), Expression("jCustomer.[NameBn]")]
        public String CustomerNameBn
        {
            get => fields.CustomerNameBn[this];
            set => fields.CustomerNameBn[this] = value;
        }

        [DisplayName("Customer Contact No"), Expression("jCustomer.[ContactNo]")]
        public String CustomerContactNo
        {
            get => fields.CustomerContactNo[this];
            set => fields.CustomerContactNo[this] = value;
        }

        [DisplayName("Customer Mail"), Expression("jCustomer.[Mail]")]
        public String CustomerMail
        {
            get => fields.CustomerMail[this];
            set => fields.CustomerMail[this] = value;
        }

        [DisplayName("Customer About"), Expression("jCustomer.[About]")]
        public String CustomerAbout
        {
            get => fields.CustomerAbout[this];
            set => fields.CustomerAbout[this] = value;
        }

        public ReturnOrExchangeRow()
            : base()
        {
        }

        public ReturnOrExchangeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ProductSaleId;
            public StringField TokenNo;
            public Int64Field CustomerId;
            public DateTimeField SaleDate;
            public DecimalField SubTotal;
            public DecimalField ServiceCharge;
            public DecimalField Other;
            public DecimalField InitialLess;
            public DecimalField TotalLess;
            public DecimalField InitialPaid;
            public DecimalField TotalPaid;
            public DecimalField TotalPayable;
            public DecimalField RemainingDue;
            public Int64Field PreparedBy;
            public Int32Field Status;

            public StringField CustomerName;
            public StringField CustomerNameBn;
            public StringField CustomerContactNo;
            public StringField CustomerMail;
            public StringField CustomerAbout;

            
            public readonly ListField<ProductSaleDetailRow> ReturnBookList;
            public readonly ListField<ProductSaleDetailRow> OrderDetailList; 
            public readonly ListField<ProductSalePaymentRow> OrderPayList;
            public readonly ListField<ProductSalePaymentRow> CashBackList;
            public readonly ListField<ProductSalePaymentRow> OrderLessList;

            public Int64Field BookId2;
            public Int32Field Quantity2;
            public DecimalField UnitPrice2;
            public Int32Field Discount2;
            public DecimalField LineTotal2;
            public StringField AddOrderDetail2;

            public Int64Field BookId;
            public Int32Field Quantity;
            public DecimalField UnitPrice;
            public Int32Field Discount;
            public DecimalField LineTotal;
            public StringField AddOrderDetail;

            public DateTimeField PaymentDate;
            public DecimalField PaymentAmount;
            public Int32Field PaymentType;
            public StringField AddPay;

        }
    }
}
