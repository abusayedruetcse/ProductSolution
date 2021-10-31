namespace LibraryManagementSolution.StallCustomer {
    export interface CustomerRow {
        CustomerId?: number;
        Name?: string;
        NameBn?: string;
        ContactNo?: string;
        Mail?: string;
        About?: string;
        LookupText?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'LookupText';
        export const localTextPrefix = 'StallCustomer.Customer';
        export const lookupKey = 'StallCustomer.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('StallCustomer.Customer');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            Name = "Name",
            NameBn = "NameBn",
            ContactNo = "ContactNo",
            Mail = "Mail",
            About = "About",
            LookupText = "LookupText"
        }
    }
}
