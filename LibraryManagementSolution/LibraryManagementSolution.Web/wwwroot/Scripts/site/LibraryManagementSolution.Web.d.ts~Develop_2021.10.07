/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
/// <reference types="serenity.extensions" />
declare namespace LibraryManagementSolution.AdminManagement {
    class AuthorColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface AuthorForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        ContactNo: Serenity.StringEditor;
        Mail: Serenity.EmailEditor;
        BirthDate: Serenity.DateEditor;
        About: Serenity.TextAreaEditor;
    }
    class AuthorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface AuthorRow {
        AuthorId?: number;
        Name?: string;
        NameBn?: string;
        ContactNo?: string;
        Mail?: string;
        About?: string;
        BirthDate?: string;
    }
    namespace AuthorRow {
        const idProperty = "AuthorId";
        const nameProperty = "NameBn";
        const localTextPrefix = "AdminManagement.Author";
        const lookupKey = "AdminManagement.Author";
        function getLookup(): Q.Lookup<AuthorRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AuthorId = "AuthorId",
            Name = "Name",
            NameBn = "NameBn",
            ContactNo = "ContactNo",
            Mail = "Mail",
            About = "About",
            BirthDate = "BirthDate"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    namespace AuthorService {
        const baseUrl = "AdminManagement/Author";
        function Create(request: Serenity.SaveRequest<AuthorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AuthorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AuthorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AuthorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AdminManagement/Author/Create",
            Update = "AdminManagement/Author/Update",
            Delete = "AdminManagement/Author/Delete",
            Retrieve = "AdminManagement/Author/Retrieve",
            List = "AdminManagement/Author/List"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class BookColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface BookForm {
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
    class BookForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface BookRow {
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
        AuthorName?: string;
        AuthorNameBn?: string;
        AuthorContactNo?: string;
        AuthorMail?: string;
        AuthorAbout?: string;
        AuthorBirthDate?: string;
        TranslatorName?: string;
        TranslatorNameBn?: string;
        TranslatorContactNo?: string;
        TranslatorMail?: string;
        TranslatorAbout?: string;
        TranslatorBirthDate?: string;
        PublisherName?: string;
        PublisherNameBn?: string;
        PublisherContactNo?: string;
        PublisherMail?: string;
        PublisherDescription?: string;
        PublisherStartDate?: string;
        TopicName?: string;
        TopicNameBn?: string;
        CategoryName?: string;
        CategoryNameBn?: string;
        CategoryTopicId?: number;
        CategorySortOrder?: number;
    }
    namespace BookRow {
        const idProperty = "BookId";
        const nameProperty = "NameBn";
        const localTextPrefix = "AdminManagement.Book";
        const lookupKey = "AdminManagement.Book";
        function getLookup(): Q.Lookup<BookRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
            AuthorName = "AuthorName",
            AuthorNameBn = "AuthorNameBn",
            AuthorContactNo = "AuthorContactNo",
            AuthorMail = "AuthorMail",
            AuthorAbout = "AuthorAbout",
            AuthorBirthDate = "AuthorBirthDate",
            TranslatorName = "TranslatorName",
            TranslatorNameBn = "TranslatorNameBn",
            TranslatorContactNo = "TranslatorContactNo",
            TranslatorMail = "TranslatorMail",
            TranslatorAbout = "TranslatorAbout",
            TranslatorBirthDate = "TranslatorBirthDate",
            PublisherName = "PublisherName",
            PublisherNameBn = "PublisherNameBn",
            PublisherContactNo = "PublisherContactNo",
            PublisherMail = "PublisherMail",
            PublisherDescription = "PublisherDescription",
            PublisherStartDate = "PublisherStartDate",
            TopicName = "TopicName",
            TopicNameBn = "TopicNameBn",
            CategoryName = "CategoryName",
            CategoryNameBn = "CategoryNameBn",
            CategoryTopicId = "CategoryTopicId",
            CategorySortOrder = "CategorySortOrder"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    namespace BookService {
        const baseUrl = "AdminManagement/Book";
        function Create(request: Serenity.SaveRequest<BookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BookRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BookRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AdminManagement/Book/Create",
            Update = "AdminManagement/Book/Update",
            Delete = "AdminManagement/Book/Delete",
            Retrieve = "AdminManagement/Book/Retrieve",
            List = "AdminManagement/Book/List"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class CategoryColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface CategoryForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        TopicId: Serenity.LookupEditor;
        SortOrder: Serenity.IntegerEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface CategoryRow {
        CategoryId?: number;
        Name?: string;
        NameBn?: string;
        TopicId?: number;
        SortOrder?: number;
        TopicName?: string;
        TopicNameBn?: string;
    }
    namespace CategoryRow {
        const idProperty = "CategoryId";
        const nameProperty = "NameBn";
        const localTextPrefix = "AdminManagement.Category";
        const lookupKey = "AdminManagement.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CategoryId = "CategoryId",
            Name = "Name",
            NameBn = "NameBn",
            TopicId = "TopicId",
            SortOrder = "SortOrder",
            TopicName = "TopicName",
            TopicNameBn = "TopicNameBn"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    namespace CategoryService {
        const baseUrl = "AdminManagement/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AdminManagement/Category/Create",
            Update = "AdminManagement/Category/Update",
            Delete = "AdminManagement/Category/Delete",
            Retrieve = "AdminManagement/Category/Retrieve",
            List = "AdminManagement/Category/List"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class CountryColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface CountryForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        SortOrder: Serenity.IntegerEditor;
    }
    class CountryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface CountryRow {
        CountryId?: number;
        Name?: string;
        NameBn?: string;
        Code?: string;
        SortOrder?: number;
    }
    namespace CountryRow {
        const idProperty = "CountryId";
        const nameProperty = "NameBn";
        const localTextPrefix = "AdminManagement.Country";
        const lookupKey = "AdminManagement.Country";
        function getLookup(): Q.Lookup<CountryRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CountryId = "CountryId",
            Name = "Name",
            NameBn = "NameBn",
            Code = "Code",
            SortOrder = "SortOrder"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    namespace CountryService {
        const baseUrl = "AdminManagement/Country";
        function Create(request: Serenity.SaveRequest<CountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AdminManagement/Country/Create",
            Update = "AdminManagement/Country/Update",
            Delete = "AdminManagement/Country/Delete",
            Retrieve = "AdminManagement/Country/Retrieve",
            List = "AdminManagement/Country/List"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface LanguageForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        SortOrder: Serenity.IntegerEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface LanguageRow {
        LanguageId?: number;
        Name?: string;
        NameBn?: string;
        Code?: string;
        SortOrder?: number;
    }
    namespace LanguageRow {
        const idProperty = "LanguageId";
        const nameProperty = "NameBn";
        const localTextPrefix = "AdminManagement.Language";
        const lookupKey = "AdminManagement.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LanguageId = "LanguageId",
            Name = "Name",
            NameBn = "NameBn",
            Code = "Code",
            SortOrder = "SortOrder"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    namespace LanguageService {
        const baseUrl = "AdminManagement/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AdminManagement/Language/Create",
            Update = "AdminManagement/Language/Update",
            Delete = "AdminManagement/Language/Delete",
            Retrieve = "AdminManagement/Language/Retrieve",
            List = "AdminManagement/Language/List"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class PublisherColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface PublisherForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
        ContactNo: Serenity.StringEditor;
        Mail: Serenity.EmailEditor;
        StartDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
    }
    class PublisherForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface PublisherRow {
        PublisherId?: number;
        Name?: string;
        NameBn?: string;
        ContactNo?: string;
        Mail?: string;
        Description?: string;
        StartDate?: string;
    }
    namespace PublisherRow {
        const idProperty = "PublisherId";
        const nameProperty = "NameBn";
        const localTextPrefix = "AdminManagement.Publisher";
        const lookupKey = "AdminManagement.Publisher";
        function getLookup(): Q.Lookup<PublisherRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PublisherId = "PublisherId",
            Name = "Name",
            NameBn = "NameBn",
            ContactNo = "ContactNo",
            Mail = "Mail",
            Description = "Description",
            StartDate = "StartDate"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    namespace PublisherService {
        const baseUrl = "AdminManagement/Publisher";
        function Create(request: Serenity.SaveRequest<PublisherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PublisherRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PublisherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PublisherRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AdminManagement/Publisher/Create",
            Update = "AdminManagement/Publisher/Update",
            Delete = "AdminManagement/Publisher/Delete",
            Retrieve = "AdminManagement/Publisher/Retrieve",
            List = "AdminManagement/Publisher/List"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class TopicColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface TopicForm {
        Name: Serenity.StringEditor;
        NameBn: Serenity.StringEditor;
    }
    class TopicForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    interface TopicRow {
        TopicId?: number;
        Name?: string;
        NameBn?: string;
    }
    namespace TopicRow {
        const idProperty = "TopicId";
        const nameProperty = "NameBn";
        const localTextPrefix = "AdminManagement.Topic";
        const lookupKey = "AdminManagement.Topic";
        function getLookup(): Q.Lookup<TopicRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TopicId = "TopicId",
            Name = "Name",
            NameBn = "NameBn"
        }
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    namespace TopicService {
        const baseUrl = "AdminManagement/Topic";
        function Create(request: Serenity.SaveRequest<TopicRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TopicRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TopicRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TopicRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AdminManagement/Topic/Create",
            Update = "AdminManagement/Topic/Update",
            Delete = "AdminManagement/Topic/Delete",
            Retrieve = "AdminManagement/Topic/Retrieve",
            List = "AdminManagement/Topic/List"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
}
declare namespace LibraryManagementSolution.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace LibraryManagementSolution.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace LibraryManagementSolution.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace LibraryManagementSolution.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace LibraryManagementSolution.Common {
    enum PurchaseStatus {
        Draft = 1,
        OrderSent = 2,
        ChangeOrder = 3,
        Canceled = 4,
        OrderReceived = 5,
        MoneyPaid = 6,
        Closed = 7
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderDetailListColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    interface PurchaseOrderDetailListForm {
        BookId: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.IntegerEditor;
        LineTotal: Serenity.DecimalEditor;
    }
    class PurchaseOrderDetailListForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    interface PurchaseOrderDetailListRow {
        PurchaseOrderDetailListId?: number;
        PurchaseOrderId?: number;
        BookId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Discount?: number;
        LineTotal?: number;
        BookName?: string;
        BookNameBn?: string;
    }
    namespace PurchaseOrderDetailListRow {
        const idProperty = "PurchaseOrderDetailListId";
        const localTextPrefix = "PublisherStall.PurchaseOrderDetailList";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PurchaseOrderDetailListId = "PurchaseOrderDetailListId",
            PurchaseOrderId = "PurchaseOrderId",
            BookId = "BookId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Discount = "Discount",
            LineTotal = "LineTotal",
            BookName = "BookName",
            BookNameBn = "BookNameBn"
        }
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    namespace PurchaseOrderDetailListService {
        const baseUrl = "PublisherStall/PurchaseOrderDetailList";
        function Create(request: Serenity.SaveRequest<PurchaseOrderDetailListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseOrderDetailListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderDetailListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderDetailListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PublisherStall/PurchaseOrderDetailList/Create",
            Update = "PublisherStall/PurchaseOrderDetailList/Update",
            Delete = "PublisherStall/PurchaseOrderDetailList/Delete",
            Retrieve = "PublisherStall/PurchaseOrderDetailList/Retrieve",
            List = "PublisherStall/PurchaseOrderDetailList/List"
        }
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    interface PurchaseOrderForm {
        TokenNo: Serenity.StringEditor;
        PublisherId: Serenity.LookupEditor;
        OrderDate: Serenity.DateEditor;
        OrderDetailList: PurchaseOrderDetailListEditor;
        SubTotal: Serenity.DecimalEditor;
        ServiceCharge: Serenity.DecimalEditor;
        Other: Serenity.DecimalEditor;
        InitialLess: Serenity.DecimalEditor;
        InitialPaid: Serenity.DecimalEditor;
        TotalPayable: Serenity.DecimalEditor;
        Status: Serenity.EnumEditor;
    }
    class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderPaymentColumns {
        static columnsKey: string;
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    interface PurchaseOrderPaymentForm {
        PurchaseOrderId: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        PaymentAmount: Serenity.DecimalEditor;
    }
    class PurchaseOrderPaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    interface PurchaseOrderPaymentRow {
        PurchaseOrderPaymentId?: number;
        PurchaseOrderId?: number;
        PaymentDate?: string;
        PaymentAmount?: number;
        PurchaseOrderTokenNo?: string;
        PurchaseOrderPublisherId?: number;
        PurchaseOrderOrderDate?: string;
        PurchaseOrderSubTotal?: number;
        PurchaseOrderServiceCharge?: number;
        PurchaseOrderOther?: number;
        PurchaseOrderInitialLess?: number;
        PurchaseOrderInitialPaid?: number;
        PurchaseOrderTotalPayable?: number;
        PurchaseOrderStatus?: number;
    }
    namespace PurchaseOrderPaymentRow {
        const idProperty = "PurchaseOrderPaymentId";
        const localTextPrefix = "PublisherStall.PurchaseOrderPayment";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PurchaseOrderPaymentId = "PurchaseOrderPaymentId",
            PurchaseOrderId = "PurchaseOrderId",
            PaymentDate = "PaymentDate",
            PaymentAmount = "PaymentAmount",
            PurchaseOrderTokenNo = "PurchaseOrderTokenNo",
            PurchaseOrderPublisherId = "PurchaseOrderPublisherId",
            PurchaseOrderOrderDate = "PurchaseOrderOrderDate",
            PurchaseOrderSubTotal = "PurchaseOrderSubTotal",
            PurchaseOrderServiceCharge = "PurchaseOrderServiceCharge",
            PurchaseOrderOther = "PurchaseOrderOther",
            PurchaseOrderInitialLess = "PurchaseOrderInitialLess",
            PurchaseOrderInitialPaid = "PurchaseOrderInitialPaid",
            PurchaseOrderTotalPayable = "PurchaseOrderTotalPayable",
            PurchaseOrderStatus = "PurchaseOrderStatus"
        }
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    namespace PurchaseOrderPaymentService {
        const baseUrl = "PublisherStall/PurchaseOrderPayment";
        function Create(request: Serenity.SaveRequest<PurchaseOrderPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseOrderPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PublisherStall/PurchaseOrderPayment/Create",
            Update = "PublisherStall/PurchaseOrderPayment/Update",
            Delete = "PublisherStall/PurchaseOrderPayment/Delete",
            Retrieve = "PublisherStall/PurchaseOrderPayment/Retrieve",
            List = "PublisherStall/PurchaseOrderPayment/List"
        }
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    interface PurchaseOrderRow {
        PurchaseOrderId?: number;
        TokenNo?: string;
        PublisherId?: number;
        OrderDate?: string;
        SubTotal?: number;
        ServiceCharge?: number;
        Other?: number;
        InitialLess?: number;
        InitialPaid?: number;
        TotalPayable?: number;
        Status?: Common.PurchaseStatus;
        PublisherName?: string;
        PublisherNameBn?: string;
        PublisherContactNo?: string;
        PublisherMail?: string;
        PublisherDescription?: string;
        PublisherStartDate?: string;
        OrderDetailList?: PurchaseOrderDetailListRow[];
    }
    namespace PurchaseOrderRow {
        const idProperty = "PurchaseOrderId";
        const nameProperty = "TokenNo";
        const localTextPrefix = "PublisherStall.PurchaseOrder";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PurchaseOrderId = "PurchaseOrderId",
            TokenNo = "TokenNo",
            PublisherId = "PublisherId",
            OrderDate = "OrderDate",
            SubTotal = "SubTotal",
            ServiceCharge = "ServiceCharge",
            Other = "Other",
            InitialLess = "InitialLess",
            InitialPaid = "InitialPaid",
            TotalPayable = "TotalPayable",
            Status = "Status",
            PublisherName = "PublisherName",
            PublisherNameBn = "PublisherNameBn",
            PublisherContactNo = "PublisherContactNo",
            PublisherMail = "PublisherMail",
            PublisherDescription = "PublisherDescription",
            PublisherStartDate = "PublisherStartDate",
            OrderDetailList = "OrderDetailList"
        }
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    namespace PurchaseOrderService {
        const baseUrl = "PublisherStall/PurchaseOrder";
        function Create(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PublisherStall/PurchaseOrder/Create",
            Update = "PublisherStall/PurchaseOrder/Update",
            Delete = "PublisherStall/PurchaseOrder/Delete",
            Retrieve = "PublisherStall/PurchaseOrder/Retrieve",
            List = "PublisherStall/PurchaseOrder/List"
        }
    }
}
declare namespace LibraryManagementSolution {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace LibraryManagementSolution.Texts {
}
declare namespace LibraryManagementSolution.AdminManagement {
    class AuthorDialog extends Serenity.EntityDialog<AuthorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AuthorForm;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class AuthorGrid extends Serenity.EntityGrid<AuthorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AuthorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class BookDialog extends Serenity.EntityDialog<BookRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BookForm;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class BookGrid extends Serenity.EntityGrid<BookRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BookDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoryForm;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class CountryDialog extends Serenity.EntityDialog<CountryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CountryForm;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class CountryGrid extends Serenity.EntityGrid<CountryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LanguageForm;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class PublisherDialog extends Serenity.EntityDialog<PublisherRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PublisherForm;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class PublisherGrid extends Serenity.EntityGrid<PublisherRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PublisherDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class TopicDialog extends Serenity.EntityDialog<TopicRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TopicForm;
    }
}
declare namespace LibraryManagementSolution.AdminManagement {
    class TopicGrid extends Serenity.EntityGrid<TopicRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TopicDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace LibraryManagementSolution.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace LibraryManagementSolution.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace LibraryManagementSolution.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace LibraryManagementSolution.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace LibraryManagementSolution.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace LibraryManagementSolution.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace LibraryManagementSolution.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace LibraryManagementSolution.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace LibraryManagementSolution.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace LibraryManagementSolution.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace LibraryManagementSolution.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace LibraryManagementSolution.LanguageList {
    function getValue(): string[][];
}
declare namespace LibraryManagementSolution.ScriptInitialization {
}
declare namespace LibraryManagementSolution.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace LibraryManagementSolution.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace LibraryManagementSolution.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace LibraryManagementSolution.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace LibraryManagementSolution.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseOrderForm;
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderGrid extends Serenity.EntityGrid<PurchaseOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderDetailListDialog extends Serenity.Extensions.GridEditorDialog<PurchaseOrderDetailListRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchaseOrderDetailListForm;
        constructor();
        protected afterLoadEntity(): void;
        private calculateLineTotal;
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderDetailListEditor extends Serenity.Extensions.GridEditorBase<PurchaseOrderDetailListRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDetailListDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderDetailListGrid extends Serenity.EntityGrid<PurchaseOrderDetailListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDetailListDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderPaymentDialog extends Serenity.EntityDialog<PurchaseOrderPaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseOrderPaymentForm;
    }
}
declare namespace LibraryManagementSolution.PublisherStall {
    class PurchaseOrderPaymentGrid extends Serenity.EntityGrid<PurchaseOrderPaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderPaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
