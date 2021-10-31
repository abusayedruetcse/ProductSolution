
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerEditor()
    export class ProductSaleDetailEditor extends Serenity.Extensions.GridEditorBase<ProductSaleDetailRow> {
        protected getColumnsKey() { return ProductSaleDetailColumns.columnsKey; }
        protected getDialogType() { return ProductSaleDetailEditorDialog; }
        protected getLocalTextPrefix() { return ProductSaleDetailRow.localTextPrefix; }
        
        constructor(container: JQuery) {
            super(container);            
            this.element.find('.grid-toolbar').hide();
        }

        validateEntity(row, id) {
            row.BookId = Q.toId(row.BookId);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.BookId === row.BookId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in order details!');
                return false;
            }

            row.BookNameBn = AdminManagement.BookRow.getLookup().itemById[row.BookId].NameBn;
            
            return true;
        }
    }
}