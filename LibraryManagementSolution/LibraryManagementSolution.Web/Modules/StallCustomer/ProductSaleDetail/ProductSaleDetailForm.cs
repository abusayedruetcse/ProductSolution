using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using LibraryManagementSolution.AdminManagement;

namespace LibraryManagementSolution.StallCustomer.Forms
{
    [FormScript("StallCustomer.ProductSaleDetail")]
    [BasedOnRow(typeof(ProductSaleDetailRow), CheckNames = true)]
    public class ProductSaleDetailForm
    {
        [LookupEditor(typeof(BookRow))]
        public Int64 BookId { get; set; }
        public Int32 Quantity { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int32 Discount { get; set; }
        public Decimal LineTotal { get; set; }
    }
}