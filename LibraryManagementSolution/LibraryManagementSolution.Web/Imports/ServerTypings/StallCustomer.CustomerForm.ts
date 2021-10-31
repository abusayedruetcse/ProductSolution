namespace LibraryManagementSolution.StallCustomer {
    export interface CustomerForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        ContactNo: Serenity.StringEditor;
        Mail: Serenity.EmailEditor;
        About: Serenity.TextAreaEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'StallCustomer.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(CustomerForm, [
                    'Name', w0,
                    'NameBn', w0,
                    'ContactNo', w0,
                    'Mail', w1,
                    'About', w2
                ]);
            }
        }
    }
}
