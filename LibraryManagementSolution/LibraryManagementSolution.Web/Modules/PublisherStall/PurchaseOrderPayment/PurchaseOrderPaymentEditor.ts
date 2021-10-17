
namespace LibraryManagementSolution.PublisherStall {

    @Serenity.Decorators.registerEditor()
    export class PurchaseOrderPaymentEditor extends Serenity.Extensions.GridEditorBase<PurchaseOrderPaymentRow> {
        protected getColumnsKey() { return PurchaseOrderPaymentColumns.columnsKey; }
        protected getDialogType() { return PurchaseOrderPaymentEditorDialog; }
        protected getLocalTextPrefix() { return PurchaseOrderPaymentRow.localTextPrefix; }
        
        constructor(container: JQuery) {
            super(container);
            this.element.find('.grid-toolbar').hide();
        }
        
    }
}