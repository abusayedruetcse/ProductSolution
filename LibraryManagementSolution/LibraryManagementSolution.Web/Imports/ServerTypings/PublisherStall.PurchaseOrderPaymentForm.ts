namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderPaymentForm {
        PurchaseOrderId: Serenity.StringEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PurchaseOrderPaymentForm, [
                    'PurchaseOrderId', w0,
                    'PaymentDate', w1,
                    'PaymentAmount', w2
                ]);
            }
        }
    }
}
