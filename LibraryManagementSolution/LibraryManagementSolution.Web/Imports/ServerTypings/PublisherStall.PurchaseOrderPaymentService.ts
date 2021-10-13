namespace LibraryManagementSolution.PublisherStall {
    export namespace PurchaseOrderPaymentService {
        export const baseUrl = 'PublisherStall/PurchaseOrderPayment';

        export declare function Create(request: Serenity.SaveRequest<PurchaseOrderPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchaseOrderPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PublisherStall/PurchaseOrderPayment/Create",
            Update = "PublisherStall/PurchaseOrderPayment/Update",
            Delete = "PublisherStall/PurchaseOrderPayment/Delete",
            Retrieve = "PublisherStall/PurchaseOrderPayment/Retrieve",
            List = "PublisherStall/PurchaseOrderPayment/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PurchaseOrderPaymentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
