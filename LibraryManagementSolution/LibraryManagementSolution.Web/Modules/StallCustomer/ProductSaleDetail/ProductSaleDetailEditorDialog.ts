
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()
    export class ProductSaleDetailEditorDialog extends Serenity.Extensions.GridEditorDialog<ProductSaleDetailRow> {
        protected getFormKey() { return ProductSaleDetailForm.formKey; }
        protected getLocalTextPrefix() { return ProductSaleDetailRow.localTextPrefix; }

        protected form: ProductSaleDetailForm;
        constructor() {
            super();
            this.form = new ProductSaleDetailForm(this.idPrefix);
            
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();            

            this.form.BookId.changeSelect2(e => {
                var bookId = Q.toId(this.form.BookId.value);
                if (bookId != null) {
                    this.form.UnitPrice.value = AdminManagement.BookRow.getLookup().itemById[bookId].Price;
                }
                this.calculateLineTotal();
            });

            this.form.Discount.addValidationRule(this.uniqueName, e => {
                if (this.form.Discount.value > 100) {
                    return "Discount can't be higher than 100% !";
                }
            });

            this.form.UnitPrice.changeSelect2(e => {
                this.calculateLineTotal();
            });

            this.form.Quantity.changeSelect2(e => {
                this.calculateLineTotal();
            });

            this.form.Discount.change(e => {                
                this.calculateLineTotal();
            });
        }
        private calculateLineTotal() {
            this.form.LineTotal.value = this.form.UnitPrice.value * this.form.Quantity.value * ( 1 - this.form.Discount.value / 100 );
        }        
    }
}