using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.StallCustomer.Columns
{
    [ColumnsScript("StallCustomer.Customer")]
    [BasedOnRow(typeof(CustomerRow), CheckNames = true)]
    public class CustomerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 CustomerId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String NameBn { get; set; }
        public String ContactNo { get; set; }
        public String Mail { get; set; }
        public String About { get; set; }
    }
}