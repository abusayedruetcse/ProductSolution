
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()
    export class ProductSaleDetailDialog extends Serenity.EntityDialog<ProductSaleDetailRow, any> {
        protected getFormKey() { return ProductSaleDetailForm.formKey; }
        protected getIdProperty() { return ProductSaleDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ProductSaleDetailRow.localTextPrefix; }
        protected getService() { return ProductSaleDetailService.baseUrl; }
        protected getDeletePermission() { return ProductSaleDetailRow.deletePermission; }
        protected getInsertPermission() { return ProductSaleDetailRow.insertPermission; }
        protected getUpdatePermission() { return ProductSaleDetailRow.updatePermission; }

        protected form = new ProductSaleDetailForm(this.idPrefix);

    }
}