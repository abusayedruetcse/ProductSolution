namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderDetailListForm {
        BookId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.IntegerEditor;
        LineTotal: Serenity.DecimalEditor;
    }

    export class PurchaseOrderDetailListForm extends Serenity.PrefixedContext {
        static formKey = 'PublisherStall.PurchaseOrderDetailList';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderDetailListForm.init)  {
                PurchaseOrderDetailListForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PurchaseOrderDetailListForm, [
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
