namespace LibraryManagementSolution.Common {
    export enum SalePaymentType {
        Pay = 1,
        Less = 2,
        CashBack = 3
    }
    Serenity.Decorators.registerEnumType(SalePaymentType, 'LibraryManagementSolution.Common.SalePaymentType', 'Common.SalePaymentType');
}
