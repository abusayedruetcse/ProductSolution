namespace LibraryManagementSolution.StallCustomer {
    export interface ProductSalePaymentForm {
        ProductSaleId: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        PaymentAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
    }

    export class ProductSalePaymentForm extends Serenity.PrefixedContext {
        static formKey = 'StallCustomer.ProductSalePayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductSalePaymentForm.init)  {
                ProductSalePaymentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.EnumEditor;

                Q.initFormType(ProductSalePaymentForm, [
                    'ProductSaleId', w0,
                    'PaymentDate', w1,
                    'PaymentAmount', w2,
                    'PaymentType', w3
                ]);
            }
        }
    }
}
