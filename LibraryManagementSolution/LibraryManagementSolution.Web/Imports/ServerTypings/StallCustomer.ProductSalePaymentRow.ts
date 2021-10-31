namespace LibraryManagementSolution.StallCustomer {
    export interface ProductSalePaymentRow {
        ProductSalePaymentId?: number;
        __id?: string;
        ProductSaleId?: number;
        PaymentDate?: string;
        PaymentAmount?: number;
        PaymentType?: Common.SalePaymentType;
    }

    export namespace ProductSalePaymentRow {
        export const idProperty = 'ProductSalePaymentId';
        export const localTextPrefix = 'StallCustomer.ProductSalePayment';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProductSalePaymentId = "ProductSalePaymentId",
            __id = "__id",
            ProductSaleId = "ProductSaleId",
            PaymentDate = "PaymentDate",
            PaymentAmount = "PaymentAmount",
            PaymentType = "PaymentType"
        }
    }
}
