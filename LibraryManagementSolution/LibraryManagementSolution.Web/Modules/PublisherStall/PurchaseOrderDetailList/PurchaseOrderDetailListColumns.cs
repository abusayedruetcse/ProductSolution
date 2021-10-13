using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.PublisherStall.Columns
{
    [ColumnsScript("PublisherStall.PurchaseOrderDetailList")]
    [BasedOnRow(typeof(PurchaseOrderDetailListRow), CheckNames = true)]
    public class PurchaseOrderDetailListColumns
    {

        [EditLink, Width(200)]
        public String BookNameBn { get; set; }
        [Width(100)]
        public Int32 Quantity { get; set; }
        [Width(100)]
        public Decimal UnitPrice { get; set; }
        [Width(100)]
        public Int32 Discount { get; set; }
        [Width(100)]
        public Decimal LineTotal { get; set; }
    }
}