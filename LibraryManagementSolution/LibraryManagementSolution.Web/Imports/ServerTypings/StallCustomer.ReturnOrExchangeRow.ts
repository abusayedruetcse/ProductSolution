namespace LibraryManagementSolution.StallCustomer {
    export interface ReturnOrExchangeRow {
        ProductSaleId?: number;
        TokenNo?: string;
        CustomerId?: number;
        SaleDate?: string;
        SubTotal?: number;
        ServiceCharge?: number;
        Other?: number;
        InitialLess?: number;
        TotalLess?: number;
        InitialPaid?: number;
        TotalPaid?: number;
        TotalPayable?: number;
        RemainingDue?: number;
        PreparedBy?: number;
        Status?: Common.SaleStatus;
        CustomerName?: string;
        CustomerNameBn?: string;
        CustomerContactNo?: string;
        CustomerMail?: string;
        CustomerAbout?: string;
        ReturnBookList?: ProductSaleDetailRow[];
        OrderDetailList?: ProductSaleDetailRow[];
        OrderPayList?: ProductSalePaymentRow[];
        CashBackList?: ProductSalePaymentRow[];
        OrderLessList?: ProductSalePaymentRow[];
        BookId2?: number;
        Quantity2?: number;
        UnitPrice2?: number;
        Discount2?: number;
        LineTotal2?: number;
        AddOrderDetail2?: string;
        BookId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        LineTotal?: number;
        AddOrderDetail?: string;
        PaymentDate?: string;
        PaymentAmount?: number;
        PaymentType?: Common.PurchasePaymentType;
        AddPay?: string;
    }

    export namespace ReturnOrExchangeRow {
        export const idProperty = 'ProductSaleId';
        export const nameProperty = 'TokenNo';
        export const localTextPrefix = 'StallCustomer.ReturnOrExchange';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProductSaleId = "ProductSaleId",
            TokenNo = "TokenNo",
            CustomerId = "CustomerId",
            SaleDate = "SaleDate",
            SubTotal = "SubTotal",
            ServiceCharge = "ServiceCharge",
            Other = "Other",
            InitialLess = "InitialLess",
            TotalLess = "TotalLess",
            InitialPaid = "InitialPaid",
            TotalPaid = "TotalPaid",
            TotalPayable = "TotalPayable",
            RemainingDue = "RemainingDue",
            PreparedBy = "PreparedBy",
            Status = "Status",
            CustomerName = "CustomerName",
            CustomerNameBn = "CustomerNameBn",
            CustomerContactNo = "CustomerContactNo",
            CustomerMail = "CustomerMail",
            CustomerAbout = "CustomerAbout",
            ReturnBookList = "ReturnBookList",
            OrderDetailList = "OrderDetailList",
            OrderPayList = "OrderPayList",
            CashBackList = "CashBackList",
            OrderLessList = "OrderLessList",
            BookId2 = "BookId2",
            Quantity2 = "Quantity2",
            UnitPrice2 = "UnitPrice2",
            Discount2 = "Discount2",
            LineTotal2 = "LineTotal2",
            AddOrderDetail2 = "AddOrderDetail2",
            BookId = "BookId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            LineTotal = "LineTotal",
            AddOrderDetail = "AddOrderDetail",
            PaymentDate = "PaymentDate",
            PaymentAmount = "PaymentAmount",
            PaymentType = "PaymentType",
            AddPay = "AddPay"
        }
    }
}
