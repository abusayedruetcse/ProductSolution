namespace LibraryManagementSolution.AdminManagement {
    export interface CategoryForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        TopicId: Serenity.LookupEditor;
        SortOrder: Serenity.IntegerEditor;
    }

    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'AdminManagement.Category';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryForm.init)  {
                CategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(CategoryForm, [
                    'Name', w0,
                    'NameBn', w0,
                    'TopicId', w1,
                    'SortOrder', w2
                ]);
            }
        }
    }
}
