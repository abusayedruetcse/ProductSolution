namespace LibraryManagementSolution.PublisherStall {
    export interface PurchaseOrderDetailListRow {
        PurchaseOrderDetailListId?: number;
        PurchaseOrderId?: number;
        BookId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        LineTotal?: number;
        BookName?: string;
        BookNameBn?: string;
    }

    export namespace PurchaseOrderDetailListRow {
        export const idProperty = 'PurchaseOrderDetailListId';
        export const localTextPrefix = 'PublisherStall.PurchaseOrderDetailList';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PurchaseOrderDetailListId = "PurchaseOrderDetailListId",
            PurchaseOrderId = "PurchaseOrderId",
            BookId = "BookId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            LineTotal = "LineTotal",
            BookName = "BookName",
            BookNameBn = "BookNameBn"
        }
    }
}
