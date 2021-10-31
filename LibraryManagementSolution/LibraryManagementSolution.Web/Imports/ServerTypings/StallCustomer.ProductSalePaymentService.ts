﻿namespace LibraryManagementSolution.StallCustomer {
    export namespace ProductSalePaymentService {
        export const baseUrl = 'StallCustomer/ProductSalePayment';

        export declare function Create(request: Serenity.SaveRequest<ProductSalePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProductSalePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductSalePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductSalePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "StallCustomer/ProductSalePayment/Create",
            Update = "StallCustomer/ProductSalePayment/Update",
            Delete = "StallCustomer/ProductSalePayment/Delete",
            Retrieve = "StallCustomer/ProductSalePayment/Retrieve",
            List = "StallCustomer/ProductSalePayment/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProductSalePaymentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
