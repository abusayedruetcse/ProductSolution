﻿using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementSolution.Common
{
    [EnumKey("Common.PurchaseStatus")]
    public enum PurchaseStatus
    {
        [Description("Draft")]
        Draft = 1,
        [Description("Order Sent")]
        OrderSent = 2,
        [Description("Change Order")]
        ChangeOrder = 3,
        [Description("Canceled")]
        Canceled = 4,
        [Description("Order Received")]
        OrderReceived = 5,
        [Description("Money Paid")]
        MoneyPaid = 6,
        [Description("Closed")]
        Closed = 7,
    }
}
