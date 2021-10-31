﻿namespace LibraryManagementSolution.Common {
    export enum SaleStatus {
        Draft = 1,
        OrderSent = 2,
        ChangeOrder = 3,
        Canceled = 4,
        OrderReceived = 5,
        MoneyPaid = 6,
        Closed = 7
    }
    Serenity.Decorators.registerEnumType(SaleStatus, 'LibraryManagementSolution.Common.SaleStatus', 'Common.SaleStatus');
}