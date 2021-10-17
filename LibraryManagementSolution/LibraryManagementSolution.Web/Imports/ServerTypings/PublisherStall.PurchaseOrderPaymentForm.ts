namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderPaymentForm {
        PaymentDate: Serenity.DateEditor;
        PaymentAmount: Serenity.DecimalEditor;
    }

    export class PurchaseOrderPaymentForm extends Serenity.PrefixedContext {
        static formKey = 'PublisherStall.PurchaseOrderPayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderPaymentForm.init)  {
                PurchaseOrderPaymentForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(PurchaseOrderPaymentForm, [
                    'PaymentDate', w0,
                    'PaymentAmount', w1
                ]);
            }
        }
    }
}
