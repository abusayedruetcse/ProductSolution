
namespace LibraryManagementSolution.PublisherStall {

    @Serenity.Decorators.registerEditor()
    export class PurchaseOrderDetailListEditor extends Serenity.Extensions.GridEditorBase<PurchaseOrderDetailListRow> {
        protected getColumnsKey() { return PurchaseOrderDetailListColumns.columnsKey; }
        protected getDialogType() { return PurchaseOrderDetailListDialog; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailListRow.localTextPrefix; }
        
        constructor(container: JQuery) {
            super(container);
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