namespace LibraryManagementSolution.AdminManagement {
    export interface PublisherRow {
        PublisherId?: number;
        Name?: string;
        NameBn?: string;
        ContactNo?: string;
        Mail?: string;
        Description?: string;
        StartDate?: string;
    }

    export namespace PublisherRow {
        export const idProperty = 'PublisherId';
        export const nameProperty = 'NameBn';
        export const localTextPrefix = 'AdminManagement.Publisher';
        export const lookupKey = 'AdminManagement.Publisher';

        export function getLookup(): Q.Lookup<PublisherRow> {
            return Q.getLookup<PublisherRow>('AdminManagement.Publisher');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PublisherId = "PublisherId",
            Name = "Name",
            NameBn = "NameBn",
            ContactNo = "ContactNo",
            Mail = "Mail",
            Description = "Description",
            StartDate = "StartDate"
        }
    }
}
