using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LibraryManagementSolution.PublisherStall
{
    [ConnectionKey("LibraryManagement"), Module("PublisherStall"), TableName("[dbo].[PS_PurchaseOrderPayment]")]
    [DisplayName("Purchase Order Payment"), InstanceName("Purchase Order Payment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PurchaseOrderPaymentRow : Row<PurchaseOrderPaymentRow.RowFields>, IIdRow
    {
        [DisplayName("Purchase Order Payment Id"), Identity, IdProperty]
        public Int64? PurchaseOrderPaymentId
        {
            get => fields.PurchaseOrderPaymentId[this];
            set => fields.PurchaseOrderPaymentId[this] = value;
        }

        [DisplayName("Purchase Order"), ForeignKey("[dbo].[PS_PurchaseOrder]", "PurchaseOrderId"), LeftJoin("jPurchaseOrder"), TextualField("PurchaseOrderTokenNo")]
        public Int64? PurchaseOrderId
        {
            get => fields.PurchaseOrderId[this];
            set => fields.PurchaseOrderId[this] = value;
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

        [DisplayName("Purchase Order Token No"), Expression("jPurchaseOrder.[TokenNo]")]
        public String PurchaseOrderTokenNo
        {
            get => fields.PurchaseOrderTokenNo[this];
            set => fields.PurchaseOrderTokenNo[this] = value;
        }

        [DisplayName("Purchase Order Publisher Id"), Expression("jPurchaseOrder.[PublisherId]")]
        public Int64? PurchaseOrderPublisherId
        {
            get => fields.PurchaseOrderPublisherId[this];
            set => fields.PurchaseOrderPublisherId[this] = value;
        }

        [DisplayName("Purchase Order Order Date"), Expression("jPurchaseOrder.[OrderDate]")]
        public DateTime? PurchaseOrderOrderDate
        {
            get => fields.PurchaseOrderOrderDate[this];
            set => fields.PurchaseOrderOrderDate[this] = value;
        }

        [DisplayName("Purchase Order Sub Total"), Expression("jPurchaseOrder.[SubTotal]")]
        public Decimal? PurchaseOrderSubTotal
        {
            get => fields.PurchaseOrderSubTotal[this];
            set => fields.PurchaseOrderSubTotal[this] = value;
        }

        [DisplayName("Purchase Order Service Charge"), Expression("jPurchaseOrder.[ServiceCharge]")]
        public Decimal? PurchaseOrderServiceCharge
        {
            get => fields.PurchaseOrderServiceCharge[this];
            set => fields.PurchaseOrderServiceCharge[this] = value;
        }

        [DisplayName("Purchase Order Other"), Expression("jPurchaseOrder.[Other]")]
        public Decimal? PurchaseOrderOther
        {
            get => fields.PurchaseOrderOther[this];
            set => fields.PurchaseOrderOther[this] = value;
        }

        [DisplayName("Purchase Order Initial Less"), Expression("jPurchaseOrder.[InitialLess]")]
        public Decimal? PurchaseOrderInitialLess
        {
            get => fields.PurchaseOrderInitialLess[this];
            set => fields.PurchaseOrderInitialLess[this] = value;
        }

        [DisplayName("Purchase Order Initial Paid"), Expression("jPurchaseOrder.[InitialPaid]")]
        public Decimal? PurchaseOrderInitialPaid
        {
            get => fields.PurchaseOrderInitialPaid[this];
            set => fields.PurchaseOrderInitialPaid[this] = value;
        }

        [DisplayName("Purchase Order Total Payable"), Expression("jPurchaseOrder.[TotalPayable]")]
        public Decimal? PurchaseOrderTotalPayable
        {
            get => fields.PurchaseOrderTotalPayable[this];
            set => fields.PurchaseOrderTotalPayable[this] = value;
        }

        [DisplayName("Purchase Order Status"), Expression("jPurchaseOrder.[Status]")]
        public Int32? PurchaseOrderStatus
        {
            get => fields.PurchaseOrderStatus[this];
            set => fields.PurchaseOrderStatus[this] = value;
        }

        public PurchaseOrderPaymentRow()
            : base()
        {
        }

        public PurchaseOrderPaymentRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field PurchaseOrderPaymentId;
            public Int64Field PurchaseOrderId;
            public DateTimeField PaymentDate;
            public DecimalField PaymentAmount;

            public StringField PurchaseOrderTokenNo;
            public Int64Field PurchaseOrderPublisherId;
            public DateTimeField PurchaseOrderOrderDate;
            public DecimalField PurchaseOrderSubTotal;
            public DecimalField PurchaseOrderServiceCharge;
            public DecimalField PurchaseOrderOther;
            public DecimalField PurchaseOrderInitialLess;
            public DecimalField PurchaseOrderInitialPaid;
            public DecimalField PurchaseOrderTotalPayable;
            public Int32Field PurchaseOrderStatus;
        }
    }
}
