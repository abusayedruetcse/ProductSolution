namespace LibraryManagementSolution.AdminManagement {
    export interface CountryForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        SortOrder: Serenity.IntegerEditor;
    }

    export class CountryForm extends Serenity.PrefixedContext {
        static formKey = 'AdminManagement.Country';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CountryForm.init)  {
                CountryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(CountryForm, [
                    'Name', w0,
                    'NameBn', w0,
                    'Code', w0,
                    'SortOrder', w1
                ]);
            }
        }
    }
}
