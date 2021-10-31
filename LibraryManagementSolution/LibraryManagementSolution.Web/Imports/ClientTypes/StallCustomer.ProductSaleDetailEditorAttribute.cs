using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace LibraryManagementSolution.StallCustomer
{
    public partial class ProductSaleDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "LibraryManagementSolution.StallCustomer.ProductSaleDetailEditor";

        public ProductSaleDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
