namespace LibraryManagementSolution.AdminManagement {
    export interface EmployeeForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        ContactNo: Serenity.StringEditor;
        Mail: Serenity.EmailEditor;
        BirthDate: Serenity.DateEditor;
        About: Serenity.TextAreaEditor;
    }

    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'AdminManagement.Employee';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeForm.init)  {
                EmployeeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(EmployeeForm, [
                    'Name', w0,
                    'NameBn', w0,
                    'ContactNo', w0,
                    'Mail', w1,
                    'BirthDate', w2,
                    'About', w3
                ]);
            }
        }
    }
}
