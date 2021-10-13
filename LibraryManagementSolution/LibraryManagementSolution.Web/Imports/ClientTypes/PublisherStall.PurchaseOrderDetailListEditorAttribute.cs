using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace LibraryManagementSolution.PublisherStall
{
    public partial class PurchaseOrderDetailListEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "LibraryManagementSolution.PublisherStall.PurchaseOrderDetailListEditor";

        public PurchaseOrderDetailListEditorAttribute()
            : base(Key)
        {
        }
    }
}
