
namespace LibraryManagementSolution.PublisherStall {

    @Serenity.Decorators.registerClass()
    export class PurchaseOrderPaymentGrid extends Serenity.EntityGrid<PurchaseOrderPaymentRow, any> {
        protected getColumnsKey() { return PurchaseOrderPaymentColumns.columnsKey; }
        protected getDialogType() { return PurchaseOrderPaymentDialog; }
        protected getIdProperty() { return PurchaseOrderPaymentRow.idProperty; }
        protected getInsertPermission() { return PurchaseOrderPaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseOrderPaymentRow.localTextPrefix; }
        protected getService() { return PurchaseOrderPaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}