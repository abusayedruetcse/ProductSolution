
namespace LibraryManagementSolution.PublisherStall {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        protected getFormKey() { return PurchaseOrderForm.formKey; }
        protected getIdProperty() { return PurchaseOrderRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseOrderRow.nameProperty; }
        protected getService() { return PurchaseOrderService.baseUrl; }
        protected getDeletePermission() { return PurchaseOrderRow.deletePermission; }
        protected getInsertPermission() { return PurchaseOrderRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseOrderRow.updatePermission; }
        protected nextId = 0;
        protected sum = 0;
        protected form = new PurchaseOrderForm(this.idPrefix);

        constructor() {
            super();
            
            this.form.AddPay.getGridField().find('.caption').text('');
            this.form.AddPay.getGridField().find('.editor').hide();
            $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                .insertAfter(this.form.AddPay.element) 
                .click(() => this.addPayment());

            this.form.AddOrderDetail.getGridField().find('.caption').text('');
            this.form.AddOrderDetail.getGridField().find('.editor').hide();
            $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                .insertAfter(this.form.AddOrderDetail.element)
                .click(() => this.addOrderDetail());
            
        }

        protected onDialogOpen() {
            super.onDialogOpen();

            //initialization
            this.form.PaymentAmount.value = 0;
            this.form.PaymentDate.value = new Date().toDateString();
            this.form.PaymentType.value = String(Common.PurchasePaymentType.Pay);

            this.form.Quantity.value = 1;
            this.form.Discount.value = 0;

            //calculation
            this.sum = 0;
            this.form.OrderDetailList.value.forEach(o => {
                this.sum += o.LineTotal;
            });
            this.form.SubTotal.value = this.sum;

            this.sum = 0;
            this.form.OrderPayList.value.forEach(o => {
                this.sum += o.PaymentAmount;
            });
            this.form.TotalPaid.value = this.form.InitialPaid.value + this.sum;

            this.sum = 0;
            this.form.OrderLessList.value.forEach(o => {
                this.sum += o.PaymentAmount;
            });
            this.form.TotalLess.value = this.form.InitialLess.value + this.sum;

            this.sum = this.form.SubTotal.value
                + this.form.ServiceCharge.value
                + this.form.Other.value
                - this.form.TotalLess.value
            this.form.TotalPayable.value = this.sum;

            this.sum = this.form.TotalPayable.value - this.form.TotalPaid.value;
            this.form.RemainingDue.value = this.sum;

            this.nextId = this.maxValue(this.form.OrderDetailList.value.length,
                this.maxValue(this.form.OrderPayList.value.length, this.form.OrderLessList.value.length)
            );
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
            this.form.LineTotal.value = this.form.UnitPrice.value * this.form.Quantity.value * (1 - this.form.Discount.value / 100);
        }
        private addPayment() {

            if (this.form.PaymentType.value == '' || this.form.PaymentType.value == null) {
                Q.warning("Please select any payment type!");
                return;
            }
            if (this.form.PaymentAmount.value <= 0) {
                Q.warning("Please add amount");
                return;
            }
            if (this.form.PaymentType.value == String(Common.PurchasePaymentType.Pay)) {
                var items = this.form.OrderPayList.getItems();
                this.nextId ++;
                items.push({
                    __id: "``" + this.nextId,
                    PaymentDate: this.form.PaymentDate.value,
                    PaymentAmount: this.form.PaymentAmount.value
                });
                this.form.OrderPayList.setItems(items);
            } else {
                var items = this.form.OrderLessList.getItems();
                this.nextId ++;
                items.push({
                    __id: "``" + this.nextId,
                    PaymentDate: this.form.PaymentDate.value,
                    PaymentAmount: this.form.PaymentAmount.value
                });
                this.form.OrderLessList.setItems(items);
            }

            this.form.PaymentAmount.value = 0;
            this.form.PaymentDate.value = new Date().toDateString();
            this.form.PaymentType.value = String(Common.PurchasePaymentType.Pay);
        }
        private addOrderDetail() {

            if (this.form.BookId.value == '' || this.form.BookId.value == null) {
                Q.warning("Please select any book!");
                return;
            }

            var sameProduct = Q.tryFirst(this.form.OrderDetailList.getItems(), x => x.BookId === Q.toId(this.form.BookId.value));
            if (sameProduct) {
                Q.alert('This product is already in order details!');
                return;
            }

            if (this.form.Discount.value > 100) {
                Q.alert("Discount can't be higher than 100 % !");
                return;
            }

            var items = this.form.OrderDetailList.getItems();
            this.nextId ++;
            items.push({
                __id: "``" + this.nextId,
                BookId: Q.toId(this.form.BookId.value),
                Quantity: this.form.Quantity.value,
                Discount: this.form.Discount.value || 0,
                UnitPrice: this.form.UnitPrice.value,
                LineTotal: this.form.LineTotal.value,
                BookNameBn: AdminManagement.BookRow.getLookup().itemById[this.form.BookId.value].NameBn
            });
            this.form.OrderDetailList.setItems(items);

            this.form.BookId.value = null;
            this.form.Quantity.value = 1;
            this.form.Discount.value = 0;
            this.form.UnitPrice.value = 0;
            this.form.LineTotal.value = 0;
        }
        private maxValue(a: number, b: number): number {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        }
    }
}