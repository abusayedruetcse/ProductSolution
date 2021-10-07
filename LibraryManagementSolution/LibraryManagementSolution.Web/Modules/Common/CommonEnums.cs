using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementSolution.Common
{
    [EnumKey("Common.PublisherStallStatus")]
    public enum PublisherStallStatus
    {
        [Description("Draft")]
        Draft = 1,
        [Description("Order Sent")]
        OrderSent = 2,
        [Description("Order Received")]
        OrderReceived = 3,
        [Description("Money Paid")]
        MoneyPaid = 4
    }
}
