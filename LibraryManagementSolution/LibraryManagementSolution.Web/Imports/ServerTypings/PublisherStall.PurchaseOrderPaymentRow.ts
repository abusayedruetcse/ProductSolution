namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderPaymentRow {
        PurchaseOrderPaymentId?: number;
        __id?: string;
        PurchaseOrderId?: number;
        PaymentDate?: string;
        PaymentAmount?: number;
        PaymentType?: Common.PurchasePaymentType;
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
            __id = "__id",
            PurchaseOrderId = "PurchaseOrderId",
            PaymentDate = "PaymentDate",
            PaymentAmount = "PaymentAmount",
            PaymentType = "PaymentType"
        }
    }
}
