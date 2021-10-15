namespace LibraryManagementSolution.AdminManagement {
    export interface LanguageRow {
        LanguageId?: number;
        Name?: string;
        NameBn?: string;
        Code?: string;
        SortOrder?: number;
    }

    export namespace LanguageRow {
        export const idProperty = 'LanguageId';
        export const nameProperty = 'NameBn';
        export const localTextPrefix = 'AdminManagement.Language';
        export const lookupKey = 'AdminManagement.Language';

        export function getLookup(): Q.Lookup<LanguageRow> {
            return Q.getLookup<LanguageRow>('AdminManagement.Language');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LanguageId = "LanguageId",
            Name = "Name",
            NameBn = "NameBn",
            Code = "Code",
            SortOrder = "SortOrder"
        }
    }
}
