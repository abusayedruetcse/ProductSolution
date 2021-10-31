using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.StallCustomer.Forms
{
    [FormScript("StallCustomer.ProductSalePayment")]
    [BasedOnRow(typeof(ProductSalePaymentRow), CheckNames = true)]
    public class ProductSalePaymentForm
    {
        public Int64 ProductSaleId { get; set; }
        public DateTime PaymentDate { get; set; }
        public Decimal PaymentAmount { get; set; }
        public Int32 PaymentType { get; set; }
    }
}