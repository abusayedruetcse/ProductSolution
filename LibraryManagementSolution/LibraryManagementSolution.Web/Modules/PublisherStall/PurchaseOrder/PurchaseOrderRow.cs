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

        [DisplayName("Initial Paid"), Size(8), Scale(2)]
        public Decimal? InitialPaid
        {
            get => fields.InitialPaid[this];
            set => fields.InitialPaid[this] = value;
        }

        [DisplayName("Total Payable"), Size(8), Scale(2)]
        public Decimal? TotalPayable
        {
            get => fields.TotalPayable[this];
            set => fields.TotalPayable[this] = value;
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
            public DecimalField InitialPaid;
            public DecimalField TotalPayable;
            public Int32Field Status;

            public StringField PublisherName;
            public StringField PublisherNameBn;
            public StringField PublisherContactNo;
            public StringField PublisherMail;
            public StringField PublisherDescription;
            public DateTimeField PublisherStartDate;

            public readonly ListField<PurchaseOrderDetailListRow> OrderDetailList;
        }
    }
}
