namespace LibraryManagementSolution.AdminManagement {
    export interface AuthorRow {
        AuthorId?: number;
        Name?: string;
        NameBn?: string;
        ContactNo?: string;
        Mail?: string;
        About?: string;
        BirthDate?: string;
        LookupText?: string;
    }

    export namespace AuthorRow {
        export const idProperty = 'AuthorId';
        export const nameProperty = 'LookupText';
        export const localTextPrefix = 'AdminManagement.Author';
        export const lookupKey = 'AdminManagement.Author';

        export function getLookup(): Q.Lookup<AuthorRow> {
            return Q.getLookup<AuthorRow>('AdminManagement.Author');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AuthorId = "AuthorId",
            Name = "Name",
            NameBn = "NameBn",
            ContactNo = "ContactNo",
            Mail = "Mail",
            About = "About",
            BirthDate = "BirthDate",
            LookupText = "LookupText"
        }
    }
}
