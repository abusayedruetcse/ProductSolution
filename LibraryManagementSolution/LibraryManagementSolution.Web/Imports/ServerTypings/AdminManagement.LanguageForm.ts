namespace LibraryManagementSolution.AdminManagement {
    export interface LanguageForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        SortOrder: Serenity.IntegerEditor;
    }

    export class LanguageForm extends Serenity.PrefixedContext {
        static formKey = 'AdminManagement.Language';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LanguageForm.init)  {
                LanguageForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(LanguageForm, [
                    'Name', w0,
                    'NameBn', w0,
                    'Code', w0,
                    'SortOrder', w1
                ]);
            }
        }
    }
}
