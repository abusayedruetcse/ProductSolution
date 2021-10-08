namespace LibraryManagementSolution.AdminManagement {
    export interface CountryRow {
        CountryId?: number;
        Name?: string;
        NameBn?: string;
        Code?: string;
        SortOrder?: number;
    }

    export namespace CountryRow {
        export const idProperty = 'CountryId';
        export const nameProperty = 'NameBn';
        export const localTextPrefix = 'AdminManagement.Country';
        export const lookupKey = 'AdminManagement.Country';

        export function getLookup(): Q.Lookup<CountryRow> {
            return Q.getLookup<CountryRow>('AdminManagement.Country');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CountryId = "CountryId",
            Name = "Name",
            NameBn = "NameBn",
            Code = "Code",
            SortOrder = "SortOrder"
        }
    }
}
