namespace LibraryManagementSolution.AdminManagement {
    export interface TopicRow {
        TopicId?: number;
        Name?: string;
        NameBn?: string;
    }

    export namespace TopicRow {
        export const idProperty = 'TopicId';
        export const nameProperty = 'NameBn';
        export const localTextPrefix = 'AdminManagement.Topic';
        export const lookupKey = 'AdminManagement.Topic';

        export function getLookup(): Q.Lookup<TopicRow> {
            return Q.getLookup<TopicRow>('AdminManagement.Topic');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TopicId = "TopicId",
            Name = "Name",
            NameBn = "NameBn"
        }
    }
}
