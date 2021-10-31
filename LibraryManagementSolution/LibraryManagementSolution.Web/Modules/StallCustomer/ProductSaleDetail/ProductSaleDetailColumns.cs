using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.StallCustomer.Columns
{
    [ColumnsScript("StallCustomer.ProductSaleDetail")]
    [BasedOnRow(typeof(ProductSaleDetailRow), CheckNames = true)]
    public class ProductSaleDetailColumns
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