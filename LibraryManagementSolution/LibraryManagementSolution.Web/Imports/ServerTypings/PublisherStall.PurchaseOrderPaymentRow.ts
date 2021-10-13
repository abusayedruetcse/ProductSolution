namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderPaymentRow {
        PurchaseOrderPaymentId?: number;
        PurchaseOrderId?: number;
        PaymentDate?: string;
        PaymentAmount?: number;
        PurchaseOrderTokenNo?: string;
        PurchaseOrderPublisherId?: number;
        PurchaseOrderOrderDate?: string;
        PurchaseOrderSubTotal?: number;
        PurchaseOrderServiceCharge?: number;
        PurchaseOrderOther?: number;
        PurchaseOrderInitialLess?: number;
        PurchaseOrderInitialPaid?: number;
        PurchaseOrderTotalPayable?: number;
        PurchaseOrderStatus?: number;
    }

    export namespace PurchaseOrderPaymentRow {
        export const idProperty = 'PurchaseOrderPaymentId';
        export const localTextPrefix = 'PublisherStall.PurchaseOrderPayment';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PurchaseOrderPaymentId = "PurchaseOrderPaymentId",
            PurchaseOrderId = "PurchaseOrderId",
            PaymentDate = "PaymentDate",
            PaymentAmount = "PaymentAmount",
            PurchaseOrderTokenNo = "PurchaseOrderTokenNo",
            PurchaseOrderPublisherId = "PurchaseOrderPublisherId",
            PurchaseOrderOrderDate = "PurchaseOrderOrderDate",
            PurchaseOrderSubTotal = "PurchaseOrderSubTotal",
            PurchaseOrderServiceCharge = "PurchaseOrderServiceCharge",
            PurchaseOrderOther = "PurchaseOrderOther",
            PurchaseOrderInitialLess = "PurchaseOrderInitialLess",
            PurchaseOrderInitialPaid = "PurchaseOrderInitialPaid",
            PurchaseOrderTotalPayable = "PurchaseOrderTotalPayable",
            PurchaseOrderStatus = "PurchaseOrderStatus"
        }
    }
}
