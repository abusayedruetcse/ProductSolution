namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderForm {
        TokenNo: Serenity.StringEditor;
        PublisherId: Serenity.LookupEditor;
        OrderDate: Serenity.DateEditor;
        OrderDetailList: PurchaseOrderDetailListEditor;
        SubTotal: Serenity.DecimalEditor;
        ServiceCharge: Serenity.DecimalEditor;
        Other: Serenity.DecimalEditor;
        InitialLess: Serenity.DecimalEditor;
        InitialPaid: Serenity.DecimalEditor;
        TotalPayable: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
    }

    export class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'PublisherStall.PurchaseOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderForm.init)  {
                PurchaseOrderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = PurchaseOrderDetailListEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.EnumEditor;

                Q.initFormType(PurchaseOrderForm, [
                    'TokenNo', w0,
                    'PublisherId', w1,
                    'OrderDate', w2,
                    'OrderDetailList', w3,
                    'SubTotal', w4,
                    'ServiceCharge', w4,
                    'Other', w4,
                    'InitialLess', w4,
                    'InitialPaid', w4,
                    'TotalPayable', w4,
                    'Status', w5
                ]);
            }
        }
    }
}
