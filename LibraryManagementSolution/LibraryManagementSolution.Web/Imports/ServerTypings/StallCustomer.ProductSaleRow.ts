namespace LibraryManagementSolution.StallCustomer {
    export interface ProductSaleRow {
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
        OrderDetailList?: ProductSaleDetailRow[];
        OrderPayList?: ProductSalePaymentRow[];
        OrderLessList?: ProductSalePaymentRow[];
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

    export namespace ProductSaleRow {
        export const idProperty = 'ProductSaleId';
        export const nameProperty = 'TokenNo';
        export const localTextPrefix = 'StallCustomer.ProductSale';
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
            OrderDetailList = "OrderDetailList",
            OrderPayList = "OrderPayList",
            OrderLessList = "OrderLessList",
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
