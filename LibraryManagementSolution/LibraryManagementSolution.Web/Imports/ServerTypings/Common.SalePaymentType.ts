namespace LibraryManagementSolution.Common {
    export enum SalePaymentType {
        Pay = 1,
        Less = 2
    }
    Serenity.Decorators.registerEnumType(SalePaymentType, 'LibraryManagementSolution.Common.SalePaymentType', 'Common.SalePaymentType');
}
