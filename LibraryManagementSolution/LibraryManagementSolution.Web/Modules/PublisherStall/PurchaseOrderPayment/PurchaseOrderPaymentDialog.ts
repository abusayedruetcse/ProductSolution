
namespace LibraryManagementSolution.PublisherStall {

    @Serenity.Decorators.registerClass()
    export class PurchaseOrderPaymentDialog extends Serenity.EntityDialog<PurchaseOrderPaymentRow, any> {
        protected getFormKey() { return PurchaseOrderPaymentForm.formKey; }
        protected getIdProperty() { return PurchaseOrderPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderPaymentRow.localTextPrefix; }
        protected getService() { return PurchaseOrderPaymentService.baseUrl; }
        protected getDeletePermission() { return PurchaseOrderPaymentRow.deletePermission; }
        protected getInsertPermission() { return PurchaseOrderPaymentRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseOrderPaymentRow.updatePermission; }

        protected form = new PurchaseOrderPaymentForm(this.idPrefix);

    }
}