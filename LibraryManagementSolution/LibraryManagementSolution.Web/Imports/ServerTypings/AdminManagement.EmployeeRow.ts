namespace LibraryManagementSolution.AdminManagement {
    export interface EmployeeRow {
        EmployeeId?: number;
        Name?: string;
        NameBn?: string;
        ContactNo?: string;
        Mail?: string;
        About?: string;
        BirthDate?: string;
    }

    export namespace EmployeeRow {
        export const idProperty = 'EmployeeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'AdminManagement.Employee';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            EmployeeId = "EmployeeId",
            Name = "Name",
            NameBn = "NameBn",
            ContactNo = "ContactNo",
            Mail = "Mail",
            About = "About",
            BirthDate = "BirthDate"
        }
    }
}
