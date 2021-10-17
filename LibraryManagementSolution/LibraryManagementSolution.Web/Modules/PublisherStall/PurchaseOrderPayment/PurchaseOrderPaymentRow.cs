using LibraryManagementSolution.Common;
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
        [DisplayName("id"), NotMapped]
        public String? __id
        {
            get => fields.__id[this];
            set => fields.__id[this] = value;
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

        [DisplayName("Amount"), Size(8), Scale(2), AlignRight]
        public Decimal? PaymentAmount
        {
            get => fields.PaymentAmount[this];
            set => fields.PaymentAmount[this] = value;
        }

        [DisplayName("Payment Type")]
        public PurchasePaymentType? PaymentType
        {
            get => (PurchasePaymentType?)fields.PaymentType[this];
            set => fields.PaymentType[this] = (Int32?)value;
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
            public StringField __id;
            public Int64Field PurchaseOrderId;
            public DateTimeField PaymentDate;
            public DecimalField PaymentAmount;
            public Int32Field PaymentType;
        }
    }
}
