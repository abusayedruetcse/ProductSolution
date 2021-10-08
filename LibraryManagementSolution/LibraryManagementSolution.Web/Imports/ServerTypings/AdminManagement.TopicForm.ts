namespace LibraryManagementSolution.AdminManagement {
    export interface TopicForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
    }

    export class TopicForm extends Serenity.PrefixedContext {
        static formKey = 'AdminManagement.Topic';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TopicForm.init)  {
                TopicForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TopicForm, [
                    'Name', w0,
                    'NameBn', w0
                ]);
            }
        }
    }
}
