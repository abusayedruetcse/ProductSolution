using LibraryManagementSolution.Common;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.PublisherStall
{
    [ConnectionKey("LibraryManagement"), Module("PublisherStall"), TableName("[dbo].[PS_PurchaseOrder]")]
    [DisplayName("Purchase Order"), InstanceName("Purchase Order")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PurchaseOrderRow : Row<PurchaseOrderRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Purchase Order Id"), Identity, IdProperty]
        public Int64? PurchaseOrderId
        {
            get => fields.PurchaseOrderId[this];
            set => fields.PurchaseOrderId[this] = value;
        }

        [DisplayName("Token No"), Size(50), NotNull, QuickSearch, NameProperty]
        public String TokenNo
        {
            get => fields.TokenNo[this];
            set => fields.TokenNo[this] = value;
        }

        [DisplayName("Publisher"), ForeignKey("[dbo].[AM_Publisher]", "PublisherId"), LeftJoin("jPublisher"), TextualField("PublisherName")]
        public Int64? PublisherId
        {
            get => fields.PublisherId[this];
            set => fields.PublisherId[this] = value;
        }

        [DisplayName("Order Date")]
        public DateTime? OrderDate
        {
            get => fields.OrderDate[this];
            set => fields.OrderDate[this] = value;
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

        [DisplayName("Total Less"), Size(8), Scale(2),NotMapped]
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
        public PurchaseStatus? Status
        {
            get => (PurchaseStatus?)fields.Status[this];
            set => fields.Status[this] = (Int32?)value;
        }

        [DisplayName("Publisher Name"), Expression("jPublisher.[Name]")]
        public String PublisherName
        {
            get => fields.PublisherName[this];
            set => fields.PublisherName[this] = value;
        }

        [DisplayName("Publisher Name Bn"), Expression("jPublisher.[NameBn]")]
        public String PublisherNameBn
        {
            get => fields.PublisherNameBn[this];
            set => fields.PublisherNameBn[this] = value;
        }

        [DisplayName("Publisher Contact No"), Expression("jPublisher.[ContactNo]")]
        public String PublisherContactNo
        {
            get => fields.PublisherContactNo[this];
            set => fields.PublisherContactNo[this] = value;
        }

        [DisplayName("Publisher Mail"), Expression("jPublisher.[Mail]")]
        public String PublisherMail
        {
            get => fields.PublisherMail[this];
            set => fields.PublisherMail[this] = value;
        }

        [DisplayName("Publisher Description"), Expression("jPublisher.[Description]")]
        public String PublisherDescription
        {
            get => fields.PublisherDescription[this];
            set => fields.PublisherDescription[this] = value;
        }

        [DisplayName("Publisher Start Date"), Expression("jPublisher.[StartDate]")]
        public DateTime? PublisherStartDate
        {
            get => fields.PublisherStartDate[this];
            set => fields.PublisherStartDate[this] = value;
        }

        #region MasterDetails
        [DisplayName("Item List")]
        [MasterDetailRelation(foreignKey: nameof(PurchaseOrderDetailListRow.PurchaseOrderId)), NotMapped]
        public List<PurchaseOrderDetailListRow> OrderDetailList
        {
            get => fields.OrderDetailList[this];
            set => fields.OrderDetailList[this] = value;
        }
        [DisplayName("Pay List")]
        [MasterDetailRelation(foreignKey: nameof(PurchaseOrderPaymentRow.PurchaseOrderId), FilterField = nameof(PurchaseOrderPaymentRow.PaymentType), FilterValue = PurchasePaymentType.Pay), NotMapped]
        public List<PurchaseOrderPaymentRow> OrderPayList
        {
            get => fields.OrderPayList[this];
            set => fields.OrderPayList[this] = value;
        }
        [DisplayName("Less List")]
        [MasterDetailRelation(foreignKey: nameof(PurchaseOrderPaymentRow.PurchaseOrderId), FilterField = nameof(PurchaseOrderPaymentRow.PaymentType), FilterValue = PurchasePaymentType.Less), NotMapped]
        public List<PurchaseOrderPaymentRow> OrderLessList
        {
            get => fields.OrderLessList[this];
            set => fields.OrderLessList[this] = value;
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
        public PurchaseOrderRow()
            : base()
        {
        }

        public PurchaseOrderRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field PurchaseOrderId;
            public StringField TokenNo;
            public Int64Field PublisherId;
            public DateTimeField OrderDate;
            public DecimalField SubTotal;
            public DecimalField ServiceCharge;
            public DecimalField Other;
            public DecimalField InitialLess;
            public DecimalField TotalLess;
            public DecimalField InitialPaid;
            public DecimalField TotalPaid;
            public DecimalField TotalPayable;
            public DecimalField RemainingDue;
            public Int32Field Status;

            public StringField PublisherName;
            public StringField PublisherNameBn;
            public StringField PublisherContactNo;
            public StringField PublisherMail;
            public StringField PublisherDescription;
            public DateTimeField PublisherStartDate;

            public readonly ListField<PurchaseOrderDetailListRow> OrderDetailList;
            public readonly ListField<PurchaseOrderPaymentRow> OrderPayList;
            public readonly ListField<PurchaseOrderPaymentRow> OrderLessList;

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
