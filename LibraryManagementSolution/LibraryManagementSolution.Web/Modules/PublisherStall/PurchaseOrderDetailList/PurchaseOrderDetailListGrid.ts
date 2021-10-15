
namespace LibraryManagementSolution.PublisherStall {

    @Serenity.Decorators.registerClass()
    export class PurchaseOrderDetailListGrid extends Serenity.EntityGrid<PurchaseOrderDetailListRow, any> {
        protected getColumnsKey() { return PurchaseOrderDetailListColumns.columnsKey; }
        protected getDialogType() { return PurchaseOrderDetailListDialog; }
        protected getIdProperty() { return PurchaseOrderDetailListRow.idProperty; }
        protected getInsertPermission() { return PurchaseOrderDetailListRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailListRow.localTextPrefix; }
        protected getService() { return PurchaseOrderDetailListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}