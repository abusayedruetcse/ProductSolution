
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerEditor()
    export class ProductSalePaymentEditor extends Serenity.Extensions.GridEditorBase<ProductSalePaymentRow> {
        protected getColumnsKey() { return ProductSalePaymentColumns.columnsKey; }
        protected getDialogType() { return ProductSalePaymentEditorDialog; }
        protected getLocalTextPrefix() { return ProductSalePaymentRow.localTextPrefix; }
        
        constructor(container: JQuery) {
            super(container);
            this.element.find('.grid-toolbar').hide();
        }
        
    }
}