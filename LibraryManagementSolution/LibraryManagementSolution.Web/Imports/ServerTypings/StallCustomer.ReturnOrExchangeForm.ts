namespace LibraryManagementSolution.StallCustomer {
    export interface ReturnOrExchangeForm {
        TokenNo: Serenity.StringEditor;
        CustomerId: Serenity.LookupEditor;
        SaleDate: Serenity.DateEditor;
        BookId2: Serenity.LookupEditor;
        Quantity2: Serenity.IntegerEditor;
        Discount2: Serenity.IntegerEditor;
        UnitPrice2: Serenity.DecimalEditor;
        AddOrderDetail2: Serenity.StringEditor;
        LineTotal2: Serenity.DecimalEditor;
        ReturnBookList: ProductSaleDetailEditor;
        BookId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        AddOrderDetail: Serenity.StringEditor;
        LineTotal: Serenity.DecimalEditor;
        OrderDetailList: ProductSaleDetailEditor;
        SubTotal: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
        ServiceCharge: Serenity.DecimalEditor;
        Other: Serenity.DecimalEditor;
        InitialLess: Serenity.DecimalEditor;
        TotalLess: Serenity.DecimalEditor;
        TotalPayable: Serenity.DecimalEditor;
        InitialPaid: Serenity.DecimalEditor;
        TotalPaid: Serenity.DecimalEditor;
        RemainingDue: Serenity.DecimalEditor;
        PaymentDate: Serenity.DateEditor;
        PaymentAmount: Serenity.DecimalEditor;
        PaymentType: Serenity.EnumEditor;
        AddPay: Serenity.StringEditor;
        OrderPayList: ProductSalePaymentEditor;
        CashBackList: ProductSalePaymentEditor;
        OrderLessList: ProductSalePaymentEditor;
        PreparedBy: Serenity.StringEditor;
    }

    export class ReturnOrExchangeForm extends Serenity.PrefixedContext {
        static formKey = 'StallCustomer.ReturnOrExchange';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReturnOrExchangeForm.init)  {
                ReturnOrExchangeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = ProductSaleDetailEditor;
                var w6 = s.EnumEditor;
                var w7 = ProductSalePaymentEditor;

                Q.initFormType(ReturnOrExchangeForm, [
                    'TokenNo', w0,
                    'CustomerId', w1,
                    'SaleDate', w2,
                    'BookId2', w1,
                    'Quantity2', w3,
                    'Discount2', w3,
                    'UnitPrice2', w4,
                    'AddOrderDetail2', w0,
                    'LineTotal2', w4,
                    'ReturnBookList', w5,
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
                    'TotalPayable', w4,
                    'InitialPaid', w4,
                    'TotalPaid', w4,
                    'RemainingDue', w4,
                    'PaymentDate', w2,
                    'PaymentAmount', w4,
                    'PaymentType', w6,
                    'AddPay', w0,
                    'OrderPayList', w7,
                    'CashBackList', w7,
                    'OrderLessList', w7,
                    'PreparedBy', w0
                ]);
            }
        }
    }
}
