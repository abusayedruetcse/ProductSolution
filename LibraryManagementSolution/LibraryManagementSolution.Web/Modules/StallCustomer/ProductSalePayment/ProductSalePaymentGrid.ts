
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()
    export class ProductSalePaymentGrid extends Serenity.EntityGrid<ProductSalePaymentRow, any> {
        protected getColumnsKey() { return ProductSalePaymentColumns.columnsKey; }
        protected getDialogType() { return ProductSalePaymentDialog; }
        protected getIdProperty() { return ProductSalePaymentRow.idProperty; }
        protected getInsertPermission() { return ProductSalePaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductSalePaymentRow.localTextPrefix; }
        protected getService() { return ProductSalePaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}