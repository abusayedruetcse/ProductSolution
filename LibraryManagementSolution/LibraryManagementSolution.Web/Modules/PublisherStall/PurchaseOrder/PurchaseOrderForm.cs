using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using LibraryManagementSolution.AdminManagement;

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
        [LookupEditor(typeof(PublisherRow))]
        public Int64 PublisherId { get; set; }
        [HalfWidth(JustThis = true)]
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        [Category("Details")]
        [PurchaseOrderDetailListEditor]
        public List<PurchaseOrderDetailListRow> OrderDetailList { get; set; }
        [Tab("Account")]
        [Category("Cost")]
        public Decimal SubTotal { get; set; }
        public Decimal ServiceCharge { get; set; }
        public Decimal Other { get; set; }
        public Decimal InitialLess { get; set; }
        public Decimal InitialPaid { get; set; }
        public Decimal TotalPayable { get; set; }
        [HalfWidth(JustThis = true)]
        public Int32 Status { get; set; }
    }
}