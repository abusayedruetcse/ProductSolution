
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()
    export class ProductSaleGrid extends Serenity.EntityGrid<ProductSaleRow, any> {
        protected getColumnsKey() { return ProductSaleColumns.columnsKey; }
        protected getDialogType() { return ProductSaleDialog; }
        protected getIdProperty() { return ProductSaleRow.idProperty; }
        protected getInsertPermission() { return ProductSaleRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductSaleRow.localTextPrefix; }
        protected getService() { return ProductSaleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}