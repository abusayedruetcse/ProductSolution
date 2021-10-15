namespace LibraryManagementSolution.AdminManagement {
    export interface CategoryRow {
        CategoryId?: number;
        Name?: string;
        NameBn?: string;
        TopicId?: number;
        SortOrder?: number;
        TopicName?: string;
        TopicNameBn?: string;
    }

    export namespace CategoryRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'NameBn';
        export const localTextPrefix = 'AdminManagement.Category';
        export const lookupKey = 'AdminManagement.Category';

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('AdminManagement.Category');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            Name = "Name",
            NameBn = "NameBn",
            TopicId = "TopicId",
            SortOrder = "SortOrder",
            TopicName = "TopicName",
            TopicNameBn = "TopicNameBn"
        }
    }
}
