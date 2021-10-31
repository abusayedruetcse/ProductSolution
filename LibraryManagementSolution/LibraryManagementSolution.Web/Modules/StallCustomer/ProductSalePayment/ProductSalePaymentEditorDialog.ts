
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()    
    export class ProductSalePaymentEditorDialog extends Serenity.Extensions.GridEditorDialog<ProductSalePaymentRow> {
        protected getFormKey() { return ProductSalePaymentForm.formKey; }
        protected getLocalTextPrefix() { return ProductSalePaymentRow.localTextPrefix; }

        protected form: ProductSalePaymentForm;
        constructor() {
            super();
            this.form = new ProductSalePaymentForm(this.idPrefix);
            this.toolbar.findButton('.delete-button').remove();
        }

    }
}