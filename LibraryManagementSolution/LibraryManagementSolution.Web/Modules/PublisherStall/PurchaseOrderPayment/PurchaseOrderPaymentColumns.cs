using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using LibraryManagementSolution.Common;

namespace LibraryManagementSolution.PublisherStall.Columns
{
    [ColumnsScript("PublisherStall.PurchaseOrderPayment")]
    [BasedOnRow(typeof(PurchaseOrderPaymentRow), CheckNames = true)]
    public class PurchaseOrderPaymentColumns
    {        
        [EditLink]
        [Width(100)]
        public DateTime PaymentDate { get; set; }
        //[Width(100)]
        //public PurchasePaymentType PaymentType { get; set; }
        [Width(100)]
        public Decimal PaymentAmount { get; set; }
        
    }
}