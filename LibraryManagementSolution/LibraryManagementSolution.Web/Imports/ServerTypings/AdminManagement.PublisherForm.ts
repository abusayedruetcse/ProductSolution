namespace LibraryManagementSolution.AdminManagement {
    export interface PublisherForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        ContactNo: Serenity.StringEditor;
        Mail: Serenity.EmailEditor;
        StartDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class PublisherForm extends Serenity.PrefixedContext {
        static formKey = 'AdminManagement.Publisher';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PublisherForm.init)  {
                PublisherForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(PublisherForm, [
                    'Name', w0,
                    'NameBn', w0,
                    'ContactNo', w0,
                    'Mail', w1,
                    'StartDate', w2,
                    'Description', w3
                ]);
            }
        }
    }
}
