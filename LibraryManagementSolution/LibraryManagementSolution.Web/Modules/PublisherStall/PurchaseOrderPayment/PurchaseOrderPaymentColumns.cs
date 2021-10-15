using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.PublisherStall.Columns
{
    [ColumnsScript("PublisherStall.PurchaseOrderPayment")]
    [BasedOnRow(typeof(PurchaseOrderPaymentRow), CheckNames = true)]
    public class PurchaseOrderPaymentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 PurchaseOrderPaymentId { get; set; }
        public String PurchaseOrderTokenNo { get; set; }
        public DateTime PaymentDate { get; set; }
        public Decimal PaymentAmount { get; set; }
    }
}