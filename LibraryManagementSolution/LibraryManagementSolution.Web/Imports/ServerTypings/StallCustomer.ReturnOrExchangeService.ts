namespace LibraryManagementSolution.StallCustomer {
    export namespace ReturnOrExchangeService {
        export const baseUrl = 'StallCustomer/ReturnOrExchange';

        export declare function Create(request: Serenity.SaveRequest<ReturnOrExchangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ReturnOrExchangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReturnOrExchangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReturnOrExchangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "StallCustomer/ReturnOrExchange/Create",
            Update = "StallCustomer/ReturnOrExchange/Update",
            Delete = "StallCustomer/ReturnOrExchange/Delete",
            Retrieve = "StallCustomer/ReturnOrExchange/Retrieve",
            List = "StallCustomer/ReturnOrExchange/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ReturnOrExchangeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
