using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.StallCustomer.Columns
{
    [ColumnsScript("StallCustomer.ProductSalePayment")]
    [BasedOnRow(typeof(ProductSalePaymentRow), CheckNames = true)]
    public class ProductSalePaymentColumns
    {
        [EditLink]
        [Width(100)]
        public DateTime PaymentDate { get; set; }
        [Width(100)]
        public Decimal PaymentAmount { get; set; }
    }
}