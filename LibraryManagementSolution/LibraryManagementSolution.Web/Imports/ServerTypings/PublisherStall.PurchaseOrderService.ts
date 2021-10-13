namespace LibraryManagementSolution.PublisherStall {
    export namespace PurchaseOrderService {
        export const baseUrl = 'PublisherStall/PurchaseOrder';

        export declare function Create(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PublisherStall/PurchaseOrder/Create",
            Update = "PublisherStall/PurchaseOrder/Update",
            Delete = "PublisherStall/PurchaseOrder/Delete",
            Retrieve = "PublisherStall/PurchaseOrder/Retrieve",
            List = "PublisherStall/PurchaseOrder/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PurchaseOrderService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
