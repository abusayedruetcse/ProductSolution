using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.PublisherStall.Forms
{
    [FormScript("PublisherStall.PurchaseOrderPayment")]
    [BasedOnRow(typeof(PurchaseOrderPaymentRow), CheckNames = true)]
    public class PurchaseOrderPaymentForm
    {
        public DateTime PaymentDate { get; set; }
        public Decimal PaymentAmount { get; set; }        
        //public Int32 PaymentType { get; set; }
    }
}