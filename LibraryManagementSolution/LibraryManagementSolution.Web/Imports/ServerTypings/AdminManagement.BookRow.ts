namespace LibraryManagementSolution.AdminManagement {
    export interface BookRow {
        BookId?: number;
        Name?: string;
        NameBn?: string;
        AuthorId?: number;
        TranslatorId?: number;
        PublisherId?: number;
        TopicId?: number;
        CategoryId?: number;
        Edition?: string;
        NumberOfPages?: number;
        CountryId?: number;
        LanguageId?: number;
        Summary?: string;
        CoverImage?: string;
        PreviewAttachment?: string;
        Price?: number;
        Discount?: number;
        Availability?: number;
        SortOrder?: number;
        LookupText?: string;
        AuthorName?: string;
        AuthorNameBn?: string;
        TranslatorName?: string;
        TranslatorNameBn?: string;
        PublisherName?: string;
        PublisherNameBn?: string;
        TopicName?: string;
        TopicNameBn?: string;
        CategoryName?: string;
        CategoryNameBn?: string;
        CategoryTopicId?: number;
        CategorySortOrder?: number;
    }

    export namespace BookRow {
        export const idProperty = 'BookId';
        export const nameProperty = 'LookupText';
        export const localTextPrefix = 'AdminManagement.Book';
        export const lookupKey = 'AdminManagement.Book';

        export function getLookup(): Q.Lookup<BookRow> {
            return Q.getLookup<BookRow>('AdminManagement.Book');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BookId = "BookId",
            Name = "Name",
            NameBn = "NameBn",
            AuthorId = "AuthorId",
            TranslatorId = "TranslatorId",
            PublisherId = "PublisherId",
            TopicId = "TopicId",
            CategoryId = "CategoryId",
            Edition = "Edition",
            NumberOfPages = "NumberOfPages",
            CountryId = "CountryId",
            LanguageId = "LanguageId",
            Summary = "Summary",
            CoverImage = "CoverImage",
            PreviewAttachment = "PreviewAttachment",
            Price = "Price",
            Discount = "Discount",
            Availability = "Availability",
            SortOrder = "SortOrder",
            LookupText = "LookupText",
            AuthorName = "AuthorName",
            AuthorNameBn = "AuthorNameBn",
            TranslatorName = "TranslatorName",
            TranslatorNameBn = "TranslatorNameBn",
            PublisherName = "PublisherName",
            PublisherNameBn = "PublisherNameBn",
            TopicName = "TopicName",
            TopicNameBn = "TopicNameBn",
            CategoryName = "CategoryName",
            CategoryNameBn = "CategoryNameBn",
            CategoryTopicId = "CategoryTopicId",
            CategorySortOrder = "CategorySortOrder"
        }
    }
}
