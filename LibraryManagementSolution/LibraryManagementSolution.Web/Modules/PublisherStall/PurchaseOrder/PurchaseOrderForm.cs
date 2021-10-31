using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using LibraryManagementSolution.AdminManagement;
using LibraryManagementSolution.Common;

namespace LibraryManagementSolution.PublisherStall.Forms
{
    [FormScript("PublisherStall.PurchaseOrder")]
    [BasedOnRow(typeof(PurchaseOrderRow), CheckNames = true)]
    public class PurchaseOrderForm
    {
        [Tab("General")]
        [Category("Order")]
        [HalfWidth(JustThis = true)]
        public String TokenNo { get; set; }
        [HalfWidth(JustThis = true)]
        
        public Int64 PublisherId { get; set; }
        [HalfWidth(JustThis = true)]
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        [Category("Add Detail"), Collapsible(Collapsed = true)]
        [HalfWidth(JustThis = true)]
        [LookupEditor(typeof(BookRow))]
        public Int64 BookId { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 Quantity { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 Discount { get; set; }
        [HalfWidth(JustThis = true)]
        public Decimal UnitPrice { get; set; }
        [HalfWidth(JustThis = true)]
        public String AddOrderDetail { get; set; }
        [HalfWidth(JustThis = true)]
        public Decimal LineTotal { get; set; }
        [Category("Details")]
        [PurchaseOrderDetailListEditor]
        public List<PurchaseOrderDetailListRow> OrderDetailList { get; set; }
        [Tab("Account")]
        [Category("Cost")]
        [HalfWidth(JustThis = true), AlignRight]
        [ReadOnly(true)]
        public Decimal SubTotal { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 Status { get; set; }
        [HalfWidth(JustThis = true), AlignRight, FormCssClass("line-break-lg")]
        public Decimal ServiceCharge { get; set; }
        [HalfWidth(JustThis = true), AlignRight, FormCssClass("line-break-lg")]
        public Decimal Other { get; set; }
        [HalfWidth(JustThis = true), AlignRight, FormCssClass("line-break-lg")]
        public Decimal InitialLess { get; set; }
        [HalfWidth(JustThis = true), AlignRight, FormCssClass("line-break-lg")]
        [ReadOnly(true)]
        public Decimal TotalLess { get; set; }
        [HalfWidth(JustThis = true), AlignRight, FormCssClass("line-break-lg")]
        [ReadOnly(true)]
        public Decimal TotalPayable { get; set; }
        [HalfWidth(JustThis = true), AlignRight, FormCssClass("line-break-lg")]
        public Decimal InitialPaid { get; set; }
        [HalfWidth(JustThis = true), AlignRight, FormCssClass("line-break-lg")]
        [ReadOnly(true)]
        public Decimal TotalPaid { get; set; }        
        [HalfWidth(JustThis = true), AlignRight, FormCssClass("line-break-lg")]
        [ReadOnly(true)]
        public Decimal? RemainingDue { get; set; }        
        [Category("Payment")]
        [OneThirdWidth(JustThis = true)]
        public DateTime PaymentDate { get; set; }
        [OneThirdWidth(JustThis = true)]
        public Decimal PaymentAmount { get; set; }
        [OneThirdWidth(JustThis = true)]
        public Int32 PaymentType { get; set; }
        [HalfWidth(JustThis = true)]
        public String AddPay { get; set; }
        [HalfWidth(JustThis = true), FormCssClass("line-break-lg")]
        [PurchaseOrderPaymentEditor]
        public List<PurchaseOrderPaymentRow> OrderPayList { get; set; }
        [HalfWidth(JustThis = true)]
        [PurchaseOrderPaymentEditor]
        public List<PurchaseOrderPaymentRow> OrderLessList { get; set; }
        
    }
}