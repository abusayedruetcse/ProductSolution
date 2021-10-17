using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace LibraryManagementSolution.PublisherStall
{
    public partial class PurchaseOrderPaymentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "LibraryManagementSolution.PublisherStall.PurchaseOrderPaymentEditor";

        public PurchaseOrderPaymentEditorAttribute()
            : base(Key)
        {
        }
    }
}
