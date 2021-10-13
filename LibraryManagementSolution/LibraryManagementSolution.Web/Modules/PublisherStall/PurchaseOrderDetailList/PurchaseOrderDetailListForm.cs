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
    [FormScript("PublisherStall.PurchaseOrderDetailList")]
    [BasedOnRow(typeof(PurchaseOrderDetailListRow), CheckNames = true)]
    public class PurchaseOrderDetailListForm
    {
        //public Int64 PurchaseOrderId { get; set; }
        [LookupEditor(typeof(BookRow))]
        public Int64 BookId { get; set; }
        public Int32 Quantity { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int32 Discount { get; set; }
        public Decimal LineTotal { get; set; }
    }
}