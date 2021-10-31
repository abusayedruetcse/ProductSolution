using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.StallCustomer.Columns
{
    [ColumnsScript("StallCustomer.ProductSale")]
    [BasedOnRow(typeof(ProductSaleRow), CheckNames = true)]
    public class ProductSaleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProductSaleId { get; set; }
        [EditLink]
        public String TokenNo { get; set; }
        public String CustomerName { get; set; }
        public DateTime SaleDate { get; set; }
        public Decimal SubTotal { get; set; }
        public Decimal ServiceCharge { get; set; }
        public Decimal Other { get; set; }
        public Decimal InitialLess { get; set; }
        public Decimal InitialPaid { get; set; }
        public Decimal TotalPayable { get; set; }
        public Int64 PreparedBy { get; set; }
        public Int32 Status { get; set; }
    }
}