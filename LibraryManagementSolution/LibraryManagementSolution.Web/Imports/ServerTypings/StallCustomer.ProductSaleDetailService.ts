namespace LibraryManagementSolution.StallCustomer {
    export namespace ProductSaleDetailService {
        export const baseUrl = 'StallCustomer/ProductSaleDetail';

        export declare function Create(request: Serenity.SaveRequest<ProductSaleDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProductSaleDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductSaleDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductSaleDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "StallCustomer/ProductSaleDetail/Create",
            Update = "StallCustomer/ProductSaleDetail/Update",
            Delete = "StallCustomer/ProductSaleDetail/Delete",
            Retrieve = "StallCustomer/ProductSaleDetail/Retrieve",
            List = "StallCustomer/ProductSaleDetail/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProductSaleDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
