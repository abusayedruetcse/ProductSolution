namespace LibraryManagementSolution.PublisherStall {
    export namespace PurchaseOrderDetailListService {
        export const baseUrl = 'PublisherStall/PurchaseOrderDetailList';

        export declare function Create(request: Serenity.SaveRequest<PurchaseOrderDetailListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchaseOrderDetailListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderDetailListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderDetailListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PublisherStall/PurchaseOrderDetailList/Create",
            Update = "PublisherStall/PurchaseOrderDetailList/Update",
            Delete = "PublisherStall/PurchaseOrderDetailList/Delete",
            Retrieve = "PublisherStall/PurchaseOrderDetailList/Retrieve",
            List = "PublisherStall/PurchaseOrderDetailList/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PurchaseOrderDetailListService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
