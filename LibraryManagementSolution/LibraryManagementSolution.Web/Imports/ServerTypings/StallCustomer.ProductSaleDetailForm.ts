namespace LibraryManagementSolution.StallCustomer {
    export interface ProductSaleDetailForm {
        BookId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.IntegerEditor;
        LineTotal: Serenity.DecimalEditor;
    }

    export class ProductSaleDetailForm extends Serenity.PrefixedContext {
        static formKey = 'StallCustomer.ProductSaleDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductSaleDetailForm.init)  {
                ProductSaleDetailForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ProductSaleDetailForm, [
                    'BookId', w0,
                    'Quantity', w1,
                    'UnitPrice', w2,
                    'Discount', w1,
                    'LineTotal', w2
                ]);
            }
        }
    }
}
