
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()
    export class ProductSalePaymentDialog extends Serenity.EntityDialog<ProductSalePaymentRow, any> {
        protected getFormKey() { return ProductSalePaymentForm.formKey; }
        protected getIdProperty() { return ProductSalePaymentRow.idProperty; }
        protected getLocalTextPrefix() { return ProductSalePaymentRow.localTextPrefix; }
        protected getService() { return ProductSalePaymentService.baseUrl; }
        protected getDeletePermission() { return ProductSalePaymentRow.deletePermission; }
        protected getInsertPermission() { return ProductSalePaymentRow.insertPermission; }
        protected getUpdatePermission() { return ProductSalePaymentRow.updatePermission; }

        protected form = new ProductSalePaymentForm(this.idPrefix);

    }
}