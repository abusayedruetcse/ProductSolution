using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.PublisherStall.Columns
{
    [ColumnsScript("PublisherStall.PurchaseOrder")]
    [BasedOnRow(typeof(PurchaseOrderRow), CheckNames = true)]
    public class PurchaseOrderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 PurchaseOrderId { get; set; }
        [EditLink]
        public String TokenNo { get; set; }
        public String PublisherNameBn { get; set; }
        public DateTime OrderDate { get; set; }
        public Decimal SubTotal { get; set; }        
        public Decimal TotalPayable { get; set; }
        public Decimal TotalPaid { get; set; }
        public Decimal RemainingDue { get; set; }
        public Int32 Status { get; set; }
    }
}