namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderRow {
        PurchaseOrderId?: number;
        TokenNo?: string;
        PublisherId?: number;
        OrderDate?: string;
        SubTotal?: number;
        ServiceCharge?: number;
        Other?: number;
        InitialLess?: number;
        TotalLess?: number;
        InitialPaid?: number;
        TotalPaid?: number;
        TotalPayable?: number;
        RemainingDue?: number;
        Status?: Common.PurchaseStatus;
        PublisherName?: string;
        PublisherNameBn?: string;
        PublisherContactNo?: string;
        PublisherMail?: string;
        PublisherDescription?: string;
        PublisherStartDate?: string;
        OrderDetailList?: PurchaseOrderDetailListRow[];
        OrderPayList?: PurchaseOrderPaymentRow[];
        OrderLessList?: PurchaseOrderPaymentRow[];
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

    export namespace PurchaseOrderRow {
        export const idProperty = 'PurchaseOrderId';
        export const nameProperty = 'TokenNo';
        export const localTextPrefix = 'PublisherStall.PurchaseOrder';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PurchaseOrderId = "PurchaseOrderId",
            TokenNo = "TokenNo",
            PublisherId = "PublisherId",
            OrderDate = "OrderDate",
            SubTotal = "SubTotal",
            ServiceCharge = "ServiceCharge",
            Other = "Other",
            InitialLess = "InitialLess",
            TotalLess = "TotalLess",
            InitialPaid = "InitialPaid",
            TotalPaid = "TotalPaid",
            TotalPayable = "TotalPayable",
            RemainingDue = "RemainingDue",
            Status = "Status",
            PublisherName = "PublisherName",
            PublisherNameBn = "PublisherNameBn",
            PublisherContactNo = "PublisherContactNo",
            PublisherMail = "PublisherMail",
            PublisherDescription = "PublisherDescription",
            PublisherStartDate = "PublisherStartDate",
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
