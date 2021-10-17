namespace LibraryManagementSolution.Common {
    export enum PurchasePaymentType {
        Pay = 1,
        Less = 2
    }
    Serenity.Decorators.registerEnumType(PurchasePaymentType, 'LibraryManagementSolution.Common.PurchasePaymentType', 'Common.PurchasePaymentType');
}
