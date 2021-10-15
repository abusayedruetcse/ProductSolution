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
        InitialPaid?: number;
        TotalPayable?: number;
        Status?: Common.PurchaseStatus;
        PublisherName?: string;
        PublisherNameBn?: string;
        PublisherContactNo?: string;
        PublisherMail?: string;
        PublisherDescription?: string;
        PublisherStartDate?: string;
        OrderDetailList?: PurchaseOrderDetailListRow[];
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
            InitialPaid = "InitialPaid",
            TotalPayable = "TotalPayable",
            Status = "Status",
            PublisherName = "PublisherName",
            PublisherNameBn = "PublisherNameBn",
            PublisherContactNo = "PublisherContactNo",
            PublisherMail = "PublisherMail",
            PublisherDescription = "PublisherDescription",
            PublisherStartDate = "PublisherStartDate",
            OrderDetailList = "OrderDetailList"
        }
    }
}
