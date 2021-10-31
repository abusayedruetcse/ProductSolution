
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ReturnOrExchangeDialog extends Serenity.EntityDialog<ReturnOrExchangeRow, any> {
        protected getFormKey() { return ReturnOrExchangeForm.formKey; }
        protected getIdProperty() { return ReturnOrExchangeRow.idProperty; }
        protected getLocalTextPrefix() { return ReturnOrExchangeRow.localTextPrefix; }
        protected getNameProperty() { return ReturnOrExchangeRow.nameProperty; }
        protected getService() { return ReturnOrExchangeService.baseUrl; }
        protected getDeletePermission() { return ReturnOrExchangeRow.deletePermission; }
        protected getInsertPermission() { return ReturnOrExchangeRow.insertPermission; }
        protected getUpdatePermission() { return ReturnOrExchangeRow.updatePermission; }
        protected nextId = 0;
        protected sum = 0;
        protected form = new ReturnOrExchangeForm(this.idPrefix);

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

            this.form.AddOrderDetail2.getGridField().find('.caption').text('');
            this.form.AddOrderDetail2.getGridField().find('.editor').hide();
            $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                .insertAfter(this.form.AddOrderDetail2.element)
                .click(() => this.addOrderDetail2());

        }

        protected onDialogOpen() {
            super.onDialogOpen();

            //initialization
            this.form.PaymentAmount.value = 0;
            this.form.PaymentDate.value = new Date().toDateString();
            this.form.PaymentType.value = String(Common.PurchasePaymentType.Pay);

            this.form.Quantity.value = 1;
            this.form.Discount.value = 0;

            this.form.Quantity2.value = 1;
            this.form.Discount2.value = 0;
            //calculation
            this.calculateSubTotal();
            this.calculateTotalPaid();
            this.calculateTotalLess();
            this.calculateTotalPayable();

            this.nextId = this.maxValue(
                this.maxValue(this.form.OrderDetailList.value.length, this.form.ReturnBookList.value.length),
                this.maxValue(this.form.OrderPayList.value.length, this.form.OrderLessList.value.length)
            );
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            if (this.form.Status.value == undefined || this.form.Status.value == '') {
                this.form.Status.value = String(Common.PurchaseStatus.Draft);
            }
            if (this.form.Status.value == String(Common.PurchaseStatus.Draft)) {
                q.hideEditorCategory(this.form.PaymentDate);
            } else {
                q.readOnlyEditor(this.form.TokenNo);
                q.readOnlyEditor(this.form.CustomerId);
                q.readOnlyEditor(this.form.SaleDate);
                q.hideEditorCategory(this.form.BookId);
                q.readOnlyEditor(this.form.OrderDetailList);
                q.readOnlyEditor(this.form.ServiceCharge);
                q.readOnlyEditor(this.form.Other);
                q.hideField(this.form.InitialLess);
                q.hideField(this.form.InitialPaid);

            }

            // validation checking for DetailList
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

            // validation checking for ReturnList
            this.form.BookId2.changeSelect2(e => {
                var bookId = Q.toId(this.form.BookId2.value);
                if (bookId != null) {
                    this.form.UnitPrice2.value = AdminManagement.BookRow.getLookup().itemById[bookId].Price;
                }
                this.calculateLineTotal2();
            });

            this.form.Discount2.addValidationRule(this.uniqueName, e => {
                if (this.form.Discount2.value > 100) {
                    return "Discount can't be higher than 100% !";
                }
            });

            this.form.UnitPrice2.changeSelect2(e => {
                this.calculateLineTotal2();
            });

            this.form.Quantity2.changeSelect2(e => {
                this.calculateLineTotal2();
            });

            this.form.Discount2.change(e => {
                this.calculateLineTotal2();
            });

            //Details List sum
            (this.form.OrderDetailList.view as any).onRowsOrCountChanged.subscribe(() => {
                this.calculateSubTotal();
            });

            (this.form.OrderDetailList.view as any).onDataChanged.subscribe(() => {
                this.calculateSubTotal();
            });

            (this.form.OrderPayList.view as any).onDataChanged.subscribe(() => {
                this.calculateTotalPaid();
            });

            (this.form.OrderLessList.view as any).onDataChanged.subscribe(() => {
                this.calculateTotalLess();
            });

            //Change Event            
            this.form.ServiceCharge.change(e => {
                this.calculateTotalPayable();
            });
            this.form.Other.change(e => {
                this.calculateTotalPayable();
            });
            this.form.InitialLess.change(e => {
                this.form.TotalLess.value = this.form.InitialLess.value;
                this.calculateTotalPayable();
            });

            this.form.InitialPaid.change(e => {
                this.form.TotalPaid.value = this.form.InitialPaid.value;
                this.calculateRemainingDue();
            });
        }
        private calculateLineTotal() {
            this.form.LineTotal.value = this.form.UnitPrice.value * this.form.Quantity.value * (1 - this.form.Discount.value / 100);
        }
        private calculateLineTotal2() {
            this.form.LineTotal2.value = this.form.UnitPrice2.value * this.form.Quantity2.value * (1 - this.form.Discount2.value / 100);
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
                this.nextId++;
                items.push({
                    __id: "``" + this.nextId,
                    PaymentDate: this.form.PaymentDate.value,
                    PaymentAmount: this.form.PaymentAmount.value
                });
                this.form.OrderPayList.setItems(items);
            } else {
                var items = this.form.OrderLessList.getItems();
                this.nextId++;
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
            this.nextId++;
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
        private addOrderDetail2() {

            if (this.form.BookId2.value == '' || this.form.BookId2.value == null) {
                Q.warning("Please select any book!");
                return;
            }

            var sameProduct = Q.tryFirst(this.form.ReturnBookList.getItems(), x => x.BookId === Q.toId(this.form.BookId2.value));
            if (sameProduct) {
                Q.alert('This product is already in order details!');
                return;
            }

            if (this.form.Discount2.value > 100) {
                Q.alert("Discount can't be higher than 100 % !");
                return;
            }

            var items = this.form.ReturnBookList.getItems();
            this.nextId++;
            items.push({
                __id: "``" + this.nextId,
                BookId: Q.toId(this.form.BookId2.value),
                Quantity: this.form.Quantity2.value,
                Discount: this.form.Discount2.value || 0,
                UnitPrice: this.form.UnitPrice2.value,
                LineTotal: this.form.LineTotal2.value,
                BookNameBn: AdminManagement.BookRow.getLookup().itemById[this.form.BookId2.value].NameBn
            });
            this.form.ReturnBookList.setItems(items);

            this.form.BookId2.value = null;
            this.form.Quantity2.value = 1;
            this.form.Discount2.value = 0;
            this.form.UnitPrice2.value = 0;
            this.form.LineTotal2.value = 0;
        }
        private maxValue(a: number, b: number): number {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        }
        private calculateSubTotal() {
            this.sum = 0;
            for (var k of this.form.OrderDetailList.getItems()) {
                this.sum += k.LineTotal || 0;
            }
            this.form.SubTotal.value = this.sum;
            this.calculateTotalPayable();
        }
        private calculateTotalPaid() {
            this.sum = 0;
            for (var k of this.form.OrderPayList.getItems()) {
                this.sum += k.PaymentAmount || 0;
            }
            this.form.TotalPaid.value = this.form.InitialPaid.value + this.sum;
            this.calculateRemainingDue();
        }
        private calculateTotalLess() {
            this.sum = 0;
            for (var k of this.form.OrderLessList.getItems()) {
                this.sum += k.PaymentAmount || 0;
            }
            this.form.TotalLess.value = this.form.InitialLess.value + this.sum;
            this.calculateTotalPayable();
        }
        private calculateTotalPayable() {
            this.sum = 0;
            this.sum = this.form.SubTotal.value
                + this.form.ServiceCharge.value
                + this.form.Other.value
                - this.form.TotalLess.value
            this.form.TotalPayable.value = this.sum;
            this.calculateRemainingDue();
        }
        private calculateRemainingDue() {
            this.sum = this.form.TotalPayable.value - this.form.TotalPaid.value;
            this.form.RemainingDue.value = this.sum;
        }
    }
}