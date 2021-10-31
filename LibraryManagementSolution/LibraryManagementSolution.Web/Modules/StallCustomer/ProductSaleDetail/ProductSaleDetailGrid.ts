
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()
    export class ProductSaleDetailGrid extends Serenity.EntityGrid<ProductSaleDetailRow, any> {
        protected getColumnsKey() { return ProductSaleDetailColumns.columnsKey; }
        protected getDialogType() { return ProductSaleDetailDialog; }
        protected getIdProperty() { return ProductSaleDetailRow.idProperty; }
        protected getInsertPermission() { return ProductSaleDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductSaleDetailRow.localTextPrefix; }
        protected getService() { return ProductSaleDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}