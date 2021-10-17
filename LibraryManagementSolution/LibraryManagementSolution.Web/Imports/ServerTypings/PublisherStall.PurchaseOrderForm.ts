namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderForm {
        TokenNo: Serenity.StringEditor;
        PublisherId: Serenity.LookupEditor;
        OrderDate: Serenity.DateEditor;
        BookId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        AddOrderDetail: Serenity.StringEditor;
        LineTotal: Serenity.DecimalEditor;
        OrderDetailList: PurchaseOrderDetailListEditor;
        SubTotal: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
        ServiceCharge: Serenity.DecimalEditor;
        Other: Serenity.DecimalEditor;
        InitialLess: Serenity.DecimalEditor;
        TotalLess: Serenity.DecimalEditor;
        InitialPaid: Serenity.DecimalEditor;
        TotalPaid: Serenity.DecimalEditor;
        TotalPayable: Serenity.DecimalEditor;
        RemainingDue: Serenity.DecimalEditor;
        PaymentDate: Serenity.DateEditor;
        PaymentAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AddPay: Serenity.StringEditor;
        OrderPayList: PurchaseOrderPaymentEditor;
        OrderLessList: PurchaseOrderPaymentEditor;
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
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = PurchaseOrderDetailListEditor;
                var w6 = s.EnumEditor;
                var w7 = PurchaseOrderPaymentEditor;

                Q.initFormType(PurchaseOrderForm, [
                    'TokenNo', w0,
                    'PublisherId', w1,
                    'OrderDate', w2,
                    'BookId', w1,
                    'Quantity', w3,
                    'Discount', w3,
                    'UnitPrice', w4,
                    'AddOrderDetail', w0,
                    'LineTotal', w4,
                    'OrderDetailList', w5,
                    'SubTotal', w4,
                    'Status', w6,
                    'ServiceCharge', w4,
                    'Other', w4,
                    'InitialLess', w4,
                    'TotalLess', w4,
                    'InitialPaid', w4,
                    'TotalPaid', w4,
                    'TotalPayable', w4,
                    'RemainingDue', w4,
                    'PaymentDate', w2,
                    'PaymentAmount', w4,
                    'PaymentType', w6,
                    'AddPay', w0,
                    'OrderPayList', w7,
                    'OrderLessList', w7
                ]);
            }
        }
    }
}
