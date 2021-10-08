namespace LibraryManagementSolution.AdminManagement {
    export interface BookForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        AuthorId: Serenity.LookupEditor;
        TranslatorId: Serenity.LookupEditor;
        PublisherId: Serenity.LookupEditor;
        TopicId: Serenity.LookupEditor;
        CategoryId: Serenity.LookupEditor;
        Edition: Serenity.StringEditor;
        NumberOfPages: Serenity.IntegerEditor;
        CountryId: Serenity.LookupEditor;
        LanguageId: Serenity.LookupEditor;
        Summary: Serenity.TextAreaEditor;
        CoverImage: Serenity.ImageUploadEditor;
        PreviewAttachment: Serenity.ImageUploadEditor;
        Price: Serenity.DecimalEditor;
        Discount: Serenity.IntegerEditor;
        Availability: Serenity.IntegerEditor;
        SortOrder: Serenity.IntegerEditor;
    }

    export class BookForm extends Serenity.PrefixedContext {
        static formKey = 'AdminManagement.Book';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BookForm.init)  {
                BookForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.ImageUploadEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(BookForm, [
                    'Name', w0,
                    'NameBn', w0,
                    'AuthorId', w1,
                    'TranslatorId', w1,
                    'PublisherId', w1,
                    'TopicId', w1,
                    'CategoryId', w1,
                    'Edition', w0,
                    'NumberOfPages', w2,
                    'CountryId', w1,
                    'LanguageId', w1,
                    'Summary', w3,
                    'CoverImage', w4,
                    'PreviewAttachment', w4,
                    'Price', w5,
                    'Discount', w2,
                    'Availability', w2,
                    'SortOrder', w2
                ]);
            }
        }
    }
}
