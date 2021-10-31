
namespace LibraryManagementSolution.PublisherStall {

    @Serenity.Decorators.registerClass()    
    export class PurchaseOrderPaymentEditorDialog extends Serenity.Extensions.GridEditorDialog<PurchaseOrderPaymentRow> {
        protected getFormKey() { return PurchaseOrderPaymentForm.formKey; }
        protected getLocalTextPrefix() { return PurchaseOrderPaymentRow.localTextPrefix; }

        protected form: PurchaseOrderPaymentForm;
        constructor() {
            super();
            this.form = new PurchaseOrderPaymentForm(this.idPrefix);
            this.toolbar.findButton('.delete-button').remove();
        }

    }
}