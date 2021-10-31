namespace LibraryManagementSolution.StallCustomer {
    export interface ProductSaleDetailRow {
        ProductSaleDetailId?: number;
        __id?: string;
        ProductSaleId?: number;
        BookId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        LineTotal?: number;
        BookName?: string;
        BookNameBn?: string;
    }

    export namespace ProductSaleDetailRow {
        export const idProperty = 'ProductSaleDetailId';
        export const localTextPrefix = 'StallCustomer.ProductSaleDetail';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProductSaleDetailId = "ProductSaleDetailId",
            __id = "__id",
            ProductSaleId = "ProductSaleId",
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
