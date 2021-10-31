var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var AuthorColumns = /** @class */ (function () {
            function AuthorColumns() {
            }
            AuthorColumns.columnsKey = 'AdminManagement.Author';
            return AuthorColumns;
        }());
        AdminManagement.AuthorColumns = AuthorColumns;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var AuthorForm = /** @class */ (function (_super) {
            __extends(AuthorForm, _super);
            function AuthorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AuthorForm.init) {
                    AuthorForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(AuthorForm, [
                        'Name', w0,
                        'NameBn', w0,
                        'ContactNo', w0,
                        'Mail', w1,
                        'BirthDate', w2,
                        'About', w3
                    ]);
                }
                return _this;
            }
            AuthorForm.formKey = 'AdminManagement.Author';
            return AuthorForm;
        }(Serenity.PrefixedContext));
        AdminManagement.AuthorForm = AuthorForm;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var AuthorRow;
        (function (AuthorRow) {
            AuthorRow.idProperty = 'AuthorId';
            AuthorRow.nameProperty = 'LookupText';
            AuthorRow.localTextPrefix = 'AdminManagement.Author';
            AuthorRow.lookupKey = 'AdminManagement.Author';
            function getLookup() {
                return Q.getLookup('AdminManagement.Author');
            }
            AuthorRow.getLookup = getLookup;
            AuthorRow.deletePermission = 'Administration:General';
            AuthorRow.insertPermission = 'Administration:General';
            AuthorRow.readPermission = 'Administration:General';
            AuthorRow.updatePermission = 'Administration:General';
        })(AuthorRow = AdminManagement.AuthorRow || (AdminManagement.AuthorRow = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var AuthorService;
        (function (AuthorService) {
            AuthorService.baseUrl = 'AdminManagement/Author';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AuthorService[x] = function (r, s, o) {
                    return Q.serviceRequest(AuthorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AuthorService = AdminManagement.AuthorService || (AdminManagement.AuthorService = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var BookColumns = /** @class */ (function () {
            function BookColumns() {
            }
            BookColumns.columnsKey = 'AdminManagement.Book';
            return BookColumns;
        }());
        AdminManagement.BookColumns = BookColumns;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var BookForm = /** @class */ (function (_super) {
            __extends(BookForm, _super);
            function BookForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BookForm.init) {
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
                return _this;
            }
            BookForm.formKey = 'AdminManagement.Book';
            return BookForm;
        }(Serenity.PrefixedContext));
        AdminManagement.BookForm = BookForm;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var BookRow;
        (function (BookRow) {
            BookRow.idProperty = 'BookId';
            BookRow.nameProperty = 'LookupText';
            BookRow.localTextPrefix = 'AdminManagement.Book';
            BookRow.lookupKey = 'AdminManagement.Book';
            function getLookup() {
                return Q.getLookup('AdminManagement.Book');
            }
            BookRow.getLookup = getLookup;
            BookRow.deletePermission = 'Administration:General';
            BookRow.insertPermission = 'Administration:General';
            BookRow.readPermission = 'Administration:General';
            BookRow.updatePermission = 'Administration:General';
        })(BookRow = AdminManagement.BookRow || (AdminManagement.BookRow = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var BookService;
        (function (BookService) {
            BookService.baseUrl = 'AdminManagement/Book';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BookService[x] = function (r, s, o) {
                    return Q.serviceRequest(BookService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BookService = AdminManagement.BookService || (AdminManagement.BookService = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CategoryColumns = /** @class */ (function () {
            function CategoryColumns() {
            }
            CategoryColumns.columnsKey = 'AdminManagement.Category';
            return CategoryColumns;
        }());
        AdminManagement.CategoryColumns = CategoryColumns;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
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
                return _this;
            }
            CategoryForm.formKey = 'AdminManagement.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        AdminManagement.CategoryForm = CategoryForm;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryId';
            CategoryRow.nameProperty = 'NameBn';
            CategoryRow.localTextPrefix = 'AdminManagement.Category';
            CategoryRow.lookupKey = 'AdminManagement.Category';
            function getLookup() {
                return Q.getLookup('AdminManagement.Category');
            }
            CategoryRow.getLookup = getLookup;
            CategoryRow.deletePermission = 'Administration:General';
            CategoryRow.insertPermission = 'Administration:General';
            CategoryRow.readPermission = 'Administration:General';
            CategoryRow.updatePermission = 'Administration:General';
        })(CategoryRow = AdminManagement.CategoryRow || (AdminManagement.CategoryRow = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'AdminManagement/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = AdminManagement.CategoryService || (AdminManagement.CategoryService = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CountryColumns = /** @class */ (function () {
            function CountryColumns() {
            }
            CountryColumns.columnsKey = 'AdminManagement.Country';
            return CountryColumns;
        }());
        AdminManagement.CountryColumns = CountryColumns;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CountryForm = /** @class */ (function (_super) {
            __extends(CountryForm, _super);
            function CountryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CountryForm.init) {
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
                return _this;
            }
            CountryForm.formKey = 'AdminManagement.Country';
            return CountryForm;
        }(Serenity.PrefixedContext));
        AdminManagement.CountryForm = CountryForm;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CountryRow;
        (function (CountryRow) {
            CountryRow.idProperty = 'CountryId';
            CountryRow.nameProperty = 'NameBn';
            CountryRow.localTextPrefix = 'AdminManagement.Country';
            CountryRow.lookupKey = 'AdminManagement.Country';
            function getLookup() {
                return Q.getLookup('AdminManagement.Country');
            }
            CountryRow.getLookup = getLookup;
            CountryRow.deletePermission = 'Administration:General';
            CountryRow.insertPermission = 'Administration:General';
            CountryRow.readPermission = 'Administration:General';
            CountryRow.updatePermission = 'Administration:General';
        })(CountryRow = AdminManagement.CountryRow || (AdminManagement.CountryRow = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CountryService;
        (function (CountryService) {
            CountryService.baseUrl = 'AdminManagement/Country';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CountryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CountryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CountryService = AdminManagement.CountryService || (AdminManagement.CountryService = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var EmployeeColumns = /** @class */ (function () {
            function EmployeeColumns() {
            }
            EmployeeColumns.columnsKey = 'AdminManagement.Employee';
            return EmployeeColumns;
        }());
        AdminManagement.EmployeeColumns = EmployeeColumns;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var EmployeeForm = /** @class */ (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeeForm.init) {
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
                return _this;
            }
            EmployeeForm.formKey = 'AdminManagement.Employee';
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        AdminManagement.EmployeeForm = EmployeeForm;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeId';
            EmployeeRow.nameProperty = 'Name';
            EmployeeRow.localTextPrefix = 'AdminManagement.Employee';
            EmployeeRow.deletePermission = 'Administration:General';
            EmployeeRow.insertPermission = 'Administration:General';
            EmployeeRow.readPermission = 'Administration:General';
            EmployeeRow.updatePermission = 'Administration:General';
        })(EmployeeRow = AdminManagement.EmployeeRow || (AdminManagement.EmployeeRow = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'AdminManagement/Employee';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeeService = AdminManagement.EmployeeService || (AdminManagement.EmployeeService = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'AdminManagement.Language';
            return LanguageColumns;
        }());
        AdminManagement.LanguageColumns = LanguageColumns;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
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
                return _this;
            }
            LanguageForm.formKey = 'AdminManagement.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        AdminManagement.LanguageForm = LanguageForm;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'LanguageId';
            LanguageRow.nameProperty = 'NameBn';
            LanguageRow.localTextPrefix = 'AdminManagement.Language';
            LanguageRow.lookupKey = 'AdminManagement.Language';
            function getLookup() {
                return Q.getLookup('AdminManagement.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:General';
            LanguageRow.insertPermission = 'Administration:General';
            LanguageRow.readPermission = 'Administration:General';
            LanguageRow.updatePermission = 'Administration:General';
        })(LanguageRow = AdminManagement.LanguageRow || (AdminManagement.LanguageRow = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'AdminManagement/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = AdminManagement.LanguageService || (AdminManagement.LanguageService = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var PublisherColumns = /** @class */ (function () {
            function PublisherColumns() {
            }
            PublisherColumns.columnsKey = 'AdminManagement.Publisher';
            return PublisherColumns;
        }());
        AdminManagement.PublisherColumns = PublisherColumns;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var PublisherForm = /** @class */ (function (_super) {
            __extends(PublisherForm, _super);
            function PublisherForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PublisherForm.init) {
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
                return _this;
            }
            PublisherForm.formKey = 'AdminManagement.Publisher';
            return PublisherForm;
        }(Serenity.PrefixedContext));
        AdminManagement.PublisherForm = PublisherForm;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var PublisherRow;
        (function (PublisherRow) {
            PublisherRow.idProperty = 'PublisherId';
            PublisherRow.nameProperty = 'LookupText';
            PublisherRow.localTextPrefix = 'AdminManagement.Publisher';
            PublisherRow.lookupKey = 'AdminManagement.Publisher';
            function getLookup() {
                return Q.getLookup('AdminManagement.Publisher');
            }
            PublisherRow.getLookup = getLookup;
            PublisherRow.deletePermission = 'Administration:General';
            PublisherRow.insertPermission = 'Administration:General';
            PublisherRow.readPermission = 'Administration:General';
            PublisherRow.updatePermission = 'Administration:General';
        })(PublisherRow = AdminManagement.PublisherRow || (AdminManagement.PublisherRow = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var PublisherService;
        (function (PublisherService) {
            PublisherService.baseUrl = 'AdminManagement/Publisher';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PublisherService[x] = function (r, s, o) {
                    return Q.serviceRequest(PublisherService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PublisherService = AdminManagement.PublisherService || (AdminManagement.PublisherService = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var TopicColumns = /** @class */ (function () {
            function TopicColumns() {
            }
            TopicColumns.columnsKey = 'AdminManagement.Topic';
            return TopicColumns;
        }());
        AdminManagement.TopicColumns = TopicColumns;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var TopicForm = /** @class */ (function (_super) {
            __extends(TopicForm, _super);
            function TopicForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TopicForm.init) {
                    TopicForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TopicForm, [
                        'Name', w0,
                        'NameBn', w0
                    ]);
                }
                return _this;
            }
            TopicForm.formKey = 'AdminManagement.Topic';
            return TopicForm;
        }(Serenity.PrefixedContext));
        AdminManagement.TopicForm = TopicForm;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var TopicRow;
        (function (TopicRow) {
            TopicRow.idProperty = 'TopicId';
            TopicRow.nameProperty = 'NameBn';
            TopicRow.localTextPrefix = 'AdminManagement.Topic';
            TopicRow.lookupKey = 'AdminManagement.Topic';
            function getLookup() {
                return Q.getLookup('AdminManagement.Topic');
            }
            TopicRow.getLookup = getLookup;
            TopicRow.deletePermission = 'Administration:General';
            TopicRow.insertPermission = 'Administration:General';
            TopicRow.readPermission = 'Administration:General';
            TopicRow.updatePermission = 'Administration:General';
        })(TopicRow = AdminManagement.TopicRow || (AdminManagement.TopicRow = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var TopicService;
        (function (TopicService) {
            TopicService.baseUrl = 'AdminManagement/Topic';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TopicService[x] = function (r, s, o) {
                    return Q.serviceRequest(TopicService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TopicService = AdminManagement.TopicService || (AdminManagement.TopicService = {}));
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Common;
    (function (Common) {
        var PurchasePaymentType;
        (function (PurchasePaymentType) {
            PurchasePaymentType[PurchasePaymentType["Pay"] = 1] = "Pay";
            PurchasePaymentType[PurchasePaymentType["Less"] = 2] = "Less";
        })(PurchasePaymentType = Common.PurchasePaymentType || (Common.PurchasePaymentType = {}));
        Serenity.Decorators.registerEnumType(PurchasePaymentType, 'LibraryManagementSolution.Common.PurchasePaymentType', 'Common.PurchasePaymentType');
    })(Common = LibraryManagementSolution.Common || (LibraryManagementSolution.Common = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Common;
    (function (Common) {
        var PurchaseStatus;
        (function (PurchaseStatus) {
            PurchaseStatus[PurchaseStatus["Draft"] = 1] = "Draft";
            PurchaseStatus[PurchaseStatus["OrderSent"] = 2] = "OrderSent";
            PurchaseStatus[PurchaseStatus["ChangeOrder"] = 3] = "ChangeOrder";
            PurchaseStatus[PurchaseStatus["Canceled"] = 4] = "Canceled";
            PurchaseStatus[PurchaseStatus["OrderReceived"] = 5] = "OrderReceived";
            PurchaseStatus[PurchaseStatus["MoneyPaid"] = 6] = "MoneyPaid";
            PurchaseStatus[PurchaseStatus["Closed"] = 7] = "Closed";
        })(PurchaseStatus = Common.PurchaseStatus || (Common.PurchaseStatus = {}));
        Serenity.Decorators.registerEnumType(PurchaseStatus, 'LibraryManagementSolution.Common.PurchaseStatus', 'Common.PurchaseStatus');
    })(Common = LibraryManagementSolution.Common || (LibraryManagementSolution.Common = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Common;
    (function (Common) {
        var SalePaymentType;
        (function (SalePaymentType) {
            SalePaymentType[SalePaymentType["Pay"] = 1] = "Pay";
            SalePaymentType[SalePaymentType["Less"] = 2] = "Less";
            SalePaymentType[SalePaymentType["CashBack"] = 3] = "CashBack";
        })(SalePaymentType = Common.SalePaymentType || (Common.SalePaymentType = {}));
        Serenity.Decorators.registerEnumType(SalePaymentType, 'LibraryManagementSolution.Common.SalePaymentType', 'Common.SalePaymentType');
    })(Common = LibraryManagementSolution.Common || (LibraryManagementSolution.Common = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Common;
    (function (Common) {
        var SaleStatus;
        (function (SaleStatus) {
            SaleStatus[SaleStatus["Draft"] = 1] = "Draft";
            SaleStatus[SaleStatus["OrderSent"] = 2] = "OrderSent";
            SaleStatus[SaleStatus["ChangeOrder"] = 3] = "ChangeOrder";
            SaleStatus[SaleStatus["Canceled"] = 4] = "Canceled";
            SaleStatus[SaleStatus["OrderReceived"] = 5] = "OrderReceived";
            SaleStatus[SaleStatus["MoneyPaid"] = 6] = "MoneyPaid";
            SaleStatus[SaleStatus["Closed"] = 7] = "Closed";
        })(SaleStatus = Common.SaleStatus || (Common.SaleStatus = {}));
        Serenity.Decorators.registerEnumType(SaleStatus, 'LibraryManagementSolution.Common.SaleStatus', 'Common.SaleStatus');
    })(Common = LibraryManagementSolution.Common || (LibraryManagementSolution.Common = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderColumns = /** @class */ (function () {
            function PurchaseOrderColumns() {
            }
            PurchaseOrderColumns.columnsKey = 'PublisherStall.PurchaseOrder';
            return PurchaseOrderColumns;
        }());
        PublisherStall.PurchaseOrderColumns = PurchaseOrderColumns;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderDetailListColumns = /** @class */ (function () {
            function PurchaseOrderDetailListColumns() {
            }
            PurchaseOrderDetailListColumns.columnsKey = 'PublisherStall.PurchaseOrderDetailList';
            return PurchaseOrderDetailListColumns;
        }());
        PublisherStall.PurchaseOrderDetailListColumns = PurchaseOrderDetailListColumns;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderDetailListForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailListForm, _super);
            function PurchaseOrderDetailListForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderDetailListForm.init) {
                    PurchaseOrderDetailListForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(PurchaseOrderDetailListForm, [
                        'BookId', w0,
                        'Quantity', w1,
                        'UnitPrice', w2,
                        'Discount', w1,
                        'LineTotal', w2
                    ]);
                }
                return _this;
            }
            PurchaseOrderDetailListForm.formKey = 'PublisherStall.PurchaseOrderDetailList';
            return PurchaseOrderDetailListForm;
        }(Serenity.PrefixedContext));
        PublisherStall.PurchaseOrderDetailListForm = PurchaseOrderDetailListForm;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderDetailListRow;
        (function (PurchaseOrderDetailListRow) {
            PurchaseOrderDetailListRow.idProperty = 'PurchaseOrderDetailListId';
            PurchaseOrderDetailListRow.localTextPrefix = 'PublisherStall.PurchaseOrderDetailList';
            PurchaseOrderDetailListRow.deletePermission = 'Administration:General';
            PurchaseOrderDetailListRow.insertPermission = 'Administration:General';
            PurchaseOrderDetailListRow.readPermission = 'Administration:General';
            PurchaseOrderDetailListRow.updatePermission = 'Administration:General';
        })(PurchaseOrderDetailListRow = PublisherStall.PurchaseOrderDetailListRow || (PublisherStall.PurchaseOrderDetailListRow = {}));
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderDetailListService;
        (function (PurchaseOrderDetailListService) {
            PurchaseOrderDetailListService.baseUrl = 'PublisherStall/PurchaseOrderDetailList';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderDetailListService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderDetailListService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderDetailListService = PublisherStall.PurchaseOrderDetailListService || (PublisherStall.PurchaseOrderDetailListService = {}));
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderForm, _super);
            function PurchaseOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderForm.init) {
                    PurchaseOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = PublisherStall.PurchaseOrderDetailListEditor;
                    var w6 = s.EnumEditor;
                    var w7 = PublisherStall.PurchaseOrderPaymentEditor;
                    Q.initFormType(PurchaseOrderForm, [
                        'TokenNo', w0,
                        'PublisherId', w1,
                        'OrderDate', w2,
                        'BookId', w1,
                        'Quantity', w3,
                        'Discount', w3,
                        'UnitPrice', w4,
                        'AddOrderDetail', w0,
                        'LineTotal', w4,
                        'OrderDetailList', w5,
                        'SubTotal', w4,
                        'Status', w6,
                        'ServiceCharge', w4,
                        'Other', w4,
                        'InitialLess', w4,
                        'TotalLess', w4,
                        'TotalPayable', w4,
                        'InitialPaid', w4,
                        'TotalPaid', w4,
                        'RemainingDue', w4,
                        'PaymentDate', w2,
                        'PaymentAmount', w4,
                        'PaymentType', w6,
                        'AddPay', w0,
                        'OrderPayList', w7,
                        'OrderLessList', w7
                    ]);
                }
                return _this;
            }
            PurchaseOrderForm.formKey = 'PublisherStall.PurchaseOrder';
            return PurchaseOrderForm;
        }(Serenity.PrefixedContext));
        PublisherStall.PurchaseOrderForm = PurchaseOrderForm;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderPaymentColumns = /** @class */ (function () {
            function PurchaseOrderPaymentColumns() {
            }
            PurchaseOrderPaymentColumns.columnsKey = 'PublisherStall.PurchaseOrderPayment';
            return PurchaseOrderPaymentColumns;
        }());
        PublisherStall.PurchaseOrderPaymentColumns = PurchaseOrderPaymentColumns;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderPaymentForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderPaymentForm, _super);
            function PurchaseOrderPaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderPaymentForm.init) {
                    PurchaseOrderPaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(PurchaseOrderPaymentForm, [
                        'PaymentDate', w0,
                        'PaymentAmount', w1
                    ]);
                }
                return _this;
            }
            PurchaseOrderPaymentForm.formKey = 'PublisherStall.PurchaseOrderPayment';
            return PurchaseOrderPaymentForm;
        }(Serenity.PrefixedContext));
        PublisherStall.PurchaseOrderPaymentForm = PurchaseOrderPaymentForm;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderPaymentRow;
        (function (PurchaseOrderPaymentRow) {
            PurchaseOrderPaymentRow.idProperty = 'PurchaseOrderPaymentId';
            PurchaseOrderPaymentRow.localTextPrefix = 'PublisherStall.PurchaseOrderPayment';
            PurchaseOrderPaymentRow.deletePermission = 'Administration:General';
            PurchaseOrderPaymentRow.insertPermission = 'Administration:General';
            PurchaseOrderPaymentRow.readPermission = 'Administration:General';
            PurchaseOrderPaymentRow.updatePermission = 'Administration:General';
        })(PurchaseOrderPaymentRow = PublisherStall.PurchaseOrderPaymentRow || (PublisherStall.PurchaseOrderPaymentRow = {}));
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderPaymentService;
        (function (PurchaseOrderPaymentService) {
            PurchaseOrderPaymentService.baseUrl = 'PublisherStall/PurchaseOrderPayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderPaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderPaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderPaymentService = PublisherStall.PurchaseOrderPaymentService || (PublisherStall.PurchaseOrderPaymentService = {}));
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderRow;
        (function (PurchaseOrderRow) {
            PurchaseOrderRow.idProperty = 'PurchaseOrderId';
            PurchaseOrderRow.nameProperty = 'TokenNo';
            PurchaseOrderRow.localTextPrefix = 'PublisherStall.PurchaseOrder';
            PurchaseOrderRow.deletePermission = 'Administration:General';
            PurchaseOrderRow.insertPermission = 'Administration:General';
            PurchaseOrderRow.readPermission = 'Administration:General';
            PurchaseOrderRow.updatePermission = 'Administration:General';
        })(PurchaseOrderRow = PublisherStall.PurchaseOrderRow || (PublisherStall.PurchaseOrderRow = {}));
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderService;
        (function (PurchaseOrderService) {
            PurchaseOrderService.baseUrl = 'PublisherStall/PurchaseOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderService = PublisherStall.PurchaseOrderService || (PublisherStall.PurchaseOrderService = {}));
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var CustomerColumns = /** @class */ (function () {
            function CustomerColumns() {
            }
            CustomerColumns.columnsKey = 'StallCustomer.Customer';
            return CustomerColumns;
        }());
        StallCustomer.CustomerColumns = CustomerColumns;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
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
                return _this;
            }
            CustomerForm.formKey = 'StallCustomer.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        StallCustomer.CustomerForm = CustomerForm;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'CustomerId';
            CustomerRow.nameProperty = 'LookupText';
            CustomerRow.localTextPrefix = 'StallCustomer.Customer';
            CustomerRow.lookupKey = 'StallCustomer.Customer';
            function getLookup() {
                return Q.getLookup('StallCustomer.Customer');
            }
            CustomerRow.getLookup = getLookup;
            CustomerRow.deletePermission = 'Administration:General';
            CustomerRow.insertPermission = 'Administration:General';
            CustomerRow.readPermission = 'Administration:General';
            CustomerRow.updatePermission = 'Administration:General';
        })(CustomerRow = StallCustomer.CustomerRow || (StallCustomer.CustomerRow = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'StallCustomer/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = StallCustomer.CustomerService || (StallCustomer.CustomerService = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleColumns = /** @class */ (function () {
            function ProductSaleColumns() {
            }
            ProductSaleColumns.columnsKey = 'StallCustomer.ProductSale';
            return ProductSaleColumns;
        }());
        StallCustomer.ProductSaleColumns = ProductSaleColumns;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDetailColumns = /** @class */ (function () {
            function ProductSaleDetailColumns() {
            }
            ProductSaleDetailColumns.columnsKey = 'StallCustomer.ProductSaleDetail';
            return ProductSaleDetailColumns;
        }());
        StallCustomer.ProductSaleDetailColumns = ProductSaleDetailColumns;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDetailForm = /** @class */ (function (_super) {
            __extends(ProductSaleDetailForm, _super);
            function ProductSaleDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductSaleDetailForm.init) {
                    ProductSaleDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ProductSaleDetailForm, [
                        'BookId', w0,
                        'Quantity', w1,
                        'UnitPrice', w2,
                        'Discount', w1,
                        'LineTotal', w2
                    ]);
                }
                return _this;
            }
            ProductSaleDetailForm.formKey = 'StallCustomer.ProductSaleDetail';
            return ProductSaleDetailForm;
        }(Serenity.PrefixedContext));
        StallCustomer.ProductSaleDetailForm = ProductSaleDetailForm;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDetailRow;
        (function (ProductSaleDetailRow) {
            ProductSaleDetailRow.idProperty = 'ProductSaleDetailId';
            ProductSaleDetailRow.localTextPrefix = 'StallCustomer.ProductSaleDetail';
            ProductSaleDetailRow.deletePermission = 'Administration:General';
            ProductSaleDetailRow.insertPermission = 'Administration:General';
            ProductSaleDetailRow.readPermission = 'Administration:General';
            ProductSaleDetailRow.updatePermission = 'Administration:General';
        })(ProductSaleDetailRow = StallCustomer.ProductSaleDetailRow || (StallCustomer.ProductSaleDetailRow = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDetailService;
        (function (ProductSaleDetailService) {
            ProductSaleDetailService.baseUrl = 'StallCustomer/ProductSaleDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductSaleDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductSaleDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductSaleDetailService = StallCustomer.ProductSaleDetailService || (StallCustomer.ProductSaleDetailService = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleForm = /** @class */ (function (_super) {
            __extends(ProductSaleForm, _super);
            function ProductSaleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductSaleForm.init) {
                    ProductSaleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = StallCustomer.ProductSaleDetailEditor;
                    var w6 = s.EnumEditor;
                    var w7 = StallCustomer.ProductSalePaymentEditor;
                    Q.initFormType(ProductSaleForm, [
                        'TokenNo', w0,
                        'CustomerId', w1,
                        'SaleDate', w2,
                        'BookId', w1,
                        'Quantity', w3,
                        'Discount', w3,
                        'UnitPrice', w4,
                        'AddOrderDetail', w0,
                        'LineTotal', w4,
                        'OrderDetailList', w5,
                        'SubTotal', w4,
                        'Status', w6,
                        'ServiceCharge', w4,
                        'Other', w4,
                        'InitialLess', w4,
                        'TotalLess', w4,
                        'TotalPayable', w4,
                        'InitialPaid', w4,
                        'TotalPaid', w4,
                        'RemainingDue', w4,
                        'PaymentDate', w2,
                        'PaymentAmount', w4,
                        'PaymentType', w6,
                        'AddPay', w0,
                        'OrderPayList', w7,
                        'OrderLessList', w7,
                        'PreparedBy', w0
                    ]);
                }
                return _this;
            }
            ProductSaleForm.formKey = 'StallCustomer.ProductSale';
            return ProductSaleForm;
        }(Serenity.PrefixedContext));
        StallCustomer.ProductSaleForm = ProductSaleForm;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSalePaymentColumns = /** @class */ (function () {
            function ProductSalePaymentColumns() {
            }
            ProductSalePaymentColumns.columnsKey = 'StallCustomer.ProductSalePayment';
            return ProductSalePaymentColumns;
        }());
        StallCustomer.ProductSalePaymentColumns = ProductSalePaymentColumns;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSalePaymentForm = /** @class */ (function (_super) {
            __extends(ProductSalePaymentForm, _super);
            function ProductSalePaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductSalePaymentForm.init) {
                    ProductSalePaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.EnumEditor;
                    Q.initFormType(ProductSalePaymentForm, [
                        'ProductSaleId', w0,
                        'PaymentDate', w1,
                        'PaymentAmount', w2,
                        'PaymentType', w3
                    ]);
                }
                return _this;
            }
            ProductSalePaymentForm.formKey = 'StallCustomer.ProductSalePayment';
            return ProductSalePaymentForm;
        }(Serenity.PrefixedContext));
        StallCustomer.ProductSalePaymentForm = ProductSalePaymentForm;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSalePaymentRow;
        (function (ProductSalePaymentRow) {
            ProductSalePaymentRow.idProperty = 'ProductSalePaymentId';
            ProductSalePaymentRow.localTextPrefix = 'StallCustomer.ProductSalePayment';
            ProductSalePaymentRow.deletePermission = 'Administration:General';
            ProductSalePaymentRow.insertPermission = 'Administration:General';
            ProductSalePaymentRow.readPermission = 'Administration:General';
            ProductSalePaymentRow.updatePermission = 'Administration:General';
        })(ProductSalePaymentRow = StallCustomer.ProductSalePaymentRow || (StallCustomer.ProductSalePaymentRow = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSalePaymentService;
        (function (ProductSalePaymentService) {
            ProductSalePaymentService.baseUrl = 'StallCustomer/ProductSalePayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductSalePaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductSalePaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductSalePaymentService = StallCustomer.ProductSalePaymentService || (StallCustomer.ProductSalePaymentService = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleRow;
        (function (ProductSaleRow) {
            ProductSaleRow.idProperty = 'ProductSaleId';
            ProductSaleRow.nameProperty = 'TokenNo';
            ProductSaleRow.localTextPrefix = 'StallCustomer.ProductSale';
            ProductSaleRow.deletePermission = 'Administration:General';
            ProductSaleRow.insertPermission = 'Administration:General';
            ProductSaleRow.readPermission = 'Administration:General';
            ProductSaleRow.updatePermission = 'Administration:General';
        })(ProductSaleRow = StallCustomer.ProductSaleRow || (StallCustomer.ProductSaleRow = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleService;
        (function (ProductSaleService) {
            ProductSaleService.baseUrl = 'StallCustomer/ProductSale';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductSaleService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductSaleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductSaleService = StallCustomer.ProductSaleService || (StallCustomer.ProductSaleService = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Texts;
    (function (Texts) {
        LibraryManagementSolution['Texts'] = Q.proxyTexts(Texts, '', { Db: { AdminManagement: { Author: { About: 1, AuthorId: 1, BirthDate: 1, ContactNo: 1, LookupText: 1, Mail: 1, Name: 1, NameBn: 1 }, Book: { AuthorId: 1, AuthorName: 1, AuthorNameBn: 1, Availability: 1, BookId: 1, CategoryId: 1, CategoryName: 1, CategoryNameBn: 1, CategorySortOrder: 1, CategoryTopicId: 1, CountryId: 1, CoverImage: 1, Discount: 1, Edition: 1, LanguageId: 1, LookupText: 1, Name: 1, NameBn: 1, NumberOfPages: 1, PreviewAttachment: 1, Price: 1, PublisherId: 1, PublisherName: 1, PublisherNameBn: 1, SortOrder: 1, Summary: 1, TopicId: 1, TopicName: 1, TopicNameBn: 1, TranslatorId: 1, TranslatorName: 1, TranslatorNameBn: 1 }, Category: { CategoryId: 1, Name: 1, NameBn: 1, SortOrder: 1, TopicId: 1, TopicName: 1, TopicNameBn: 1 }, Country: { Code: 1, CountryId: 1, Name: 1, NameBn: 1, SortOrder: 1 }, Employee: { About: 1, BirthDate: 1, ContactNo: 1, EmployeeId: 1, Mail: 1, Name: 1, NameBn: 1 }, Language: { Code: 1, LanguageId: 1, Name: 1, NameBn: 1, SortOrder: 1 }, Publisher: { ContactNo: 1, Description: 1, LookupText: 1, Mail: 1, Name: 1, NameBn: 1, PublisherId: 1, StartDate: 1 }, Topic: { Name: 1, NameBn: 1, TopicId: 1 } }, Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, PublisherStall: { PurchaseOrder: { AddOrderDetail: 1, AddPay: 1, BookId: 1, Discount: 1, InitialLess: 1, InitialPaid: 1, LineTotal: 1, OrderDate: 1, OrderDetailList: 1, OrderLessList: 1, OrderPayList: 1, Other: 1, PaymentAmount: 1, PaymentDate: 1, PaymentType: 1, PublisherContactNo: 1, PublisherDescription: 1, PublisherId: 1, PublisherMail: 1, PublisherName: 1, PublisherNameBn: 1, PublisherStartDate: 1, PurchaseOrderId: 1, Quantity: 1, RemainingDue: 1, ServiceCharge: 1, Status: 1, SubTotal: 1, TokenNo: 1, TotalLess: 1, TotalPaid: 1, TotalPayable: 1, UnitPrice: 1 }, PurchaseOrderDetailList: { BookId: 1, BookName: 1, BookNameBn: 1, Discount: 1, LineTotal: 1, PurchaseOrderDetailListId: 1, PurchaseOrderId: 1, Quantity: 1, UnitPrice: 1, __id: 1 }, PurchaseOrderPayment: { PaymentAmount: 1, PaymentDate: 1, PaymentType: 1, PurchaseOrderId: 1, PurchaseOrderPaymentId: 1, __id: 1 } }, StallCustomer: { Customer: { About: 1, ContactNo: 1, CustomerId: 1, LookupText: 1, Mail: 1, Name: 1, NameBn: 1 }, ProductSale: { AddOrderDetail: 1, AddPay: 1, BookId: 1, CustomerAbout: 1, CustomerContactNo: 1, CustomerId: 1, CustomerMail: 1, CustomerName: 1, CustomerNameBn: 1, Discount: 1, InitialLess: 1, InitialPaid: 1, LineTotal: 1, OrderDetailList: 1, OrderLessList: 1, OrderPayList: 1, Other: 1, PaymentAmount: 1, PaymentDate: 1, PaymentType: 1, PreparedBy: 1, ProductSaleId: 1, Quantity: 1, RemainingDue: 1, SaleDate: 1, ServiceCharge: 1, Status: 1, SubTotal: 1, TokenNo: 1, TotalLess: 1, TotalPaid: 1, TotalPayable: 1, UnitPrice: 1 }, ProductSaleDetail: { BookId: 1, BookName: 1, BookNameBn: 1, Discount: 1, LineTotal: 1, ProductSaleDetailId: 1, ProductSaleId: 1, Quantity: 1, UnitPrice: 1, __id: 1 }, ProductSalePayment: { PaymentAmount: 1, PaymentDate: 1, PaymentType: 1, ProductSaleId: 1, ProductSalePaymentId: 1, __id: 1 }, ReturnOrExchange: { AddOrderDetail: 1, AddOrderDetail2: 1, AddPay: 1, BookId: 1, BookId2: 1, CashBackList: 1, CustomerAbout: 1, CustomerContactNo: 1, CustomerId: 1, CustomerMail: 1, CustomerName: 1, CustomerNameBn: 1, Discount: 1, Discount2: 1, InitialLess: 1, InitialPaid: 1, LineTotal: 1, LineTotal2: 1, OrderDetailList: 1, OrderLessList: 1, OrderPayList: 1, Other: 1, PaymentAmount: 1, PaymentDate: 1, PaymentType: 1, PreparedBy: 1, ProductSaleId: 1, Quantity: 1, Quantity2: 1, RemainingDue: 1, ReturnBookList: 1, SaleDate: 1, ServiceCharge: 1, Status: 1, SubTotal: 1, TokenNo: 1, TotalLess: 1, TotalPaid: 1, TotalPayable: 1, UnitPrice: 1, UnitPrice2: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = LibraryManagementSolution.Texts || (LibraryManagementSolution.Texts = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var AuthorDialog = /** @class */ (function (_super) {
            __extends(AuthorDialog, _super);
            function AuthorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AdminManagement.AuthorForm(_this.idPrefix);
                return _this;
            }
            AuthorDialog.prototype.getFormKey = function () { return AdminManagement.AuthorForm.formKey; };
            AuthorDialog.prototype.getIdProperty = function () { return AdminManagement.AuthorRow.idProperty; };
            AuthorDialog.prototype.getLocalTextPrefix = function () { return AdminManagement.AuthorRow.localTextPrefix; };
            AuthorDialog.prototype.getNameProperty = function () { return AdminManagement.AuthorRow.nameProperty; };
            AuthorDialog.prototype.getService = function () { return AdminManagement.AuthorService.baseUrl; };
            AuthorDialog.prototype.getDeletePermission = function () { return AdminManagement.AuthorRow.deletePermission; };
            AuthorDialog.prototype.getInsertPermission = function () { return AdminManagement.AuthorRow.insertPermission; };
            AuthorDialog.prototype.getUpdatePermission = function () { return AdminManagement.AuthorRow.updatePermission; };
            AuthorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AuthorDialog);
            return AuthorDialog;
        }(Serenity.EntityDialog));
        AdminManagement.AuthorDialog = AuthorDialog;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var AuthorGrid = /** @class */ (function (_super) {
            __extends(AuthorGrid, _super);
            function AuthorGrid(container) {
                return _super.call(this, container) || this;
            }
            AuthorGrid.prototype.getColumnsKey = function () { return AdminManagement.AuthorColumns.columnsKey; };
            AuthorGrid.prototype.getDialogType = function () { return AdminManagement.AuthorDialog; };
            AuthorGrid.prototype.getIdProperty = function () { return AdminManagement.AuthorRow.idProperty; };
            AuthorGrid.prototype.getInsertPermission = function () { return AdminManagement.AuthorRow.insertPermission; };
            AuthorGrid.prototype.getLocalTextPrefix = function () { return AdminManagement.AuthorRow.localTextPrefix; };
            AuthorGrid.prototype.getService = function () { return AdminManagement.AuthorService.baseUrl; };
            AuthorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AuthorGrid);
            return AuthorGrid;
        }(Serenity.EntityGrid));
        AdminManagement.AuthorGrid = AuthorGrid;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var BookDialog = /** @class */ (function (_super) {
            __extends(BookDialog, _super);
            function BookDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AdminManagement.BookForm(_this.idPrefix);
                return _this;
            }
            BookDialog.prototype.getFormKey = function () { return AdminManagement.BookForm.formKey; };
            BookDialog.prototype.getIdProperty = function () { return AdminManagement.BookRow.idProperty; };
            BookDialog.prototype.getLocalTextPrefix = function () { return AdminManagement.BookRow.localTextPrefix; };
            BookDialog.prototype.getNameProperty = function () { return AdminManagement.BookRow.nameProperty; };
            BookDialog.prototype.getService = function () { return AdminManagement.BookService.baseUrl; };
            BookDialog.prototype.getDeletePermission = function () { return AdminManagement.BookRow.deletePermission; };
            BookDialog.prototype.getInsertPermission = function () { return AdminManagement.BookRow.insertPermission; };
            BookDialog.prototype.getUpdatePermission = function () { return AdminManagement.BookRow.updatePermission; };
            BookDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], BookDialog);
            return BookDialog;
        }(Serenity.EntityDialog));
        AdminManagement.BookDialog = BookDialog;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var BookGrid = /** @class */ (function (_super) {
            __extends(BookGrid, _super);
            function BookGrid(container) {
                return _super.call(this, container) || this;
            }
            BookGrid.prototype.getColumnsKey = function () { return AdminManagement.BookColumns.columnsKey; };
            BookGrid.prototype.getDialogType = function () { return AdminManagement.BookDialog; };
            BookGrid.prototype.getIdProperty = function () { return AdminManagement.BookRow.idProperty; };
            BookGrid.prototype.getInsertPermission = function () { return AdminManagement.BookRow.insertPermission; };
            BookGrid.prototype.getLocalTextPrefix = function () { return AdminManagement.BookRow.localTextPrefix; };
            BookGrid.prototype.getService = function () { return AdminManagement.BookService.baseUrl; };
            BookGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BookGrid);
            return BookGrid;
        }(Serenity.EntityGrid));
        AdminManagement.BookGrid = BookGrid;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AdminManagement.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return AdminManagement.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return AdminManagement.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return AdminManagement.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return AdminManagement.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return AdminManagement.CategoryService.baseUrl; };
            CategoryDialog.prototype.getDeletePermission = function () { return AdminManagement.CategoryRow.deletePermission; };
            CategoryDialog.prototype.getInsertPermission = function () { return AdminManagement.CategoryRow.insertPermission; };
            CategoryDialog.prototype.getUpdatePermission = function () { return AdminManagement.CategoryRow.updatePermission; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        AdminManagement.CategoryDialog = CategoryDialog;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return AdminManagement.CategoryColumns.columnsKey; };
            CategoryGrid.prototype.getDialogType = function () { return AdminManagement.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return AdminManagement.CategoryRow.idProperty; };
            CategoryGrid.prototype.getInsertPermission = function () { return AdminManagement.CategoryRow.insertPermission; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return AdminManagement.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return AdminManagement.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        AdminManagement.CategoryGrid = CategoryGrid;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CountryDialog = /** @class */ (function (_super) {
            __extends(CountryDialog, _super);
            function CountryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AdminManagement.CountryForm(_this.idPrefix);
                return _this;
            }
            CountryDialog.prototype.getFormKey = function () { return AdminManagement.CountryForm.formKey; };
            CountryDialog.prototype.getIdProperty = function () { return AdminManagement.CountryRow.idProperty; };
            CountryDialog.prototype.getLocalTextPrefix = function () { return AdminManagement.CountryRow.localTextPrefix; };
            CountryDialog.prototype.getNameProperty = function () { return AdminManagement.CountryRow.nameProperty; };
            CountryDialog.prototype.getService = function () { return AdminManagement.CountryService.baseUrl; };
            CountryDialog.prototype.getDeletePermission = function () { return AdminManagement.CountryRow.deletePermission; };
            CountryDialog.prototype.getInsertPermission = function () { return AdminManagement.CountryRow.insertPermission; };
            CountryDialog.prototype.getUpdatePermission = function () { return AdminManagement.CountryRow.updatePermission; };
            CountryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CountryDialog);
            return CountryDialog;
        }(Serenity.EntityDialog));
        AdminManagement.CountryDialog = CountryDialog;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var CountryGrid = /** @class */ (function (_super) {
            __extends(CountryGrid, _super);
            function CountryGrid(container) {
                return _super.call(this, container) || this;
            }
            CountryGrid.prototype.getColumnsKey = function () { return AdminManagement.CountryColumns.columnsKey; };
            CountryGrid.prototype.getDialogType = function () { return AdminManagement.CountryDialog; };
            CountryGrid.prototype.getIdProperty = function () { return AdminManagement.CountryRow.idProperty; };
            CountryGrid.prototype.getInsertPermission = function () { return AdminManagement.CountryRow.insertPermission; };
            CountryGrid.prototype.getLocalTextPrefix = function () { return AdminManagement.CountryRow.localTextPrefix; };
            CountryGrid.prototype.getService = function () { return AdminManagement.CountryService.baseUrl; };
            CountryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CountryGrid);
            return CountryGrid;
        }(Serenity.EntityGrid));
        AdminManagement.CountryGrid = CountryGrid;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var EmployeeDialog = /** @class */ (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AdminManagement.EmployeeForm(_this.idPrefix);
                return _this;
            }
            EmployeeDialog.prototype.getFormKey = function () { return AdminManagement.EmployeeForm.formKey; };
            EmployeeDialog.prototype.getIdProperty = function () { return AdminManagement.EmployeeRow.idProperty; };
            EmployeeDialog.prototype.getLocalTextPrefix = function () { return AdminManagement.EmployeeRow.localTextPrefix; };
            EmployeeDialog.prototype.getNameProperty = function () { return AdminManagement.EmployeeRow.nameProperty; };
            EmployeeDialog.prototype.getService = function () { return AdminManagement.EmployeeService.baseUrl; };
            EmployeeDialog.prototype.getDeletePermission = function () { return AdminManagement.EmployeeRow.deletePermission; };
            EmployeeDialog.prototype.getInsertPermission = function () { return AdminManagement.EmployeeRow.insertPermission; };
            EmployeeDialog.prototype.getUpdatePermission = function () { return AdminManagement.EmployeeRow.updatePermission; };
            EmployeeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeDialog);
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        AdminManagement.EmployeeDialog = EmployeeDialog;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var EmployeeGrid = /** @class */ (function (_super) {
            __extends(EmployeeGrid, _super);
            function EmployeeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeGrid.prototype.getColumnsKey = function () { return AdminManagement.EmployeeColumns.columnsKey; };
            EmployeeGrid.prototype.getDialogType = function () { return AdminManagement.EmployeeDialog; };
            EmployeeGrid.prototype.getIdProperty = function () { return AdminManagement.EmployeeRow.idProperty; };
            EmployeeGrid.prototype.getInsertPermission = function () { return AdminManagement.EmployeeRow.insertPermission; };
            EmployeeGrid.prototype.getLocalTextPrefix = function () { return AdminManagement.EmployeeRow.localTextPrefix; };
            EmployeeGrid.prototype.getService = function () { return AdminManagement.EmployeeService.baseUrl; };
            EmployeeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeGrid);
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        AdminManagement.EmployeeGrid = EmployeeGrid;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AdminManagement.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return AdminManagement.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return AdminManagement.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return AdminManagement.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return AdminManagement.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return AdminManagement.LanguageService.baseUrl; };
            LanguageDialog.prototype.getDeletePermission = function () { return AdminManagement.LanguageRow.deletePermission; };
            LanguageDialog.prototype.getInsertPermission = function () { return AdminManagement.LanguageRow.insertPermission; };
            LanguageDialog.prototype.getUpdatePermission = function () { return AdminManagement.LanguageRow.updatePermission; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        AdminManagement.LanguageDialog = LanguageDialog;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return AdminManagement.LanguageColumns.columnsKey; };
            LanguageGrid.prototype.getDialogType = function () { return AdminManagement.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return AdminManagement.LanguageRow.idProperty; };
            LanguageGrid.prototype.getInsertPermission = function () { return AdminManagement.LanguageRow.insertPermission; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return AdminManagement.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return AdminManagement.LanguageService.baseUrl; };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        AdminManagement.LanguageGrid = LanguageGrid;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var PublisherDialog = /** @class */ (function (_super) {
            __extends(PublisherDialog, _super);
            function PublisherDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AdminManagement.PublisherForm(_this.idPrefix);
                return _this;
            }
            PublisherDialog.prototype.getFormKey = function () { return AdminManagement.PublisherForm.formKey; };
            PublisherDialog.prototype.getIdProperty = function () { return AdminManagement.PublisherRow.idProperty; };
            PublisherDialog.prototype.getLocalTextPrefix = function () { return AdminManagement.PublisherRow.localTextPrefix; };
            PublisherDialog.prototype.getNameProperty = function () { return AdminManagement.PublisherRow.nameProperty; };
            PublisherDialog.prototype.getService = function () { return AdminManagement.PublisherService.baseUrl; };
            PublisherDialog.prototype.getDeletePermission = function () { return AdminManagement.PublisherRow.deletePermission; };
            PublisherDialog.prototype.getInsertPermission = function () { return AdminManagement.PublisherRow.insertPermission; };
            PublisherDialog.prototype.getUpdatePermission = function () { return AdminManagement.PublisherRow.updatePermission; };
            PublisherDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PublisherDialog);
            return PublisherDialog;
        }(Serenity.EntityDialog));
        AdminManagement.PublisherDialog = PublisherDialog;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var PublisherGrid = /** @class */ (function (_super) {
            __extends(PublisherGrid, _super);
            function PublisherGrid(container) {
                return _super.call(this, container) || this;
            }
            PublisherGrid.prototype.getColumnsKey = function () { return AdminManagement.PublisherColumns.columnsKey; };
            PublisherGrid.prototype.getDialogType = function () { return AdminManagement.PublisherDialog; };
            PublisherGrid.prototype.getIdProperty = function () { return AdminManagement.PublisherRow.idProperty; };
            PublisherGrid.prototype.getInsertPermission = function () { return AdminManagement.PublisherRow.insertPermission; };
            PublisherGrid.prototype.getLocalTextPrefix = function () { return AdminManagement.PublisherRow.localTextPrefix; };
            PublisherGrid.prototype.getService = function () { return AdminManagement.PublisherService.baseUrl; };
            PublisherGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PublisherGrid);
            return PublisherGrid;
        }(Serenity.EntityGrid));
        AdminManagement.PublisherGrid = PublisherGrid;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var TopicDialog = /** @class */ (function (_super) {
            __extends(TopicDialog, _super);
            function TopicDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AdminManagement.TopicForm(_this.idPrefix);
                return _this;
            }
            TopicDialog.prototype.getFormKey = function () { return AdminManagement.TopicForm.formKey; };
            TopicDialog.prototype.getIdProperty = function () { return AdminManagement.TopicRow.idProperty; };
            TopicDialog.prototype.getLocalTextPrefix = function () { return AdminManagement.TopicRow.localTextPrefix; };
            TopicDialog.prototype.getNameProperty = function () { return AdminManagement.TopicRow.nameProperty; };
            TopicDialog.prototype.getService = function () { return AdminManagement.TopicService.baseUrl; };
            TopicDialog.prototype.getDeletePermission = function () { return AdminManagement.TopicRow.deletePermission; };
            TopicDialog.prototype.getInsertPermission = function () { return AdminManagement.TopicRow.insertPermission; };
            TopicDialog.prototype.getUpdatePermission = function () { return AdminManagement.TopicRow.updatePermission; };
            TopicDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TopicDialog);
            return TopicDialog;
        }(Serenity.EntityDialog));
        AdminManagement.TopicDialog = TopicDialog;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var AdminManagement;
    (function (AdminManagement) {
        var TopicGrid = /** @class */ (function (_super) {
            __extends(TopicGrid, _super);
            function TopicGrid(container) {
                return _super.call(this, container) || this;
            }
            TopicGrid.prototype.getColumnsKey = function () { return AdminManagement.TopicColumns.columnsKey; };
            TopicGrid.prototype.getDialogType = function () { return AdminManagement.TopicDialog; };
            TopicGrid.prototype.getIdProperty = function () { return AdminManagement.TopicRow.idProperty; };
            TopicGrid.prototype.getInsertPermission = function () { return AdminManagement.TopicRow.insertPermission; };
            TopicGrid.prototype.getLocalTextPrefix = function () { return AdminManagement.TopicRow.localTextPrefix; };
            TopicGrid.prototype.getService = function () { return AdminManagement.TopicService.baseUrl; };
            TopicGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TopicGrid);
            return TopicGrid;
        }(Serenity.EntityGrid));
        AdminManagement.TopicGrid = TopicGrid;
    })(AdminManagement = LibraryManagementSolution.AdminManagement || (LibraryManagementSolution.AdminManagement = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = LibraryManagementSolution.Authorization || (LibraryManagementSolution.Authorization = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = LibraryManagementSolution.Administration || (LibraryManagementSolution.Administration = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = LibraryManagementSolution.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = LibraryManagementSolution.LanguageList || (LibraryManagementSolution.LanguageList = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('LibraryManagementSolution');
        Serenity.EntityDialog.defaultLanguageList = LibraryManagementSolution.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = LibraryManagementSolution.ScriptInitialization || (LibraryManagementSolution.ScriptInitialization = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload();
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = LibraryManagementSolution.Common || (LibraryManagementSolution.Common = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = LibraryManagementSolution.Common || (LibraryManagementSolution.Common = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = LibraryManagementSolution.Common || (LibraryManagementSolution.Common = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = LibraryManagementSolution.Membership || (LibraryManagementSolution.Membership = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDialog, _super);
            function PurchaseOrderDialog() {
                var _this = _super.call(this) || this;
                _this.nextId = 0;
                _this.sum = 0;
                _this.form = new PublisherStall.PurchaseOrderForm(_this.idPrefix);
                _this.form.AddPay.getGridField().find('.caption').text('');
                _this.form.AddPay.getGridField().find('.editor').hide();
                $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                    .insertAfter(_this.form.AddPay.element)
                    .click(function () { return _this.addPayment(); });
                _this.form.AddOrderDetail.getGridField().find('.caption').text('');
                _this.form.AddOrderDetail.getGridField().find('.editor').hide();
                $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                    .insertAfter(_this.form.AddOrderDetail.element)
                    .click(function () { return _this.addOrderDetail(); });
                return _this;
            }
            PurchaseOrderDialog.prototype.getFormKey = function () { return PublisherStall.PurchaseOrderForm.formKey; };
            PurchaseOrderDialog.prototype.getIdProperty = function () { return PublisherStall.PurchaseOrderRow.idProperty; };
            PurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return PublisherStall.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderDialog.prototype.getNameProperty = function () { return PublisherStall.PurchaseOrderRow.nameProperty; };
            PurchaseOrderDialog.prototype.getService = function () { return PublisherStall.PurchaseOrderService.baseUrl; };
            PurchaseOrderDialog.prototype.getDeletePermission = function () { return PublisherStall.PurchaseOrderRow.deletePermission; };
            PurchaseOrderDialog.prototype.getInsertPermission = function () { return PublisherStall.PurchaseOrderRow.insertPermission; };
            PurchaseOrderDialog.prototype.getUpdatePermission = function () { return PublisherStall.PurchaseOrderRow.updatePermission; };
            PurchaseOrderDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                //initialization
                this.form.PaymentAmount.value = 0;
                this.form.PaymentDate.value = new Date().toDateString();
                this.form.PaymentType.value = String(LibraryManagementSolution.Common.PurchasePaymentType.Pay);
                this.form.Quantity.value = 1;
                this.form.Discount.value = 0;
                //calculation
                this.calculateSubTotal();
                this.calculateTotalPaid();
                this.calculateTotalLess();
                this.calculateTotalPayable();
                this.nextId = this.maxValue(this.form.OrderDetailList.value.length, this.maxValue(this.form.OrderPayList.value.length, this.form.OrderLessList.value.length));
            };
            PurchaseOrderDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.form.Status.value == undefined || this.form.Status.value == '') {
                    this.form.Status.value = String(LibraryManagementSolution.Common.PurchaseStatus.Draft);
                }
                if (this.form.Status.value == String(LibraryManagementSolution.Common.PurchaseStatus.Draft)) {
                    q.hideEditorCategory(this.form.PaymentDate);
                }
                else {
                    q.readOnlyEditor(this.form.TokenNo);
                    q.readOnlyEditor(this.form.PublisherId);
                    q.readOnlyEditor(this.form.OrderDate);
                    q.hideEditorCategory(this.form.BookId);
                    q.readOnlyEditor(this.form.OrderDetailList);
                    q.readOnlyEditor(this.form.ServiceCharge);
                    q.readOnlyEditor(this.form.Other);
                    q.hideField(this.form.InitialLess);
                    q.hideField(this.form.InitialPaid);
                }
                // validation checking for DetailList
                this.form.BookId.changeSelect2(function (e) {
                    var bookId = Q.toId(_this.form.BookId.value);
                    if (bookId != null) {
                        _this.form.UnitPrice.value = LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[bookId].Price;
                    }
                    _this.calculateLineTotal();
                });
                this.form.Discount.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Discount.value > 100) {
                        return "Discount can't be higher than 100% !";
                    }
                });
                this.form.UnitPrice.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Quantity.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateLineTotal();
                });
                //Details List sum
                this.form.OrderDetailList.view.onRowsOrCountChanged.subscribe(function () {
                    _this.calculateSubTotal();
                });
                this.form.OrderDetailList.view.onDataChanged.subscribe(function () {
                    _this.calculateSubTotal();
                });
                this.form.OrderPayList.view.onDataChanged.subscribe(function () {
                    _this.calculateTotalPaid();
                });
                this.form.OrderLessList.view.onDataChanged.subscribe(function () {
                    _this.calculateTotalLess();
                });
                //Change Event            
                this.form.ServiceCharge.change(function (e) {
                    _this.calculateTotalPayable();
                });
                this.form.Other.change(function (e) {
                    _this.calculateTotalPayable();
                });
                this.form.InitialLess.change(function (e) {
                    _this.form.TotalLess.value = _this.form.InitialLess.value;
                    _this.calculateTotalPayable();
                });
                this.form.InitialPaid.change(function (e) {
                    _this.form.TotalPaid.value = _this.form.InitialPaid.value;
                    _this.calculateRemainingDue();
                });
            };
            PurchaseOrderDialog.prototype.calculateLineTotal = function () {
                this.form.LineTotal.value = this.form.UnitPrice.value * this.form.Quantity.value * (1 - this.form.Discount.value / 100);
            };
            PurchaseOrderDialog.prototype.addPayment = function () {
                if (this.form.PaymentType.value == '' || this.form.PaymentType.value == null) {
                    Q.warning("Please select any payment type!");
                    return;
                }
                if (this.form.PaymentAmount.value <= 0) {
                    Q.warning("Please add amount");
                    return;
                }
                if (this.form.PaymentType.value == String(LibraryManagementSolution.Common.PurchasePaymentType.Pay)) {
                    var items = this.form.OrderPayList.getItems();
                    this.nextId++;
                    items.push({
                        __id: "``" + this.nextId,
                        PaymentDate: this.form.PaymentDate.value,
                        PaymentAmount: this.form.PaymentAmount.value
                    });
                    this.form.OrderPayList.setItems(items);
                }
                else {
                    var items = this.form.OrderLessList.getItems();
                    this.nextId++;
                    items.push({
                        __id: "``" + this.nextId,
                        PaymentDate: this.form.PaymentDate.value,
                        PaymentAmount: this.form.PaymentAmount.value
                    });
                    this.form.OrderLessList.setItems(items);
                }
                this.form.PaymentAmount.value = 0;
                this.form.PaymentDate.value = new Date().toDateString();
                this.form.PaymentType.value = String(LibraryManagementSolution.Common.PurchasePaymentType.Pay);
            };
            PurchaseOrderDialog.prototype.addOrderDetail = function () {
                var _this = this;
                if (this.form.BookId.value == '' || this.form.BookId.value == null) {
                    Q.warning("Please select any book!");
                    return;
                }
                var sameProduct = Q.tryFirst(this.form.OrderDetailList.getItems(), function (x) { return x.BookId === Q.toId(_this.form.BookId.value); });
                if (sameProduct) {
                    Q.alert('This product is already in order details!');
                    return;
                }
                if (this.form.Discount.value > 100) {
                    Q.alert("Discount can't be higher than 100 % !");
                    return;
                }
                var items = this.form.OrderDetailList.getItems();
                this.nextId++;
                items.push({
                    __id: "``" + this.nextId,
                    BookId: Q.toId(this.form.BookId.value),
                    Quantity: this.form.Quantity.value,
                    Discount: this.form.Discount.value || 0,
                    UnitPrice: this.form.UnitPrice.value,
                    LineTotal: this.form.LineTotal.value,
                    BookNameBn: LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[this.form.BookId.value].NameBn
                });
                this.form.OrderDetailList.setItems(items);
                this.form.BookId.value = null;
                this.form.Quantity.value = 1;
                this.form.Discount.value = 0;
                this.form.UnitPrice.value = 0;
                this.form.LineTotal.value = 0;
            };
            PurchaseOrderDialog.prototype.maxValue = function (a, b) {
                if (a > b) {
                    return a;
                }
                else {
                    return b;
                }
            };
            PurchaseOrderDialog.prototype.calculateSubTotal = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderDetailList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.LineTotal || 0;
                }
                this.form.SubTotal.value = this.sum;
                this.calculateTotalPayable();
            };
            PurchaseOrderDialog.prototype.calculateTotalPaid = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderPayList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.PaymentAmount || 0;
                }
                this.form.TotalPaid.value = this.form.InitialPaid.value + this.sum;
                this.calculateRemainingDue();
            };
            PurchaseOrderDialog.prototype.calculateTotalLess = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderLessList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.PaymentAmount || 0;
                }
                this.form.TotalLess.value = this.form.InitialLess.value + this.sum;
                this.calculateTotalPayable();
            };
            PurchaseOrderDialog.prototype.calculateTotalPayable = function () {
                this.sum = 0;
                this.sum = this.form.SubTotal.value
                    + this.form.ServiceCharge.value
                    + this.form.Other.value
                    - this.form.TotalLess.value;
                this.form.TotalPayable.value = this.sum;
                this.calculateRemainingDue();
            };
            PurchaseOrderDialog.prototype.calculateRemainingDue = function () {
                this.sum = this.form.TotalPayable.value - this.form.TotalPaid.value;
                this.form.RemainingDue.value = this.sum;
            };
            PurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], PurchaseOrderDialog);
            return PurchaseOrderDialog;
        }(Serenity.EntityDialog));
        PublisherStall.PurchaseOrderDialog = PurchaseOrderDialog;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderGrid, _super);
            function PurchaseOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderGrid.prototype.getColumnsKey = function () { return PublisherStall.PurchaseOrderColumns.columnsKey; };
            PurchaseOrderGrid.prototype.getDialogType = function () { return PublisherStall.PurchaseOrderDialog; };
            PurchaseOrderGrid.prototype.getIdProperty = function () { return PublisherStall.PurchaseOrderRow.idProperty; };
            PurchaseOrderGrid.prototype.getInsertPermission = function () { return PublisherStall.PurchaseOrderRow.insertPermission; };
            PurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return PublisherStall.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderGrid.prototype.getService = function () { return PublisherStall.PurchaseOrderService.baseUrl; };
            PurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderGrid);
            return PurchaseOrderGrid;
        }(Serenity.EntityGrid));
        PublisherStall.PurchaseOrderGrid = PurchaseOrderGrid;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderDetailListDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailListDialog, _super);
            function PurchaseOrderDetailListDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PublisherStall.PurchaseOrderDetailListForm(_this.idPrefix);
                return _this;
            }
            PurchaseOrderDetailListDialog.prototype.getFormKey = function () { return PublisherStall.PurchaseOrderDetailListForm.formKey; };
            PurchaseOrderDetailListDialog.prototype.getLocalTextPrefix = function () { return PublisherStall.PurchaseOrderDetailListRow.localTextPrefix; };
            PurchaseOrderDetailListDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.form.BookId.changeSelect2(function (e) {
                    var bookId = Q.toId(_this.form.BookId.value);
                    if (bookId != null) {
                        _this.form.UnitPrice.value = LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[bookId].Price;
                    }
                    _this.calculateLineTotal();
                });
                this.form.Discount.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Discount.value > 100) {
                        return "Discount can't be higher than 100% !";
                    }
                });
                this.form.UnitPrice.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Quantity.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateLineTotal();
                });
            };
            PurchaseOrderDetailListDialog.prototype.calculateLineTotal = function () {
                this.form.LineTotal.value = this.form.UnitPrice.value * this.form.Quantity.value * (1 - this.form.Discount.value / 100);
            };
            PurchaseOrderDetailListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailListDialog);
            return PurchaseOrderDetailListDialog;
        }(Serenity.Extensions.GridEditorDialog));
        PublisherStall.PurchaseOrderDetailListDialog = PurchaseOrderDetailListDialog;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderDetailListEditor = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailListEditor, _super);
            function PurchaseOrderDetailListEditor(container) {
                var _this = _super.call(this, container) || this;
                _this.element.find('.grid-toolbar').hide();
                return _this;
            }
            PurchaseOrderDetailListEditor.prototype.getColumnsKey = function () { return PublisherStall.PurchaseOrderDetailListColumns.columnsKey; };
            PurchaseOrderDetailListEditor.prototype.getDialogType = function () { return PublisherStall.PurchaseOrderDetailListDialog; };
            PurchaseOrderDetailListEditor.prototype.getLocalTextPrefix = function () { return PublisherStall.PurchaseOrderDetailListRow.localTextPrefix; };
            PurchaseOrderDetailListEditor.prototype.validateEntity = function (row, id) {
                row.BookId = Q.toId(row.BookId);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.BookId === row.BookId; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.BookNameBn = LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[row.BookId].NameBn;
                return true;
            };
            PurchaseOrderDetailListEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PurchaseOrderDetailListEditor);
            return PurchaseOrderDetailListEditor;
        }(Serenity.Extensions.GridEditorBase));
        PublisherStall.PurchaseOrderDetailListEditor = PurchaseOrderDetailListEditor;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderDetailListGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailListGrid, _super);
            function PurchaseOrderDetailListGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderDetailListGrid.prototype.getColumnsKey = function () { return PublisherStall.PurchaseOrderDetailListColumns.columnsKey; };
            PurchaseOrderDetailListGrid.prototype.getDialogType = function () { return PublisherStall.PurchaseOrderDetailListDialog; };
            PurchaseOrderDetailListGrid.prototype.getIdProperty = function () { return PublisherStall.PurchaseOrderDetailListRow.idProperty; };
            PurchaseOrderDetailListGrid.prototype.getInsertPermission = function () { return PublisherStall.PurchaseOrderDetailListRow.insertPermission; };
            PurchaseOrderDetailListGrid.prototype.getLocalTextPrefix = function () { return PublisherStall.PurchaseOrderDetailListRow.localTextPrefix; };
            PurchaseOrderDetailListGrid.prototype.getService = function () { return PublisherStall.PurchaseOrderDetailListService.baseUrl; };
            PurchaseOrderDetailListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailListGrid);
            return PurchaseOrderDetailListGrid;
        }(Serenity.EntityGrid));
        PublisherStall.PurchaseOrderDetailListGrid = PurchaseOrderDetailListGrid;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderPaymentEditor = /** @class */ (function (_super) {
            __extends(PurchaseOrderPaymentEditor, _super);
            function PurchaseOrderPaymentEditor(container) {
                var _this = _super.call(this, container) || this;
                _this.element.find('.grid-toolbar').hide();
                return _this;
            }
            PurchaseOrderPaymentEditor.prototype.getColumnsKey = function () { return PublisherStall.PurchaseOrderPaymentColumns.columnsKey; };
            PurchaseOrderPaymentEditor.prototype.getDialogType = function () { return PublisherStall.PurchaseOrderPaymentEditorDialog; };
            PurchaseOrderPaymentEditor.prototype.getLocalTextPrefix = function () { return PublisherStall.PurchaseOrderPaymentRow.localTextPrefix; };
            PurchaseOrderPaymentEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PurchaseOrderPaymentEditor);
            return PurchaseOrderPaymentEditor;
        }(Serenity.Extensions.GridEditorBase));
        PublisherStall.PurchaseOrderPaymentEditor = PurchaseOrderPaymentEditor;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderPaymentEditorDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderPaymentEditorDialog, _super);
            function PurchaseOrderPaymentEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new PublisherStall.PurchaseOrderPaymentForm(_this.idPrefix);
                _this.toolbar.findButton('.delete-button').remove();
                return _this;
            }
            PurchaseOrderPaymentEditorDialog.prototype.getFormKey = function () { return PublisherStall.PurchaseOrderPaymentForm.formKey; };
            PurchaseOrderPaymentEditorDialog.prototype.getLocalTextPrefix = function () { return PublisherStall.PurchaseOrderPaymentRow.localTextPrefix; };
            PurchaseOrderPaymentEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderPaymentEditorDialog);
            return PurchaseOrderPaymentEditorDialog;
        }(Serenity.Extensions.GridEditorDialog));
        PublisherStall.PurchaseOrderPaymentEditorDialog = PurchaseOrderPaymentEditorDialog;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var PublisherStall;
    (function (PublisherStall) {
        var PurchaseOrderPaymentGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderPaymentGrid, _super);
            function PurchaseOrderPaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderPaymentGrid.prototype.getColumnsKey = function () { return PublisherStall.PurchaseOrderPaymentColumns.columnsKey; };
            PurchaseOrderPaymentGrid.prototype.getDialogType = function () { return PublisherStall.PurchaseOrderPaymentEditorDialog; };
            PurchaseOrderPaymentGrid.prototype.getIdProperty = function () { return PublisherStall.PurchaseOrderPaymentRow.idProperty; };
            PurchaseOrderPaymentGrid.prototype.getInsertPermission = function () { return PublisherStall.PurchaseOrderPaymentRow.insertPermission; };
            PurchaseOrderPaymentGrid.prototype.getLocalTextPrefix = function () { return PublisherStall.PurchaseOrderPaymentRow.localTextPrefix; };
            PurchaseOrderPaymentGrid.prototype.getService = function () { return PublisherStall.PurchaseOrderPaymentService.baseUrl; };
            PurchaseOrderPaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderPaymentGrid);
            return PurchaseOrderPaymentGrid;
        }(Serenity.EntityGrid));
        PublisherStall.PurchaseOrderPaymentGrid = PurchaseOrderPaymentGrid;
    })(PublisherStall = LibraryManagementSolution.PublisherStall || (LibraryManagementSolution.PublisherStall = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new StallCustomer.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return StallCustomer.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return StallCustomer.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return StallCustomer.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return StallCustomer.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return StallCustomer.CustomerService.baseUrl; };
            CustomerDialog.prototype.getDeletePermission = function () { return StallCustomer.CustomerRow.deletePermission; };
            CustomerDialog.prototype.getInsertPermission = function () { return StallCustomer.CustomerRow.insertPermission; };
            CustomerDialog.prototype.getUpdatePermission = function () { return StallCustomer.CustomerRow.updatePermission; };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        StallCustomer.CustomerDialog = CustomerDialog;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return StallCustomer.CustomerColumns.columnsKey; };
            CustomerGrid.prototype.getDialogType = function () { return StallCustomer.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return StallCustomer.CustomerRow.idProperty; };
            CustomerGrid.prototype.getInsertPermission = function () { return StallCustomer.CustomerRow.insertPermission; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return StallCustomer.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return StallCustomer.CustomerService.baseUrl; };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        StallCustomer.CustomerGrid = CustomerGrid;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDialog = /** @class */ (function (_super) {
            __extends(ProductSaleDialog, _super);
            function ProductSaleDialog() {
                var _this = _super.call(this) || this;
                _this.nextId = 0;
                _this.sum = 0;
                _this.form = new StallCustomer.ProductSaleForm(_this.idPrefix);
                _this.form.AddPay.getGridField().find('.caption').text('');
                _this.form.AddPay.getGridField().find('.editor').hide();
                $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                    .insertAfter(_this.form.AddPay.element)
                    .click(function () { return _this.addPayment(); });
                _this.form.AddOrderDetail.getGridField().find('.caption').text('');
                _this.form.AddOrderDetail.getGridField().find('.editor').hide();
                $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                    .insertAfter(_this.form.AddOrderDetail.element)
                    .click(function () { return _this.addOrderDetail(); });
                return _this;
            }
            ProductSaleDialog.prototype.getFormKey = function () { return StallCustomer.ProductSaleForm.formKey; };
            ProductSaleDialog.prototype.getIdProperty = function () { return StallCustomer.ProductSaleRow.idProperty; };
            ProductSaleDialog.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSaleRow.localTextPrefix; };
            ProductSaleDialog.prototype.getNameProperty = function () { return StallCustomer.ProductSaleRow.nameProperty; };
            ProductSaleDialog.prototype.getService = function () { return StallCustomer.ProductSaleService.baseUrl; };
            ProductSaleDialog.prototype.getDeletePermission = function () { return StallCustomer.ProductSaleRow.deletePermission; };
            ProductSaleDialog.prototype.getInsertPermission = function () { return StallCustomer.ProductSaleRow.insertPermission; };
            ProductSaleDialog.prototype.getUpdatePermission = function () { return StallCustomer.ProductSaleRow.updatePermission; };
            ProductSaleDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                //initialization
                this.form.PaymentAmount.value = 0;
                this.form.PaymentDate.value = new Date().toDateString();
                this.form.PaymentType.value = String(LibraryManagementSolution.Common.PurchasePaymentType.Pay);
                this.form.Quantity.value = 1;
                this.form.Discount.value = 0;
                //calculation
                this.calculateSubTotal();
                this.calculateTotalPaid();
                this.calculateTotalLess();
                this.calculateTotalPayable();
                this.nextId = this.maxValue(this.form.OrderDetailList.value.length, this.maxValue(this.form.OrderPayList.value.length, this.form.OrderLessList.value.length));
            };
            ProductSaleDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.form.Status.value == undefined || this.form.Status.value == '') {
                    this.form.Status.value = String(LibraryManagementSolution.Common.PurchaseStatus.Draft);
                }
                if (this.form.Status.value == String(LibraryManagementSolution.Common.PurchaseStatus.Draft)) {
                    q.hideEditorCategory(this.form.PaymentDate);
                }
                else {
                    q.readOnlyEditor(this.form.TokenNo);
                    q.readOnlyEditor(this.form.CustomerId);
                    q.readOnlyEditor(this.form.SaleDate);
                    q.hideEditorCategory(this.form.BookId);
                    q.readOnlyEditor(this.form.OrderDetailList);
                    q.readOnlyEditor(this.form.ServiceCharge);
                    q.readOnlyEditor(this.form.Other);
                    q.hideField(this.form.InitialLess);
                    q.hideField(this.form.InitialPaid);
                }
                // validation checking for DetailList
                this.form.BookId.changeSelect2(function (e) {
                    var bookId = Q.toId(_this.form.BookId.value);
                    if (bookId != null) {
                        _this.form.UnitPrice.value = LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[bookId].Price;
                    }
                    _this.calculateLineTotal();
                });
                this.form.Discount.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Discount.value > 100) {
                        return "Discount can't be higher than 100% !";
                    }
                });
                this.form.UnitPrice.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Quantity.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateLineTotal();
                });
                //Details List sum
                this.form.OrderDetailList.view.onRowsOrCountChanged.subscribe(function () {
                    _this.calculateSubTotal();
                });
                this.form.OrderDetailList.view.onDataChanged.subscribe(function () {
                    _this.calculateSubTotal();
                });
                this.form.OrderPayList.view.onDataChanged.subscribe(function () {
                    _this.calculateTotalPaid();
                });
                this.form.OrderLessList.view.onDataChanged.subscribe(function () {
                    _this.calculateTotalLess();
                });
                //Change Event            
                this.form.ServiceCharge.change(function (e) {
                    _this.calculateTotalPayable();
                });
                this.form.Other.change(function (e) {
                    _this.calculateTotalPayable();
                });
                this.form.InitialLess.change(function (e) {
                    _this.form.TotalLess.value = _this.form.InitialLess.value;
                    _this.calculateTotalPayable();
                });
                this.form.InitialPaid.change(function (e) {
                    _this.form.TotalPaid.value = _this.form.InitialPaid.value;
                    _this.calculateRemainingDue();
                });
            };
            ProductSaleDialog.prototype.calculateLineTotal = function () {
                this.form.LineTotal.value = this.form.UnitPrice.value * this.form.Quantity.value * (1 - this.form.Discount.value / 100);
            };
            ProductSaleDialog.prototype.addPayment = function () {
                if (this.form.PaymentType.value == '' || this.form.PaymentType.value == null) {
                    Q.warning("Please select any payment type!");
                    return;
                }
                if (this.form.PaymentAmount.value <= 0) {
                    Q.warning("Please add amount");
                    return;
                }
                if (this.form.PaymentType.value == String(LibraryManagementSolution.Common.PurchasePaymentType.Pay)) {
                    var items = this.form.OrderPayList.getItems();
                    this.nextId++;
                    items.push({
                        __id: "``" + this.nextId,
                        PaymentDate: this.form.PaymentDate.value,
                        PaymentAmount: this.form.PaymentAmount.value
                    });
                    this.form.OrderPayList.setItems(items);
                }
                else {
                    var items = this.form.OrderLessList.getItems();
                    this.nextId++;
                    items.push({
                        __id: "``" + this.nextId,
                        PaymentDate: this.form.PaymentDate.value,
                        PaymentAmount: this.form.PaymentAmount.value
                    });
                    this.form.OrderLessList.setItems(items);
                }
                this.form.PaymentAmount.value = 0;
                this.form.PaymentDate.value = new Date().toDateString();
                this.form.PaymentType.value = String(LibraryManagementSolution.Common.PurchasePaymentType.Pay);
            };
            ProductSaleDialog.prototype.addOrderDetail = function () {
                var _this = this;
                if (this.form.BookId.value == '' || this.form.BookId.value == null) {
                    Q.warning("Please select any book!");
                    return;
                }
                var sameProduct = Q.tryFirst(this.form.OrderDetailList.getItems(), function (x) { return x.BookId === Q.toId(_this.form.BookId.value); });
                if (sameProduct) {
                    Q.alert('This product is already in order details!');
                    return;
                }
                if (this.form.Discount.value > 100) {
                    Q.alert("Discount can't be higher than 100 % !");
                    return;
                }
                var items = this.form.OrderDetailList.getItems();
                this.nextId++;
                items.push({
                    __id: "``" + this.nextId,
                    BookId: Q.toId(this.form.BookId.value),
                    Quantity: this.form.Quantity.value,
                    Discount: this.form.Discount.value || 0,
                    UnitPrice: this.form.UnitPrice.value,
                    LineTotal: this.form.LineTotal.value,
                    BookNameBn: LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[this.form.BookId.value].NameBn
                });
                this.form.OrderDetailList.setItems(items);
                this.form.BookId.value = null;
                this.form.Quantity.value = 1;
                this.form.Discount.value = 0;
                this.form.UnitPrice.value = 0;
                this.form.LineTotal.value = 0;
            };
            ProductSaleDialog.prototype.maxValue = function (a, b) {
                if (a > b) {
                    return a;
                }
                else {
                    return b;
                }
            };
            ProductSaleDialog.prototype.calculateSubTotal = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderDetailList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.LineTotal || 0;
                }
                this.form.SubTotal.value = this.sum;
                this.calculateTotalPayable();
            };
            ProductSaleDialog.prototype.calculateTotalPaid = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderPayList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.PaymentAmount || 0;
                }
                this.form.TotalPaid.value = this.form.InitialPaid.value + this.sum;
                this.calculateRemainingDue();
            };
            ProductSaleDialog.prototype.calculateTotalLess = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderLessList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.PaymentAmount || 0;
                }
                this.form.TotalLess.value = this.form.InitialLess.value + this.sum;
                this.calculateTotalPayable();
            };
            ProductSaleDialog.prototype.calculateTotalPayable = function () {
                this.sum = 0;
                this.sum = this.form.SubTotal.value
                    + this.form.ServiceCharge.value
                    + this.form.Other.value
                    - this.form.TotalLess.value;
                this.form.TotalPayable.value = this.sum;
                this.calculateRemainingDue();
            };
            ProductSaleDialog.prototype.calculateRemainingDue = function () {
                this.sum = this.form.TotalPayable.value - this.form.TotalPaid.value;
                this.form.RemainingDue.value = this.sum;
            };
            ProductSaleDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductSaleDialog);
            return ProductSaleDialog;
        }(Serenity.EntityDialog));
        StallCustomer.ProductSaleDialog = ProductSaleDialog;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleGrid = /** @class */ (function (_super) {
            __extends(ProductSaleGrid, _super);
            function ProductSaleGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductSaleGrid.prototype.getColumnsKey = function () { return StallCustomer.ProductSaleColumns.columnsKey; };
            ProductSaleGrid.prototype.getDialogType = function () { return StallCustomer.ProductSaleDialog; };
            ProductSaleGrid.prototype.getIdProperty = function () { return StallCustomer.ProductSaleRow.idProperty; };
            ProductSaleGrid.prototype.getInsertPermission = function () { return StallCustomer.ProductSaleRow.insertPermission; };
            ProductSaleGrid.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSaleRow.localTextPrefix; };
            ProductSaleGrid.prototype.getService = function () { return StallCustomer.ProductSaleService.baseUrl; };
            ProductSaleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSaleGrid);
            return ProductSaleGrid;
        }(Serenity.EntityGrid));
        StallCustomer.ProductSaleGrid = ProductSaleGrid;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDetailDialog = /** @class */ (function (_super) {
            __extends(ProductSaleDetailDialog, _super);
            function ProductSaleDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new StallCustomer.ProductSaleDetailForm(_this.idPrefix);
                return _this;
            }
            ProductSaleDetailDialog.prototype.getFormKey = function () { return StallCustomer.ProductSaleDetailForm.formKey; };
            ProductSaleDetailDialog.prototype.getIdProperty = function () { return StallCustomer.ProductSaleDetailRow.idProperty; };
            ProductSaleDetailDialog.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSaleDetailRow.localTextPrefix; };
            ProductSaleDetailDialog.prototype.getService = function () { return StallCustomer.ProductSaleDetailService.baseUrl; };
            ProductSaleDetailDialog.prototype.getDeletePermission = function () { return StallCustomer.ProductSaleDetailRow.deletePermission; };
            ProductSaleDetailDialog.prototype.getInsertPermission = function () { return StallCustomer.ProductSaleDetailRow.insertPermission; };
            ProductSaleDetailDialog.prototype.getUpdatePermission = function () { return StallCustomer.ProductSaleDetailRow.updatePermission; };
            ProductSaleDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSaleDetailDialog);
            return ProductSaleDetailDialog;
        }(Serenity.EntityDialog));
        StallCustomer.ProductSaleDetailDialog = ProductSaleDetailDialog;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDetailEditor = /** @class */ (function (_super) {
            __extends(ProductSaleDetailEditor, _super);
            function ProductSaleDetailEditor(container) {
                var _this = _super.call(this, container) || this;
                _this.element.find('.grid-toolbar').hide();
                return _this;
            }
            ProductSaleDetailEditor.prototype.getColumnsKey = function () { return StallCustomer.ProductSaleDetailColumns.columnsKey; };
            ProductSaleDetailEditor.prototype.getDialogType = function () { return StallCustomer.ProductSaleDetailEditorDialog; };
            ProductSaleDetailEditor.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSaleDetailRow.localTextPrefix; };
            ProductSaleDetailEditor.prototype.validateEntity = function (row, id) {
                row.BookId = Q.toId(row.BookId);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.BookId === row.BookId; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.BookNameBn = LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[row.BookId].NameBn;
                return true;
            };
            ProductSaleDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProductSaleDetailEditor);
            return ProductSaleDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        StallCustomer.ProductSaleDetailEditor = ProductSaleDetailEditor;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDetailEditorDialog = /** @class */ (function (_super) {
            __extends(ProductSaleDetailEditorDialog, _super);
            function ProductSaleDetailEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new StallCustomer.ProductSaleDetailForm(_this.idPrefix);
                return _this;
            }
            ProductSaleDetailEditorDialog.prototype.getFormKey = function () { return StallCustomer.ProductSaleDetailForm.formKey; };
            ProductSaleDetailEditorDialog.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSaleDetailRow.localTextPrefix; };
            ProductSaleDetailEditorDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.form.BookId.changeSelect2(function (e) {
                    var bookId = Q.toId(_this.form.BookId.value);
                    if (bookId != null) {
                        _this.form.UnitPrice.value = LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[bookId].Price;
                    }
                    _this.calculateLineTotal();
                });
                this.form.Discount.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Discount.value > 100) {
                        return "Discount can't be higher than 100% !";
                    }
                });
                this.form.UnitPrice.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Quantity.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateLineTotal();
                });
            };
            ProductSaleDetailEditorDialog.prototype.calculateLineTotal = function () {
                this.form.LineTotal.value = this.form.UnitPrice.value * this.form.Quantity.value * (1 - this.form.Discount.value / 100);
            };
            ProductSaleDetailEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSaleDetailEditorDialog);
            return ProductSaleDetailEditorDialog;
        }(Serenity.Extensions.GridEditorDialog));
        StallCustomer.ProductSaleDetailEditorDialog = ProductSaleDetailEditorDialog;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSaleDetailGrid = /** @class */ (function (_super) {
            __extends(ProductSaleDetailGrid, _super);
            function ProductSaleDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductSaleDetailGrid.prototype.getColumnsKey = function () { return StallCustomer.ProductSaleDetailColumns.columnsKey; };
            ProductSaleDetailGrid.prototype.getDialogType = function () { return StallCustomer.ProductSaleDetailDialog; };
            ProductSaleDetailGrid.prototype.getIdProperty = function () { return StallCustomer.ProductSaleDetailRow.idProperty; };
            ProductSaleDetailGrid.prototype.getInsertPermission = function () { return StallCustomer.ProductSaleDetailRow.insertPermission; };
            ProductSaleDetailGrid.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSaleDetailRow.localTextPrefix; };
            ProductSaleDetailGrid.prototype.getService = function () { return StallCustomer.ProductSaleDetailService.baseUrl; };
            ProductSaleDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSaleDetailGrid);
            return ProductSaleDetailGrid;
        }(Serenity.EntityGrid));
        StallCustomer.ProductSaleDetailGrid = ProductSaleDetailGrid;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSalePaymentDialog = /** @class */ (function (_super) {
            __extends(ProductSalePaymentDialog, _super);
            function ProductSalePaymentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new StallCustomer.ProductSalePaymentForm(_this.idPrefix);
                return _this;
            }
            ProductSalePaymentDialog.prototype.getFormKey = function () { return StallCustomer.ProductSalePaymentForm.formKey; };
            ProductSalePaymentDialog.prototype.getIdProperty = function () { return StallCustomer.ProductSalePaymentRow.idProperty; };
            ProductSalePaymentDialog.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSalePaymentRow.localTextPrefix; };
            ProductSalePaymentDialog.prototype.getService = function () { return StallCustomer.ProductSalePaymentService.baseUrl; };
            ProductSalePaymentDialog.prototype.getDeletePermission = function () { return StallCustomer.ProductSalePaymentRow.deletePermission; };
            ProductSalePaymentDialog.prototype.getInsertPermission = function () { return StallCustomer.ProductSalePaymentRow.insertPermission; };
            ProductSalePaymentDialog.prototype.getUpdatePermission = function () { return StallCustomer.ProductSalePaymentRow.updatePermission; };
            ProductSalePaymentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSalePaymentDialog);
            return ProductSalePaymentDialog;
        }(Serenity.EntityDialog));
        StallCustomer.ProductSalePaymentDialog = ProductSalePaymentDialog;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSalePaymentEditor = /** @class */ (function (_super) {
            __extends(ProductSalePaymentEditor, _super);
            function ProductSalePaymentEditor(container) {
                var _this = _super.call(this, container) || this;
                _this.element.find('.grid-toolbar').hide();
                return _this;
            }
            ProductSalePaymentEditor.prototype.getColumnsKey = function () { return StallCustomer.ProductSalePaymentColumns.columnsKey; };
            ProductSalePaymentEditor.prototype.getDialogType = function () { return StallCustomer.ProductSalePaymentEditorDialog; };
            ProductSalePaymentEditor.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSalePaymentRow.localTextPrefix; };
            ProductSalePaymentEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProductSalePaymentEditor);
            return ProductSalePaymentEditor;
        }(Serenity.Extensions.GridEditorBase));
        StallCustomer.ProductSalePaymentEditor = ProductSalePaymentEditor;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSalePaymentEditorDialog = /** @class */ (function (_super) {
            __extends(ProductSalePaymentEditorDialog, _super);
            function ProductSalePaymentEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new StallCustomer.ProductSalePaymentForm(_this.idPrefix);
                _this.toolbar.findButton('.delete-button').remove();
                return _this;
            }
            ProductSalePaymentEditorDialog.prototype.getFormKey = function () { return StallCustomer.ProductSalePaymentForm.formKey; };
            ProductSalePaymentEditorDialog.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSalePaymentRow.localTextPrefix; };
            ProductSalePaymentEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSalePaymentEditorDialog);
            return ProductSalePaymentEditorDialog;
        }(Serenity.Extensions.GridEditorDialog));
        StallCustomer.ProductSalePaymentEditorDialog = ProductSalePaymentEditorDialog;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ProductSalePaymentGrid = /** @class */ (function (_super) {
            __extends(ProductSalePaymentGrid, _super);
            function ProductSalePaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductSalePaymentGrid.prototype.getColumnsKey = function () { return StallCustomer.ProductSalePaymentColumns.columnsKey; };
            ProductSalePaymentGrid.prototype.getDialogType = function () { return StallCustomer.ProductSalePaymentDialog; };
            ProductSalePaymentGrid.prototype.getIdProperty = function () { return StallCustomer.ProductSalePaymentRow.idProperty; };
            ProductSalePaymentGrid.prototype.getInsertPermission = function () { return StallCustomer.ProductSalePaymentRow.insertPermission; };
            ProductSalePaymentGrid.prototype.getLocalTextPrefix = function () { return StallCustomer.ProductSalePaymentRow.localTextPrefix; };
            ProductSalePaymentGrid.prototype.getService = function () { return StallCustomer.ProductSalePaymentService.baseUrl; };
            ProductSalePaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSalePaymentGrid);
            return ProductSalePaymentGrid;
        }(Serenity.EntityGrid));
        StallCustomer.ProductSalePaymentGrid = ProductSalePaymentGrid;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var q;
(function (q) {
    function setGridEditorHeight(editor, heightInPx) {
        editor.css('height', heightInPx + 'px');
        editor.find('.grid-container')
            .css('height', (heightInPx - 25) + 'px')
            .height(heightInPx);
    }
    q.setGridEditorHeight = setGridEditorHeight;
    function addNotificationIcon(editor, isSuccess) {
        var isAddOnInitialized = editor.element.data('isAddOnInitialized');
        if (isAddOnInitialized != true) {
            editor.element.after('<span class="text text-danger" style="padding:3px"><i class="fa fa-times"></i></span>');
            editor.element.data('isAddOnInitialized', true);
        }
        if (isSuccess == true) {
            editor.element.switchClass('bg-danger', 'bg-success')
                .siblings('.text').switchClass('text-danger', 'text-success')
                .children().switchClass('fa-times', 'fa-check');
        }
        else {
            editor.element.switchClass('bg-success', 'bg-danger')
                .siblings('.text').switchClass('text-success', 'text-danger')
                .children().switchClass('fa-check', 'fa-times');
        }
    }
    q.addNotificationIcon = addNotificationIcon;
    function addPopoverIcon(editor, isSuccess, popoverOptions) {
        addNotificationIcon(editor, isSuccess);
        //(editor.element as any).popover('destroy');
        editor.element.siblings('.text').popover('destroy');
        setTimeout(function (h) {
            //(editor.element as any).popover(popoverOptions);
            editor.element.siblings('.text')
                .popover(popoverOptions)
                .on("show.bs.popover", function () { $(this).data("bs.popover").tip().css("width", "600px"); });
            ;
        }, 100);
    }
    q.addPopoverIcon = addPopoverIcon;
    function setEditorLabel(editor, value) {
        editor.element.siblings('label').text(value);
    }
    q.setEditorLabel = setEditorLabel;
    function hideEditorLabel(editor) {
        editor.element.siblings('label').hide();
    }
    q.hideEditorLabel = hideEditorLabel;
    function setEditorCategoryLabel(editor, value) {
        var categoryAnchor = editor.element.closest('.category').find('.category-anchor');
        categoryAnchor.text(value);
        var categoryAnchorName = categoryAnchor.attr('name');
        categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").text(value);
    }
    q.setEditorCategoryLabel = setEditorCategoryLabel;
    function hideEditorCategory(editor, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            editor.element.closest('.category').hide();
        else
            editor.element.closest('.category').show();
        var categoryAnchor = editor.element.closest('.category').find('.category-anchor');
        var categoryAnchorName = categoryAnchor.attr('name');
        if (value == true)
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").hide();
        else
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").show();
    }
    q.hideEditorCategory = hideEditorCategory;
    function hideCategories(containerElement, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            containerElement.find('.category').hide();
        else
            containerElement.find('.category').show();
        var categoryAnchor = containerElement.find('.category').find('.category-anchor');
        var categoryAnchorName = categoryAnchor.attr('name');
        if (value == true)
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").hide();
        else
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").show();
    }
    q.hideCategories = hideCategories;
    function hideFields(containerElement, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            containerElement.find('.field').hide();
        else
            containerElement.find('.field').show();
    }
    q.hideFields = hideFields;
    function hideFieldsAndCategories(containerElement, value) {
        if (value === void 0) { value = true; }
        hideFields(containerElement);
        hideCategories(containerElement);
    }
    q.hideFieldsAndCategories = hideFieldsAndCategories;
    function hideField(editor, value) {
        if (value === void 0) { value = true; }
        if (editor) {
            if (value == true)
                editor.element.closest('.field').hide();
            else
                editor.element.closest('.field').show();
        }
    }
    q.hideField = hideField;
    function showField(editor, value) {
        if (value === void 0) { value = true; }
        if (editor) {
            if (value == true)
                editor.element.closest('.field').show();
            else
                editor.element.closest('.field').hide();
        }
    }
    q.showField = showField;
    function showAndEnableField(editor) {
        q.showField(editor);
        Serenity.EditorUtils.setReadOnly(editor, false);
    }
    q.showAndEnableField = showAndEnableField;
    function showFieldAndCategory(editor, value) {
        if (value === void 0) { value = true; }
        showField(editor, value);
        if (value == true)
            hideEditorCategory(editor, false);
    }
    q.showFieldAndCategory = showFieldAndCategory;
    function hideEditorTab(editor, value) {
        if (value === void 0) { value = true; }
        if (value) {
            var tabId = editor.element.closest('.tab-pane').hide().attr('id');
            var tabAnchor = editor.element.closest('.s-PropertyGrid').find("a[href='#" + tabId + "']");
            tabAnchor.closest('li').hide();
        }
        else {
            var tabId = editor.element.closest('.tab-pane').show().attr('id');
            var tabAnchor = editor.element.closest('.s-PropertyGrid').find("a[href='#" + tabId + "']");
            tabAnchor.closest('li').show();
        }
    }
    q.hideEditorTab = hideEditorTab;
    function disableEditorTab(editor, value) {
        if (value === void 0) { value = true; }
        var tabId = editor.element.closest('.tab-pane').attr('id');
        var tabAnchor = editor.element.closest('.s-PropertyGrid').find("a[href='#" + tabId + "']");
        var tabLi = tabAnchor.closest('li');
        if (value == true) {
            tabAnchor.hide();
            tabLi.closest('li').addClass('disabled').prepend("<a class=\"disabled\">" + tabAnchor.text() + "</label>");
        }
        else {
            tabAnchor.show();
            tabLi.closest('li').removeClass('disabled').find('.disabled').remove();
        }
    }
    q.disableEditorTab = disableEditorTab;
    function readOnlyEditorTab(editor, value) {
        if (value === void 0) { value = true; }
        var $editors = editor.element.closest('.tab-pane').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readOnlyEditorTab = readOnlyEditorTab;
    function readOnlyEditorCategory(editor, value) {
        if (value === void 0) { value = true; }
        var $editors = editor.element.closest('.category').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readOnlyEditorCategory = readOnlyEditorCategory;
    function readonlyEditorCategory($editor, value) {
        if (value === void 0) { value = true; }
        var $editors = $editor.closest('.category').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readonlyEditorCategory = readonlyEditorCategory;
    function readOnlyEditorPropertyGrid(editor, value) {
        if (value === void 0) { value = true; }
        var $editors = editor.element.closest('.s-PropertyGrid').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readOnlyEditorPropertyGrid = readOnlyEditorPropertyGrid;
    function readonlyEditorPropertyGrid($editor, value) {
        if (value === void 0) { value = true; }
        var $editors = $editor.closest('.s-PropertyGrid').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readonlyEditorPropertyGrid = readonlyEditorPropertyGrid;
    function readOnlyEditor(editor, value) {
        if (value === void 0) { value = true; }
        Serenity.EditorUtils.setReadOnly(editor, value);
    }
    q.readOnlyEditor = readOnlyEditor;
    function readonlyEditor($editor, value) {
        if (value === void 0) { value = true; }
        Serenity.EditorUtils.setReadonly($editor, value);
    }
    q.readonlyEditor = readonlyEditor;
    function moveEditorFromTab(editor, toElement, isPrepend) {
        if (isPrepend === void 0) { isPrepend = false; }
        var fieldDiv = editor.element.closest('.field');
        if (isPrepend == true)
            fieldDiv.prependTo(toElement);
        else
            fieldDiv.appendTo(toElement);
    }
    q.moveEditorFromTab = moveEditorFromTab;
    function moveEditorCategoryFromTab(editor, toElement, isPrepend) {
        if (isPrepend === void 0) { isPrepend = false; }
        var fieldDiv = editor.element.closest('.field');
        var categoryDiv = editor.element.closest('.category');
        if (isPrepend == true)
            categoryDiv.prependTo(toElement);
        else
            categoryDiv.appendTo(toElement);
        //hide category navigation link
        var categoryAnchor = categoryDiv.find('.category-anchor');
        var categoryAnchorName = categoryAnchor.attr('name');
        categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").hide();
    }
    q.moveEditorCategoryFromTab = moveEditorCategoryFromTab;
    function selectEditorTab(editor) {
        var tabId = editor.element.closest('.tab-pane').attr('id');
        var tabAnchor = editor.element.closest('.s-PropertyGrid').find("a[href='#" + tabId + "']");
        tabAnchor.tab('show');
    }
    q.selectEditorTab = selectEditorTab;
})(q || (q = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ReturnOrExchangeDialog = /** @class */ (function (_super) {
            __extends(ReturnOrExchangeDialog, _super);
            function ReturnOrExchangeDialog() {
                var _this = _super.call(this) || this;
                _this.nextId = 0;
                _this.sum = 0;
                _this.form = new StallCustomer.ReturnOrExchangeForm(_this.idPrefix);
                _this.form.AddPay.getGridField().find('.caption').text('');
                _this.form.AddPay.getGridField().find('.editor').hide();
                $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                    .insertAfter(_this.form.AddPay.element)
                    .click(function () { return _this.addPayment(); });
                _this.form.AddOrderDetail.getGridField().find('.caption').text('');
                _this.form.AddOrderDetail.getGridField().find('.editor').hide();
                $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                    .insertAfter(_this.form.AddOrderDetail.element)
                    .click(function () { return _this.addOrderDetail(); });
                _this.form.AddOrderDetail2.getGridField().find('.caption').text('');
                _this.form.AddOrderDetail2.getGridField().find('.editor').hide();
                $('<button type="button"><span><i class="fa fa-plus-circle text-green"></i> <b>Add</b></span></button>')
                    .insertAfter(_this.form.AddOrderDetail2.element)
                    .click(function () { return _this.addOrderDetail2(); });
                return _this;
            }
            ReturnOrExchangeDialog.prototype.getFormKey = function () { return StallCustomer.ReturnOrExchangeForm.formKey; };
            ReturnOrExchangeDialog.prototype.getIdProperty = function () { return StallCustomer.ReturnOrExchangeRow.idProperty; };
            ReturnOrExchangeDialog.prototype.getLocalTextPrefix = function () { return StallCustomer.ReturnOrExchangeRow.localTextPrefix; };
            ReturnOrExchangeDialog.prototype.getNameProperty = function () { return StallCustomer.ReturnOrExchangeRow.nameProperty; };
            ReturnOrExchangeDialog.prototype.getService = function () { return StallCustomer.ReturnOrExchangeService.baseUrl; };
            ReturnOrExchangeDialog.prototype.getDeletePermission = function () { return StallCustomer.ReturnOrExchangeRow.deletePermission; };
            ReturnOrExchangeDialog.prototype.getInsertPermission = function () { return StallCustomer.ReturnOrExchangeRow.insertPermission; };
            ReturnOrExchangeDialog.prototype.getUpdatePermission = function () { return StallCustomer.ReturnOrExchangeRow.updatePermission; };
            ReturnOrExchangeDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                //initialization
                this.form.PaymentAmount.value = 0;
                this.form.PaymentDate.value = new Date().toDateString();
                this.form.PaymentType.value = String(LibraryManagementSolution.Common.PurchasePaymentType.Pay);
                this.form.Quantity.value = 1;
                this.form.Discount.value = 0;
                this.form.Quantity2.value = 1;
                this.form.Discount2.value = 0;
                //calculation
                this.calculateSubTotal();
                this.calculateTotalPaid();
                this.calculateTotalLess();
                this.calculateTotalPayable();
                this.nextId = this.maxValue(this.maxValue(this.form.OrderDetailList.value.length, this.form.ReturnBookList.value.length), this.maxValue(this.form.OrderPayList.value.length, this.form.OrderLessList.value.length));
            };
            ReturnOrExchangeDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.form.Status.value == undefined || this.form.Status.value == '') {
                    this.form.Status.value = String(LibraryManagementSolution.Common.PurchaseStatus.Draft);
                }
                if (this.form.Status.value == String(LibraryManagementSolution.Common.PurchaseStatus.Draft)) {
                    q.hideEditorCategory(this.form.PaymentDate);
                }
                else {
                    q.readOnlyEditor(this.form.TokenNo);
                    q.readOnlyEditor(this.form.CustomerId);
                    q.readOnlyEditor(this.form.SaleDate);
                    q.hideEditorCategory(this.form.BookId);
                    q.readOnlyEditor(this.form.OrderDetailList);
                    q.readOnlyEditor(this.form.ServiceCharge);
                    q.readOnlyEditor(this.form.Other);
                    q.hideField(this.form.InitialLess);
                    q.hideField(this.form.InitialPaid);
                }
                // validation checking for DetailList
                this.form.BookId.changeSelect2(function (e) {
                    var bookId = Q.toId(_this.form.BookId.value);
                    if (bookId != null) {
                        _this.form.UnitPrice.value = LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[bookId].Price;
                    }
                    _this.calculateLineTotal();
                });
                this.form.Discount.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Discount.value > 100) {
                        return "Discount can't be higher than 100% !";
                    }
                });
                this.form.UnitPrice.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Quantity.changeSelect2(function (e) {
                    _this.calculateLineTotal();
                });
                this.form.Discount.change(function (e) {
                    _this.calculateLineTotal();
                });
                // validation checking for ReturnList
                this.form.BookId2.changeSelect2(function (e) {
                    var bookId = Q.toId(_this.form.BookId2.value);
                    if (bookId != null) {
                        _this.form.UnitPrice2.value = LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[bookId].Price;
                    }
                    _this.calculateLineTotal2();
                });
                this.form.Discount2.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Discount2.value > 100) {
                        return "Discount can't be higher than 100% !";
                    }
                });
                this.form.UnitPrice2.changeSelect2(function (e) {
                    _this.calculateLineTotal2();
                });
                this.form.Quantity2.changeSelect2(function (e) {
                    _this.calculateLineTotal2();
                });
                this.form.Discount2.change(function (e) {
                    _this.calculateLineTotal2();
                });
                //Details List sum
                this.form.OrderDetailList.view.onRowsOrCountChanged.subscribe(function () {
                    _this.calculateSubTotal();
                });
                this.form.OrderDetailList.view.onDataChanged.subscribe(function () {
                    _this.calculateSubTotal();
                });
                this.form.OrderPayList.view.onDataChanged.subscribe(function () {
                    _this.calculateTotalPaid();
                });
                this.form.OrderLessList.view.onDataChanged.subscribe(function () {
                    _this.calculateTotalLess();
                });
                //Change Event            
                this.form.ServiceCharge.change(function (e) {
                    _this.calculateTotalPayable();
                });
                this.form.Other.change(function (e) {
                    _this.calculateTotalPayable();
                });
                this.form.InitialLess.change(function (e) {
                    _this.form.TotalLess.value = _this.form.InitialLess.value;
                    _this.calculateTotalPayable();
                });
                this.form.InitialPaid.change(function (e) {
                    _this.form.TotalPaid.value = _this.form.InitialPaid.value;
                    _this.calculateRemainingDue();
                });
            };
            ReturnOrExchangeDialog.prototype.calculateLineTotal = function () {
                this.form.LineTotal.value = this.form.UnitPrice.value * this.form.Quantity.value * (1 - this.form.Discount.value / 100);
            };
            ReturnOrExchangeDialog.prototype.calculateLineTotal2 = function () {
                this.form.LineTotal2.value = this.form.UnitPrice2.value * this.form.Quantity2.value * (1 - this.form.Discount2.value / 100);
            };
            ReturnOrExchangeDialog.prototype.addPayment = function () {
                if (this.form.PaymentType.value == '' || this.form.PaymentType.value == null) {
                    Q.warning("Please select any payment type!");
                    return;
                }
                if (this.form.PaymentAmount.value <= 0) {
                    Q.warning("Please add amount");
                    return;
                }
                if (this.form.PaymentType.value == String(LibraryManagementSolution.Common.PurchasePaymentType.Pay)) {
                    var items = this.form.OrderPayList.getItems();
                    this.nextId++;
                    items.push({
                        __id: "``" + this.nextId,
                        PaymentDate: this.form.PaymentDate.value,
                        PaymentAmount: this.form.PaymentAmount.value
                    });
                    this.form.OrderPayList.setItems(items);
                }
                else {
                    var items = this.form.OrderLessList.getItems();
                    this.nextId++;
                    items.push({
                        __id: "``" + this.nextId,
                        PaymentDate: this.form.PaymentDate.value,
                        PaymentAmount: this.form.PaymentAmount.value
                    });
                    this.form.OrderLessList.setItems(items);
                }
                this.form.PaymentAmount.value = 0;
                this.form.PaymentDate.value = new Date().toDateString();
                this.form.PaymentType.value = String(LibraryManagementSolution.Common.PurchasePaymentType.Pay);
            };
            ReturnOrExchangeDialog.prototype.addOrderDetail = function () {
                var _this = this;
                if (this.form.BookId.value == '' || this.form.BookId.value == null) {
                    Q.warning("Please select any book!");
                    return;
                }
                var sameProduct = Q.tryFirst(this.form.OrderDetailList.getItems(), function (x) { return x.BookId === Q.toId(_this.form.BookId.value); });
                if (sameProduct) {
                    Q.alert('This product is already in order details!');
                    return;
                }
                if (this.form.Discount.value > 100) {
                    Q.alert("Discount can't be higher than 100 % !");
                    return;
                }
                var items = this.form.OrderDetailList.getItems();
                this.nextId++;
                items.push({
                    __id: "``" + this.nextId,
                    BookId: Q.toId(this.form.BookId.value),
                    Quantity: this.form.Quantity.value,
                    Discount: this.form.Discount.value || 0,
                    UnitPrice: this.form.UnitPrice.value,
                    LineTotal: this.form.LineTotal.value,
                    BookNameBn: LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[this.form.BookId.value].NameBn
                });
                this.form.OrderDetailList.setItems(items);
                this.form.BookId.value = null;
                this.form.Quantity.value = 1;
                this.form.Discount.value = 0;
                this.form.UnitPrice.value = 0;
                this.form.LineTotal.value = 0;
            };
            ReturnOrExchangeDialog.prototype.addOrderDetail2 = function () {
                var _this = this;
                if (this.form.BookId2.value == '' || this.form.BookId2.value == null) {
                    Q.warning("Please select any book!");
                    return;
                }
                var sameProduct = Q.tryFirst(this.form.ReturnBookList.getItems(), function (x) { return x.BookId === Q.toId(_this.form.BookId2.value); });
                if (sameProduct) {
                    Q.alert('This product is already in order details!');
                    return;
                }
                if (this.form.Discount2.value > 100) {
                    Q.alert("Discount can't be higher than 100 % !");
                    return;
                }
                var items = this.form.ReturnBookList.getItems();
                this.nextId++;
                items.push({
                    __id: "``" + this.nextId,
                    BookId: Q.toId(this.form.BookId2.value),
                    Quantity: this.form.Quantity2.value,
                    Discount: this.form.Discount2.value || 0,
                    UnitPrice: this.form.UnitPrice2.value,
                    LineTotal: this.form.LineTotal2.value,
                    BookNameBn: LibraryManagementSolution.AdminManagement.BookRow.getLookup().itemById[this.form.BookId2.value].NameBn
                });
                this.form.ReturnBookList.setItems(items);
                this.form.BookId2.value = null;
                this.form.Quantity2.value = 1;
                this.form.Discount2.value = 0;
                this.form.UnitPrice2.value = 0;
                this.form.LineTotal2.value = 0;
            };
            ReturnOrExchangeDialog.prototype.maxValue = function (a, b) {
                if (a > b) {
                    return a;
                }
                else {
                    return b;
                }
            };
            ReturnOrExchangeDialog.prototype.calculateSubTotal = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderDetailList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.LineTotal || 0;
                }
                this.form.SubTotal.value = this.sum;
                this.calculateTotalPayable();
            };
            ReturnOrExchangeDialog.prototype.calculateTotalPaid = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderPayList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.PaymentAmount || 0;
                }
                this.form.TotalPaid.value = this.form.InitialPaid.value + this.sum;
                this.calculateRemainingDue();
            };
            ReturnOrExchangeDialog.prototype.calculateTotalLess = function () {
                this.sum = 0;
                for (var _i = 0, _a = this.form.OrderLessList.getItems(); _i < _a.length; _i++) {
                    var k = _a[_i];
                    this.sum += k.PaymentAmount || 0;
                }
                this.form.TotalLess.value = this.form.InitialLess.value + this.sum;
                this.calculateTotalPayable();
            };
            ReturnOrExchangeDialog.prototype.calculateTotalPayable = function () {
                this.sum = 0;
                this.sum = this.form.SubTotal.value
                    + this.form.ServiceCharge.value
                    + this.form.Other.value
                    - this.form.TotalLess.value;
                this.form.TotalPayable.value = this.sum;
                this.calculateRemainingDue();
            };
            ReturnOrExchangeDialog.prototype.calculateRemainingDue = function () {
                this.sum = this.form.TotalPayable.value - this.form.TotalPaid.value;
                this.form.RemainingDue.value = this.sum;
            };
            ReturnOrExchangeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ReturnOrExchangeDialog);
            return ReturnOrExchangeDialog;
        }(Serenity.EntityDialog));
        StallCustomer.ReturnOrExchangeDialog = ReturnOrExchangeDialog;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ReturnOrExchangeGrid = /** @class */ (function (_super) {
            __extends(ReturnOrExchangeGrid, _super);
            function ReturnOrExchangeGrid(container) {
                return _super.call(this, container) || this;
            }
            ReturnOrExchangeGrid.prototype.getColumnsKey = function () { return StallCustomer.ReturnOrExchangeColumns.columnsKey; };
            ReturnOrExchangeGrid.prototype.getDialogType = function () { return StallCustomer.ReturnOrExchangeDialog; };
            ReturnOrExchangeGrid.prototype.getIdProperty = function () { return StallCustomer.ReturnOrExchangeRow.idProperty; };
            ReturnOrExchangeGrid.prototype.getInsertPermission = function () { return StallCustomer.ReturnOrExchangeRow.insertPermission; };
            ReturnOrExchangeGrid.prototype.getLocalTextPrefix = function () { return StallCustomer.ReturnOrExchangeRow.localTextPrefix; };
            ReturnOrExchangeGrid.prototype.getService = function () { return StallCustomer.ReturnOrExchangeService.baseUrl; };
            ReturnOrExchangeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReturnOrExchangeGrid);
            return ReturnOrExchangeGrid;
        }(Serenity.EntityGrid));
        StallCustomer.ReturnOrExchangeGrid = ReturnOrExchangeGrid;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ReturnOrExchangeColumns = /** @class */ (function () {
            function ReturnOrExchangeColumns() {
            }
            ReturnOrExchangeColumns.columnsKey = 'StallCustomer.ReturnOrExchange';
            return ReturnOrExchangeColumns;
        }());
        StallCustomer.ReturnOrExchangeColumns = ReturnOrExchangeColumns;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ReturnOrExchangeForm = /** @class */ (function (_super) {
            __extends(ReturnOrExchangeForm, _super);
            function ReturnOrExchangeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReturnOrExchangeForm.init) {
                    ReturnOrExchangeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = StallCustomer.ProductSaleDetailEditor;
                    var w6 = s.EnumEditor;
                    var w7 = StallCustomer.ProductSalePaymentEditor;
                    Q.initFormType(ReturnOrExchangeForm, [
                        'TokenNo', w0,
                        'CustomerId', w1,
                        'SaleDate', w2,
                        'BookId2', w1,
                        'Quantity2', w3,
                        'Discount2', w3,
                        'UnitPrice2', w4,
                        'AddOrderDetail2', w0,
                        'LineTotal2', w4,
                        'ReturnBookList', w5,
                        'BookId', w1,
                        'Quantity', w3,
                        'Discount', w3,
                        'UnitPrice', w4,
                        'AddOrderDetail', w0,
                        'LineTotal', w4,
                        'OrderDetailList', w5,
                        'SubTotal', w4,
                        'Status', w6,
                        'ServiceCharge', w4,
                        'Other', w4,
                        'InitialLess', w4,
                        'TotalLess', w4,
                        'TotalPayable', w4,
                        'InitialPaid', w4,
                        'TotalPaid', w4,
                        'RemainingDue', w4,
                        'PaymentDate', w2,
                        'PaymentAmount', w4,
                        'PaymentType', w6,
                        'AddPay', w0,
                        'OrderPayList', w7,
                        'CashBackList', w7,
                        'OrderLessList', w7,
                        'PreparedBy', w0
                    ]);
                }
                return _this;
            }
            ReturnOrExchangeForm.formKey = 'StallCustomer.ReturnOrExchange';
            return ReturnOrExchangeForm;
        }(Serenity.PrefixedContext));
        StallCustomer.ReturnOrExchangeForm = ReturnOrExchangeForm;
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ReturnOrExchangeRow;
        (function (ReturnOrExchangeRow) {
            ReturnOrExchangeRow.idProperty = 'ProductSaleId';
            ReturnOrExchangeRow.nameProperty = 'TokenNo';
            ReturnOrExchangeRow.localTextPrefix = 'StallCustomer.ReturnOrExchange';
            ReturnOrExchangeRow.deletePermission = 'Administration:General';
            ReturnOrExchangeRow.insertPermission = 'Administration:General';
            ReturnOrExchangeRow.readPermission = 'Administration:General';
            ReturnOrExchangeRow.updatePermission = 'Administration:General';
        })(ReturnOrExchangeRow = StallCustomer.ReturnOrExchangeRow || (StallCustomer.ReturnOrExchangeRow = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
var LibraryManagementSolution;
(function (LibraryManagementSolution) {
    var StallCustomer;
    (function (StallCustomer) {
        var ReturnOrExchangeService;
        (function (ReturnOrExchangeService) {
            ReturnOrExchangeService.baseUrl = 'StallCustomer/ReturnOrExchange';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReturnOrExchangeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReturnOrExchangeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReturnOrExchangeService = StallCustomer.ReturnOrExchangeService || (StallCustomer.ReturnOrExchangeService = {}));
    })(StallCustomer = LibraryManagementSolution.StallCustomer || (LibraryManagementSolution.StallCustomer = {}));
})(LibraryManagementSolution || (LibraryManagementSolution = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5XZWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LkF1dGhvckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LkF1dGhvckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LkF1dGhvclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuQXV0aG9yU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuQm9va0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LkJvb2tGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5Cb29rUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5Cb29rU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuQ2F0ZWdvcnlDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5DYXRlZ29yeUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LkNhdGVnb3J5Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5DYXRlZ29yeVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LkNvdW50cnlDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5Db3VudHJ5Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuQ291bnRyeVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuQ291bnRyeVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LkVtcGxveWVlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuRW1wbG95ZWVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5FbXBsb3llZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuRW1wbG95ZWVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5MYW5ndWFnZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50Lkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuTGFuZ3VhZ2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50Lkxhbmd1YWdlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuUHVibGlzaGVyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuUHVibGlzaGVyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuUHVibGlzaGVyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5QdWJsaXNoZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluTWFuYWdlbWVudC5Ub3BpY0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LlRvcGljRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbk1hbmFnZW1lbnQuVG9waWNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5NYW5hZ2VtZW50LlRvcGljU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkl0ZW0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uUHVyY2hhc2VQYXltZW50VHlwZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uUHVyY2hhc2VTdGF0dXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQ29tbW9uLlNhbGVQYXltZW50VHlwZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9Db21tb24uU2FsZVN0YXR1cy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdWJsaXNoZXJTdGFsbC5QdXJjaGFzZU9yZGVyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdWJsaXNoZXJTdGFsbC5QdXJjaGFzZU9yZGVyRGV0YWlsTGlzdENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVibGlzaGVyU3RhbGwuUHVyY2hhc2VPcmRlckRldGFpbExpc3RGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1Ymxpc2hlclN0YWxsLlB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1Ymxpc2hlclN0YWxsLlB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdWJsaXNoZXJTdGFsbC5QdXJjaGFzZU9yZGVyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdWJsaXNoZXJTdGFsbC5QdXJjaGFzZU9yZGVyUGF5bWVudENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVibGlzaGVyU3RhbGwuUHVyY2hhc2VPcmRlclBheW1lbnRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1Ymxpc2hlclN0YWxsLlB1cmNoYXNlT3JkZXJQYXltZW50Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1Ymxpc2hlclN0YWxsLlB1cmNoYXNlT3JkZXJQYXltZW50U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdWJsaXNoZXJTdGFsbC5QdXJjaGFzZU9yZGVyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1Ymxpc2hlclN0YWxsLlB1cmNoYXNlT3JkZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NjcmlwdFVzZXJEZWZpbml0aW9uLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0YWxsQ3VzdG9tZXIuQ3VzdG9tZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0YWxsQ3VzdG9tZXIuQ3VzdG9tZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0YWxsQ3VzdG9tZXIuQ3VzdG9tZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RhbGxDdXN0b21lci5DdXN0b21lclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RhbGxDdXN0b21lci5Qcm9kdWN0U2FsZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RhbGxDdXN0b21lci5Qcm9kdWN0U2FsZURldGFpbENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RhbGxDdXN0b21lci5Qcm9kdWN0U2FsZURldGFpbEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RhbGxDdXN0b21lci5Qcm9kdWN0U2FsZURldGFpbFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdGFsbEN1c3RvbWVyLlByb2R1Y3RTYWxlRGV0YWlsU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdGFsbEN1c3RvbWVyLlByb2R1Y3RTYWxlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdGFsbEN1c3RvbWVyLlByb2R1Y3RTYWxlUGF5bWVudENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RhbGxDdXN0b21lci5Qcm9kdWN0U2FsZVBheW1lbnRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0YWxsQ3VzdG9tZXIuUHJvZHVjdFNhbGVQYXltZW50Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0YWxsQ3VzdG9tZXIuUHJvZHVjdFNhbGVQYXltZW50U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdGFsbEN1c3RvbWVyLlByb2R1Y3RTYWxlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0YWxsQ3VzdG9tZXIuUHJvZHVjdFNhbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RleHRzLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvQXV0aG9yL0F1dGhvckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5NYW5hZ2VtZW50L0F1dGhvci9BdXRob3JHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvQm9vay9Cb29rRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvQm9vay9Cb29rR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5NYW5hZ2VtZW50L0NhdGVnb3J5L0NhdGVnb3J5RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvQ2F0ZWdvcnkvQ2F0ZWdvcnlHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvQ291bnRyeS9Db3VudHJ5RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvQ291bnRyeS9Db3VudHJ5R3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5NYW5hZ2VtZW50L0VtcGxveWVlL0VtcGxveWVlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvRW1wbG95ZWUvRW1wbG95ZWVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluTWFuYWdlbWVudC9MYW5ndWFnZS9MYW5ndWFnZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluTWFuYWdlbWVudC9QdWJsaXNoZXIvUHVibGlzaGVyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbk1hbmFnZW1lbnQvUHVibGlzaGVyL1B1Ymxpc2hlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluTWFuYWdlbWVudC9Ub3BpYy9Ub3BpY0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5NYW5hZ2VtZW50L1RvcGljL1RvcGljR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVHJhbnNsYXRpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvQXV0aGVudGljYXRpb24vQXV0aG9yaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vUGVybWlzc2lvbkNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9Vc2VyUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvUm9sZUNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Vc2VyUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vU2NyaXB0SW5pdGlhbGl6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9OYXZpZ2F0aW9uL0xhbmd1YWdlU2VsZWN0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9TaWRlYmFyU2VhcmNoLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9UaGVtZVNlbGVjdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0xvZ2luUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9DaGFuZ2VQYXNzd29yZC9DaGFuZ2VQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvU2lnblVwL1NpZ25VcFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyL1B1cmNoYXNlT3JkZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1B1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXIvUHVyY2hhc2VPcmRlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1B1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXJEZXRhaWxMaXN0L1B1cmNoYXNlT3JkZXJEZXRhaWxMaXN0RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyRGV0YWlsTGlzdC9QdXJjaGFzZU9yZGVyRGV0YWlsTGlzdEVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVibGlzaGVyU3RhbGwvUHVyY2hhc2VPcmRlckRldGFpbExpc3QvUHVyY2hhc2VPcmRlckRldGFpbExpc3RHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyUGF5bWVudC9QdXJjaGFzZU9yZGVyUGF5bWVudEVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVibGlzaGVyU3RhbGwvUHVyY2hhc2VPcmRlclBheW1lbnQvUHVyY2hhc2VPcmRlclBheW1lbnRFZGl0b3JEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1B1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXJQYXltZW50L1B1cmNoYXNlT3JkZXJQYXltZW50R3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RhbGxDdXN0b21lci9DdXN0b21lci9DdXN0b21lckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RhbGxDdXN0b21lci9DdXN0b21lci9DdXN0b21lckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGUvUHJvZHVjdFNhbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGUvUHJvZHVjdFNhbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlRGV0YWlsL1Byb2R1Y3RTYWxlRGV0YWlsRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlRGV0YWlsL1Byb2R1Y3RTYWxlRGV0YWlsRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlRGV0YWlsL1Byb2R1Y3RTYWxlRGV0YWlsRWRpdG9yRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlRGV0YWlsL1Byb2R1Y3RTYWxlRGV0YWlsR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RhbGxDdXN0b21lci9Qcm9kdWN0U2FsZVBheW1lbnQvUHJvZHVjdFNhbGVQYXltZW50RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlUGF5bWVudC9Qcm9kdWN0U2FsZVBheW1lbnRFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGVQYXltZW50L1Byb2R1Y3RTYWxlUGF5bWVudEVkaXRvckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RhbGxDdXN0b21lci9Qcm9kdWN0U2FsZVBheW1lbnQvUHJvZHVjdFNhbGVQYXltZW50R3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvX0V4dC9fcS9fcS5lZGl0b3ItdXRpbHMudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0YWxsQ3VzdG9tZXIvUmV0dXJuT3JFeGNoYW5nZS9SZXR1cm5PckV4Y2hhbmdlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdGFsbEN1c3RvbWVyL1JldHVybk9yRXhjaGFuZ2UvUmV0dXJuT3JFeGNoYW5nZUdyaWQudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RhbGxDdXN0b21lci5SZXR1cm5PckV4Y2hhbmdlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdGFsbEN1c3RvbWVyLlJldHVybk9yRXhjaGFuZ2VGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0YWxsQ3VzdG9tZXIuUmV0dXJuT3JFeGNoYW5nZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdGFsbEN1c3RvbWVyLlJldHVybk9yRXhjaGFuZ2VTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFw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RUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLFdBQVcsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsdUJBQXVCLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMseUJBQXlCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxvQkFBb0IsRUFBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxF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QUFELENBQUMsRUE5QlMseUJBQXlCLEtBQXpCLHlCQUF5QixRQThCbEMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBjbGFzcyBBdXRob3JDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbk1hbmFnZW1lbnQuQXV0aG9yJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEF1dGhvckZvcm0ge1xyXG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBOYW1lQm46IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb250YWN0Tm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBNYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBCaXJ0aERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgQWJvdXQ6IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBdXRob3JGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbk1hbmFnZW1lbnQuQXV0aG9yJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFBdXRob3JGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEF1dGhvckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lQm4nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdE5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQmlydGhEYXRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fib3V0JywgdzNcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEF1dGhvclJvdyB7XHJcbiAgICAgICAgQXV0aG9ySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBOYW1lQm4/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29udGFjdE5vPzogc3RyaW5nO1xyXG4gICAgICAgIE1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgQWJvdXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQmlydGhEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIExvb2t1cFRleHQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBdXRob3JSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0F1dGhvcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0xvb2t1cFRleHQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5NYW5hZ2VtZW50LkF1dGhvcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbk1hbmFnZW1lbnQuQXV0aG9yJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxBdXRob3JSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPEF1dGhvclJvdz4oJ0FkbWluTWFuYWdlbWVudC5BdXRob3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIEF1dGhvcklkID0gXCJBdXRob3JJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIE5hbWVCbiA9IFwiTmFtZUJuXCIsXHJcbiAgICAgICAgICAgIENvbnRhY3RObyA9IFwiQ29udGFjdE5vXCIsXHJcbiAgICAgICAgICAgIE1haWwgPSBcIk1haWxcIixcclxuICAgICAgICAgICAgQWJvdXQgPSBcIkFib3V0XCIsXHJcbiAgICAgICAgICAgIEJpcnRoRGF0ZSA9IFwiQmlydGhEYXRlXCIsXHJcbiAgICAgICAgICAgIExvb2t1cFRleHQgPSBcIkxvb2t1cFRleHRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbk1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBdXRob3JTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbk1hbmFnZW1lbnQvQXV0aG9yJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEF1dGhvclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEF1dGhvclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxBdXRob3JSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8QXV0aG9yUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluTWFuYWdlbWVudC9BdXRob3IvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0F1dGhvci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbk1hbmFnZW1lbnQvQXV0aG9yL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0F1dGhvci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbk1hbmFnZW1lbnQvQXV0aG9yL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5BdXRob3JTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQm9va0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluTWFuYWdlbWVudC5Cb29rJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEJvb2tGb3JtIHtcclxuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTmFtZUJuOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQXV0aG9ySWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBUcmFuc2xhdG9ySWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBQdWJsaXNoZXJJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFRvcGljSWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBDYXRlZ29yeUlkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgRWRpdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE51bWJlck9mUGFnZXM6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ291bnRyeUlkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFN1bW1hcnk6IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgIENvdmVySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFByZXZpZXdBdHRhY2htZW50OiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICBQcmljZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBEaXNjb3VudDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBBdmFpbGFiaWxpdHk6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgU29ydE9yZGVyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBCb29rRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5NYW5hZ2VtZW50LkJvb2snO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUJvb2tGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBCb29rRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzQgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc1ID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEJvb2tGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZUJuJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcklkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RyYW5zbGF0b3JJZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQdWJsaXNoZXJJZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdUb3BpY0lkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5SWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnRWRpdGlvbicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXJPZlBhZ2VzJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvdW50cnlJZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZUlkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1bW1hcnknLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnQ292ZXJJbWFnZScsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmV2aWV3QXR0YWNobWVudCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmljZScsIHc1LFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNjb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdmFpbGFiaWxpdHknLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnU29ydE9yZGVyJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEJvb2tSb3cge1xyXG4gICAgICAgIEJvb2tJZD86IG51bWJlcjtcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWVCbj86IHN0cmluZztcclxuICAgICAgICBBdXRob3JJZD86IG51bWJlcjtcclxuICAgICAgICBUcmFuc2xhdG9ySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUHVibGlzaGVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVG9waWNJZD86IG51bWJlcjtcclxuICAgICAgICBDYXRlZ29yeUlkPzogbnVtYmVyO1xyXG4gICAgICAgIEVkaXRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgTnVtYmVyT2ZQYWdlcz86IG51bWJlcjtcclxuICAgICAgICBDb3VudHJ5SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZD86IG51bWJlcjtcclxuICAgICAgICBTdW1tYXJ5Pzogc3RyaW5nO1xyXG4gICAgICAgIENvdmVySW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUHJldmlld0F0dGFjaG1lbnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUHJpY2U/OiBudW1iZXI7XHJcbiAgICAgICAgRGlzY291bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5PzogbnVtYmVyO1xyXG4gICAgICAgIFNvcnRPcmRlcj86IG51bWJlcjtcclxuICAgICAgICBMb29rdXBUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIEF1dGhvck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQXV0aG9yTmFtZUJuPzogc3RyaW5nO1xyXG4gICAgICAgIFRyYW5zbGF0b3JOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFRyYW5zbGF0b3JOYW1lQm4/OiBzdHJpbmc7XHJcbiAgICAgICAgUHVibGlzaGVyTmFtZT86IHN0cmluZztcclxuICAgICAgICBQdWJsaXNoZXJOYW1lQm4/OiBzdHJpbmc7XHJcbiAgICAgICAgVG9waWNOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFRvcGljTmFtZUJuPzogc3RyaW5nO1xyXG4gICAgICAgIENhdGVnb3J5TmFtZT86IHN0cmluZztcclxuICAgICAgICBDYXRlZ29yeU5hbWVCbj86IHN0cmluZztcclxuICAgICAgICBDYXRlZ29yeVRvcGljSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2F0ZWdvcnlTb3J0T3JkZXI/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBCb29rUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdCb29rSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTG9va3VwVGV4dCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbk1hbmFnZW1lbnQuQm9vayc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbk1hbmFnZW1lbnQuQm9vayc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Qm9va1Jvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Qm9va1Jvdz4oJ0FkbWluTWFuYWdlbWVudC5Cb29rJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBCb29rSWQgPSBcIkJvb2tJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIE5hbWVCbiA9IFwiTmFtZUJuXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcklkID0gXCJBdXRob3JJZFwiLFxyXG4gICAgICAgICAgICBUcmFuc2xhdG9ySWQgPSBcIlRyYW5zbGF0b3JJZFwiLFxyXG4gICAgICAgICAgICBQdWJsaXNoZXJJZCA9IFwiUHVibGlzaGVySWRcIixcclxuICAgICAgICAgICAgVG9waWNJZCA9IFwiVG9waWNJZFwiLFxyXG4gICAgICAgICAgICBDYXRlZ29yeUlkID0gXCJDYXRlZ29yeUlkXCIsXHJcbiAgICAgICAgICAgIEVkaXRpb24gPSBcIkVkaXRpb25cIixcclxuICAgICAgICAgICAgTnVtYmVyT2ZQYWdlcyA9IFwiTnVtYmVyT2ZQYWdlc1wiLFxyXG4gICAgICAgICAgICBDb3VudHJ5SWQgPSBcIkNvdW50cnlJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZUlkID0gXCJMYW5ndWFnZUlkXCIsXHJcbiAgICAgICAgICAgIFN1bW1hcnkgPSBcIlN1bW1hcnlcIixcclxuICAgICAgICAgICAgQ292ZXJJbWFnZSA9IFwiQ292ZXJJbWFnZVwiLFxyXG4gICAgICAgICAgICBQcmV2aWV3QXR0YWNobWVudCA9IFwiUHJldmlld0F0dGFjaG1lbnRcIixcclxuICAgICAgICAgICAgUHJpY2UgPSBcIlByaWNlXCIsXHJcbiAgICAgICAgICAgIERpc2NvdW50ID0gXCJEaXNjb3VudFwiLFxyXG4gICAgICAgICAgICBBdmFpbGFiaWxpdHkgPSBcIkF2YWlsYWJpbGl0eVwiLFxyXG4gICAgICAgICAgICBTb3J0T3JkZXIgPSBcIlNvcnRPcmRlclwiLFxyXG4gICAgICAgICAgICBMb29rdXBUZXh0ID0gXCJMb29rdXBUZXh0XCIsXHJcbiAgICAgICAgICAgIEF1dGhvck5hbWUgPSBcIkF1dGhvck5hbWVcIixcclxuICAgICAgICAgICAgQXV0aG9yTmFtZUJuID0gXCJBdXRob3JOYW1lQm5cIixcclxuICAgICAgICAgICAgVHJhbnNsYXRvck5hbWUgPSBcIlRyYW5zbGF0b3JOYW1lXCIsXHJcbiAgICAgICAgICAgIFRyYW5zbGF0b3JOYW1lQm4gPSBcIlRyYW5zbGF0b3JOYW1lQm5cIixcclxuICAgICAgICAgICAgUHVibGlzaGVyTmFtZSA9IFwiUHVibGlzaGVyTmFtZVwiLFxyXG4gICAgICAgICAgICBQdWJsaXNoZXJOYW1lQm4gPSBcIlB1Ymxpc2hlck5hbWVCblwiLFxyXG4gICAgICAgICAgICBUb3BpY05hbWUgPSBcIlRvcGljTmFtZVwiLFxyXG4gICAgICAgICAgICBUb3BpY05hbWVCbiA9IFwiVG9waWNOYW1lQm5cIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlOYW1lID0gXCJDYXRlZ29yeU5hbWVcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlOYW1lQm4gPSBcIkNhdGVnb3J5TmFtZUJuXCIsXHJcbiAgICAgICAgICAgIENhdGVnb3J5VG9waWNJZCA9IFwiQ2F0ZWdvcnlUb3BpY0lkXCIsXHJcbiAgICAgICAgICAgIENhdGVnb3J5U29ydE9yZGVyID0gXCJDYXRlZ29yeVNvcnRPcmRlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEJvb2tTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbk1hbmFnZW1lbnQvQm9vayc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxCb29rUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Qm9va1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxCb29rUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEJvb2tSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0Jvb2svQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0Jvb2svVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0Jvb2svRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbk1hbmFnZW1lbnQvQm9vay9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbk1hbmFnZW1lbnQvQm9vay9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Qm9va1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluTWFuYWdlbWVudC5DYXRlZ29yeSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbk1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUZvcm0ge1xyXG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBOYW1lQm46IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBUb3BpY0lkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgU29ydE9yZGVyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluTWFuYWdlbWVudC5DYXRlZ29yeSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2F0ZWdvcnlGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2F0ZWdvcnlGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZUJuJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RvcGljSWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU29ydE9yZGVyJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5Um93IHtcclxuICAgICAgICBDYXRlZ29yeUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgTmFtZUJuPzogc3RyaW5nO1xyXG4gICAgICAgIFRvcGljSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgU29ydE9yZGVyPzogbnVtYmVyO1xyXG4gICAgICAgIFRvcGljTmFtZT86IHN0cmluZztcclxuICAgICAgICBUb3BpY05hbWVCbj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENhdGVnb3J5Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdDYXRlZ29yeUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWVCbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbk1hbmFnZW1lbnQuQ2F0ZWdvcnknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5NYW5hZ2VtZW50LkNhdGVnb3J5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxDYXRlZ29yeVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Q2F0ZWdvcnlSb3c+KCdBZG1pbk1hbmFnZW1lbnQuQ2F0ZWdvcnknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIENhdGVnb3J5SWQgPSBcIkNhdGVnb3J5SWRcIixcclxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBOYW1lQm4gPSBcIk5hbWVCblwiLFxyXG4gICAgICAgICAgICBUb3BpY0lkID0gXCJUb3BpY0lkXCIsXHJcbiAgICAgICAgICAgIFNvcnRPcmRlciA9IFwiU29ydE9yZGVyXCIsXHJcbiAgICAgICAgICAgIFRvcGljTmFtZSA9IFwiVG9waWNOYW1lXCIsXHJcbiAgICAgICAgICAgIFRvcGljTmFtZUJuID0gXCJUb3BpY05hbWVCblwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENhdGVnb3J5U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5NYW5hZ2VtZW50L0NhdGVnb3J5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENhdGVnb3J5Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2F0ZWdvcnlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2F0ZWdvcnlSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q2F0ZWdvcnlSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0NhdGVnb3J5L0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluTWFuYWdlbWVudC9DYXRlZ29yeS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbk1hbmFnZW1lbnQvQ2F0ZWdvcnkvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbk1hbmFnZW1lbnQvQ2F0ZWdvcnkvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5NYW5hZ2VtZW50L0NhdGVnb3J5L0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DYXRlZ29yeVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBjbGFzcyBDb3VudHJ5Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5NYW5hZ2VtZW50LkNvdW50cnknO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeUZvcm0ge1xyXG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBOYW1lQm46IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU29ydE9yZGVyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDb3VudHJ5Rm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5NYW5hZ2VtZW50LkNvdW50cnknO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNvdW50cnlGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ291bnRyeUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lQm4nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3J0T3JkZXInLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeVJvdyB7XHJcbiAgICAgICAgQ291bnRyeUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgTmFtZUJuPzogc3RyaW5nO1xyXG4gICAgICAgIENvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU29ydE9yZGVyPzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ291bnRyeVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnQ291bnRyeUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWVCbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbk1hbmFnZW1lbnQuQ291bnRyeSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbk1hbmFnZW1lbnQuQ291bnRyeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Q291bnRyeVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Q291bnRyeVJvdz4oJ0FkbWluTWFuYWdlbWVudC5Db3VudHJ5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBDb3VudHJ5SWQgPSBcIkNvdW50cnlJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIE5hbWVCbiA9IFwiTmFtZUJuXCIsXHJcbiAgICAgICAgICAgIENvZGUgPSBcIkNvZGVcIixcclxuICAgICAgICAgICAgU29ydE9yZGVyID0gXCJTb3J0T3JkZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbk1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDb3VudHJ5U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5NYW5hZ2VtZW50L0NvdW50cnknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q291bnRyeVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENvdW50cnlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q291bnRyeVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDb3VudHJ5Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluTWFuYWdlbWVudC9Db3VudHJ5L0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluTWFuYWdlbWVudC9Db3VudHJ5L1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluTWFuYWdlbWVudC9Db3VudHJ5L0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0NvdW50cnkvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5NYW5hZ2VtZW50L0NvdW50cnkvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkNvdW50cnlTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbk1hbmFnZW1lbnQuRW1wbG95ZWUnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWVGb3JtIHtcclxuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTmFtZUJuOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ29udGFjdE5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgQmlydGhEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEFib3V0OiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbk1hbmFnZW1lbnQuRW1wbG95ZWUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUVtcGxveWVlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRW1wbG95ZWVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEVtcGxveWVlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWVCbicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0Tm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdCaXJ0aERhdGUnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQWJvdXQnLCB3M1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWVSb3cge1xyXG4gICAgICAgIEVtcGxveWVlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBOYW1lQm4/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29udGFjdE5vPzogc3RyaW5nO1xyXG4gICAgICAgIE1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgQWJvdXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQmlydGhEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wbG95ZWVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0VtcGxveWVlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbk1hbmFnZW1lbnQuRW1wbG95ZWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBFbXBsb3llZUlkID0gXCJFbXBsb3llZUlkXCIsXHJcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcclxuICAgICAgICAgICAgTmFtZUJuID0gXCJOYW1lQm5cIixcclxuICAgICAgICAgICAgQ29udGFjdE5vID0gXCJDb250YWN0Tm9cIixcclxuICAgICAgICAgICAgTWFpbCA9IFwiTWFpbFwiLFxyXG4gICAgICAgICAgICBBYm91dCA9IFwiQWJvdXRcIixcclxuICAgICAgICAgICAgQmlydGhEYXRlID0gXCJCaXJ0aERhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbk1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBFbXBsb3llZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluTWFuYWdlbWVudC9FbXBsb3llZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxFbXBsb3llZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEVtcGxveWVlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEVtcGxveWVlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEVtcGxveWVlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluTWFuYWdlbWVudC9FbXBsb3llZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbk1hbmFnZW1lbnQvRW1wbG95ZWUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0VtcGxveWVlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0VtcGxveWVlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluTWFuYWdlbWVudC9FbXBsb3llZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+RW1wbG95ZWVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbk1hbmFnZW1lbnQuTGFuZ3VhZ2UnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VGb3JtIHtcclxuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTmFtZUJuOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNvcnRPcmRlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbk1hbmFnZW1lbnQuTGFuZ3VhZ2UnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxhbmd1YWdlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2VGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMYW5ndWFnZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lQm4nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29kZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3J0T3JkZXInLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIExhbmd1YWdlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBOYW1lQm4/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29kZT86IHN0cmluZztcclxuICAgICAgICBTb3J0T3JkZXI/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBMYW5ndWFnZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnTGFuZ3VhZ2VJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lQm4nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5NYW5hZ2VtZW50Lkxhbmd1YWdlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluTWFuYWdlbWVudC5MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8TGFuZ3VhZ2VSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPExhbmd1YWdlUm93PignQWRtaW5NYW5hZ2VtZW50Lkxhbmd1YWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBMYW5ndWFnZUlkID0gXCJMYW5ndWFnZUlkXCIsXHJcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcclxuICAgICAgICAgICAgTmFtZUJuID0gXCJOYW1lQm5cIixcclxuICAgICAgICAgICAgQ29kZSA9IFwiQ29kZVwiLFxyXG4gICAgICAgICAgICBTb3J0T3JkZXIgPSBcIlNvcnRPcmRlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5NYW5hZ2VtZW50L0xhbmd1YWdlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TGFuZ3VhZ2VSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TGFuZ3VhZ2VSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluTWFuYWdlbWVudC9MYW5ndWFnZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbk1hbmFnZW1lbnQvTGFuZ3VhZ2UvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbk1hbmFnZW1lbnQvTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5NYW5hZ2VtZW50L0xhbmd1YWdlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5MYW5ndWFnZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBjbGFzcyBQdWJsaXNoZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbk1hbmFnZW1lbnQuUHVibGlzaGVyJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFB1Ymxpc2hlckZvcm0ge1xyXG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBOYW1lQm46IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb250YWN0Tm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBNYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBTdGFydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQdWJsaXNoZXJGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbk1hbmFnZW1lbnQuUHVibGlzaGVyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQdWJsaXNoZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBQdWJsaXNoZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFB1Ymxpc2hlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lQm4nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdE5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhcnREYXRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzNcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFB1Ymxpc2hlclJvdyB7XHJcbiAgICAgICAgUHVibGlzaGVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTmFtZT86IHN0cmluZztcclxuICAgICAgICBOYW1lQm4/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29udGFjdE5vPzogc3RyaW5nO1xyXG4gICAgICAgIE1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgTG9va3VwVGV4dD86IHN0cmluZztcclxuICAgICAgICBTdGFydERhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQdWJsaXNoZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1B1Ymxpc2hlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0xvb2t1cFRleHQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5NYW5hZ2VtZW50LlB1Ymxpc2hlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbk1hbmFnZW1lbnQuUHVibGlzaGVyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxQdWJsaXNoZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFB1Ymxpc2hlclJvdz4oJ0FkbWluTWFuYWdlbWVudC5QdWJsaXNoZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFB1Ymxpc2hlcklkID0gXCJQdWJsaXNoZXJJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIE5hbWVCbiA9IFwiTmFtZUJuXCIsXHJcbiAgICAgICAgICAgIENvbnRhY3RObyA9IFwiQ29udGFjdE5vXCIsXHJcbiAgICAgICAgICAgIE1haWwgPSBcIk1haWxcIixcclxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIExvb2t1cFRleHQgPSBcIkxvb2t1cFRleHRcIixcclxuICAgICAgICAgICAgU3RhcnREYXRlID0gXCJTdGFydERhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbk1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQdWJsaXNoZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbk1hbmFnZW1lbnQvUHVibGlzaGVyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFB1Ymxpc2hlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFB1Ymxpc2hlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQdWJsaXNoZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHVibGlzaGVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluTWFuYWdlbWVudC9QdWJsaXNoZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L1B1Ymxpc2hlci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbk1hbmFnZW1lbnQvUHVibGlzaGVyL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L1B1Ymxpc2hlci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbk1hbmFnZW1lbnQvUHVibGlzaGVyL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QdWJsaXNoZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgY2xhc3MgVG9waWNDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbk1hbmFnZW1lbnQuVG9waWMnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVG9waWNGb3JtIHtcclxuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTmFtZUJuOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRvcGljRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5NYW5hZ2VtZW50LlRvcGljJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFUb3BpY0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFRvcGljRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVG9waWNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZUJuJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRvcGljUm93IHtcclxuICAgICAgICBUb3BpY0lkPzogbnVtYmVyO1xyXG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgTmFtZUJuPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVG9waWNSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1RvcGljSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZUJuJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluTWFuYWdlbWVudC5Ub3BpYyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbk1hbmFnZW1lbnQuVG9waWMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFRvcGljUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxUb3BpY1Jvdz4oJ0FkbWluTWFuYWdlbWVudC5Ub3BpYycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVG9waWNJZCA9IFwiVG9waWNJZFwiLFxyXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIE5hbWVCbiA9IFwiTmFtZUJuXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVG9waWNTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbk1hbmFnZW1lbnQvVG9waWMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VG9waWNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxUb3BpY1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxUb3BpY1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUb3BpY1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbk1hbmFnZW1lbnQvVG9waWMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5NYW5hZ2VtZW50L1RvcGljL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluTWFuYWdlbWVudC9Ub3BpYy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluTWFuYWdlbWVudC9Ub3BpYy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbk1hbmFnZW1lbnQvVG9waWMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlRvcGljU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlRm9ybSB7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMYW5ndWFnZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTGFuZ3VhZ2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIExhbmd1YWdlSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0xhbmd1YWdlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8TGFuZ3VhZ2VSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPExhbmd1YWdlUm93PignQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VJZCA9IFwiTGFuZ3VhZ2VJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZU5hbWUgPSBcIkxhbmd1YWdlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkxhbmd1YWdlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJvbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSb2xlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUm9sZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUm9sZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBSb2xlUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25JZCA9IFwiUm9sZVBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIFJvbGVSb2xlTmFtZSA9IFwiUm9sZVJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFJvbGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJvbGVSb3c+KCdBZG1pbmlzdHJhdGlvbi5Sb2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUm9sZU5hbWUgPSBcIlJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkl0ZW0ge1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2VUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldFRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tVGV4dD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIFNvdXJjZUxhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRyYW5zbGF0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXNlckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFVzZXJQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgR3JhbnRlZD86IGJvb2xlYW47XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25JZCA9IFwiVXNlclBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIEdyYW50ZWQgPSBcIkdyYW50ZWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclBlcm1pc3Npb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFJvbGVQZXJtaXNzaW9ucyhyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFBlcm1pc3Npb25LZXlzKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RcIixcclxuICAgICAgICAgICAgTGlzdFJvbGVQZXJtaXNzaW9ucyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFJvbGVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgICAgICBMaXN0UGVybWlzc2lvbktleXMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RQZXJtaXNzaW9uS2V5c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ0xpc3RSb2xlUGVybWlzc2lvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RQZXJtaXNzaW9uS2V5cydcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogVXNlclBlcm1pc3Npb25Sb3dbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxudW1iZXI+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgVXNlclJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclJvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUm9sZUlkID0gXCJVc2VyUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VyID0gXCJVc2VyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJSb2xlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJSb2xlTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogVXNlclJvbGVMaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUm9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZXM/OiBudW1iZXJbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm93IHtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkSGFzaD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZFNhbHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdVc2VybmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFVzZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFVzZXJSb3c+KCdBZG1pbmlzdHJhdGlvbi5Vc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFNvdXJjZSA9IFwiU291cmNlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkSGFzaCA9IFwiUGFzc3dvcmRIYXNoXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkU2FsdCA9IFwiUGFzc3dvcmRTYWx0XCIsXHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gXCJEaXNwbGF5TmFtZVwiLFxyXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcclxuICAgICAgICAgICAgVXNlckltYWdlID0gXCJVc2VySW1hZ2VcIixcclxuICAgICAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZSA9IFwiTGFzdERpcmVjdG9yeVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcclxuICAgICAgICAgICAgUGFzc3dvcmQgPSBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkQ29uZmlybSA9IFwiUGFzc3dvcmRDb25maXJtXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVW5kZWxldGUocmVxdWVzdDogU2VyZW5pdHkuVW5kZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlVuZGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFVuZGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VuZGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdVbmRlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgZW51bSBQdXJjaGFzZVBheW1lbnRUeXBlIHtcclxuICAgICAgICBQYXkgPSAxLFxyXG4gICAgICAgIExlc3MgPSAyXHJcbiAgICB9XHJcbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoUHVyY2hhc2VQYXltZW50VHlwZSwgJ0xpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGUnLCAnQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGUnKTtcclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGVudW0gUHVyY2hhc2VTdGF0dXMge1xyXG4gICAgICAgIERyYWZ0ID0gMSxcclxuICAgICAgICBPcmRlclNlbnQgPSAyLFxyXG4gICAgICAgIENoYW5nZU9yZGVyID0gMyxcclxuICAgICAgICBDYW5jZWxlZCA9IDQsXHJcbiAgICAgICAgT3JkZXJSZWNlaXZlZCA9IDUsXHJcbiAgICAgICAgTW9uZXlQYWlkID0gNixcclxuICAgICAgICBDbG9zZWQgPSA3XHJcbiAgICB9XHJcbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoUHVyY2hhc2VTdGF0dXMsICdMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkNvbW1vbi5QdXJjaGFzZVN0YXR1cycsICdDb21tb24uUHVyY2hhc2VTdGF0dXMnKTtcclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGVudW0gU2FsZVBheW1lbnRUeXBlIHtcclxuICAgICAgICBQYXkgPSAxLFxyXG4gICAgICAgIExlc3MgPSAyLFxyXG4gICAgICAgIENhc2hCYWNrID0gM1xyXG4gICAgfVxyXG4gICAgU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVudW1UeXBlKFNhbGVQYXltZW50VHlwZSwgJ0xpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQ29tbW9uLlNhbGVQYXltZW50VHlwZScsICdDb21tb24uU2FsZVBheW1lbnRUeXBlJyk7XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQ29tbW9uIHtcclxuICAgIGV4cG9ydCBlbnVtIFNhbGVTdGF0dXMge1xyXG4gICAgICAgIERyYWZ0ID0gMSxcclxuICAgICAgICBPcmRlclNlbnQgPSAyLFxyXG4gICAgICAgIENoYW5nZU9yZGVyID0gMyxcclxuICAgICAgICBDYW5jZWxlZCA9IDQsXHJcbiAgICAgICAgT3JkZXJSZWNlaXZlZCA9IDUsXHJcbiAgICAgICAgTW9uZXlQYWlkID0gNixcclxuICAgICAgICBDbG9zZWQgPSA3XHJcbiAgICB9XHJcbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoU2FsZVN0YXR1cywgJ0xpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQ29tbW9uLlNhbGVTdGF0dXMnLCAnQ29tbW9uLlNhbGVTdGF0dXMnKTtcclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUZvcmdvdFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkVtYWlsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEZvcmdvdFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5Gb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkxvZ2luJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMb2dpbkZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExvZ2luRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExvZ2luRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZXNldFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVzZXRQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUmVzZXRQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUb2tlbj86IHN0cmluZztcclxuICAgICAgICBOZXdQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBGb3JtIHtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBDb25maXJtRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlNpZ25VcCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU2lnblVwRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgU2lnblVwRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTaWduVXBGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1FbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnUHVibGlzaGVyU3RhbGwuUHVyY2hhc2VPcmRlcic7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uUHVibGlzaGVyU3RhbGwge1xyXG4gICAgZXhwb3J0IGNsYXNzIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnUHVibGlzaGVyU3RhbGwuUHVyY2hhc2VPcmRlckRldGFpbExpc3QnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VPcmRlckRldGFpbExpc3RGb3JtIHtcclxuICAgICAgICBCb29rSWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBRdWFudGl0eTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVbml0UHJpY2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgRGlzY291bnQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgTGluZVRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1B1Ymxpc2hlclN0YWxsLlB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0JztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHVyY2hhc2VPcmRlckRldGFpbExpc3RGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Jvb2tJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdRdWFudGl0eScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVbml0UHJpY2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnRGlzY291bnQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnTGluZVRvdGFsJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VPcmRlckRldGFpbExpc3RSb3cge1xyXG4gICAgICAgIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgX19pZD86IHN0cmluZztcclxuICAgICAgICBQdXJjaGFzZU9yZGVySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQm9va0lkPzogbnVtYmVyO1xyXG4gICAgICAgIFF1YW50aXR5PzogbnVtYmVyO1xyXG4gICAgICAgIFVuaXRQcmljZT86IG51bWJlcjtcclxuICAgICAgICBEaXNjb3VudD86IG51bWJlcjtcclxuICAgICAgICBMaW5lVG90YWw/OiBudW1iZXI7XHJcbiAgICAgICAgQm9va05hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQm9va05hbWVCbj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdElkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1B1Ymxpc2hlclN0YWxsLlB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0JztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUHVyY2hhc2VPcmRlckRldGFpbExpc3RJZCA9IFwiUHVyY2hhc2VPcmRlckRldGFpbExpc3RJZFwiLFxyXG4gICAgICAgICAgICBfX2lkID0gXCJfX2lkXCIsXHJcbiAgICAgICAgICAgIFB1cmNoYXNlT3JkZXJJZCA9IFwiUHVyY2hhc2VPcmRlcklkXCIsXHJcbiAgICAgICAgICAgIEJvb2tJZCA9IFwiQm9va0lkXCIsXHJcbiAgICAgICAgICAgIFF1YW50aXR5ID0gXCJRdWFudGl0eVwiLFxyXG4gICAgICAgICAgICBVbml0UHJpY2UgPSBcIlVuaXRQcmljZVwiLFxyXG4gICAgICAgICAgICBEaXNjb3VudCA9IFwiRGlzY291bnRcIixcclxuICAgICAgICAgICAgTGluZVRvdGFsID0gXCJMaW5lVG90YWxcIixcclxuICAgICAgICAgICAgQm9va05hbWUgPSBcIkJvb2tOYW1lXCIsXHJcbiAgICAgICAgICAgIEJvb2tOYW1lQm4gPSBcIkJvb2tOYW1lQm5cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5QdWJsaXNoZXJTdGFsbCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUHVibGlzaGVyU3RhbGwvUHVyY2hhc2VPcmRlckRldGFpbExpc3QnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHVyY2hhc2VPcmRlckRldGFpbExpc3RSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJQdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyRGV0YWlsTGlzdC9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJQdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyRGV0YWlsTGlzdC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJQdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyRGV0YWlsTGlzdC9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlB1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXJEZXRhaWxMaXN0L1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlB1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXJEZXRhaWxMaXN0L0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QdXJjaGFzZU9yZGVyRGV0YWlsTGlzdFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5QdWJsaXNoZXJTdGFsbCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlT3JkZXJGb3JtIHtcclxuICAgICAgICBUb2tlbk5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUHVibGlzaGVySWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBPcmRlckRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgQm9va0lkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgUXVhbnRpdHk6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRGlzY291bnQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVW5pdFByaWNlOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIEFkZE9yZGVyRGV0YWlsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGluZVRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIE9yZGVyRGV0YWlsTGlzdDogUHVyY2hhc2VPcmRlckRldGFpbExpc3RFZGl0b3I7XHJcbiAgICAgICAgU3ViVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgU3RhdHVzOiBTZXJlbml0eS5FbnVtRWRpdG9yO1xyXG4gICAgICAgIFNlcnZpY2VDaGFyZ2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgT3RoZXI6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgSW5pdGlhbExlc3M6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgVG90YWxMZXNzOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFRvdGFsUGF5YWJsZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBJbml0aWFsUGFpZDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBUb3RhbFBhaWQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgUmVtYWluaW5nRHVlOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFBheW1lbnREYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFBheW1lbnRBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgUGF5bWVudFR5cGU6IFNlcmVuaXR5LkVudW1FZGl0b3I7XHJcbiAgICAgICAgQWRkUGF5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgT3JkZXJQYXlMaXN0OiBQdXJjaGFzZU9yZGVyUGF5bWVudEVkaXRvcjtcclxuICAgICAgICBPcmRlckxlc3NMaXN0OiBQdXJjaGFzZU9yZGVyUGF5bWVudEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1B1Ymxpc2hlclN0YWxsLlB1cmNoYXNlT3JkZXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVB1cmNoYXNlT3JkZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBQdXJjaGFzZU9yZGVyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NCA9IHMuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NSA9IFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc2ID0gcy5FbnVtRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc3ID0gUHVyY2hhc2VPcmRlclBheW1lbnRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHVyY2hhc2VPcmRlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVG9rZW5ObycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQdWJsaXNoZXJJZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdPcmRlckRhdGUnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQm9va0lkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1F1YW50aXR5JywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc2NvdW50JywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VuaXRQcmljZScsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRPcmRlckRldGFpbCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMaW5lVG90YWwnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnT3JkZXJEZXRhaWxMaXN0JywgdzUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1YlRvdGFsJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YXR1cycsIHc2LFxyXG4gICAgICAgICAgICAgICAgICAgICdTZXJ2aWNlQ2hhcmdlJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ090aGVyJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0luaXRpYWxMZXNzJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RvdGFsTGVzcycsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdUb3RhbFBheWFibGUnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnSW5pdGlhbFBhaWQnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnVG90YWxQYWlkJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbWFpbmluZ0R1ZScsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXltZW50RGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXltZW50QW1vdW50JywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnRUeXBlJywgdzYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkZFBheScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdPcmRlclBheUxpc3QnLCB3NyxcclxuICAgICAgICAgICAgICAgICAgICAnT3JkZXJMZXNzTGlzdCcsIHc3XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5QdWJsaXNoZXJTdGFsbCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlclBheW1lbnRDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdQdWJsaXNoZXJTdGFsbC5QdXJjaGFzZU9yZGVyUGF5bWVudCc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uUHVibGlzaGVyU3RhbGwge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQdXJjaGFzZU9yZGVyUGF5bWVudEZvcm0ge1xyXG4gICAgICAgIFBheW1lbnREYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFBheW1lbnRBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFB1cmNoYXNlT3JkZXJQYXltZW50Rm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnUHVibGlzaGVyU3RhbGwuUHVyY2hhc2VPcmRlclBheW1lbnQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVB1cmNoYXNlT3JkZXJQYXltZW50Rm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUHVyY2hhc2VPcmRlclBheW1lbnRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHVyY2hhc2VPcmRlclBheW1lbnRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnREYXRlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnRBbW91bnQnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uUHVibGlzaGVyU3RhbGwge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQdXJjaGFzZU9yZGVyUGF5bWVudFJvdyB7XHJcbiAgICAgICAgUHVyY2hhc2VPcmRlclBheW1lbnRJZD86IG51bWJlcjtcclxuICAgICAgICBfX2lkPzogc3RyaW5nO1xyXG4gICAgICAgIFB1cmNoYXNlT3JkZXJJZD86IG51bWJlcjtcclxuICAgICAgICBQYXltZW50RGF0ZT86IHN0cmluZztcclxuICAgICAgICBQYXltZW50QW1vdW50PzogbnVtYmVyO1xyXG4gICAgICAgIFBheW1lbnRUeXBlPzogQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQdXJjaGFzZU9yZGVyUGF5bWVudFJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUHVyY2hhc2VPcmRlclBheW1lbnRJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdQdWJsaXNoZXJTdGFsbC5QdXJjaGFzZU9yZGVyUGF5bWVudCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFB1cmNoYXNlT3JkZXJQYXltZW50SWQgPSBcIlB1cmNoYXNlT3JkZXJQYXltZW50SWRcIixcclxuICAgICAgICAgICAgX19pZCA9IFwiX19pZFwiLFxyXG4gICAgICAgICAgICBQdXJjaGFzZU9yZGVySWQgPSBcIlB1cmNoYXNlT3JkZXJJZFwiLFxyXG4gICAgICAgICAgICBQYXltZW50RGF0ZSA9IFwiUGF5bWVudERhdGVcIixcclxuICAgICAgICAgICAgUGF5bWVudEFtb3VudCA9IFwiUGF5bWVudEFtb3VudFwiLFxyXG4gICAgICAgICAgICBQYXltZW50VHlwZSA9IFwiUGF5bWVudFR5cGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5QdWJsaXNoZXJTdGFsbCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJQYXltZW50U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUHVibGlzaGVyU3RhbGwvUHVyY2hhc2VPcmRlclBheW1lbnQnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHVyY2hhc2VPcmRlclBheW1lbnRSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQdXJjaGFzZU9yZGVyUGF5bWVudFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQdXJjaGFzZU9yZGVyUGF5bWVudFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxQdXJjaGFzZU9yZGVyUGF5bWVudFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJQdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyUGF5bWVudC9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJQdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyUGF5bWVudC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJQdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyUGF5bWVudC9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlB1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXJQYXltZW50L1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlB1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXJQYXltZW50L0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5QdXJjaGFzZU9yZGVyUGF5bWVudFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5QdWJsaXNoZXJTdGFsbCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlT3JkZXJSb3cge1xyXG4gICAgICAgIFB1cmNoYXNlT3JkZXJJZD86IG51bWJlcjtcclxuICAgICAgICBUb2tlbk5vPzogc3RyaW5nO1xyXG4gICAgICAgIFB1Ymxpc2hlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIE9yZGVyRGF0ZT86IHN0cmluZztcclxuICAgICAgICBTdWJUb3RhbD86IG51bWJlcjtcclxuICAgICAgICBTZXJ2aWNlQ2hhcmdlPzogbnVtYmVyO1xyXG4gICAgICAgIE90aGVyPzogbnVtYmVyO1xyXG4gICAgICAgIEluaXRpYWxMZXNzPzogbnVtYmVyO1xyXG4gICAgICAgIFRvdGFsTGVzcz86IG51bWJlcjtcclxuICAgICAgICBJbml0aWFsUGFpZD86IG51bWJlcjtcclxuICAgICAgICBUb3RhbFBhaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVG90YWxQYXlhYmxlPzogbnVtYmVyO1xyXG4gICAgICAgIFJlbWFpbmluZ0R1ZT86IG51bWJlcjtcclxuICAgICAgICBTdGF0dXM/OiBDb21tb24uUHVyY2hhc2VTdGF0dXM7XHJcbiAgICAgICAgUHVibGlzaGVyTmFtZT86IHN0cmluZztcclxuICAgICAgICBQdWJsaXNoZXJOYW1lQm4/OiBzdHJpbmc7XHJcbiAgICAgICAgUHVibGlzaGVyQ29udGFjdE5vPzogc3RyaW5nO1xyXG4gICAgICAgIFB1Ymxpc2hlck1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgUHVibGlzaGVyRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUHVibGlzaGVyU3RhcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyRGV0YWlsTGlzdD86IFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Um93W107XHJcbiAgICAgICAgT3JkZXJQYXlMaXN0PzogUHVyY2hhc2VPcmRlclBheW1lbnRSb3dbXTtcclxuICAgICAgICBPcmRlckxlc3NMaXN0PzogUHVyY2hhc2VPcmRlclBheW1lbnRSb3dbXTtcclxuICAgICAgICBCb29rSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUXVhbnRpdHk/OiBudW1iZXI7XHJcbiAgICAgICAgVW5pdFByaWNlPzogbnVtYmVyO1xyXG4gICAgICAgIERpc2NvdW50PzogbnVtYmVyO1xyXG4gICAgICAgIExpbmVUb3RhbD86IG51bWJlcjtcclxuICAgICAgICBBZGRPcmRlckRldGFpbD86IHN0cmluZztcclxuICAgICAgICBQYXltZW50RGF0ZT86IHN0cmluZztcclxuICAgICAgICBQYXltZW50QW1vdW50PzogbnVtYmVyO1xyXG4gICAgICAgIFBheW1lbnRUeXBlPzogQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGU7XHJcbiAgICAgICAgQWRkUGF5Pzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHVyY2hhc2VPcmRlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUHVyY2hhc2VPcmRlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Rva2VuTm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnUHVibGlzaGVyU3RhbGwuUHVyY2hhc2VPcmRlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFB1cmNoYXNlT3JkZXJJZCA9IFwiUHVyY2hhc2VPcmRlcklkXCIsXHJcbiAgICAgICAgICAgIFRva2VuTm8gPSBcIlRva2VuTm9cIixcclxuICAgICAgICAgICAgUHVibGlzaGVySWQgPSBcIlB1Ymxpc2hlcklkXCIsXHJcbiAgICAgICAgICAgIE9yZGVyRGF0ZSA9IFwiT3JkZXJEYXRlXCIsXHJcbiAgICAgICAgICAgIFN1YlRvdGFsID0gXCJTdWJUb3RhbFwiLFxyXG4gICAgICAgICAgICBTZXJ2aWNlQ2hhcmdlID0gXCJTZXJ2aWNlQ2hhcmdlXCIsXHJcbiAgICAgICAgICAgIE90aGVyID0gXCJPdGhlclwiLFxyXG4gICAgICAgICAgICBJbml0aWFsTGVzcyA9IFwiSW5pdGlhbExlc3NcIixcclxuICAgICAgICAgICAgVG90YWxMZXNzID0gXCJUb3RhbExlc3NcIixcclxuICAgICAgICAgICAgSW5pdGlhbFBhaWQgPSBcIkluaXRpYWxQYWlkXCIsXHJcbiAgICAgICAgICAgIFRvdGFsUGFpZCA9IFwiVG90YWxQYWlkXCIsXHJcbiAgICAgICAgICAgIFRvdGFsUGF5YWJsZSA9IFwiVG90YWxQYXlhYmxlXCIsXHJcbiAgICAgICAgICAgIFJlbWFpbmluZ0R1ZSA9IFwiUmVtYWluaW5nRHVlXCIsXHJcbiAgICAgICAgICAgIFN0YXR1cyA9IFwiU3RhdHVzXCIsXHJcbiAgICAgICAgICAgIFB1Ymxpc2hlck5hbWUgPSBcIlB1Ymxpc2hlck5hbWVcIixcclxuICAgICAgICAgICAgUHVibGlzaGVyTmFtZUJuID0gXCJQdWJsaXNoZXJOYW1lQm5cIixcclxuICAgICAgICAgICAgUHVibGlzaGVyQ29udGFjdE5vID0gXCJQdWJsaXNoZXJDb250YWN0Tm9cIixcclxuICAgICAgICAgICAgUHVibGlzaGVyTWFpbCA9IFwiUHVibGlzaGVyTWFpbFwiLFxyXG4gICAgICAgICAgICBQdWJsaXNoZXJEZXNjcmlwdGlvbiA9IFwiUHVibGlzaGVyRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgUHVibGlzaGVyU3RhcnREYXRlID0gXCJQdWJsaXNoZXJTdGFydERhdGVcIixcclxuICAgICAgICAgICAgT3JkZXJEZXRhaWxMaXN0ID0gXCJPcmRlckRldGFpbExpc3RcIixcclxuICAgICAgICAgICAgT3JkZXJQYXlMaXN0ID0gXCJPcmRlclBheUxpc3RcIixcclxuICAgICAgICAgICAgT3JkZXJMZXNzTGlzdCA9IFwiT3JkZXJMZXNzTGlzdFwiLFxyXG4gICAgICAgICAgICBCb29rSWQgPSBcIkJvb2tJZFwiLFxyXG4gICAgICAgICAgICBRdWFudGl0eSA9IFwiUXVhbnRpdHlcIixcclxuICAgICAgICAgICAgVW5pdFByaWNlID0gXCJVbml0UHJpY2VcIixcclxuICAgICAgICAgICAgRGlzY291bnQgPSBcIkRpc2NvdW50XCIsXHJcbiAgICAgICAgICAgIExpbmVUb3RhbCA9IFwiTGluZVRvdGFsXCIsXHJcbiAgICAgICAgICAgIEFkZE9yZGVyRGV0YWlsID0gXCJBZGRPcmRlckRldGFpbFwiLFxyXG4gICAgICAgICAgICBQYXltZW50RGF0ZSA9IFwiUGF5bWVudERhdGVcIixcclxuICAgICAgICAgICAgUGF5bWVudEFtb3VudCA9IFwiUGF5bWVudEFtb3VudFwiLFxyXG4gICAgICAgICAgICBQYXltZW50VHlwZSA9IFwiUGF5bWVudFR5cGVcIixcclxuICAgICAgICAgICAgQWRkUGF5ID0gXCJBZGRQYXlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5QdWJsaXNoZXJTdGFsbCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdQdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFB1cmNoYXNlT3JkZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQdXJjaGFzZU9yZGVyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFB1cmNoYXNlT3JkZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHVyY2hhc2VPcmRlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJQdWJsaXNoZXJTdGFsbC9QdXJjaGFzZU9yZGVyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIlB1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiUHVibGlzaGVyU3RhbGwvUHVyY2hhc2VPcmRlci9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlB1Ymxpc2hlclN0YWxsL1B1cmNoYXNlT3JkZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiUHVibGlzaGVyU3RhbGwvUHVyY2hhc2VPcmRlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UHVyY2hhc2VPcmRlclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjcmlwdFVzZXJEZWZpbml0aW9uIHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBJc0FkbWluPzogYm9vbGVhbjtcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTdGFsbEN1c3RvbWVyLkN1c3RvbWVyJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckZvcm0ge1xyXG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBOYW1lQm46IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb250YWN0Tm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBNYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBBYm91dDogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU3RhbGxDdXN0b21lci5DdXN0b21lcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ3VzdG9tZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDdXN0b21lckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuVGV4dEFyZWFFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ3VzdG9tZXJGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZUJuJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3RObycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fib3V0JywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21lclJvdyB7XHJcbiAgICAgICAgQ3VzdG9tZXJJZD86IG51bWJlcjtcclxuICAgICAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIE5hbWVCbj86IHN0cmluZztcclxuICAgICAgICBDb250YWN0Tm8/OiBzdHJpbmc7XHJcbiAgICAgICAgTWFpbD86IHN0cmluZztcclxuICAgICAgICBBYm91dD86IHN0cmluZztcclxuICAgICAgICBMb29rdXBUZXh0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0N1c3RvbWVySWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTG9va3VwVGV4dCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdTdGFsbEN1c3RvbWVyLkN1c3RvbWVyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ1N0YWxsQ3VzdG9tZXIuQ3VzdG9tZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPEN1c3RvbWVyUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxDdXN0b21lclJvdz4oJ1N0YWxsQ3VzdG9tZXIuQ3VzdG9tZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIEN1c3RvbWVySWQgPSBcIkN1c3RvbWVySWRcIixcclxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBOYW1lQm4gPSBcIk5hbWVCblwiLFxyXG4gICAgICAgICAgICBDb250YWN0Tm8gPSBcIkNvbnRhY3ROb1wiLFxyXG4gICAgICAgICAgICBNYWlsID0gXCJNYWlsXCIsXHJcbiAgICAgICAgICAgIEFib3V0ID0gXCJBYm91dFwiLFxyXG4gICAgICAgICAgICBMb29rdXBUZXh0ID0gXCJMb29rdXBUZXh0XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEN1c3RvbWVyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU3RhbGxDdXN0b21lci9DdXN0b21lcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDdXN0b21lclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEN1c3RvbWVyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEN1c3RvbWVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEN1c3RvbWVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlN0YWxsQ3VzdG9tZXIvQ3VzdG9tZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU3RhbGxDdXN0b21lci9DdXN0b21lci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJTdGFsbEN1c3RvbWVyL0N1c3RvbWVyL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU3RhbGxDdXN0b21lci9DdXN0b21lci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTdGFsbEN1c3RvbWVyL0N1c3RvbWVyL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DdXN0b21lclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdFNhbGVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTdGFsbEN1c3RvbWVyLlByb2R1Y3RTYWxlJztcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0U2FsZURldGFpbENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1N0YWxsQ3VzdG9tZXIuUHJvZHVjdFNhbGVEZXRhaWwnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RTYWxlRGV0YWlsRm9ybSB7XHJcbiAgICAgICAgQm9va0lkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgUXVhbnRpdHk6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVW5pdFByaWNlOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIERpc2NvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIExpbmVUb3RhbDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdFNhbGVEZXRhaWxGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTdGFsbEN1c3RvbWVyLlByb2R1Y3RTYWxlRGV0YWlsJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQcm9kdWN0U2FsZURldGFpbEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFByb2R1Y3RTYWxlRGV0YWlsRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHJvZHVjdFNhbGVEZXRhaWxGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Jvb2tJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdRdWFudGl0eScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVbml0UHJpY2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnRGlzY291bnQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnTGluZVRvdGFsJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0U2FsZURldGFpbFJvdyB7XHJcbiAgICAgICAgUHJvZHVjdFNhbGVEZXRhaWxJZD86IG51bWJlcjtcclxuICAgICAgICBfX2lkPzogc3RyaW5nO1xyXG4gICAgICAgIFByb2R1Y3RTYWxlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQm9va0lkPzogbnVtYmVyO1xyXG4gICAgICAgIFF1YW50aXR5PzogbnVtYmVyO1xyXG4gICAgICAgIFVuaXRQcmljZT86IG51bWJlcjtcclxuICAgICAgICBEaXNjb3VudD86IG51bWJlcjtcclxuICAgICAgICBMaW5lVG90YWw/OiBudW1iZXI7XHJcbiAgICAgICAgQm9va05hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQm9va05hbWVCbj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3RTYWxlRGV0YWlsUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdQcm9kdWN0U2FsZURldGFpbElkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1N0YWxsQ3VzdG9tZXIuUHJvZHVjdFNhbGVEZXRhaWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBQcm9kdWN0U2FsZURldGFpbElkID0gXCJQcm9kdWN0U2FsZURldGFpbElkXCIsXHJcbiAgICAgICAgICAgIF9faWQgPSBcIl9faWRcIixcclxuICAgICAgICAgICAgUHJvZHVjdFNhbGVJZCA9IFwiUHJvZHVjdFNhbGVJZFwiLFxyXG4gICAgICAgICAgICBCb29rSWQgPSBcIkJvb2tJZFwiLFxyXG4gICAgICAgICAgICBRdWFudGl0eSA9IFwiUXVhbnRpdHlcIixcclxuICAgICAgICAgICAgVW5pdFByaWNlID0gXCJVbml0UHJpY2VcIixcclxuICAgICAgICAgICAgRGlzY291bnQgPSBcIkRpc2NvdW50XCIsXHJcbiAgICAgICAgICAgIExpbmVUb3RhbCA9IFwiTGluZVRvdGFsXCIsXHJcbiAgICAgICAgICAgIEJvb2tOYW1lID0gXCJCb29rTmFtZVwiLFxyXG4gICAgICAgICAgICBCb29rTmFtZUJuID0gXCJCb29rTmFtZUJuXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3RTYWxlRGV0YWlsU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU3RhbGxDdXN0b21lci9Qcm9kdWN0U2FsZURldGFpbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQcm9kdWN0U2FsZURldGFpbFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3RTYWxlRGV0YWlsUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFByb2R1Y3RTYWxlRGV0YWlsUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFByb2R1Y3RTYWxlRGV0YWlsUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlN0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGVEZXRhaWwvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU3RhbGxDdXN0b21lci9Qcm9kdWN0U2FsZURldGFpbC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJTdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlRGV0YWlsL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU3RhbGxDdXN0b21lci9Qcm9kdWN0U2FsZURldGFpbC9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlRGV0YWlsL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Qcm9kdWN0U2FsZURldGFpbFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFNhbGVGb3JtIHtcclxuICAgICAgICBUb2tlbk5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3VzdG9tZXJJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFNhbGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEJvb2tJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFF1YW50aXR5OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIERpc2NvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVuaXRQcmljZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBBZGRPcmRlckRldGFpbDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExpbmVUb3RhbDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBPcmRlckRldGFpbExpc3Q6IFByb2R1Y3RTYWxlRGV0YWlsRWRpdG9yO1xyXG4gICAgICAgIFN1YlRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFN0YXR1czogU2VyZW5pdHkuRW51bUVkaXRvcjtcclxuICAgICAgICBTZXJ2aWNlQ2hhcmdlOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIE90aGVyOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIEluaXRpYWxMZXNzOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFRvdGFsTGVzczogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBUb3RhbFBheWFibGU6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgSW5pdGlhbFBhaWQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgVG90YWxQYWlkOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFJlbWFpbmluZ0R1ZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBQYXltZW50RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBQYXltZW50QW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFBheW1lbnRUeXBlOiBTZXJlbml0eS5FbnVtRWRpdG9yO1xyXG4gICAgICAgIEFkZFBheTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE9yZGVyUGF5TGlzdDogUHJvZHVjdFNhbGVQYXltZW50RWRpdG9yO1xyXG4gICAgICAgIE9yZGVyTGVzc0xpc3Q6IFByb2R1Y3RTYWxlUGF5bWVudEVkaXRvcjtcclxuICAgICAgICBQcmVwYXJlZEJ5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RTYWxlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU3RhbGxDdXN0b21lci5Qcm9kdWN0U2FsZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUHJvZHVjdFNhbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0U2FsZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzQgPSBzLkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzUgPSBQcm9kdWN0U2FsZURldGFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NiA9IHMuRW51bUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NyA9IFByb2R1Y3RTYWxlUGF5bWVudEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShQcm9kdWN0U2FsZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVG9rZW5ObycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDdXN0b21lcklkJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGVEYXRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Jvb2tJZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdRdWFudGl0eScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNjb3VudCcsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdVbml0UHJpY2UnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnQWRkT3JkZXJEZXRhaWwnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGluZVRvdGFsJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ09yZGVyRGV0YWlsTGlzdCcsIHc1LFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWJUb3RhbCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGF0dXMnLCB3NixcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZUNoYXJnZScsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdPdGhlcicsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdJbml0aWFsTGVzcycsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdUb3RhbExlc3MnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnVG90YWxQYXlhYmxlJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0luaXRpYWxQYWlkJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RvdGFsUGFpZCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdSZW1haW5pbmdEdWUnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnUGF5bWVudERhdGUnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGF5bWVudEFtb3VudCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXltZW50VHlwZScsIHc2LFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRQYXknLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnT3JkZXJQYXlMaXN0JywgdzcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ09yZGVyTGVzc0xpc3QnLCB3NyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJlcGFyZWRCeScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdFNhbGVQYXltZW50Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU3RhbGxDdXN0b21lci5Qcm9kdWN0U2FsZVBheW1lbnQnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RTYWxlUGF5bWVudEZvcm0ge1xyXG4gICAgICAgIFByb2R1Y3RTYWxlSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXltZW50RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBQYXltZW50QW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFBheW1lbnRUeXBlOiBTZXJlbml0eS5FbnVtRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0U2FsZVBheW1lbnRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTdGFsbEN1c3RvbWVyLlByb2R1Y3RTYWxlUGF5bWVudCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUHJvZHVjdFNhbGVQYXltZW50Rm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUHJvZHVjdFNhbGVQYXltZW50Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkVudW1FZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHJvZHVjdFNhbGVQYXltZW50Rm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdQcm9kdWN0U2FsZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnREYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnRBbW91bnQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGF5bWVudFR5cGUnLCB3M1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RTYWxlUGF5bWVudFJvdyB7XHJcbiAgICAgICAgUHJvZHVjdFNhbGVQYXltZW50SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgX19pZD86IHN0cmluZztcclxuICAgICAgICBQcm9kdWN0U2FsZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFBheW1lbnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFBheW1lbnRBbW91bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGF5bWVudFR5cGU/OiBDb21tb24uU2FsZVBheW1lbnRUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHJvZHVjdFNhbGVQYXltZW50Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdQcm9kdWN0U2FsZVBheW1lbnRJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdTdGFsbEN1c3RvbWVyLlByb2R1Y3RTYWxlUGF5bWVudCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFByb2R1Y3RTYWxlUGF5bWVudElkID0gXCJQcm9kdWN0U2FsZVBheW1lbnRJZFwiLFxyXG4gICAgICAgICAgICBfX2lkID0gXCJfX2lkXCIsXHJcbiAgICAgICAgICAgIFByb2R1Y3RTYWxlSWQgPSBcIlByb2R1Y3RTYWxlSWRcIixcclxuICAgICAgICAgICAgUGF5bWVudERhdGUgPSBcIlBheW1lbnREYXRlXCIsXHJcbiAgICAgICAgICAgIFBheW1lbnRBbW91bnQgPSBcIlBheW1lbnRBbW91bnRcIixcclxuICAgICAgICAgICAgUGF5bWVudFR5cGUgPSBcIlBheW1lbnRUeXBlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFByb2R1Y3RTYWxlUGF5bWVudFNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1N0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGVQYXltZW50JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3RTYWxlUGF5bWVudFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3RTYWxlUGF5bWVudFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQcm9kdWN0U2FsZVBheW1lbnRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHJvZHVjdFNhbGVQYXltZW50Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlN0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGVQYXltZW50L0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIlN0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGVQYXltZW50L1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIlN0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGVQYXltZW50L0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU3RhbGxDdXN0b21lci9Qcm9kdWN0U2FsZVBheW1lbnQvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiU3RhbGxDdXN0b21lci9Qcm9kdWN0U2FsZVBheW1lbnQvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlByb2R1Y3RTYWxlUGF5bWVudFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFNhbGVSb3cge1xyXG4gICAgICAgIFByb2R1Y3RTYWxlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVG9rZW5Obz86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFNhbGVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1YlRvdGFsPzogbnVtYmVyO1xyXG4gICAgICAgIFNlcnZpY2VDaGFyZ2U/OiBudW1iZXI7XHJcbiAgICAgICAgT3RoZXI/OiBudW1iZXI7XHJcbiAgICAgICAgSW5pdGlhbExlc3M/OiBudW1iZXI7XHJcbiAgICAgICAgVG90YWxMZXNzPzogbnVtYmVyO1xyXG4gICAgICAgIEluaXRpYWxQYWlkPzogbnVtYmVyO1xyXG4gICAgICAgIFRvdGFsUGFpZD86IG51bWJlcjtcclxuICAgICAgICBUb3RhbFBheWFibGU/OiBudW1iZXI7XHJcbiAgICAgICAgUmVtYWluaW5nRHVlPzogbnVtYmVyO1xyXG4gICAgICAgIFByZXBhcmVkQnk/OiBudW1iZXI7XHJcbiAgICAgICAgU3RhdHVzPzogQ29tbW9uLlNhbGVTdGF0dXM7XHJcbiAgICAgICAgQ3VzdG9tZXJOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyTmFtZUJuPzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyQ29udGFjdE5vPzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbWVyTWFpbD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lckFib3V0Pzogc3RyaW5nO1xyXG4gICAgICAgIE9yZGVyRGV0YWlsTGlzdD86IFByb2R1Y3RTYWxlRGV0YWlsUm93W107XHJcbiAgICAgICAgT3JkZXJQYXlMaXN0PzogUHJvZHVjdFNhbGVQYXltZW50Um93W107XHJcbiAgICAgICAgT3JkZXJMZXNzTGlzdD86IFByb2R1Y3RTYWxlUGF5bWVudFJvd1tdO1xyXG4gICAgICAgIEJvb2tJZD86IG51bWJlcjtcclxuICAgICAgICBRdWFudGl0eT86IG51bWJlcjtcclxuICAgICAgICBVbml0UHJpY2U/OiBudW1iZXI7XHJcbiAgICAgICAgRGlzY291bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgTGluZVRvdGFsPzogbnVtYmVyO1xyXG4gICAgICAgIEFkZE9yZGVyRGV0YWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFBheW1lbnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFBheW1lbnRBbW91bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGF5bWVudFR5cGU/OiBDb21tb24uUHVyY2hhc2VQYXltZW50VHlwZTtcclxuICAgICAgICBBZGRQYXk/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQcm9kdWN0U2FsZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUHJvZHVjdFNhbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdUb2tlbk5vJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1N0YWxsQ3VzdG9tZXIuUHJvZHVjdFNhbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBQcm9kdWN0U2FsZUlkID0gXCJQcm9kdWN0U2FsZUlkXCIsXHJcbiAgICAgICAgICAgIFRva2VuTm8gPSBcIlRva2VuTm9cIixcclxuICAgICAgICAgICAgQ3VzdG9tZXJJZCA9IFwiQ3VzdG9tZXJJZFwiLFxyXG4gICAgICAgICAgICBTYWxlRGF0ZSA9IFwiU2FsZURhdGVcIixcclxuICAgICAgICAgICAgU3ViVG90YWwgPSBcIlN1YlRvdGFsXCIsXHJcbiAgICAgICAgICAgIFNlcnZpY2VDaGFyZ2UgPSBcIlNlcnZpY2VDaGFyZ2VcIixcclxuICAgICAgICAgICAgT3RoZXIgPSBcIk90aGVyXCIsXHJcbiAgICAgICAgICAgIEluaXRpYWxMZXNzID0gXCJJbml0aWFsTGVzc1wiLFxyXG4gICAgICAgICAgICBUb3RhbExlc3MgPSBcIlRvdGFsTGVzc1wiLFxyXG4gICAgICAgICAgICBJbml0aWFsUGFpZCA9IFwiSW5pdGlhbFBhaWRcIixcclxuICAgICAgICAgICAgVG90YWxQYWlkID0gXCJUb3RhbFBhaWRcIixcclxuICAgICAgICAgICAgVG90YWxQYXlhYmxlID0gXCJUb3RhbFBheWFibGVcIixcclxuICAgICAgICAgICAgUmVtYWluaW5nRHVlID0gXCJSZW1haW5pbmdEdWVcIixcclxuICAgICAgICAgICAgUHJlcGFyZWRCeSA9IFwiUHJlcGFyZWRCeVwiLFxyXG4gICAgICAgICAgICBTdGF0dXMgPSBcIlN0YXR1c1wiLFxyXG4gICAgICAgICAgICBDdXN0b21lck5hbWUgPSBcIkN1c3RvbWVyTmFtZVwiLFxyXG4gICAgICAgICAgICBDdXN0b21lck5hbWVCbiA9IFwiQ3VzdG9tZXJOYW1lQm5cIixcclxuICAgICAgICAgICAgQ3VzdG9tZXJDb250YWN0Tm8gPSBcIkN1c3RvbWVyQ29udGFjdE5vXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyTWFpbCA9IFwiQ3VzdG9tZXJNYWlsXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyQWJvdXQgPSBcIkN1c3RvbWVyQWJvdXRcIixcclxuICAgICAgICAgICAgT3JkZXJEZXRhaWxMaXN0ID0gXCJPcmRlckRldGFpbExpc3RcIixcclxuICAgICAgICAgICAgT3JkZXJQYXlMaXN0ID0gXCJPcmRlclBheUxpc3RcIixcclxuICAgICAgICAgICAgT3JkZXJMZXNzTGlzdCA9IFwiT3JkZXJMZXNzTGlzdFwiLFxyXG4gICAgICAgICAgICBCb29rSWQgPSBcIkJvb2tJZFwiLFxyXG4gICAgICAgICAgICBRdWFudGl0eSA9IFwiUXVhbnRpdHlcIixcclxuICAgICAgICAgICAgVW5pdFByaWNlID0gXCJVbml0UHJpY2VcIixcclxuICAgICAgICAgICAgRGlzY291bnQgPSBcIkRpc2NvdW50XCIsXHJcbiAgICAgICAgICAgIExpbmVUb3RhbCA9IFwiTGluZVRvdGFsXCIsXHJcbiAgICAgICAgICAgIEFkZE9yZGVyRGV0YWlsID0gXCJBZGRPcmRlckRldGFpbFwiLFxyXG4gICAgICAgICAgICBQYXltZW50RGF0ZSA9IFwiUGF5bWVudERhdGVcIixcclxuICAgICAgICAgICAgUGF5bWVudEFtb3VudCA9IFwiUGF5bWVudEFtb3VudFwiLFxyXG4gICAgICAgICAgICBQYXltZW50VHlwZSA9IFwiUGF5bWVudFR5cGVcIixcclxuICAgICAgICAgICAgQWRkUGF5ID0gXCJBZGRQYXlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHJvZHVjdFNhbGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdTdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFByb2R1Y3RTYWxlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHJvZHVjdFNhbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UHJvZHVjdFNhbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHJvZHVjdFNhbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU3RhbGxDdXN0b21lci9Qcm9kdWN0U2FsZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJTdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIlN0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTdGFsbEN1c3RvbWVyL1Byb2R1Y3RTYWxlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlN0YWxsQ3VzdG9tZXIvUHJvZHVjdFNhbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlByb2R1Y3RTYWxlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlRleHRzIHtcclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBEYiB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBZG1pbk1hbmFnZW1lbnQge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEF1dGhvciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWJvdXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBdXRob3JJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpcnRoRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRhY3RObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvb2t1cFRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWVCbjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQm9vayB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXV0aG9ySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBdXRob3JOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXV0aG9yTmFtZUJuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXZhaWxhYmlsaXR5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQm9va0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhdGVnb3J5TmFtZUJuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlTb3J0T3JkZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeVRvcGljSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb3VudHJ5SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb3ZlckltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzY291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvb2t1cFRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZUJuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTnVtYmVyT2ZQYWdlczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByZXZpZXdBdHRhY2htZW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJpY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdWJsaXNoZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1Ymxpc2hlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdWJsaXNoZXJOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3J0T3JkZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdW1tYXJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG9waWNJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRvcGljTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRvcGljTmFtZUJuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVHJhbnNsYXRvcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVHJhbnNsYXRvck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUcmFuc2xhdG9yTmFtZUJuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3J0T3JkZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3BpY0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG9waWNOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG9waWNOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb3VudHJ5SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZUJuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU29ydE9yZGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBFbXBsb3llZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWJvdXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250YWN0Tm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3J0T3JkZXI6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFB1Ymxpc2hlciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGFjdE5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb29rdXBUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdWJsaXNoZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVG9waWMge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3BpY0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVBlcm1pc3Npb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVHJhbnNsYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbnRpdHlQbHVyYWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPdmVycmlkZUNvbmZpcm1hdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVDaGFuZ2VzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0TGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElzQWN0aXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdERpcmVjdG9yeVVwZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRIYXNoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRTYWx0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnRlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclBlcm1pc3Npb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUHVibGlzaGVyU3RhbGwge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZE9yZGVyRGV0YWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkUGF5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQm9va0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzY291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbml0aWFsTGVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluaXRpYWxQYWlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGluZVRvdGFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJEZXRhaWxMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJMZXNzTGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZGVyUGF5TGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE90aGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGF5bWVudEFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBheW1lbnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGF5bWVudFR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdWJsaXNoZXJDb250YWN0Tm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdWJsaXNoZXJEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1Ymxpc2hlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHVibGlzaGVyTWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1Ymxpc2hlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdWJsaXNoZXJOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdWJsaXNoZXJTdGFydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU9yZGVySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRdWFudGl0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWFpbmluZ0R1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNlcnZpY2VDaGFyZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdGF0dXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJUb3RhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRva2VuTm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbExlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbFBhaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbFBheWFibGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0UHJpY2U6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0IHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCb29rSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCb29rTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJvb2tOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExpbmVUb3RhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU9yZGVySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRdWFudGl0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVuaXRQcmljZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IF9faWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJQYXltZW50IHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXltZW50QW1vdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGF5bWVudERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXltZW50VHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1cmNoYXNlT3JkZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1cmNoYXNlT3JkZXJQYXltZW50SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBfX2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBTdGFsbEN1c3RvbWVyIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDdXN0b21lciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWJvdXQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250YWN0Tm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTG9va3VwVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZUJuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBQcm9kdWN0U2FsZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkT3JkZXJEZXRhaWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRQYXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCb29rSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lckFib3V0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJDb250YWN0Tm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21lcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJNYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluaXRpYWxMZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5pdGlhbFBhaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMaW5lVG90YWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmRlckRldGFpbExpc3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmRlckxlc3NMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJQYXlMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3RoZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXltZW50QW1vdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGF5bWVudERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXltZW50VHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByZXBhcmVkQnk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0U2FsZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUXVhbnRpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZW1haW5pbmdEdWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYWxlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNlcnZpY2VDaGFyZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdGF0dXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJUb3RhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRva2VuTm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbExlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbFBhaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbFBheWFibGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0UHJpY2U6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFByb2R1Y3RTYWxlRGV0YWlsIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCb29rSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCb29rTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJvb2tOYW1lQm46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExpbmVUb3RhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RTYWxlRGV0YWlsSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0U2FsZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUXVhbnRpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0UHJpY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBfX2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBQcm9kdWN0U2FsZVBheW1lbnQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBheW1lbnRBbW91bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXltZW50RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBheW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdFNhbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RTYWxlUGF5bWVudElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgX19pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmV0dXJuT3JFeGNoYW5nZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkT3JkZXJEZXRhaWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRPcmRlckRldGFpbDI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRQYXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCb29rSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCb29rSWQyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FzaEJhY2tMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJBYm91dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyQ29udGFjdE5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTmFtZUJuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzY291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNjb3VudDI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbml0aWFsTGVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluaXRpYWxQYWlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGluZVRvdGFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGluZVRvdGFsMjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZGVyRGV0YWlsTGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZGVyTGVzc0xpc3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmRlclBheUxpc3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPdGhlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBheW1lbnRBbW91bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXltZW50RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBheW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJlcGFyZWRCeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RTYWxlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRdWFudGl0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFF1YW50aXR5Mjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWFpbmluZ0R1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJldHVybkJvb2tMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXJ2aWNlQ2hhcmdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3RhdHVzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3ViVG90YWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb2tlbk5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG90YWxMZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG90YWxQYWlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG90YWxQYXlhYmxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVW5pdFByaWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVW5pdFByaWNlMjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIEZvcm1zIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIE1lbWJlcnNoaXAge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENoYW5nZVBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBGb3Jnb3RQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExvZ2luIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGYWNlYm9va0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR29vZ2xlQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT1I6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZW1lbWJlck1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnbkluQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnblVwQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZXNldFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFNpZ25VcCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWNjZXB0VGVybXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0ZUVtYWlsU3ViamVjdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1FbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIE5hdmlnYXRpb24ge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBMb2dvdXRMaW5rOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNpdGVUaXRsZTogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFNpdGUge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWNjZXNzRGVuaWVkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9DaGFuZ2VVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhY2tQZXJtaXNzaW9uczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90TG9nZ2VkSW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhZ2VUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJhc2ljUHJvZ3Jlc3NEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsZWFzZVdhaXQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCdWxrU2VydmljZUFjdGlvbiB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbFN1Y2Nlc3NGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvbkZvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRXJyb3JDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90aGluZ1RvUHJvY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU29tZUhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzc0NvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgRGFzaGJvYXJkIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRlbnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIExheW91dCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJDb3B5cmlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckluZm86IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlclJpZ2h0czogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZXJhbFNldHRpbmdzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2s6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2tMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbkxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGVMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvd0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlckRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0UGVybWlzc2lvbnNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRSb2xlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUmV2b2tlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFZhbGlkYXRpb25FcnJvciB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBWYWxpZGF0aW9uIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25FcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDYW50RmluZFVzZXJXaXRoRW1haWw6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRGVsZXRlRm9yZWlnbktleUVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbEluVXNlOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEludmFsaWRBY3RpdmF0ZVRva2VuOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEludmFsaWRSZXNldFRva2VuOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVByaW1hcnlLZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb25bJ1RleHRzJ10gPSBRLnByb3h5VGV4dHMoVGV4dHMsICcnLCB7RGI6e0FkbWluTWFuYWdlbWVudDp7QXV0aG9yOntBYm91dDoxLEF1dGhvcklkOjEsQmlydGhEYXRlOjEsQ29udGFjdE5vOjEsTG9va3VwVGV4dDoxLE1haWw6MSxOYW1lOjEsTmFtZUJuOjF9LEJvb2s6e0F1dGhvcklkOjEsQXV0aG9yTmFtZToxLEF1dGhvck5hbWVCbjoxLEF2YWlsYWJpbGl0eToxLEJvb2tJZDoxLENhdGVnb3J5SWQ6MSxDYXRlZ29yeU5hbWU6MSxDYXRlZ29yeU5hbWVCbjoxLENhdGVnb3J5U29ydE9yZGVyOjEsQ2F0ZWdvcnlUb3BpY0lkOjEsQ291bnRyeUlkOjEsQ292ZXJJbWFnZToxLERpc2NvdW50OjEsRWRpdGlvbjoxLExhbmd1YWdlSWQ6MSxMb29rdXBUZXh0OjEsTmFtZToxLE5hbWVCbjoxLE51bWJlck9mUGFnZXM6MSxQcmV2aWV3QXR0YWNobWVudDoxLFByaWNlOjEsUHVibGlzaGVySWQ6MSxQdWJsaXNoZXJOYW1lOjEsUHVibGlzaGVyTmFtZUJuOjEsU29ydE9yZGVyOjEsU3VtbWFyeToxLFRvcGljSWQ6MSxUb3BpY05hbWU6MSxUb3BpY05hbWVCbjoxLFRyYW5zbGF0b3JJZDoxLFRyYW5zbGF0b3JOYW1lOjEsVHJhbnNsYXRvck5hbWVCbjoxfSxDYXRlZ29yeTp7Q2F0ZWdvcnlJZDoxLE5hbWU6MSxOYW1lQm46MSxTb3J0T3JkZXI6MSxUb3BpY0lkOjEsVG9waWNOYW1lOjEsVG9waWNOYW1lQm46MX0sQ291bnRyeTp7Q29kZToxLENvdW50cnlJZDoxLE5hbWU6MSxOYW1lQm46MSxTb3J0T3JkZXI6MX0sRW1wbG95ZWU6e0Fib3V0OjEsQmlydGhEYXRlOjEsQ29udGFjdE5vOjEsRW1wbG95ZWVJZDoxLE1haWw6MSxOYW1lOjEsTmFtZUJuOjF9LExhbmd1YWdlOntDb2RlOjEsTGFuZ3VhZ2VJZDoxLE5hbWU6MSxOYW1lQm46MSxTb3J0T3JkZXI6MX0sUHVibGlzaGVyOntDb250YWN0Tm86MSxEZXNjcmlwdGlvbjoxLExvb2t1cFRleHQ6MSxNYWlsOjEsTmFtZToxLE5hbWVCbjoxLFB1Ymxpc2hlcklkOjEsU3RhcnREYXRlOjF9LFRvcGljOntOYW1lOjEsTmFtZUJuOjEsVG9waWNJZDoxfX0sQWRtaW5pc3RyYXRpb246e0xhbmd1YWdlOntJZDoxLExhbmd1YWdlSWQ6MSxMYW5ndWFnZU5hbWU6MX0sUm9sZTp7Um9sZUlkOjEsUm9sZU5hbWU6MX0sUm9sZVBlcm1pc3Npb246e1Blcm1pc3Npb25LZXk6MSxSb2xlSWQ6MSxSb2xlUGVybWlzc2lvbklkOjEsUm9sZVJvbGVOYW1lOjF9LFRyYW5zbGF0aW9uOntDdXN0b21UZXh0OjEsRW50aXR5UGx1cmFsOjEsS2V5OjEsT3ZlcnJpZGVDb25maXJtYXRpb246MSxTYXZlQ2hhbmdlc0J1dHRvbjoxLFNvdXJjZUxhbmd1YWdlOjEsU291cmNlVGV4dDoxLFRhcmdldExhbmd1YWdlOjEsVGFyZ2V0VGV4dDoxfSxVc2VyOntEaXNwbGF5TmFtZToxLEVtYWlsOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLElzQWN0aXZlOjEsTGFzdERpcmVjdG9yeVVwZGF0ZToxLFBhc3N3b3JkOjEsUGFzc3dvcmRDb25maXJtOjEsUGFzc3dvcmRIYXNoOjEsUGFzc3dvcmRTYWx0OjEsU291cmNlOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxLFVzZXJJZDoxLFVzZXJJbWFnZToxLFVzZXJuYW1lOjF9LFVzZXJQZXJtaXNzaW9uOntHcmFudGVkOjEsUGVybWlzc2lvbktleToxLFVzZXI6MSxVc2VySWQ6MSxVc2VyUGVybWlzc2lvbklkOjEsVXNlcm5hbWU6MX0sVXNlclJvbGU6e1JvbGVJZDoxLFVzZXI6MSxVc2VySWQ6MSxVc2VyUm9sZUlkOjEsVXNlcm5hbWU6MX19LFB1Ymxpc2hlclN0YWxsOntQdXJjaGFzZU9yZGVyOntBZGRPcmRlckRldGFpbDoxLEFkZFBheToxLEJvb2tJZDoxLERpc2NvdW50OjEsSW5pdGlhbExlc3M6MSxJbml0aWFsUGFpZDoxLExpbmVUb3RhbDoxLE9yZGVyRGF0ZToxLE9yZGVyRGV0YWlsTGlzdDoxLE9yZGVyTGVzc0xpc3Q6MSxPcmRlclBheUxpc3Q6MSxPdGhlcjoxLFBheW1lbnRBbW91bnQ6MSxQYXltZW50RGF0ZToxLFBheW1lbnRUeXBlOjEsUHVibGlzaGVyQ29udGFjdE5vOjEsUHVibGlzaGVyRGVzY3JpcHRpb246MSxQdWJsaXNoZXJJZDoxLFB1Ymxpc2hlck1haWw6MSxQdWJsaXNoZXJOYW1lOjEsUHVibGlzaGVyTmFtZUJuOjEsUHVibGlzaGVyU3RhcnREYXRlOjEsUHVyY2hhc2VPcmRlcklkOjEsUXVhbnRpdHk6MSxSZW1haW5pbmdEdWU6MSxTZXJ2aWNlQ2hhcmdlOjEsU3RhdHVzOjEsU3ViVG90YWw6MSxUb2tlbk5vOjEsVG90YWxMZXNzOjEsVG90YWxQYWlkOjEsVG90YWxQYXlhYmxlOjEsVW5pdFByaWNlOjF9LFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0OntCb29rSWQ6MSxCb29rTmFtZToxLEJvb2tOYW1lQm46MSxEaXNjb3VudDoxLExpbmVUb3RhbDoxLFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0SWQ6MSxQdXJjaGFzZU9yZGVySWQ6MSxRdWFudGl0eToxLFVuaXRQcmljZToxLF9faWQ6MX0sUHVyY2hhc2VPcmRlclBheW1lbnQ6e1BheW1lbnRBbW91bnQ6MSxQYXltZW50RGF0ZToxLFBheW1lbnRUeXBlOjEsUHVyY2hhc2VPcmRlcklkOjEsUHVyY2hhc2VPcmRlclBheW1lbnRJZDoxLF9faWQ6MX19LFN0YWxsQ3VzdG9tZXI6e0N1c3RvbWVyOntBYm91dDoxLENvbnRhY3RObzoxLEN1c3RvbWVySWQ6MSxMb29rdXBUZXh0OjEsTWFpbDoxLE5hbWU6MSxOYW1lQm46MX0sUHJvZHVjdFNhbGU6e0FkZE9yZGVyRGV0YWlsOjEsQWRkUGF5OjEsQm9va0lkOjEsQ3VzdG9tZXJBYm91dDoxLEN1c3RvbWVyQ29udGFjdE5vOjEsQ3VzdG9tZXJJZDoxLEN1c3RvbWVyTWFpbDoxLEN1c3RvbWVyTmFtZToxLEN1c3RvbWVyTmFtZUJuOjEsRGlzY291bnQ6MSxJbml0aWFsTGVzczoxLEluaXRpYWxQYWlkOjEsTGluZVRvdGFsOjEsT3JkZXJEZXRhaWxMaXN0OjEsT3JkZXJMZXNzTGlzdDoxLE9yZGVyUGF5TGlzdDoxLE90aGVyOjEsUGF5bWVudEFtb3VudDoxLFBheW1lbnREYXRlOjEsUGF5bWVudFR5cGU6MSxQcmVwYXJlZEJ5OjEsUHJvZHVjdFNhbGVJZDoxLFF1YW50aXR5OjEsUmVtYWluaW5nRHVlOjEsU2FsZURhdGU6MSxTZXJ2aWNlQ2hhcmdlOjEsU3RhdHVzOjEsU3ViVG90YWw6MSxUb2tlbk5vOjEsVG90YWxMZXNzOjEsVG90YWxQYWlkOjEsVG90YWxQYXlhYmxlOjEsVW5pdFByaWNlOjF9LFByb2R1Y3RTYWxlRGV0YWlsOntCb29rSWQ6MSxCb29rTmFtZToxLEJvb2tOYW1lQm46MSxEaXNjb3VudDoxLExpbmVUb3RhbDoxLFByb2R1Y3RTYWxlRGV0YWlsSWQ6MSxQcm9kdWN0U2FsZUlkOjEsUXVhbnRpdHk6MSxVbml0UHJpY2U6MSxfX2lkOjF9LFByb2R1Y3RTYWxlUGF5bWVudDp7UGF5bWVudEFtb3VudDoxLFBheW1lbnREYXRlOjEsUGF5bWVudFR5cGU6MSxQcm9kdWN0U2FsZUlkOjEsUHJvZHVjdFNhbGVQYXltZW50SWQ6MSxfX2lkOjF9LFJldHVybk9yRXhjaGFuZ2U6e0FkZE9yZGVyRGV0YWlsOjEsQWRkT3JkZXJEZXRhaWwyOjEsQWRkUGF5OjEsQm9va0lkOjEsQm9va0lkMjoxLENhc2hCYWNrTGlzdDoxLEN1c3RvbWVyQWJvdXQ6MSxDdXN0b21lckNvbnRhY3RObzoxLEN1c3RvbWVySWQ6MSxDdXN0b21lck1haWw6MSxDdXN0b21lck5hbWU6MSxDdXN0b21lck5hbWVCbjoxLERpc2NvdW50OjEsRGlzY291bnQyOjEsSW5pdGlhbExlc3M6MSxJbml0aWFsUGFpZDoxLExpbmVUb3RhbDoxLExpbmVUb3RhbDI6MSxPcmRlckRldGFpbExpc3Q6MSxPcmRlckxlc3NMaXN0OjEsT3JkZXJQYXlMaXN0OjEsT3RoZXI6MSxQYXltZW50QW1vdW50OjEsUGF5bWVudERhdGU6MSxQYXltZW50VHlwZToxLFByZXBhcmVkQnk6MSxQcm9kdWN0U2FsZUlkOjEsUXVhbnRpdHk6MSxRdWFudGl0eTI6MSxSZW1haW5pbmdEdWU6MSxSZXR1cm5Cb29rTGlzdDoxLFNhbGVEYXRlOjEsU2VydmljZUNoYXJnZToxLFN0YXR1czoxLFN1YlRvdGFsOjEsVG9rZW5ObzoxLFRvdGFsTGVzczoxLFRvdGFsUGFpZDoxLFRvdGFsUGF5YWJsZToxLFVuaXRQcmljZToxLFVuaXRQcmljZTI6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsRm9ybVRpdGxlOjEsR29vZ2xlQnV0dG9uOjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxOYXZpZ2F0aW9uOntMb2dvdXRMaW5rOjEsU2l0ZVRpdGxlOjF9LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSk7XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQXV0aG9yRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEF1dGhvclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBdXRob3JGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEF1dGhvclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEF1dGhvclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQXV0aG9yUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQXV0aG9yU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBdXRob3JSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXV0aG9yUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEF1dGhvclJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEF1dGhvckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQXV0aG9yR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8QXV0aG9yUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEF1dGhvckNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQXV0aG9yRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBdXRob3JSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQXV0aG9yUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQXV0aG9yUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQXV0aG9yU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCgpXHJcbiAgICBleHBvcnQgY2xhc3MgQm9va0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxCb29rUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEJvb2tGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEJvb2tSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBCb29rUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQm9va1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQm9va1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBCb29rUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEJvb2tSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBCb29rRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBCb29rR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Qm9va1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBCb29rQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBCb29rRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBCb29rUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEJvb2tSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQm9va1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbk1hbmFnZW1lbnQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3J5RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENhdGVnb3J5Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENhdGVnb3J5Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yeVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENhdGVnb3J5Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yeVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhdGVnb3J5U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yeVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yeVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yeVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENhdGVnb3J5Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPENhdGVnb3J5Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIENhdGVnb3J5Q29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDYXRlZ29yeURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXRlZ29yeVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhdGVnb3J5U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ291bnRyeURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDb3VudHJ5Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENvdW50cnlGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENvdW50cnlSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDb3VudHJ5Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDb3VudHJ5Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ291bnRyeVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ291bnRyeVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb3VudHJ5Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENvdW50cnlSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDb3VudHJ5Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDb3VudHJ5R3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q291bnRyeVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDb3VudHJ5Q29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDb3VudHJ5RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb3VudHJ5Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENvdW50cnlSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDb3VudHJ5Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ291bnRyeVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbk1hbmFnZW1lbnQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVtcGxveWVlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEVtcGxveWVlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEVtcGxveWVlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBFbXBsb3llZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEVtcGxveWVlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBFbXBsb3llZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcGxveWVlU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBsb3llZVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBsb3llZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBsb3llZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEVtcGxveWVlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEVtcGxveWVlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEVtcGxveWVlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBFbXBsb3llZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBFbXBsb3llZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcGxveWVlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIExhbmd1YWdlUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIExhbmd1YWdlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIExhbmd1YWdlUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTGFuZ3VhZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbk1hbmFnZW1lbnQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIExhbmd1YWdlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQdWJsaXNoZXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UHVibGlzaGVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFB1Ymxpc2hlckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHVibGlzaGVyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHVibGlzaGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBQdWJsaXNoZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQdWJsaXNoZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFB1Ymxpc2hlclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQdWJsaXNoZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHVibGlzaGVyUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUHVibGlzaGVyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQdWJsaXNoZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQdWJsaXNoZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUHVibGlzaGVyQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQdWJsaXNoZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFB1Ymxpc2hlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQdWJsaXNoZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQdWJsaXNoZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQdWJsaXNoZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5NYW5hZ2VtZW50IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUb3BpY0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxUb3BpY1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBUb3BpY0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVG9waWNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBUb3BpY1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gVG9waWNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUb3BpY1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVG9waWNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gVG9waWNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVG9waWNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBUb3BpY0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluTWFuYWdlbWVudCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVG9waWNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUb3BpY1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBUb3BpY0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVG9waWNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFRvcGljUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFRvcGljUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVG9waWNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUb3BpY1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMYW5ndWFnZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBMYW5ndWFnZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLkxhbmd1YWdlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIExhbmd1YWdlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0xhbmd1YWdlUm93LkZpZWxkcy5MYW5ndWFnZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUm9sZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJvbGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRWRpdEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJvbGVQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZUlEOiB0aGlzLmVudGl0eS5Sb2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmVudGl0eS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSb2xlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uUm9sZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSb2xlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1JvbGVSb3cuRmllbGRzLlJvbGVOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZVBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8Um9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+ICg8VXNlclBlcm1pc3Npb25Sb3c+eyBQZXJtaXNzaW9uS2V5OiB4IH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHguUGVybWlzc2lvbktleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgcm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VHJhbnNsYXRpb25JdGVtLCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUcmFuc2xhdGlvblNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGhhc0NoYW5nZXM6IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBzb3VyY2VMYW5ndWFnZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yOyBcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgcHJpdmF0ZSB0YXJnZXRMYW5ndWFnZUtleTogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKCdrZXl1cC4nICsgdGhpcy51bmlxdWVOYW1lICsgJyBjaGFuZ2UuJyArIHRoaXMudW5pcXVlTmFtZSxcclxuICAgICAgICAgICAgICAgICdpbnB1dC5jdXN0b20tdGV4dCcsIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gUS50cmltVG9OdWxsKCQoZS50YXJnZXQpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoJChlLnRhcmdldCkuZGF0YSgna2V5JykpLkN1c3RvbVRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgIGxldCBkb25lOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdzb3VyY2UtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5DdXN0b21UZXh0ID0gaXRlbS5Tb3VyY2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVJdGVtKGl0ZW0uS2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUS5pc1RyaW1tZWRFbXB0eShpdGVtLkN1c3RvbVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFEudHJpbVRvRW1wdHkoaXRlbS5DdXN0b21UZXh0KSA9PT0gUS50cmltVG9FbXB0eShpdGVtLlNvdXJjZVRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uT3ZlcnJpZGVDb25maXJtYXRpb24nKSwgZG9uZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygndGFyZ2V0LXRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5DdXN0b21UZXh0ID0gaXRlbS5UYXJnZXRUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVJdGVtKGl0ZW0uS2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUS5pc1RyaW1tZWRFbXB0eShpdGVtLkN1c3RvbVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFEudHJpbVRvRW1wdHkoaXRlbS5DdXN0b21UZXh0KSA9PT0gUS50cmltVG9FbXB0eShpdGVtLlRhcmdldFRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uT3ZlcnJpZGVDb25maXJtYXRpb24nKSwgZG9uZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zOiBTbGljay5Db2x1bW5bXSA9IFtdO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goeyBmaWVsZDogJ0tleScsIHdpZHRoOiAzMDAsIHNvcnRhYmxlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1NvdXJjZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5vdXRlckh0bWwoJCgnPGEvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc291cmNlLXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdDdXN0b21UZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8aW5wdXQvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjdXN0b20tdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgY3R4LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWtleScsIGN0eC5pdGVtLktleSkpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGFyZ2V0VGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gUS5vdXRlckh0bWwoJCgnPGEvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd0YXJnZXQtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoY3R4LnZhbHVlIHx8ICcnKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcHQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBsb29rdXBLZXk6ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UgPSBTZXJlbml0eS5XaWRnZXQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsID0+IGVsLmFwcGVuZFRvKHRoaXMudG9vbGJhci5lbGVtZW50KS5hdHRyKCdwbGFjZWhvbGRlcicsICctLS0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5Tb3VyY2VMYW5ndWFnZScpICsgJyAtLS0nKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlRhcmdldExhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUNoYW5nZXMobGFuZ3VhZ2U6IHN0cmluZyk6IFByb21pc2VMaWtlPGFueT4ge1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnNbaXRlbS5LZXldID0gaXRlbS5DdXN0b21UZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFRyYW5zbGF0aW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRDogbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc1xyXG4gICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gUS50cmltVG9OdWxsKGxhbmd1YWdlKSB8fCAnaW52YXJpYW50JztcclxuICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcygnVXNlciB0cmFuc2xhdGlvbnMgaW4gXCInICsgbGFuZ3VhZ2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICdcIiBsYW5ndWFnZSBhcmUgc2F2ZWQgdG8gXCJ1c2VyLnRleHRzLicgK1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlICsgJy5qc29uXCIgJyArICdmaWxlIHVuZGVyIFwifi9BcHBfRGF0YS90ZXh0cy9cIicsICcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3U3VibWl0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMudmlldy5wYXJhbXM7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU291cmNlTGFuZ3VhZ2VJRCA9IHRoaXMuc291cmNlTGFuZ3VhZ2UudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkgPSB0aGlzLnRhcmdldExhbmd1YWdlLnZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlRhcmdldExhbmd1YWdlSUQgPSB0aGlzLnRhcmdldExhbmd1YWdlS2V5O1xyXG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld1N1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uU2F2ZUNoYW5nZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGUgPT4gdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYXBwbHktY2hhbmdlcy1idXR0b24nXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVF1aWNrU2VhcmNoSW5wdXQoKSB7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLCBzZWFyY2hUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW06IFRyYW5zbGF0aW9uSXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzZCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3M7XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hpbmcgPSBzZCh0aGlzLnNlYXJjaFRleHQpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtYXRjaChzdHI6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaGluZykgPj0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFEuaXNFbXB0eU9yTnVsbChzZWFyY2hpbmcpIHx8IG1hdGNoKGl0ZW0uS2V5KSB8fCBtYXRjaChpdGVtLlNvdXJjZVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICBtYXRjaChpdGVtLlRhcmdldFRleHQpIHx8IG1hdGNoKGl0ZW0uQ3VzdG9tVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXNlUGFnZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFVzZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFVzZXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUgIT0gdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmRzIGVudGVyZWQgZG9lc24ndCBtYXRjaCFcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0Um9sZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1yb2xlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLXVzZXJzIHRleHQtYmx1ZScsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUm9sZURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0UGVybWlzc2lvbnNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdlZGl0LXJvbGVzLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVzZSBmaWVsZHMgYXJlIG9ubHkgcmVxdWlyZWQgaW4gbmV3IHJlY29yZCBtb2RlXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Vc2VyXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFVzZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtVc2VyUm93LkZpZWxkcy5Vc2VybmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQXV0aG9yaXphdGlvbiB7XHJcbiAgICBleHBvcnQgZGVjbGFyZSBsZXQgdXNlckRlZmluaXRpb246IFNjcmlwdFVzZXJEZWZpbml0aW9uO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRob3JpemF0aW9uLCAndXNlckRlZmluaXRpb24nLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldFJlbW90ZURhdGEoJ1VzZXJEYXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXkpO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcihbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBleHBvcnQgY2xhc3MgUGVybWlzc2lvbkNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRGF0YUdyaWQ8UGVybWlzc2lvbkNoZWNrSXRlbSwgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBieVBhcmVudEtleTogUS5Hcm91cGluZzxQZXJtaXNzaW9uQ2hlY2tJdGVtPjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4gPSB7fTtcclxuICAgICAgICAgICAgbGV0IHBlcm1pc3Npb25LZXlzID0gdGhpcy5nZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBwZXJtaXNzaW9uS2V5cy5tYXAoa2V5ID0+IDxQZXJtaXNzaW9uQ2hlY2tJdGVtPntcclxuICAgICAgICAgICAgICAgIEtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgUGFyZW50S2V5OiB0aGlzLmdldFBhcmVudEtleShrZXkpLFxyXG4gICAgICAgICAgICAgICAgVGl0bGU6IHRpdGxlQnlLZXlba2V5XSxcclxuICAgICAgICAgICAgICAgIEdyYW50UmV2b2tlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgSXNHcm91cDoga2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlQYXJlbnRLZXkgPSBRLnRvR3JvdXBpbmcoaXRlbXMsIHggPT4geC5QYXJlbnRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZ3JhbnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoaXRlbS5HcmFudFJldm9rZSA9PT0gZ3JhbnQpID8gJyBjaGVja2VkJyA6ICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGRlc2MuZmlsdGVyKHggPT4geC5HcmFudFJldm9rZSA9PT0gZ3JhbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVzYy5sZW5ndGggPT09IGdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQgcGFydGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJvbGVPckltcGxpY2l0KGtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcm9sZVBlcm1pc3Npb25zW2tleV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIG9mIE9iamVjdC5rZXlzKHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uR3JhbnRSZXZva2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFudENvdW50ID0gUS5jb3VudChkZXNjLCB4ID0+IHguR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAoeC5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoeC5LZXkpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IGRlc2MubGVuZ3RoIHx8IGRlc2MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhbGxvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RlbnknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAncGFydGlhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gaXRlbS5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KGl0ZW0uS2V5KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGdyYW50ZWQgPyAnIGFsbG93JyA6ICcgZGVueScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlBlcm1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBTZXJlbml0eS5TbGlja0Zvcm1hdHRpbmcudHJlZVRvZ2dsZSgoKSA9PiB0aGlzLnZpZXcsIHggPT4geC5LZXksIGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MgPSB0aGlzLmdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZWZmZWN0aXZlLXBlcm1pc3Npb24gJyArIGtsYXNzICsgJ1wiPicgKyBRLmh0bWxFbmNvZGUoY3R4LnZhbHVlKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuR3JhbnQnKSwgZmllbGQ6ICdHcmFudCcsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMSA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdjaGVjay1ib3ggZ3JhbnQgbm8tZmxvYXQgXCIgKyBrbGFzczEgKyBcIic+PC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Jldm9rZSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUmV2b2tlJyksIGZpZWxkOiAnUmV2b2tlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MyID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiY2hlY2stYm94IHJldm9rZSBuby1mbG9hdCAnICsga2xhc3MyICsgJ1wiPjwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0SXRlbXMoaXRlbXM6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSk6IHZvaWQge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuc2V0SW5kZW50cyhpdGVtcywgeCA9PiB4LktleSwgeCA9PiB4LlBhcmVudEtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLmZpbHRlckJ5SWQoaXRlbSwgdGhpcy52aWV3LCB4ID0+IHguUGFyZW50S2V5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQ29udGFpbnMoaXRlbSkgfHwgaXRlbS5Jc0dyb3VwICYmIFEuYW55KHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgZmFsc2UpLCB4ID0+IHRoaXMubWF0Y2hDb250YWlucyh4KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtYXRjaENvbnRhaW5zKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS5UaXRsZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0RGVzY2VuZGFudHMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZXhjbHVkZUdyb3VwczogYm9vbGVhbik6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3RhY2sgPSBbaXRlbV07XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ieVBhcmVudEtleVtpLktleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlR3JvdXBzIHx8ICFjaGlsZC5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZSwgcm93LCBjZWxsKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnRvZ2dsZUNsaWNrKGUsIHJvdywgY2VsbCwgdGhpcy52aWV3LCB4ID0+IHguS2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnQgPSB0YXJnZXQuaGFzQ2xhc3MoJ2dyYW50Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JhbnQgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdyZXZva2UnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2VkT3JQYXJ0aWFsID0gdGFyZ2V0Lmhhc0NsYXNzKCdjaGVja2VkJykgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdwYXJ0aWFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRPclBhcnRpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IGdyYW50ICE9PSBjaGVja2VkT3JQYXJ0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkIG9mIHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5HcmFudFJldm9rZSA9IGdyYW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlja0dyaWQuaW52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBhcmVudEtleShrZXkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpZHggPSBrZXkubGFzdEluZGV4T2YoJzonKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBpZHggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLnRyaW1Ub051bGwodGV4dCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPik6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSA8c3RyaW5nW10+US5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cycpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVXaXRoR3JvdXAgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGs7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KHMubGVuZ3RoIC0gMSkgPT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVCeUtleVtzXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbc10gPSBRLmNvYWxlc2NlKFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgcyksIHMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGdyb3VwICsgcGFydHNbaV0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9IFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVCeUtleVtncm91cF0gPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUaXRsZSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W2dyb3VwXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtncm91cF0gPSBncm91cFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW3NdID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAga2V5cyA9IGtleXMuc29ydCgoeCwgeSkgPT4gUS50dXJraXNoTG9jYWxlQ29tcGFyZSh0aXRsZVdpdGhHcm91cFt4XSwgdGl0bGVXaXRoR3JvdXBbeV0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlKCk6IFVzZXJQZXJtaXNzaW9uUm93W10ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogVXNlclBlcm1pc3Npb25Sb3dbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uR3JhbnRSZXZva2UgIT0gbnVsbCAmJiBpdGVtLktleS5jaGFyQXQoaXRlbS5LZXkubGVuZ3RoIC0gMSkgIT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBQZXJtaXNzaW9uS2V5OiBpdGVtLktleSwgR3JhbnRlZDogaXRlbS5HcmFudFJldm9rZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZSh2YWx1ZTogVXNlclBlcm1pc3Npb25Sb3dbXSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChyb3cuUGVybWlzc2lvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5HcmFudFJldm9rZSA9IFEuY29hbGVzY2Uocm93LkdyYW50ZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcm9sZVBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8Ym9vbGVhbj4gPSB7fTtcclxuXHJcbiAgICAgICAgZ2V0IHJvbGVQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHJvbGVQZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnNba10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pbXBsaWNpdFBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8US5EaWN0aW9uYXJ5PGJvb2xlYW4+PiA9IHt9O1xyXG5cclxuICAgICAgICBzZXQgaW1wbGljaXRQZXJtaXNzaW9ucyh2YWx1ZTogUS5EaWN0aW9uYXJ5PHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB2YWx1ZVtrXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIG9mIGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdW3NdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zIHtcclxuICAgICAgICBzaG93UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0l0ZW0ge1xyXG4gICAgICAgIFBhcmVudEtleT86IHN0cmluZztcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNHcm91cD86IGJvb2xlYW47XHJcbiAgICAgICAgR3JhbnRSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0Um9sZVBlcm1pc3Npb25zKHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5yb2xlUGVybWlzc2lvbnMgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclJvbGVEaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFJvbGVDaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUm9sZURpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUm9sZUNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUm9sZXMnKSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUm9sZVNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySURcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUS5zZXJ2aWNlUmVxdWVzdCgnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXBkYXRlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVzOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHBhcnNlSW50KHgsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5TYXZlU3VjY2VzcycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5EaWFsb2dUaXRsZScpLCB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8ZGl2IGlkPSd+X1JvbGVzJz48L2Rpdj5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZURpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRDogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5MYW5ndWFnZUxpc3Qge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ6IHN0cmluZ1tdW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBrIG9mIEFkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LmdldExvb2t1cCgpLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChrLkxhbmd1YWdlSWQgIT09ICdlbicpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFtrLklkLnRvU3RyaW5nKCksIGsuTGFuZ3VhZ2VOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlNjcmlwdEluaXRpYWxpemF0aW9uIHtcclxuICAgIFEuQ29uZmlnLnJlc3BvbnNpdmVEaWFsb2dzID0gdHJ1ZTtcclxuICAgIFEuQ29uZmlnLnJvb3ROYW1lc3BhY2VzLnB1c2goJ0xpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24nKTtcclxuICAgIFNlcmVuaXR5LkVudGl0eURpYWxvZy5kZWZhdWx0TGFuZ3VhZ2VMaXN0ID0gTGFuZ3VhZ2VMaXN0LmdldFZhbHVlO1xyXG4gICAgU2VyZW5pdHkuSHRtbENvbnRlbnRFZGl0b3IuQ0tFZGl0b3JCYXNlUGF0aCA9IFwifi9TZXJlbml0eS5Bc3NldHMvU2NyaXB0cy9ja2VkaXRvci9cIjtcclxuXHJcbiAgICBpZiAoJC5mblsnY29sb3Jib3gnXSkge1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4V2lkdGggPSBcIjk1JVwiO1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4SGVpZ2h0ID0gXCI5NSVcIjtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25lcnJvciA9IFEuRXJyb3JIYW5kbGluZy5ydW50aW1lRXJyb3JIYW5kbGVyO1xyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZVNlbGVjdGlvbiBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihzZWxlY3Q6IEpRdWVyeSwgY3VycmVudExhbmd1YWdlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoc2VsZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9IFEuY29hbGVzY2UoY3VycmVudExhbmd1YWdlLCAnZW4nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGggPSBRLkNvbmZpZy5hcHBsaWNhdGlvblBhdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aCAmJiBwYXRoICE9ICcvJyAmJiBRLmVuZHNXaXRoKHBhdGgsICcvJykpXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAkLmNvb2tpZSgnTGFuZ3VhZ2VQcmVmZXJlbmNlJywgc2VsZWN0LnZhbCgpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiAzNjVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFEuZ2V0TG9va3VwQXN5bmM8QWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3c+KCdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpLnRoZW4oeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVEuYW55KHguaXRlbXMsIHogPT4gei5MYW5ndWFnZUlkID09PSBjdXJyZW50TGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IGN1cnJlbnRMYW5ndWFnZS5sYXN0SW5kZXhPZignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSBjdXJyZW50TGFuZ3VhZ2Uuc3Vic3RyKDAsIGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUS5hbnkoeC5pdGVtcywgeSA9PiB5Lkxhbmd1YWdlSWQgPT09IGN1cnJlbnRMYW5ndWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgb2YgeC5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgbC5MYW5ndWFnZUlkLCBsLkxhbmd1YWdlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LnZhbChjdXJyZW50TGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFRoZW1lU2VsZWN0aW9uIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHNlbGVjdDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoID0gUS5Db25maWcuYXBwbGljYXRpb25QYXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGggJiYgcGF0aCAhPSAnLycgJiYgUS5lbmRzV2l0aChwYXRoLCAnLycpKVxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuY29va2llKCdUaGVtZVByZWZlcmVuY2UnLCBzZWxlY3QudmFsKCksIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IDM2NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRoZW1lID0gc2VsZWN0LnZhbCgpIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhcmtTaWRlYmFyID0gdGhlbWUuaW5kZXhPZignbGlnaHQnKSA8IDA7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NraW4tJyArIHRoaXMuZ2V0Q3VycmVudFRoZW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdza2luLScgKyB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoJ2Rhcmstc2lkZWJhcicsIGRhcmtTaWRlYmFyKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcygnbGlnaHQtc2lkZWJhcicsICFkYXJrU2lkZWJhcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAnYmx1ZScsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVCbHVlJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibHVlLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsdWVMaWdodCcpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAncHVycGxlJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVB1cnBsZScpKTtcclxuICAgICAgICAgICAgUS5hZGRPcHRpb24oc2VsZWN0LCAncHVycGxlLWxpZ2h0JywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZVB1cnBsZUxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdyZWQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUmVkJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdyZWQtbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lUmVkTGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2dyZWVuJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUdyZWVuJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdncmVlbi1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVHcmVlbkxpZ2h0JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICd5ZWxsb3cnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lWWVsbG93JykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICd5ZWxsb3ctbGlnaHQnLCBRLnRleHQoJ1NpdGUuTGF5b3V0LlRoZW1lWWVsbG93TGlnaHQnKSk7XHJcbiAgICAgICAgICAgIFEuYWRkT3B0aW9uKHNlbGVjdCwgJ2JsYWNrJywgUS50ZXh0KCdTaXRlLkxheW91dC5UaGVtZUJsYWNrJykpO1xyXG4gICAgICAgICAgICBRLmFkZE9wdGlvbihzZWxlY3QsICdibGFjay1saWdodCcsIFEudGV4dCgnU2l0ZS5MYXlvdXQuVGhlbWVCbGFja0xpZ2h0JykpO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0LnZhbCh0aGlzLmdldEN1cnJlbnRUaGVtZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDdXJyZW50VGhlbWUoKSB7XHJcbiAgICAgICAgICAgIHZhciBza2luQ2xhc3MgPSBRLmZpcnN0KCgkKCdib2R5JykuYXR0cignY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKSwgeCA9PiBRLnN0YXJ0c1dpdGgoeCwgJ3NraW4tJykpO1xyXG4gICAgICAgICAgICBpZiAoc2tpbkNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tpbkNsYXNzLnN1YnN0cig1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdibHVlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxMb2dpblJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExvZ2luRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAkLmZuWyd2ZWdhcyddICYmICQoJ2JvZHknKVsndmVnYXMnXSh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwMDAsXHJcbiAgICAgICAgICAgICAgICBjb3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBSUFBQUFDQVFNQUFBQkllSjluQUFBQUEzTkNTVlFJQ0FqYjRVXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiL2dBQUFBQmxCTVZFWC8vLzhBQUFCVnd0TitBQUFBQW5SU1RsTUEvMXVSSXJVQUFBQUpjRWhaY3dBQUFzUUFBQUxFQVZ1Um5Rc0FBQUFXZEVWWWRFTnlaV0YwXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYVc5dUlGUnBiV1VBTURRdk1UTXZNVEdyVzBUNkFBQUFISFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JHYVhKbGQyOXlhM01nUTFNMWNiWGpOZ0FBQUF4SlJFRlVDSmxqYUdCZ0FBQUJoQUNCck9OSVBnQUFBQUJKUlU1RXJrSmdnZz09XCIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHNyYzogUS5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvc2xpZGVzL3NsaWRlMS5qcGdcIiksIHRyYW5zaXRpb246ICdmYWRlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOiBRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9zbGlkZXMvc2xpZGUyLmpwZ1wiKSwgdHJhbnNpdGlvbjogJ3pvb21PdXQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6IFEucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL3NsaWRlcy9zbGlkZTMuanBnXCIpLCB0cmFuc2l0aW9uOiAnc3dpcmxMZWZ0JyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdMb2dpbkJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9SZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IChyZXNwb25zZTogU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IuQ29kZSA9PSBcIlJlZGlyZWN0VXNlclRvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UuRXJyb3IuQXJndW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmICFRLmlzRW1wdHlPck51bGwocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5RXJyb3IocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjUGFzc3dvcmQnKS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5FcnJvckhhbmRsaW5nLnNob3dTZXJ2aWNlRXJyb3IocmVzcG9uc2UuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZWRpcmVjdFRvUmV0dXJuVXJsKCkge1xyXG4gICAgICAgICAgICB2YXIgcSA9IFEucGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgcmV0dXJuVXJsID0gcVsncmV0dXJuVXJsJ10gfHwgcVsnUmV0dXJuVXJsJ107XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5VcmwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaCAhPSBudWxsICYmIGhhc2ggIT0gJyMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblVybCArPSBoYXNoO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXR1cm5Vcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG48ZGl2IGNsYXNzPVwiZmxleC1sYXlvdXRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICA8aDM+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcm1UaXRsZVwiKX08L2gzPlxyXG4gICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicy1Gb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNldCB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9Mb2dpbkJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduSW5CdXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpfVwiPjxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+Jm5ic3A7JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcmdvdFBhc3N3b3JkXCIpfTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpfVwiPjxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+Jm5ic3A7JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25VcEJ1dHRvblwiKX08L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPENoYW5nZVBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2hhbmdlUGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBDaGFuZ2VQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgQ2hhbmdlUGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udygnTmV3UGFzc3dvcmQnLCBTZXJlbml0eS5QYXNzd29yZEVkaXRvcikudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9DaGFuZ2VQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8Rm9yZ290UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBGb3Jnb3RQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IEZvcmdvdFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3Jnb3RQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFJlc2V0UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXNldFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogUmVzZXRQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUmVzZXRQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Ub2tlbiA9IHRoaXMuYnlJZCgnVG9rZW4nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvUmVzZXRQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFNpZ25VcFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNpZ25VcEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFNpZ25VcEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgU2lnblVwRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtRW1haWwuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybUVtYWlsLnZhbHVlICE9PSB0aGlzLmZvcm0uRW1haWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLkVtYWlsQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5TmFtZTogdGhpcy5mb3JtLkRpc3BsYXlOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDogdGhpcy5mb3JtLkVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuU2lnblVwLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKClcclxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFB1cmNoYXNlT3JkZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIG5leHRJZCA9IDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIHN1bSA9IDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUHVyY2hhc2VPcmRlckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkFkZFBheS5nZXRHcmlkRmllbGQoKS5maW5kKCcuY2FwdGlvbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQWRkUGF5LmdldEdyaWRGaWVsZCgpLmZpbmQoJy5lZGl0b3InKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiPjxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtcGx1cy1jaXJjbGUgdGV4dC1ncmVlblwiPjwvaT4gPGI+QWRkPC9iPjwvc3Bhbj48L2J1dHRvbj4nKVxyXG4gICAgICAgICAgICAgICAgLmluc2VydEFmdGVyKHRoaXMuZm9ybS5BZGRQYXkuZWxlbWVudCkgXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4gdGhpcy5hZGRQYXltZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkFkZE9yZGVyRGV0YWlsLmdldEdyaWRGaWVsZCgpLmZpbmQoJy5jYXB0aW9uJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5BZGRPcmRlckRldGFpbC5nZXRHcmlkRmllbGQoKS5maW5kKCcuZWRpdG9yJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIj48c3Bhbj48aSBjbGFzcz1cImZhIGZhLXBsdXMtY2lyY2xlIHRleHQtZ3JlZW5cIj48L2k+IDxiPkFkZDwvYj48L3NwYW4+PC9idXR0b24+JylcclxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZnRlcih0aGlzLmZvcm0uQWRkT3JkZXJEZXRhaWwuZWxlbWVudClcclxuICAgICAgICAgICAgICAgIC5jbGljaygoKSA9PiB0aGlzLmFkZE9yZGVyRGV0YWlsKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkRpYWxvZ09wZW4oKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uRGlhbG9nT3BlbigpO1xyXG5cclxuICAgICAgICAgICAgLy9pbml0aWFsaXphdGlvblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGF5bWVudEFtb3VudC52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXltZW50RGF0ZS52YWx1ZSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9IFN0cmluZyhDb21tb24uUHVyY2hhc2VQYXltZW50VHlwZS5QYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlF1YW50aXR5LnZhbHVlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpb25cclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTdWJUb3RhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsTGVzcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5uZXh0SWQgPSB0aGlzLm1heFZhbHVlKHRoaXMuZm9ybS5PcmRlckRldGFpbExpc3QudmFsdWUubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSh0aGlzLmZvcm0uT3JkZXJQYXlMaXN0LnZhbHVlLmxlbmd0aCwgdGhpcy5mb3JtLk9yZGVyTGVzc0xpc3QudmFsdWUubGVuZ3RoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5TdGF0dXMudmFsdWUgPT0gdW5kZWZpbmVkIHx8IHRoaXMuZm9ybS5TdGF0dXMudmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5TdGF0dXMudmFsdWUgPSBTdHJpbmcoQ29tbW9uLlB1cmNoYXNlU3RhdHVzLkRyYWZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLlN0YXR1cy52YWx1ZSA9PSBTdHJpbmcoQ29tbW9uLlB1cmNoYXNlU3RhdHVzLkRyYWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgcS5oaWRlRWRpdG9yQ2F0ZWdvcnkodGhpcy5mb3JtLlBheW1lbnREYXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHEucmVhZE9ubHlFZGl0b3IodGhpcy5mb3JtLlRva2VuTm8pO1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uUHVibGlzaGVySWQpO1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uT3JkZXJEYXRlKTtcclxuICAgICAgICAgICAgICAgIHEuaGlkZUVkaXRvckNhdGVnb3J5KHRoaXMuZm9ybS5Cb29rSWQpO1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0KTtcclxuICAgICAgICAgICAgICAgIHEucmVhZE9ubHlFZGl0b3IodGhpcy5mb3JtLlNlcnZpY2VDaGFyZ2UpO1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uT3RoZXIpO1xyXG4gICAgICAgICAgICAgICAgcS5oaWRlRmllbGQodGhpcy5mb3JtLkluaXRpYWxMZXNzKTtcclxuICAgICAgICAgICAgICAgIHEuaGlkZUZpZWxkKHRoaXMuZm9ybS5Jbml0aWFsUGFpZCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uIGNoZWNraW5nIGZvciBEZXRhaWxMaXN0XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Cb29rSWQuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBib29rSWQgPSBRLnRvSWQodGhpcy5mb3JtLkJvb2tJZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9va0lkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uVW5pdFByaWNlLnZhbHVlID0gQWRtaW5NYW5hZ2VtZW50LkJvb2tSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbYm9va0lkXS5QcmljZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50LmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRGlzY291bnQgY2FuJ3QgYmUgaGlnaGVyIHRoYW4gMTAwJSAhXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlVuaXRQcmljZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVMaW5lVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUXVhbnRpdHkuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50LmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9EZXRhaWxzIExpc3Qgc3VtXHJcbiAgICAgICAgICAgICh0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0LnZpZXcgYXMgYW55KS5vblJvd3NPckNvdW50Q2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTdWJUb3RhbCgpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAodGhpcy5mb3JtLk9yZGVyRGV0YWlsTGlzdC52aWV3IGFzIGFueSkub25EYXRhQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTdWJUb3RhbCgpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAodGhpcy5mb3JtLk9yZGVyUGF5TGlzdC52aWV3IGFzIGFueSkub25EYXRhQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbFBhaWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAodGhpcy5mb3JtLk9yZGVyTGVzc0xpc3QudmlldyBhcyBhbnkpLm9uRGF0YUNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxMZXNzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9DaGFuZ2UgRXZlbnQgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlNlcnZpY2VDaGFyZ2UuY2hhbmdlKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbFBheWFibGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5PdGhlci5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkluaXRpYWxMZXNzLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5Ub3RhbExlc3MudmFsdWUgPSB0aGlzLmZvcm0uSW5pdGlhbExlc3MudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Jbml0aWFsUGFpZC5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uVG90YWxQYWlkLnZhbHVlID0gdGhpcy5mb3JtLkluaXRpYWxQYWlkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVSZW1haW5pbmdEdWUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlTGluZVRvdGFsKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTGluZVRvdGFsLnZhbHVlID0gdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSAqIHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZSAqICgxIC0gdGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlIC8gMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBhZGRQYXltZW50KCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9PSAnJyB8fCB0aGlzLmZvcm0uUGF5bWVudFR5cGUudmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgUS53YXJuaW5nKFwiUGxlYXNlIHNlbGVjdCBhbnkgcGF5bWVudCB0eXBlIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgUS53YXJuaW5nKFwiUGxlYXNlIGFkZCBhbW91bnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9PSBTdHJpbmcoQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGUuUGF5KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5mb3JtLk9yZGVyUGF5TGlzdC5nZXRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SWQgKys7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBfX2lkOiBcImBgXCIgKyB0aGlzLm5leHRJZCxcclxuICAgICAgICAgICAgICAgICAgICBQYXltZW50RGF0ZTogdGhpcy5mb3JtLlBheW1lbnREYXRlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBheW1lbnRBbW91bnQ6IHRoaXMuZm9ybS5QYXltZW50QW1vdW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5PcmRlclBheUxpc3Quc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5mb3JtLk9yZGVyTGVzc0xpc3QuZ2V0SXRlbXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dElkICsrO1xyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgX19pZDogXCJgYFwiICsgdGhpcy5uZXh0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgUGF5bWVudERhdGU6IHRoaXMuZm9ybS5QYXltZW50RGF0ZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXltZW50QW1vdW50OiB0aGlzLmZvcm0uUGF5bWVudEFtb3VudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uT3JkZXJMZXNzTGlzdC5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXltZW50QW1vdW50LnZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBheW1lbnREYXRlLnZhbHVlID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBheW1lbnRUeXBlLnZhbHVlID0gU3RyaW5nKENvbW1vbi5QdXJjaGFzZVBheW1lbnRUeXBlLlBheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgYWRkT3JkZXJEZXRhaWwoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLkJvb2tJZC52YWx1ZSA9PSAnJyB8fCB0aGlzLmZvcm0uQm9va0lkLnZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIFEud2FybmluZyhcIlBsZWFzZSBzZWxlY3QgYW55IGJvb2shXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2FtZVByb2R1Y3QgPSBRLnRyeUZpcnN0KHRoaXMuZm9ybS5PcmRlckRldGFpbExpc3QuZ2V0SXRlbXMoKSwgeCA9PiB4LkJvb2tJZCA9PT0gUS50b0lkKHRoaXMuZm9ybS5Cb29rSWQudmFsdWUpKTtcclxuICAgICAgICAgICAgaWYgKHNhbWVQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICBRLmFsZXJ0KCdUaGlzIHByb2R1Y3QgaXMgYWxyZWFkeSBpbiBvcmRlciBkZXRhaWxzIScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBRLmFsZXJ0KFwiRGlzY291bnQgY2FuJ3QgYmUgaGlnaGVyIHRoYW4gMTAwICUgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5mb3JtLk9yZGVyRGV0YWlsTGlzdC5nZXRJdGVtcygpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRJZCArKztcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBfX2lkOiBcImBgXCIgKyB0aGlzLm5leHRJZCxcclxuICAgICAgICAgICAgICAgIEJvb2tJZDogUS50b0lkKHRoaXMuZm9ybS5Cb29rSWQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgUXVhbnRpdHk6IHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIERpc2NvdW50OiB0aGlzLmZvcm0uRGlzY291bnQudmFsdWUgfHwgMCxcclxuICAgICAgICAgICAgICAgIFVuaXRQcmljZTogdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIExpbmVUb3RhbDogdGhpcy5mb3JtLkxpbmVUb3RhbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIEJvb2tOYW1lQm46IEFkbWluTWFuYWdlbWVudC5Cb29rUm93LmdldExvb2t1cCgpLml0ZW1CeUlkW3RoaXMuZm9ybS5Cb29rSWQudmFsdWVdLk5hbWVCblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLk9yZGVyRGV0YWlsTGlzdC5zZXRJdGVtcyhpdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQm9va0lkLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlF1YW50aXR5LnZhbHVlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5MaW5lVG90YWwudmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIG1heFZhbHVlKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgaWYgKGEgPiBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlU3ViVG90YWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtID0gMDtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiB0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VtICs9IGsuTGluZVRvdGFsIHx8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlN1YlRvdGFsLnZhbHVlID0gdGhpcy5zdW07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQYXlhYmxlKCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlVG90YWxQYWlkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgdGhpcy5mb3JtLk9yZGVyUGF5TGlzdC5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1bSArPSBrLlBheW1lbnRBbW91bnQgfHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uVG90YWxQYWlkLnZhbHVlID0gdGhpcy5mb3JtLkluaXRpYWxQYWlkLnZhbHVlICsgdGhpcy5zdW07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUmVtYWluaW5nRHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlVG90YWxMZXNzKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgdGhpcy5mb3JtLk9yZGVyTGVzc0xpc3QuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdW0gKz0gay5QYXltZW50QW1vdW50IHx8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlRvdGFsTGVzcy52YWx1ZSA9IHRoaXMuZm9ybS5Jbml0aWFsTGVzcy52YWx1ZSArIHRoaXMuc3VtO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdW0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IHRoaXMuZm9ybS5TdWJUb3RhbC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKyB0aGlzLmZvcm0uU2VydmljZUNoYXJnZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKyB0aGlzLmZvcm0uT3RoZXIudmFsdWVcclxuICAgICAgICAgICAgICAgIC0gdGhpcy5mb3JtLlRvdGFsTGVzcy52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uVG90YWxQYXlhYmxlLnZhbHVlID0gdGhpcy5zdW07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUmVtYWluaW5nRHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlUmVtYWluaW5nRHVlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IHRoaXMuZm9ybS5Ub3RhbFBheWFibGUudmFsdWUgLSB0aGlzLmZvcm0uVG90YWxQYWlkLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUmVtYWluaW5nRHVlLnZhbHVlID0gdGhpcy5zdW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UHVyY2hhc2VPcmRlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5QdWJsaXNoZXJTdGFsbCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlckRldGFpbExpc3REaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FeHRlbnNpb25zLkdyaWRFZGl0b3JEaWFsb2c8UHVyY2hhc2VPcmRlckRldGFpbExpc3RSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybTogUHVyY2hhc2VPcmRlckRldGFpbExpc3RGb3JtO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUHVyY2hhc2VPcmRlckRldGFpbExpc3RGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpOyAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkJvb2tJZC5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvb2tJZCA9IFEudG9JZCh0aGlzLmZvcm0uQm9va0lkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChib29rSWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5Vbml0UHJpY2UudmFsdWUgPSBBZG1pbk1hbmFnZW1lbnQuQm9va1Jvdy5nZXRMb29rdXAoKS5pdGVtQnlJZFtib29rSWRdLlByaWNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVMaW5lVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uRGlzY291bnQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uRGlzY291bnQudmFsdWUgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJEaXNjb3VudCBjYW4ndCBiZSBoaWdoZXIgdGhhbiAxMDAlICFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uVW5pdFByaWNlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUxpbmVUb3RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5RdWFudGl0eS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVMaW5lVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uRGlzY291bnQuY2hhbmdlKGUgPT4geyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGNhbGN1bGF0ZUxpbmVUb3RhbCgpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkxpbmVUb3RhbC52YWx1ZSA9IHRoaXMuZm9ybS5Vbml0UHJpY2UudmFsdWUgKiB0aGlzLmZvcm0uUXVhbnRpdHkudmFsdWUgKiAoIDEgLSB0aGlzLmZvcm0uRGlzY291bnQudmFsdWUgLyAxMDAgKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5QdWJsaXNoZXJTdGFsbCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0RWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRXh0ZW5zaW9ucy5HcmlkRWRpdG9yQmFzZTxQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbExpc3RDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKCcuZ3JpZC10b29sYmFyJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsaWRhdGVFbnRpdHkocm93LCBpZCkge1xyXG4gICAgICAgICAgICByb3cuQm9va0lkID0gUS50b0lkKHJvdy5Cb29rSWQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNhbWVQcm9kdWN0ID0gUS50cnlGaXJzdCh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgeCA9PiB4LkJvb2tJZCA9PT0gcm93LkJvb2tJZCk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUHJvZHVjdCAmJiB0aGlzLmlkKHNhbWVQcm9kdWN0KSAhPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIFEuYWxlcnQoJ1RoaXMgcHJvZHVjdCBpcyBhbHJlYWR5IGluIG9yZGVyIGRldGFpbHMhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJvdy5Cb29rTmFtZUJuID0gQWRtaW5NYW5hZ2VtZW50LkJvb2tSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbcm93LkJvb2tJZF0uTmFtZUJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0Q29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbExpc3RSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbExpc3RSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyRGV0YWlsTGlzdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxMaXN0U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlclBheW1lbnRFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5FeHRlbnNpb25zLkdyaWRFZGl0b3JCYXNlPFB1cmNoYXNlT3JkZXJQYXltZW50Um93PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUGF5bWVudENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclBheW1lbnRFZGl0b3JEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclBheW1lbnRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmZpbmQoJy5ncmlkLXRvb2xiYXInKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKCkgICAgXHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlclBheW1lbnRFZGl0b3JEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FeHRlbnNpb25zLkdyaWRFZGl0b3JEaWFsb2c8UHVyY2hhc2VPcmRlclBheW1lbnRSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJQYXltZW50Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJQYXltZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybTogUHVyY2hhc2VPcmRlclBheW1lbnRGb3JtO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUHVyY2hhc2VPcmRlclBheW1lbnRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignLmRlbGV0ZS1idXR0b24nKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlB1Ymxpc2hlclN0YWxsIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyUGF5bWVudEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFB1cmNoYXNlT3JkZXJQYXltZW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJQYXltZW50Q29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUGF5bWVudEVkaXRvckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclBheW1lbnRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclBheW1lbnRSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUGF5bWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJQYXltZW50U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEN1c3RvbWVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEN1c3RvbWVyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEN1c3RvbWVyU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lclJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lclJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEN1c3RvbWVyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxDdXN0b21lclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDdXN0b21lckNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ3VzdG9tZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEN1c3RvbWVyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ3VzdG9tZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDdXN0b21lclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKClcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0U2FsZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxQcm9kdWN0U2FsZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQcm9kdWN0U2FsZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0U2FsZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0U2FsZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBuZXh0SWQgPSAwO1xyXG4gICAgICAgIHByb3RlY3RlZCBzdW0gPSAwO1xyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFByb2R1Y3RTYWxlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQWRkUGF5LmdldEdyaWRGaWVsZCgpLmZpbmQoJy5jYXB0aW9uJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5BZGRQYXkuZ2V0R3JpZEZpZWxkKCkuZmluZCgnLmVkaXRvcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+PHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZSB0ZXh0LWdyZWVuXCI+PC9pPiA8Yj5BZGQ8L2I+PC9zcGFuPjwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhpcy5mb3JtLkFkZFBheS5lbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IHRoaXMuYWRkUGF5bWVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5BZGRPcmRlckRldGFpbC5nZXRHcmlkRmllbGQoKS5maW5kKCcuY2FwdGlvbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQWRkT3JkZXJEZXRhaWwuZ2V0R3JpZEZpZWxkKCkuZmluZCgnLmVkaXRvcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+PHNwYW4+PGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZSB0ZXh0LWdyZWVuXCI+PC9pPiA8Yj5BZGQ8L2I+PC9zcGFuPjwvYnV0dG9uPicpXHJcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhpcy5mb3JtLkFkZE9yZGVyRGV0YWlsLmVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4gdGhpcy5hZGRPcmRlckRldGFpbCgpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25EaWFsb2dPcGVuKCkge1xyXG4gICAgICAgICAgICBzdXBlci5vbkRpYWxvZ09wZW4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vaW5pdGlhbGl6YXRpb25cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGF5bWVudERhdGUudmFsdWUgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGF5bWVudFR5cGUudmFsdWUgPSBTdHJpbmcoQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGUuUGF5KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5EaXNjb3VudC52YWx1ZSA9IDA7XHJcblxyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU3ViVG90YWwoKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbFBhaWQoKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbExlc3MoKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbFBheWFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmV4dElkID0gdGhpcy5tYXhWYWx1ZSh0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0LnZhbHVlLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4VmFsdWUodGhpcy5mb3JtLk9yZGVyUGF5TGlzdC52YWx1ZS5sZW5ndGgsIHRoaXMuZm9ybS5PcmRlckxlc3NMaXN0LnZhbHVlLmxlbmd0aClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uU3RhdHVzLnZhbHVlID09IHVuZGVmaW5lZCB8fCB0aGlzLmZvcm0uU3RhdHVzLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uU3RhdHVzLnZhbHVlID0gU3RyaW5nKENvbW1vbi5QdXJjaGFzZVN0YXR1cy5EcmFmdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5TdGF0dXMudmFsdWUgPT0gU3RyaW5nKENvbW1vbi5QdXJjaGFzZVN0YXR1cy5EcmFmdCkpIHtcclxuICAgICAgICAgICAgICAgIHEuaGlkZUVkaXRvckNhdGVnb3J5KHRoaXMuZm9ybS5QYXltZW50RGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBxLnJlYWRPbmx5RWRpdG9yKHRoaXMuZm9ybS5Ub2tlbk5vKTtcclxuICAgICAgICAgICAgICAgIHEucmVhZE9ubHlFZGl0b3IodGhpcy5mb3JtLkN1c3RvbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uU2FsZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgcS5oaWRlRWRpdG9yQ2F0ZWdvcnkodGhpcy5mb3JtLkJvb2tJZCk7XHJcbiAgICAgICAgICAgICAgICBxLnJlYWRPbmx5RWRpdG9yKHRoaXMuZm9ybS5PcmRlckRldGFpbExpc3QpO1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uU2VydmljZUNoYXJnZSk7XHJcbiAgICAgICAgICAgICAgICBxLnJlYWRPbmx5RWRpdG9yKHRoaXMuZm9ybS5PdGhlcik7XHJcbiAgICAgICAgICAgICAgICBxLmhpZGVGaWVsZCh0aGlzLmZvcm0uSW5pdGlhbExlc3MpO1xyXG4gICAgICAgICAgICAgICAgcS5oaWRlRmllbGQodGhpcy5mb3JtLkluaXRpYWxQYWlkKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24gY2hlY2tpbmcgZm9yIERldGFpbExpc3RcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkJvb2tJZC5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvb2tJZCA9IFEudG9JZCh0aGlzLmZvcm0uQm9va0lkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChib29rSWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5Vbml0UHJpY2UudmFsdWUgPSBBZG1pbk1hbmFnZW1lbnQuQm9va1Jvdy5nZXRMb29rdXAoKS5pdGVtQnlJZFtib29rSWRdLlByaWNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVMaW5lVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uRGlzY291bnQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uRGlzY291bnQudmFsdWUgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJEaXNjb3VudCBjYW4ndCBiZSBoaWdoZXIgdGhhbiAxMDAlICFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uVW5pdFByaWNlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUxpbmVUb3RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5RdWFudGl0eS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVMaW5lVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uRGlzY291bnQuY2hhbmdlKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVMaW5lVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL0RldGFpbHMgTGlzdCBzdW1cclxuICAgICAgICAgICAgKHRoaXMuZm9ybS5PcmRlckRldGFpbExpc3QudmlldyBhcyBhbnkpLm9uUm93c09yQ291bnRDaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVN1YlRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgKHRoaXMuZm9ybS5PcmRlckRldGFpbExpc3QudmlldyBhcyBhbnkpLm9uRGF0YUNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU3ViVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAodGhpcy5mb3JtLk9yZGVyUGF5TGlzdC52aWV3IGFzIGFueSkub25EYXRhQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbFBhaWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAodGhpcy5mb3JtLk9yZGVyTGVzc0xpc3QudmlldyBhcyBhbnkpLm9uRGF0YUNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxMZXNzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9DaGFuZ2UgRXZlbnQgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlNlcnZpY2VDaGFyZ2UuY2hhbmdlKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbFBheWFibGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5PdGhlci5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkluaXRpYWxMZXNzLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5Ub3RhbExlc3MudmFsdWUgPSB0aGlzLmZvcm0uSW5pdGlhbExlc3MudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Jbml0aWFsUGFpZC5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uVG90YWxQYWlkLnZhbHVlID0gdGhpcy5mb3JtLkluaXRpYWxQYWlkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVSZW1haW5pbmdEdWUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlTGluZVRvdGFsKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTGluZVRvdGFsLnZhbHVlID0gdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSAqIHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZSAqICgxIC0gdGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlIC8gMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBhZGRQYXltZW50KCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9PSAnJyB8fCB0aGlzLmZvcm0uUGF5bWVudFR5cGUudmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgUS53YXJuaW5nKFwiUGxlYXNlIHNlbGVjdCBhbnkgcGF5bWVudCB0eXBlIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgUS53YXJuaW5nKFwiUGxlYXNlIGFkZCBhbW91bnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9PSBTdHJpbmcoQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGUuUGF5KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5mb3JtLk9yZGVyUGF5TGlzdC5nZXRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SWQrKztcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIF9faWQ6IFwiYGBcIiArIHRoaXMubmV4dElkLFxyXG4gICAgICAgICAgICAgICAgICAgIFBheW1lbnREYXRlOiB0aGlzLmZvcm0uUGF5bWVudERhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgUGF5bWVudEFtb3VudDogdGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLk9yZGVyUGF5TGlzdC5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmZvcm0uT3JkZXJMZXNzTGlzdC5nZXRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SWQrKztcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIF9faWQ6IFwiYGBcIiArIHRoaXMubmV4dElkLFxyXG4gICAgICAgICAgICAgICAgICAgIFBheW1lbnREYXRlOiB0aGlzLmZvcm0uUGF5bWVudERhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgUGF5bWVudEFtb3VudDogdGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLk9yZGVyTGVzc0xpc3Quc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGF5bWVudEFtb3VudC52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXltZW50RGF0ZS52YWx1ZSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9IFN0cmluZyhDb21tb24uUHVyY2hhc2VQYXltZW50VHlwZS5QYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGFkZE9yZGVyRGV0YWlsKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Cb29rSWQudmFsdWUgPT0gJycgfHwgdGhpcy5mb3JtLkJvb2tJZC52YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBRLndhcm5pbmcoXCJQbGVhc2Ugc2VsZWN0IGFueSBib29rIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNhbWVQcm9kdWN0ID0gUS50cnlGaXJzdCh0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0LmdldEl0ZW1zKCksIHggPT4geC5Cb29rSWQgPT09IFEudG9JZCh0aGlzLmZvcm0uQm9va0lkLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgUS5hbGVydCgnVGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW4gb3JkZXIgZGV0YWlscyEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5EaXNjb3VudC52YWx1ZSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgUS5hbGVydChcIkRpc2NvdW50IGNhbid0IGJlIGhpZ2hlciB0aGFuIDEwMCAlICFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZm9ybS5PcmRlckRldGFpbExpc3QuZ2V0SXRlbXMoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0SWQrKztcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBfX2lkOiBcImBgXCIgKyB0aGlzLm5leHRJZCxcclxuICAgICAgICAgICAgICAgIEJvb2tJZDogUS50b0lkKHRoaXMuZm9ybS5Cb29rSWQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgUXVhbnRpdHk6IHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIERpc2NvdW50OiB0aGlzLmZvcm0uRGlzY291bnQudmFsdWUgfHwgMCxcclxuICAgICAgICAgICAgICAgIFVuaXRQcmljZTogdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIExpbmVUb3RhbDogdGhpcy5mb3JtLkxpbmVUb3RhbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIEJvb2tOYW1lQm46IEFkbWluTWFuYWdlbWVudC5Cb29rUm93LmdldExvb2t1cCgpLml0ZW1CeUlkW3RoaXMuZm9ybS5Cb29rSWQudmFsdWVdLk5hbWVCblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLk9yZGVyRGV0YWlsTGlzdC5zZXRJdGVtcyhpdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQm9va0lkLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlF1YW50aXR5LnZhbHVlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5MaW5lVG90YWwudmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIG1heFZhbHVlKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgaWYgKGEgPiBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlU3ViVG90YWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtID0gMDtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiB0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VtICs9IGsuTGluZVRvdGFsIHx8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlN1YlRvdGFsLnZhbHVlID0gdGhpcy5zdW07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQYXlhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlVG90YWxQYWlkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgdGhpcy5mb3JtLk9yZGVyUGF5TGlzdC5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1bSArPSBrLlBheW1lbnRBbW91bnQgfHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uVG90YWxQYWlkLnZhbHVlID0gdGhpcy5mb3JtLkluaXRpYWxQYWlkLnZhbHVlICsgdGhpcy5zdW07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUmVtYWluaW5nRHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlVG90YWxMZXNzKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgdGhpcy5mb3JtLk9yZGVyTGVzc0xpc3QuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdW0gKz0gay5QYXltZW50QW1vdW50IHx8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlRvdGFsTGVzcy52YWx1ZSA9IHRoaXMuZm9ybS5Jbml0aWFsTGVzcy52YWx1ZSArIHRoaXMuc3VtO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdW0gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IHRoaXMuZm9ybS5TdWJUb3RhbC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKyB0aGlzLmZvcm0uU2VydmljZUNoYXJnZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKyB0aGlzLmZvcm0uT3RoZXIudmFsdWVcclxuICAgICAgICAgICAgICAgIC0gdGhpcy5mb3JtLlRvdGFsTGVzcy52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uVG90YWxQYXlhYmxlLnZhbHVlID0gdGhpcy5zdW07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUmVtYWluaW5nRHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlUmVtYWluaW5nRHVlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IHRoaXMuZm9ybS5Ub3RhbFBheWFibGUudmFsdWUgLSB0aGlzLmZvcm0uVG90YWxQYWlkLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUmVtYWluaW5nRHVlLnZhbHVlID0gdGhpcy5zdW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RTYWxlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UHJvZHVjdFNhbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQcm9kdWN0U2FsZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0U2FsZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdFNhbGVEZXRhaWxEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UHJvZHVjdFNhbGVEZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlRGV0YWlsUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0U2FsZURldGFpbFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBQcm9kdWN0U2FsZURldGFpbEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0U2FsZURldGFpbEVkaXRvciBleHRlbmRzIFNlcmVuaXR5LkV4dGVuc2lvbnMuR3JpZEVkaXRvckJhc2U8UHJvZHVjdFNhbGVEZXRhaWxSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlRGV0YWlsQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQcm9kdWN0U2FsZURldGFpbEVkaXRvckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0U2FsZURldGFpbFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZCgnLmdyaWQtdG9vbGJhcicpLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbGlkYXRlRW50aXR5KHJvdywgaWQpIHtcclxuICAgICAgICAgICAgcm93LkJvb2tJZCA9IFEudG9JZChyb3cuQm9va0lkKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzYW1lUHJvZHVjdCA9IFEudHJ5Rmlyc3QodGhpcy52aWV3LmdldEl0ZW1zKCksIHggPT4geC5Cb29rSWQgPT09IHJvdy5Cb29rSWQpO1xyXG4gICAgICAgICAgICBpZiAoc2FtZVByb2R1Y3QgJiYgdGhpcy5pZChzYW1lUHJvZHVjdCkgIT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBRLmFsZXJ0KCdUaGlzIHByb2R1Y3QgaXMgYWxyZWFkeSBpbiBvcmRlciBkZXRhaWxzIScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByb3cuQm9va05hbWVCbiA9IEFkbWluTWFuYWdlbWVudC5Cb29rUm93LmdldExvb2t1cCgpLml0ZW1CeUlkW3Jvdy5Cb29rSWRdLk5hbWVCbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0U2FsZURldGFpbEVkaXRvckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkV4dGVuc2lvbnMuR3JpZEVkaXRvckRpYWxvZzxQcm9kdWN0U2FsZURldGFpbFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtOiBQcm9kdWN0U2FsZURldGFpbEZvcm07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBQcm9kdWN0U2FsZURldGFpbEZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQm9va0lkLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm9va0lkID0gUS50b0lkKHRoaXMuZm9ybS5Cb29rSWQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvb2tJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSA9IEFkbWluTWFuYWdlbWVudC5Cb29rUm93LmdldExvb2t1cCgpLml0ZW1CeUlkW2Jvb2tJZF0uUHJpY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUxpbmVUb3RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5EaXNjb3VudC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5EaXNjb3VudC52YWx1ZSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkRpc2NvdW50IGNhbid0IGJlIGhpZ2hlciB0aGFuIDEwMCUgIVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Vbml0UHJpY2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlF1YW50aXR5LmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUxpbmVUb3RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5EaXNjb3VudC5jaGFuZ2UoZSA9PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVMaW5lVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgY2FsY3VsYXRlTGluZVRvdGFsKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTGluZVRvdGFsLnZhbHVlID0gdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSAqIHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZSAqICggMSAtIHRoaXMuZm9ybS5EaXNjb3VudC52YWx1ZSAvIDEwMCApO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RTYWxlRGV0YWlsR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UHJvZHVjdFNhbGVEZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlRGV0YWlsRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQcm9kdWN0U2FsZURldGFpbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0U2FsZURldGFpbFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlRGV0YWlsUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVEZXRhaWxTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdFNhbGVQYXltZW50RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFByb2R1Y3RTYWxlUGF5bWVudFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBQcm9kdWN0U2FsZVBheW1lbnRGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUGF5bWVudFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUGF5bWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUGF5bWVudFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVQYXltZW50Um93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUGF5bWVudFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0U2FsZVBheW1lbnRSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBQcm9kdWN0U2FsZVBheW1lbnRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdFNhbGVQYXltZW50RWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRXh0ZW5zaW9ucy5HcmlkRWRpdG9yQmFzZTxQcm9kdWN0U2FsZVBheW1lbnRSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUGF5bWVudENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUHJvZHVjdFNhbGVQYXltZW50RWRpdG9yRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUGF5bWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZCgnLmdyaWQtdG9vbGJhcicpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RTYWxlUGF5bWVudEVkaXRvckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkV4dGVuc2lvbnMuR3JpZEVkaXRvckRpYWxvZzxQcm9kdWN0U2FsZVBheW1lbnRSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUGF5bWVudEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0U2FsZVBheW1lbnRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtOiBQcm9kdWN0U2FsZVBheW1lbnRGb3JtO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUHJvZHVjdFNhbGVQYXltZW50Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJy5kZWxldGUtYnV0dG9uJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0U2FsZVBheW1lbnRHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQcm9kdWN0U2FsZVBheW1lbnRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUHJvZHVjdFNhbGVQYXltZW50Q29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBQcm9kdWN0U2FsZVBheW1lbnREaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RTYWxlUGF5bWVudFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0U2FsZVBheW1lbnRSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQcm9kdWN0U2FsZVBheW1lbnRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0U2FsZVBheW1lbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIHEge1xyXG4gICBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBzZXRHcmlkRWRpdG9ySGVpZ2h0KGVkaXRvcjogSlF1ZXJ5LCBoZWlnaHRJblB4OiBudW1iZXIpIHtcclxuICAgICAgICBlZGl0b3IuY3NzKCdoZWlnaHQnLCBoZWlnaHRJblB4ICsgJ3B4Jyk7XHJcbiAgICAgICAgZWRpdG9yLmZpbmQoJy5ncmlkLWNvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIC5jc3MoJ2hlaWdodCcsIChoZWlnaHRJblB4IC0gMjUpICsgJ3B4JylcclxuICAgICAgICAgICAgLmhlaWdodChoZWlnaHRJblB4KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gYWRkTm90aWZpY2F0aW9uSWNvbihlZGl0b3I6IFNlcmVuaXR5LldpZGdldDxhbnk+LCBpc1N1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGlzQWRkT25Jbml0aWFsaXplZCA9IGVkaXRvci5lbGVtZW50LmRhdGEoJ2lzQWRkT25Jbml0aWFsaXplZCcpO1xyXG5cclxuICAgICAgICBpZiAoaXNBZGRPbkluaXRpYWxpemVkICE9IHRydWUpIHtcclxuICAgICAgICAgICAgZWRpdG9yLmVsZW1lbnQuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwidGV4dCB0ZXh0LWRhbmdlclwiIHN0eWxlPVwicGFkZGluZzozcHhcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPjwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgZWRpdG9yLmVsZW1lbnQuZGF0YSgnaXNBZGRPbkluaXRpYWxpemVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNTdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgZWRpdG9yLmVsZW1lbnQuc3dpdGNoQ2xhc3MoJ2JnLWRhbmdlcicsICdiZy1zdWNjZXNzJylcclxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLnRleHQnKS5zd2l0Y2hDbGFzcygndGV4dC1kYW5nZXInLCAndGV4dC1zdWNjZXNzJylcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbigpLnN3aXRjaENsYXNzKCdmYS10aW1lcycsICdmYS1jaGVjaycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVkaXRvci5lbGVtZW50LnN3aXRjaENsYXNzKCdiZy1zdWNjZXNzJywgJ2JnLWRhbmdlcicpXHJcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoJy50ZXh0Jykuc3dpdGNoQ2xhc3MoJ3RleHQtc3VjY2VzcycsICd0ZXh0LWRhbmdlcicpXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oKS5zd2l0Y2hDbGFzcygnZmEtY2hlY2snLCAnZmEtdGltZXMnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBhZGRQb3BvdmVySWNvbihlZGl0b3I6IFNlcmVuaXR5LldpZGdldDxhbnk+LCBpc1N1Y2Nlc3M6IGJvb2xlYW4sIHBvcG92ZXJPcHRpb25zOiBhbnkpOiB2b2lkIHsgLy8gcG9wb3Zlck9wdGlvbnM6IEJvb3RzdHJhcC5Qb3BvdmVyT3B0aW9uc1xyXG4gICAgICAgIGFkZE5vdGlmaWNhdGlvbkljb24oZWRpdG9yLCBpc1N1Y2Nlc3MpO1xyXG5cclxuICAgICAgICAvLyhlZGl0b3IuZWxlbWVudCBhcyBhbnkpLnBvcG92ZXIoJ2Rlc3Ryb3knKTtcclxuICAgICAgICAoZWRpdG9yLmVsZW1lbnQuc2libGluZ3MoJy50ZXh0JykgYXMgYW55KS5wb3BvdmVyKCdkZXN0cm95Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoaCA9PiB7XHJcbiAgICAgICAgICAgIC8vKGVkaXRvci5lbGVtZW50IGFzIGFueSkucG9wb3Zlcihwb3BvdmVyT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIChlZGl0b3IuZWxlbWVudC5zaWJsaW5ncygnLnRleHQnKSBhcyBhbnkpXHJcbiAgICAgICAgICAgICAgICAucG9wb3Zlcihwb3BvdmVyT3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC5vbihcInNob3cuYnMucG9wb3ZlclwiLCBmdW5jdGlvbiAoKSB7ICQodGhpcykuZGF0YShcImJzLnBvcG92ZXJcIikudGlwKCkuY3NzKFwid2lkdGhcIiwgXCI2MDBweFwiKTsgfSk7O1xyXG4gICAgICAgIH0sIDEwMClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNldEVkaXRvckxhYmVsKGVkaXRvcjogU2VyZW5pdHkuV2lkZ2V0PGFueT4sIHZhbHVlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgZWRpdG9yLmVsZW1lbnQuc2libGluZ3MoJ2xhYmVsJykudGV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhpZGVFZGl0b3JMYWJlbChlZGl0b3I6IFNlcmVuaXR5LldpZGdldDxhbnk+KSB7XHJcblxyXG4gICAgICAgIGVkaXRvci5lbGVtZW50LnNpYmxpbmdzKCdsYWJlbCcpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gc2V0RWRpdG9yQ2F0ZWdvcnlMYWJlbChlZGl0b3I6IFNlcmVuaXR5LldpZGdldDxhbnk+LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5QW5jaG9yID0gZWRpdG9yLmVsZW1lbnQuY2xvc2VzdCgnLmNhdGVnb3J5JykuZmluZCgnLmNhdGVnb3J5LWFuY2hvcicpO1xyXG4gICAgICAgIGNhdGVnb3J5QW5jaG9yLnRleHQodmFsdWUpO1xyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcnlBbmNob3JOYW1lID0gY2F0ZWdvcnlBbmNob3IuYXR0cignbmFtZScpO1xyXG4gICAgICAgIGNhdGVnb3J5QW5jaG9yLmNsb3Nlc3QoJy5zLVByb3BlcnR5R3JpZCcpLmZpbmQoYGFbaHJlZj0nIyR7Y2F0ZWdvcnlBbmNob3JOYW1lfSddYCkudGV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhpZGVFZGl0b3JDYXRlZ29yeShlZGl0b3I6IFNlcmVuaXR5LldpZGdldDxhbnk+LCB2YWx1ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgZWRpdG9yLmVsZW1lbnQuY2xvc2VzdCgnLmNhdGVnb3J5JykuaGlkZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZWRpdG9yLmVsZW1lbnQuY2xvc2VzdCgnLmNhdGVnb3J5Jykuc2hvdygpO1xyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcnlBbmNob3IgPSBlZGl0b3IuZWxlbWVudC5jbG9zZXN0KCcuY2F0ZWdvcnknKS5maW5kKCcuY2F0ZWdvcnktYW5jaG9yJyk7XHJcblxyXG4gICAgICAgIGxldCBjYXRlZ29yeUFuY2hvck5hbWUgPSBjYXRlZ29yeUFuY2hvci5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpXHJcbiAgICAgICAgICAgIGNhdGVnb3J5QW5jaG9yLmNsb3Nlc3QoJy5zLVByb3BlcnR5R3JpZCcpLmZpbmQoYGFbaHJlZj0nIyR7Y2F0ZWdvcnlBbmNob3JOYW1lfSddYCkuaGlkZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY2F0ZWdvcnlBbmNob3IuY2xvc2VzdCgnLnMtUHJvcGVydHlHcmlkJykuZmluZChgYVtocmVmPScjJHtjYXRlZ29yeUFuY2hvck5hbWV9J11gKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhpZGVDYXRlZ29yaWVzKGNvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeSwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuZmluZCgnLmNhdGVnb3J5JykuaGlkZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5maW5kKCcuY2F0ZWdvcnknKS5zaG93KCk7XHJcblxyXG4gICAgICAgIGxldCBjYXRlZ29yeUFuY2hvciA9IGNvbnRhaW5lckVsZW1lbnQuZmluZCgnLmNhdGVnb3J5JykuZmluZCgnLmNhdGVnb3J5LWFuY2hvcicpO1xyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcnlBbmNob3JOYW1lID0gY2F0ZWdvcnlBbmNob3IuYXR0cignbmFtZScpO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKVxyXG4gICAgICAgICAgICBjYXRlZ29yeUFuY2hvci5jbG9zZXN0KCcucy1Qcm9wZXJ0eUdyaWQnKS5maW5kKGBhW2hyZWY9JyMke2NhdGVnb3J5QW5jaG9yTmFtZX0nXWApLmhpZGUoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNhdGVnb3J5QW5jaG9yLmNsb3Nlc3QoJy5zLVByb3BlcnR5R3JpZCcpLmZpbmQoYGFbaHJlZj0nIyR7Y2F0ZWdvcnlBbmNob3JOYW1lfSddYCkuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoaWRlRmllbGRzKGNvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeSwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRydWUpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuZmluZCgnLmZpZWxkJykuaGlkZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5maW5kKCcuZmllbGQnKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhpZGVGaWVsZHNBbmRDYXRlZ29yaWVzKGNvbnRhaW5lckVsZW1lbnQ6IEpRdWVyeSwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaGlkZUZpZWxkcyhjb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICBoaWRlQ2F0ZWdvcmllcyhjb250YWluZXJFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGlkZUZpZWxkKGVkaXRvcjogU2VyZW5pdHkuV2lkZ2V0PGFueT4sIHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZWxlbWVudC5jbG9zZXN0KCcuZmllbGQnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVkaXRvci5lbGVtZW50LmNsb3Nlc3QoJy5maWVsZCcpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gc2hvd0ZpZWxkKGVkaXRvcjogU2VyZW5pdHkuV2lkZ2V0PGFueT4sIHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZWxlbWVudC5jbG9zZXN0KCcuZmllbGQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVkaXRvci5lbGVtZW50LmNsb3Nlc3QoJy5maWVsZCcpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNob3dBbmRFbmFibGVGaWVsZChlZGl0b3I6IFNlcmVuaXR5LldpZGdldDxhbnk+KSB7XHJcbiAgICAgICAgcS5zaG93RmllbGQoZWRpdG9yKTtcclxuICAgICAgICBTZXJlbml0eS5FZGl0b3JVdGlscy5zZXRSZWFkT25seShlZGl0b3IsIGZhbHNlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNob3dGaWVsZEFuZENhdGVnb3J5KGVkaXRvcjogU2VyZW5pdHkuV2lkZ2V0PGFueT4sIHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHNob3dGaWVsZChlZGl0b3IsIHZhbHVlKTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgaGlkZUVkaXRvckNhdGVnb3J5KGVkaXRvciwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoaWRlRWRpdG9yVGFiKGVkaXRvcjogU2VyZW5pdHkuV2lkZ2V0PGFueT4sIHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgdGFiSWQgPSBlZGl0b3IuZWxlbWVudC5jbG9zZXN0KCcudGFiLXBhbmUnKS5oaWRlKCkuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgbGV0IHRhYkFuY2hvciA9IGVkaXRvci5lbGVtZW50LmNsb3Nlc3QoJy5zLVByb3BlcnR5R3JpZCcpLmZpbmQoYGFbaHJlZj0nIyR7dGFiSWR9J11gKTtcclxuICAgICAgICAgICAgdGFiQW5jaG9yLmNsb3Nlc3QoJ2xpJykuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0YWJJZCA9IGVkaXRvci5lbGVtZW50LmNsb3Nlc3QoJy50YWItcGFuZScpLnNob3coKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBsZXQgdGFiQW5jaG9yID0gZWRpdG9yLmVsZW1lbnQuY2xvc2VzdCgnLnMtUHJvcGVydHlHcmlkJykuZmluZChgYVtocmVmPScjJHt0YWJJZH0nXWApO1xyXG4gICAgICAgICAgICB0YWJBbmNob3IuY2xvc2VzdCgnbGknKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRWRpdG9yVGFiKGVkaXRvcjogU2VyZW5pdHkuV2lkZ2V0PGFueT4sIHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCB0YWJJZCA9IGVkaXRvci5lbGVtZW50LmNsb3Nlc3QoJy50YWItcGFuZScpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIGxldCB0YWJBbmNob3IgPSBlZGl0b3IuZWxlbWVudC5jbG9zZXN0KCcucy1Qcm9wZXJ0eUdyaWQnKS5maW5kKGBhW2hyZWY9JyMke3RhYklkfSddYCk7XHJcbiAgICAgICAgbGV0IHRhYkxpID0gdGFiQW5jaG9yLmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRhYkFuY2hvci5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRhYkxpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJykucHJlcGVuZChgPGEgY2xhc3M9XCJkaXNhYmxlZFwiPiR7dGFiQW5jaG9yLnRleHQoKX08L2xhYmVsPmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYkFuY2hvci5zaG93KCk7XHJcbiAgICAgICAgICAgIHRhYkxpLmNsb3Nlc3QoJ2xpJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJykuZmluZCgnLmRpc2FibGVkJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJlYWRPbmx5RWRpdG9yVGFiKGVkaXRvcjogU2VyZW5pdHkuV2lkZ2V0PGFueT4sIHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCAkZWRpdG9ycyA9IGVkaXRvci5lbGVtZW50LmNsb3Nlc3QoJy50YWItcGFuZScpLmZpbmQoJy5lZGl0b3InKTtcclxuXHJcbiAgICAgICAgU2VyZW5pdHkuRWRpdG9yVXRpbHMuc2V0UmVhZG9ubHkoJGVkaXRvcnMsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcmVhZE9ubHlFZGl0b3JDYXRlZ29yeShlZGl0b3I6IFNlcmVuaXR5LldpZGdldDxhbnk+LCB2YWx1ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBsZXQgJGVkaXRvcnMgPSBlZGl0b3IuZWxlbWVudC5jbG9zZXN0KCcuY2F0ZWdvcnknKS5maW5kKCcuZWRpdG9yJyk7XHJcblxyXG4gICAgICAgIFNlcmVuaXR5LkVkaXRvclV0aWxzLnNldFJlYWRvbmx5KCRlZGl0b3JzLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcmVhZG9ubHlFZGl0b3JDYXRlZ29yeSgkZWRpdG9yOiBKUXVlcnksIHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCAkZWRpdG9ycyA9ICRlZGl0b3IuY2xvc2VzdCgnLmNhdGVnb3J5JykuZmluZCgnLmVkaXRvcicpO1xyXG4gICAgICAgIFNlcmVuaXR5LkVkaXRvclV0aWxzLnNldFJlYWRvbmx5KCRlZGl0b3JzLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJlYWRPbmx5RWRpdG9yUHJvcGVydHlHcmlkKGVkaXRvcjogU2VyZW5pdHkuV2lkZ2V0PGFueT4sIHZhbHVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCAkZWRpdG9ycyA9IGVkaXRvci5lbGVtZW50LmNsb3Nlc3QoJy5zLVByb3BlcnR5R3JpZCcpLmZpbmQoJy5lZGl0b3InKTtcclxuICAgICAgICBTZXJlbml0eS5FZGl0b3JVdGlscy5zZXRSZWFkb25seSgkZWRpdG9ycywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJlYWRvbmx5RWRpdG9yUHJvcGVydHlHcmlkKCRlZGl0b3I6IEpRdWVyeSwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0ICRlZGl0b3JzID0gJGVkaXRvci5jbG9zZXN0KCcucy1Qcm9wZXJ0eUdyaWQnKS5maW5kKCcuZWRpdG9yJyk7XHJcbiAgICAgICAgU2VyZW5pdHkuRWRpdG9yVXRpbHMuc2V0UmVhZG9ubHkoJGVkaXRvcnMsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcmVhZE9ubHlFZGl0b3IoZWRpdG9yOiBTZXJlbml0eS5XaWRnZXQ8YW55PiwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgU2VyZW5pdHkuRWRpdG9yVXRpbHMuc2V0UmVhZE9ubHkoZWRpdG9yLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJlYWRvbmx5RWRpdG9yKCRlZGl0b3I6IEpRdWVyeSwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgU2VyZW5pdHkuRWRpdG9yVXRpbHMuc2V0UmVhZG9ubHkoJGVkaXRvciwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBtb3ZlRWRpdG9yRnJvbVRhYihlZGl0b3I6IFNlcmVuaXR5LldpZGdldDxhbnk+LCB0b0VsZW1lbnQ6IEpRdWVyeSwgaXNQcmVwZW5kID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgZmllbGREaXYgPSBlZGl0b3IuZWxlbWVudC5jbG9zZXN0KCcuZmllbGQnKTtcclxuXHJcbiAgICAgICAgaWYgKGlzUHJlcGVuZCA9PSB0cnVlKVxyXG4gICAgICAgICAgICBmaWVsZERpdi5wcmVwZW5kVG8odG9FbGVtZW50KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGZpZWxkRGl2LmFwcGVuZFRvKHRvRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG1vdmVFZGl0b3JDYXRlZ29yeUZyb21UYWIoZWRpdG9yOiBTZXJlbml0eS5XaWRnZXQ8YW55PiwgdG9FbGVtZW50OiBKUXVlcnksIGlzUHJlcGVuZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IGZpZWxkRGl2ID0gZWRpdG9yLmVsZW1lbnQuY2xvc2VzdCgnLmZpZWxkJyk7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5RGl2ID0gZWRpdG9yLmVsZW1lbnQuY2xvc2VzdCgnLmNhdGVnb3J5Jyk7XHJcblxyXG4gICAgICAgIGlmIChpc1ByZXBlbmQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgY2F0ZWdvcnlEaXYucHJlcGVuZFRvKHRvRWxlbWVudCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjYXRlZ29yeURpdi5hcHBlbmRUbyh0b0VsZW1lbnQpO1xyXG5cclxuICAgICAgICAvL2hpZGUgY2F0ZWdvcnkgbmF2aWdhdGlvbiBsaW5rXHJcbiAgICAgICAgbGV0IGNhdGVnb3J5QW5jaG9yID0gY2F0ZWdvcnlEaXYuZmluZCgnLmNhdGVnb3J5LWFuY2hvcicpO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeUFuY2hvck5hbWUgPSBjYXRlZ29yeUFuY2hvci5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgY2F0ZWdvcnlBbmNob3IuY2xvc2VzdCgnLnMtUHJvcGVydHlHcmlkJykuZmluZChgYVtocmVmPScjJHtjYXRlZ29yeUFuY2hvck5hbWV9J11gKS5oaWRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3RFZGl0b3JUYWIoZWRpdG9yOiBTZXJlbml0eS5XaWRnZXQ8YW55Pikge1xyXG4gICAgICAgIGxldCB0YWJJZCA9IGVkaXRvci5lbGVtZW50LmNsb3Nlc3QoJy50YWItcGFuZScpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIGxldCB0YWJBbmNob3IgPSBlZGl0b3IuZWxlbWVudC5jbG9zZXN0KCcucy1Qcm9wZXJ0eUdyaWQnKS5maW5kKGBhW2hyZWY9JyMke3RhYklkfSddYCk7XHJcblxyXG4gICAgICAgICh0YWJBbmNob3IgYXMgYW55KS50YWIoJ3Nob3cnKTtcclxuICAgIH1cclxuXHJcbn0iLCJcclxubmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCgpXHJcbiAgICBleHBvcnQgY2xhc3MgUmV0dXJuT3JFeGNoYW5nZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxSZXR1cm5PckV4Y2hhbmdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJldHVybk9yRXhjaGFuZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJldHVybk9yRXhjaGFuZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXR1cm5PckV4Y2hhbmdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBSZXR1cm5PckV4Y2hhbmdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmV0dXJuT3JFeGNoYW5nZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmV0dXJuT3JFeGNoYW5nZVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZXR1cm5PckV4Y2hhbmdlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJldHVybk9yRXhjaGFuZ2VSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBuZXh0SWQgPSAwO1xyXG4gICAgICAgIHByb3RlY3RlZCBzdW0gPSAwO1xyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJldHVybk9yRXhjaGFuZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5BZGRQYXkuZ2V0R3JpZEZpZWxkKCkuZmluZCgnLmNhcHRpb24nKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkFkZFBheS5nZXRHcmlkRmllbGQoKS5maW5kKCcuZWRpdG9yJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIj48c3Bhbj48aSBjbGFzcz1cImZhIGZhLXBsdXMtY2lyY2xlIHRleHQtZ3JlZW5cIj48L2k+IDxiPkFkZDwvYj48L3NwYW4+PC9idXR0b24+JylcclxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZnRlcih0aGlzLmZvcm0uQWRkUGF5LmVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAuY2xpY2soKCkgPT4gdGhpcy5hZGRQYXltZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkFkZE9yZGVyRGV0YWlsLmdldEdyaWRGaWVsZCgpLmZpbmQoJy5jYXB0aW9uJykudGV4dCgnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5BZGRPcmRlckRldGFpbC5nZXRHcmlkRmllbGQoKS5maW5kKCcuZWRpdG9yJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIj48c3Bhbj48aSBjbGFzcz1cImZhIGZhLXBsdXMtY2lyY2xlIHRleHQtZ3JlZW5cIj48L2k+IDxiPkFkZDwvYj48L3NwYW4+PC9idXR0b24+JylcclxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZnRlcih0aGlzLmZvcm0uQWRkT3JkZXJEZXRhaWwuZWxlbWVudClcclxuICAgICAgICAgICAgICAgIC5jbGljaygoKSA9PiB0aGlzLmFkZE9yZGVyRGV0YWlsKCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkFkZE9yZGVyRGV0YWlsMi5nZXRHcmlkRmllbGQoKS5maW5kKCcuY2FwdGlvbicpLnRleHQoJycpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQWRkT3JkZXJEZXRhaWwyLmdldEdyaWRGaWVsZCgpLmZpbmQoJy5lZGl0b3InKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiPjxzcGFuPjxpIGNsYXNzPVwiZmEgZmEtcGx1cy1jaXJjbGUgdGV4dC1ncmVlblwiPjwvaT4gPGI+QWRkPC9iPjwvc3Bhbj48L2J1dHRvbj4nKVxyXG4gICAgICAgICAgICAgICAgLmluc2VydEFmdGVyKHRoaXMuZm9ybS5BZGRPcmRlckRldGFpbDIuZWxlbWVudClcclxuICAgICAgICAgICAgICAgIC5jbGljaygoKSA9PiB0aGlzLmFkZE9yZGVyRGV0YWlsMigpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25EaWFsb2dPcGVuKCkge1xyXG4gICAgICAgICAgICBzdXBlci5vbkRpYWxvZ09wZW4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vaW5pdGlhbGl6YXRpb25cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGF5bWVudERhdGUudmFsdWUgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGF5bWVudFR5cGUudmFsdWUgPSBTdHJpbmcoQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGUuUGF5KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5EaXNjb3VudC52YWx1ZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUXVhbnRpdHkyLnZhbHVlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50Mi52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpb25cclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTdWJUb3RhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFpZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsTGVzcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXh0SWQgPSB0aGlzLm1heFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSh0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0LnZhbHVlLmxlbmd0aCwgdGhpcy5mb3JtLlJldHVybkJvb2tMaXN0LnZhbHVlLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heFZhbHVlKHRoaXMuZm9ybS5PcmRlclBheUxpc3QudmFsdWUubGVuZ3RoLCB0aGlzLmZvcm0uT3JkZXJMZXNzTGlzdC52YWx1ZS5sZW5ndGgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLlN0YXR1cy52YWx1ZSA9PSB1bmRlZmluZWQgfHwgdGhpcy5mb3JtLlN0YXR1cy52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLlN0YXR1cy52YWx1ZSA9IFN0cmluZyhDb21tb24uUHVyY2hhc2VTdGF0dXMuRHJhZnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uU3RhdHVzLnZhbHVlID09IFN0cmluZyhDb21tb24uUHVyY2hhc2VTdGF0dXMuRHJhZnQpKSB7XHJcbiAgICAgICAgICAgICAgICBxLmhpZGVFZGl0b3JDYXRlZ29yeSh0aGlzLmZvcm0uUGF5bWVudERhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uVG9rZW5Obyk7XHJcbiAgICAgICAgICAgICAgICBxLnJlYWRPbmx5RWRpdG9yKHRoaXMuZm9ybS5DdXN0b21lcklkKTtcclxuICAgICAgICAgICAgICAgIHEucmVhZE9ubHlFZGl0b3IodGhpcy5mb3JtLlNhbGVEYXRlKTtcclxuICAgICAgICAgICAgICAgIHEuaGlkZUVkaXRvckNhdGVnb3J5KHRoaXMuZm9ybS5Cb29rSWQpO1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0KTtcclxuICAgICAgICAgICAgICAgIHEucmVhZE9ubHlFZGl0b3IodGhpcy5mb3JtLlNlcnZpY2VDaGFyZ2UpO1xyXG4gICAgICAgICAgICAgICAgcS5yZWFkT25seUVkaXRvcih0aGlzLmZvcm0uT3RoZXIpO1xyXG4gICAgICAgICAgICAgICAgcS5oaWRlRmllbGQodGhpcy5mb3JtLkluaXRpYWxMZXNzKTtcclxuICAgICAgICAgICAgICAgIHEuaGlkZUZpZWxkKHRoaXMuZm9ybS5Jbml0aWFsUGFpZCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uIGNoZWNraW5nIGZvciBEZXRhaWxMaXN0XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Cb29rSWQuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBib29rSWQgPSBRLnRvSWQodGhpcy5mb3JtLkJvb2tJZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9va0lkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uVW5pdFByaWNlLnZhbHVlID0gQWRtaW5NYW5hZ2VtZW50LkJvb2tSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbYm9va0lkXS5QcmljZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50LmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRGlzY291bnQgY2FuJ3QgYmUgaGlnaGVyIHRoYW4gMTAwJSAhXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlVuaXRQcmljZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVMaW5lVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUXVhbnRpdHkuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50LmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbiBjaGVja2luZyBmb3IgUmV0dXJuTGlzdFxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQm9va0lkMi5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvb2tJZCA9IFEudG9JZCh0aGlzLmZvcm0uQm9va0lkMi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9va0lkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uVW5pdFByaWNlMi52YWx1ZSA9IEFkbWluTWFuYWdlbWVudC5Cb29rUm93LmdldExvb2t1cCgpLml0ZW1CeUlkW2Jvb2tJZF0uUHJpY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUxpbmVUb3RhbDIoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uRGlzY291bnQyLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkRpc2NvdW50Mi52YWx1ZSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkRpc2NvdW50IGNhbid0IGJlIGhpZ2hlciB0aGFuIDEwMCUgIVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Vbml0UHJpY2UyLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUxpbmVUb3RhbDIoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUXVhbnRpdHkyLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUxpbmVUb3RhbDIoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uRGlzY291bnQyLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTGluZVRvdGFsMigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vRGV0YWlscyBMaXN0IHN1bVxyXG4gICAgICAgICAgICAodGhpcy5mb3JtLk9yZGVyRGV0YWlsTGlzdC52aWV3IGFzIGFueSkub25Sb3dzT3JDb3VudENoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU3ViVG90YWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAodGhpcy5mb3JtLk9yZGVyRGV0YWlsTGlzdC52aWV3IGFzIGFueSkub25EYXRhQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTdWJUb3RhbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICh0aGlzLmZvcm0uT3JkZXJQYXlMaXN0LnZpZXcgYXMgYW55KS5vbkRhdGFDaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFpZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICh0aGlzLmZvcm0uT3JkZXJMZXNzTGlzdC52aWV3IGFzIGFueSkub25EYXRhQ2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbExlc3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL0NoYW5nZSBFdmVudCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uU2VydmljZUNoYXJnZS5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLk90aGVyLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQYXlhYmxlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uSW5pdGlhbExlc3MuY2hhbmdlKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLlRvdGFsTGVzcy52YWx1ZSA9IHRoaXMuZm9ybS5Jbml0aWFsTGVzcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQYXlhYmxlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkluaXRpYWxQYWlkLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5Ub3RhbFBhaWQudmFsdWUgPSB0aGlzLmZvcm0uSW5pdGlhbFBhaWQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZ0R1ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBjYWxjdWxhdGVMaW5lVG90YWwoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5MaW5lVG90YWwudmFsdWUgPSB0aGlzLmZvcm0uVW5pdFByaWNlLnZhbHVlICogdGhpcy5mb3JtLlF1YW50aXR5LnZhbHVlICogKDEgLSB0aGlzLmZvcm0uRGlzY291bnQudmFsdWUgLyAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGNhbGN1bGF0ZUxpbmVUb3RhbDIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5MaW5lVG90YWwyLnZhbHVlID0gdGhpcy5mb3JtLlVuaXRQcmljZTIudmFsdWUgKiB0aGlzLmZvcm0uUXVhbnRpdHkyLnZhbHVlICogKDEgLSB0aGlzLmZvcm0uRGlzY291bnQyLnZhbHVlIC8gMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBhZGRQYXltZW50KCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9PSAnJyB8fCB0aGlzLmZvcm0uUGF5bWVudFR5cGUudmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgUS53YXJuaW5nKFwiUGxlYXNlIHNlbGVjdCBhbnkgcGF5bWVudCB0eXBlIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgUS53YXJuaW5nKFwiUGxlYXNlIGFkZCBhbW91bnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9PSBTdHJpbmcoQ29tbW9uLlB1cmNoYXNlUGF5bWVudFR5cGUuUGF5KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5mb3JtLk9yZGVyUGF5TGlzdC5nZXRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SWQrKztcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIF9faWQ6IFwiYGBcIiArIHRoaXMubmV4dElkLFxyXG4gICAgICAgICAgICAgICAgICAgIFBheW1lbnREYXRlOiB0aGlzLmZvcm0uUGF5bWVudERhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgUGF5bWVudEFtb3VudDogdGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLk9yZGVyUGF5TGlzdC5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmZvcm0uT3JkZXJMZXNzTGlzdC5nZXRJdGVtcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SWQrKztcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIF9faWQ6IFwiYGBcIiArIHRoaXMubmV4dElkLFxyXG4gICAgICAgICAgICAgICAgICAgIFBheW1lbnREYXRlOiB0aGlzLmZvcm0uUGF5bWVudERhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgUGF5bWVudEFtb3VudDogdGhpcy5mb3JtLlBheW1lbnRBbW91bnQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLk9yZGVyTGVzc0xpc3Quc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGF5bWVudEFtb3VudC52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXltZW50RGF0ZS52YWx1ZSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXltZW50VHlwZS52YWx1ZSA9IFN0cmluZyhDb21tb24uUHVyY2hhc2VQYXltZW50VHlwZS5QYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGFkZE9yZGVyRGV0YWlsKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Cb29rSWQudmFsdWUgPT0gJycgfHwgdGhpcy5mb3JtLkJvb2tJZC52YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBRLndhcm5pbmcoXCJQbGVhc2Ugc2VsZWN0IGFueSBib29rIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNhbWVQcm9kdWN0ID0gUS50cnlGaXJzdCh0aGlzLmZvcm0uT3JkZXJEZXRhaWxMaXN0LmdldEl0ZW1zKCksIHggPT4geC5Cb29rSWQgPT09IFEudG9JZCh0aGlzLmZvcm0uQm9va0lkLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgUS5hbGVydCgnVGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW4gb3JkZXIgZGV0YWlscyEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5EaXNjb3VudC52YWx1ZSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgUS5hbGVydChcIkRpc2NvdW50IGNhbid0IGJlIGhpZ2hlciB0aGFuIDEwMCAlICFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZm9ybS5PcmRlckRldGFpbExpc3QuZ2V0SXRlbXMoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0SWQrKztcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBfX2lkOiBcImBgXCIgKyB0aGlzLm5leHRJZCxcclxuICAgICAgICAgICAgICAgIEJvb2tJZDogUS50b0lkKHRoaXMuZm9ybS5Cb29rSWQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgUXVhbnRpdHk6IHRoaXMuZm9ybS5RdWFudGl0eS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIERpc2NvdW50OiB0aGlzLmZvcm0uRGlzY291bnQudmFsdWUgfHwgMCxcclxuICAgICAgICAgICAgICAgIFVuaXRQcmljZTogdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIExpbmVUb3RhbDogdGhpcy5mb3JtLkxpbmVUb3RhbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIEJvb2tOYW1lQm46IEFkbWluTWFuYWdlbWVudC5Cb29rUm93LmdldExvb2t1cCgpLml0ZW1CeUlkW3RoaXMuZm9ybS5Cb29rSWQudmFsdWVdLk5hbWVCblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLk9yZGVyRGV0YWlsTGlzdC5zZXRJdGVtcyhpdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQm9va0lkLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlF1YW50aXR5LnZhbHVlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLkRpc2NvdW50LnZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlVuaXRQcmljZS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5MaW5lVG90YWwudmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGFkZE9yZGVyRGV0YWlsMigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQm9va0lkMi52YWx1ZSA9PSAnJyB8fCB0aGlzLmZvcm0uQm9va0lkMi52YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBRLndhcm5pbmcoXCJQbGVhc2Ugc2VsZWN0IGFueSBib29rIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNhbWVQcm9kdWN0ID0gUS50cnlGaXJzdCh0aGlzLmZvcm0uUmV0dXJuQm9va0xpc3QuZ2V0SXRlbXMoKSwgeCA9PiB4LkJvb2tJZCA9PT0gUS50b0lkKHRoaXMuZm9ybS5Cb29rSWQyLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUHJvZHVjdCkge1xyXG4gICAgICAgICAgICAgICAgUS5hbGVydCgnVGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW4gb3JkZXIgZGV0YWlscyEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5EaXNjb3VudDIudmFsdWUgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgIFEuYWxlcnQoXCJEaXNjb3VudCBjYW4ndCBiZSBoaWdoZXIgdGhhbiAxMDAgJSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmZvcm0uUmV0dXJuQm9va0xpc3QuZ2V0SXRlbXMoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0SWQrKztcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBfX2lkOiBcImBgXCIgKyB0aGlzLm5leHRJZCxcclxuICAgICAgICAgICAgICAgIEJvb2tJZDogUS50b0lkKHRoaXMuZm9ybS5Cb29rSWQyLnZhbHVlKSxcclxuICAgICAgICAgICAgICAgIFF1YW50aXR5OiB0aGlzLmZvcm0uUXVhbnRpdHkyLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgRGlzY291bnQ6IHRoaXMuZm9ybS5EaXNjb3VudDIudmFsdWUgfHwgMCxcclxuICAgICAgICAgICAgICAgIFVuaXRQcmljZTogdGhpcy5mb3JtLlVuaXRQcmljZTIudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBMaW5lVG90YWw6IHRoaXMuZm9ybS5MaW5lVG90YWwyLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgQm9va05hbWVCbjogQWRtaW5NYW5hZ2VtZW50LkJvb2tSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWRbdGhpcy5mb3JtLkJvb2tJZDIudmFsdWVdLk5hbWVCblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlJldHVybkJvb2tMaXN0LnNldEl0ZW1zKGl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Cb29rSWQyLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlF1YW50aXR5Mi52YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5EaXNjb3VudDIudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uVW5pdFByaWNlMi52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5MaW5lVG90YWwyLnZhbHVlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBtYXhWYWx1ZShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIGlmIChhID4gYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGNhbGN1bGF0ZVN1YlRvdGFsKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgdGhpcy5mb3JtLk9yZGVyRGV0YWlsTGlzdC5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1bSArPSBrLkxpbmVUb3RhbCB8fCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5TdWJUb3RhbC52YWx1ZSA9IHRoaXMuc3VtO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUGF5YWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGNhbGN1bGF0ZVRvdGFsUGFpZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIHRoaXMuZm9ybS5PcmRlclBheUxpc3QuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdW0gKz0gay5QYXltZW50QW1vdW50IHx8IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlRvdGFsUGFpZC52YWx1ZSA9IHRoaXMuZm9ybS5Jbml0aWFsUGFpZC52YWx1ZSArIHRoaXMuc3VtO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZ0R1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGNhbGN1bGF0ZVRvdGFsTGVzcygpIHtcclxuICAgICAgICAgICAgdGhpcy5zdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIHRoaXMuZm9ybS5PcmRlckxlc3NMaXN0LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VtICs9IGsuUGF5bWVudEFtb3VudCB8fCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Ub3RhbExlc3MudmFsdWUgPSB0aGlzLmZvcm0uSW5pdGlhbExlc3MudmFsdWUgKyB0aGlzLnN1bTtcclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbFBheWFibGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBjYWxjdWxhdGVUb3RhbFBheWFibGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VtID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zdW0gPSB0aGlzLmZvcm0uU3ViVG90YWwudmFsdWVcclxuICAgICAgICAgICAgICAgICsgdGhpcy5mb3JtLlNlcnZpY2VDaGFyZ2UudmFsdWVcclxuICAgICAgICAgICAgICAgICsgdGhpcy5mb3JtLk90aGVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAtIHRoaXMuZm9ybS5Ub3RhbExlc3MudmFsdWVcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlRvdGFsUGF5YWJsZS52YWx1ZSA9IHRoaXMuc3VtO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZ0R1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGNhbGN1bGF0ZVJlbWFpbmluZ0R1ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdW0gPSB0aGlzLmZvcm0uVG90YWxQYXlhYmxlLnZhbHVlIC0gdGhpcy5mb3JtLlRvdGFsUGFpZC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlJlbWFpbmluZ0R1ZS52YWx1ZSA9IHRoaXMuc3VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgTGlicmFyeU1hbmFnZW1lbnRTb2x1dGlvbi5TdGFsbEN1c3RvbWVyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXR1cm5PckV4Y2hhbmdlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UmV0dXJuT3JFeGNoYW5nZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBSZXR1cm5PckV4Y2hhbmdlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSZXR1cm5PckV4Y2hhbmdlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZXR1cm5PckV4Y2hhbmdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFJldHVybk9yRXhjaGFuZ2VSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXR1cm5PckV4Y2hhbmdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmV0dXJuT3JFeGNoYW5nZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJldHVybk9yRXhjaGFuZ2VDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTdGFsbEN1c3RvbWVyLlJldHVybk9yRXhjaGFuZ2UnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXR1cm5PckV4Y2hhbmdlRm9ybSB7XHJcbiAgICAgICAgVG9rZW5ObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEN1c3RvbWVySWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBTYWxlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBCb29rSWQyOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgUXVhbnRpdHkyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIERpc2NvdW50MjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVbml0UHJpY2UyOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIEFkZE9yZGVyRGV0YWlsMjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExpbmVUb3RhbDI6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgUmV0dXJuQm9va0xpc3Q6IFByb2R1Y3RTYWxlRGV0YWlsRWRpdG9yO1xyXG4gICAgICAgIEJvb2tJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIFF1YW50aXR5OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIERpc2NvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVuaXRQcmljZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBBZGRPcmRlckRldGFpbDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExpbmVUb3RhbDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBPcmRlckRldGFpbExpc3Q6IFByb2R1Y3RTYWxlRGV0YWlsRWRpdG9yO1xyXG4gICAgICAgIFN1YlRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFN0YXR1czogU2VyZW5pdHkuRW51bUVkaXRvcjtcclxuICAgICAgICBTZXJ2aWNlQ2hhcmdlOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIE90aGVyOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIEluaXRpYWxMZXNzOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFRvdGFsTGVzczogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBUb3RhbFBheWFibGU6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgSW5pdGlhbFBhaWQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgVG90YWxQYWlkOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFJlbWFpbmluZ0R1ZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBQYXltZW50RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBQYXltZW50QW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFBheW1lbnRUeXBlOiBTZXJlbml0eS5FbnVtRWRpdG9yO1xyXG4gICAgICAgIEFkZFBheTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE9yZGVyUGF5TGlzdDogUHJvZHVjdFNhbGVQYXltZW50RWRpdG9yO1xyXG4gICAgICAgIENhc2hCYWNrTGlzdDogUHJvZHVjdFNhbGVQYXltZW50RWRpdG9yO1xyXG4gICAgICAgIE9yZGVyTGVzc0xpc3Q6IFByb2R1Y3RTYWxlUGF5bWVudEVkaXRvcjtcclxuICAgICAgICBQcmVwYXJlZEJ5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJldHVybk9yRXhjaGFuZ2VGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTdGFsbEN1c3RvbWVyLlJldHVybk9yRXhjaGFuZ2UnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJldHVybk9yRXhjaGFuZ2VGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXR1cm5PckV4Y2hhbmdlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkxvb2t1cEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NCA9IHMuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NSA9IFByb2R1Y3RTYWxlRGV0YWlsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc2ID0gcy5FbnVtRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc3ID0gUHJvZHVjdFNhbGVQYXltZW50RWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJldHVybk9yRXhjaGFuZ2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rva2VuTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ3VzdG9tZXJJZCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTYWxlRGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdCb29rSWQyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1F1YW50aXR5MicsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNjb3VudDInLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdFByaWNlMicsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRPcmRlckRldGFpbDInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGluZVRvdGFsMicsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXR1cm5Cb29rTGlzdCcsIHc1LFxyXG4gICAgICAgICAgICAgICAgICAgICdCb29rSWQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUXVhbnRpdHknLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzY291bnQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdFByaWNlJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkZE9yZGVyRGV0YWlsJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xpbmVUb3RhbCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdPcmRlckRldGFpbExpc3QnLCB3NSxcclxuICAgICAgICAgICAgICAgICAgICAnU3ViVG90YWwnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhdHVzJywgdzYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VDaGFyZ2UnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnT3RoZXInLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnSW5pdGlhbExlc3MnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnVG90YWxMZXNzJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RvdGFsUGF5YWJsZScsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdJbml0aWFsUGFpZCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdUb3RhbFBhaWQnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVtYWluaW5nRHVlJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnREYXRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnRBbW91bnQnLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnUGF5bWVudFR5cGUnLCB3NixcclxuICAgICAgICAgICAgICAgICAgICAnQWRkUGF5JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ09yZGVyUGF5TGlzdCcsIHc3LFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXNoQmFja0xpc3QnLCB3NyxcclxuICAgICAgICAgICAgICAgICAgICAnT3JkZXJMZXNzTGlzdCcsIHc3LFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmVwYXJlZEJ5JywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBMaWJyYXJ5TWFuYWdlbWVudFNvbHV0aW9uLlN0YWxsQ3VzdG9tZXIge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXR1cm5PckV4Y2hhbmdlUm93IHtcclxuICAgICAgICBQcm9kdWN0U2FsZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFRva2VuTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJJZD86IG51bWJlcjtcclxuICAgICAgICBTYWxlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBTdWJUb3RhbD86IG51bWJlcjtcclxuICAgICAgICBTZXJ2aWNlQ2hhcmdlPzogbnVtYmVyO1xyXG4gICAgICAgIE90aGVyPzogbnVtYmVyO1xyXG4gICAgICAgIEluaXRpYWxMZXNzPzogbnVtYmVyO1xyXG4gICAgICAgIFRvdGFsTGVzcz86IG51bWJlcjtcclxuICAgICAgICBJbml0aWFsUGFpZD86IG51bWJlcjtcclxuICAgICAgICBUb3RhbFBhaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVG90YWxQYXlhYmxlPzogbnVtYmVyO1xyXG4gICAgICAgIFJlbWFpbmluZ0R1ZT86IG51bWJlcjtcclxuICAgICAgICBQcmVwYXJlZEJ5PzogbnVtYmVyO1xyXG4gICAgICAgIFN0YXR1cz86IENvbW1vbi5TYWxlU3RhdHVzO1xyXG4gICAgICAgIEN1c3RvbWVyTmFtZT86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lck5hbWVCbj86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lckNvbnRhY3RObz86IHN0cmluZztcclxuICAgICAgICBDdXN0b21lck1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tZXJBYm91dD86IHN0cmluZztcclxuICAgICAgICBSZXR1cm5Cb29rTGlzdD86IFByb2R1Y3RTYWxlRGV0YWlsUm93W107XHJcbiAgICAgICAgT3JkZXJEZXRhaWxMaXN0PzogUHJvZHVjdFNhbGVEZXRhaWxSb3dbXTtcclxuICAgICAgICBPcmRlclBheUxpc3Q/OiBQcm9kdWN0U2FsZVBheW1lbnRSb3dbXTtcclxuICAgICAgICBDYXNoQmFja0xpc3Q/OiBQcm9kdWN0U2FsZVBheW1lbnRSb3dbXTtcclxuICAgICAgICBPcmRlckxlc3NMaXN0PzogUHJvZHVjdFNhbGVQYXltZW50Um93W107XHJcbiAgICAgICAgQm9va0lkMj86IG51bWJlcjtcclxuICAgICAgICBRdWFudGl0eTI/OiBudW1iZXI7XHJcbiAgICAgICAgVW5pdFByaWNlMj86IG51bWJlcjtcclxuICAgICAgICBEaXNjb3VudDI/OiBudW1iZXI7XHJcbiAgICAgICAgTGluZVRvdGFsMj86IG51bWJlcjtcclxuICAgICAgICBBZGRPcmRlckRldGFpbDI/OiBzdHJpbmc7XHJcbiAgICAgICAgQm9va0lkPzogbnVtYmVyO1xyXG4gICAgICAgIFF1YW50aXR5PzogbnVtYmVyO1xyXG4gICAgICAgIFVuaXRQcmljZT86IG51bWJlcjtcclxuICAgICAgICBEaXNjb3VudD86IG51bWJlcjtcclxuICAgICAgICBMaW5lVG90YWw/OiBudW1iZXI7XHJcbiAgICAgICAgQWRkT3JkZXJEZXRhaWw/OiBzdHJpbmc7XHJcbiAgICAgICAgUGF5bWVudERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGF5bWVudEFtb3VudD86IG51bWJlcjtcclxuICAgICAgICBQYXltZW50VHlwZT86IENvbW1vbi5QdXJjaGFzZVBheW1lbnRUeXBlO1xyXG4gICAgICAgIEFkZFBheT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJldHVybk9yRXhjaGFuZ2VSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1Byb2R1Y3RTYWxlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVG9rZW5Obyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdTdGFsbEN1c3RvbWVyLlJldHVybk9yRXhjaGFuZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBQcm9kdWN0U2FsZUlkID0gXCJQcm9kdWN0U2FsZUlkXCIsXHJcbiAgICAgICAgICAgIFRva2VuTm8gPSBcIlRva2VuTm9cIixcclxuICAgICAgICAgICAgQ3VzdG9tZXJJZCA9IFwiQ3VzdG9tZXJJZFwiLFxyXG4gICAgICAgICAgICBTYWxlRGF0ZSA9IFwiU2FsZURhdGVcIixcclxuICAgICAgICAgICAgU3ViVG90YWwgPSBcIlN1YlRvdGFsXCIsXHJcbiAgICAgICAgICAgIFNlcnZpY2VDaGFyZ2UgPSBcIlNlcnZpY2VDaGFyZ2VcIixcclxuICAgICAgICAgICAgT3RoZXIgPSBcIk90aGVyXCIsXHJcbiAgICAgICAgICAgIEluaXRpYWxMZXNzID0gXCJJbml0aWFsTGVzc1wiLFxyXG4gICAgICAgICAgICBUb3RhbExlc3MgPSBcIlRvdGFsTGVzc1wiLFxyXG4gICAgICAgICAgICBJbml0aWFsUGFpZCA9IFwiSW5pdGlhbFBhaWRcIixcclxuICAgICAgICAgICAgVG90YWxQYWlkID0gXCJUb3RhbFBhaWRcIixcclxuICAgICAgICAgICAgVG90YWxQYXlhYmxlID0gXCJUb3RhbFBheWFibGVcIixcclxuICAgICAgICAgICAgUmVtYWluaW5nRHVlID0gXCJSZW1haW5pbmdEdWVcIixcclxuICAgICAgICAgICAgUHJlcGFyZWRCeSA9IFwiUHJlcGFyZWRCeVwiLFxyXG4gICAgICAgICAgICBTdGF0dXMgPSBcIlN0YXR1c1wiLFxyXG4gICAgICAgICAgICBDdXN0b21lck5hbWUgPSBcIkN1c3RvbWVyTmFtZVwiLFxyXG4gICAgICAgICAgICBDdXN0b21lck5hbWVCbiA9IFwiQ3VzdG9tZXJOYW1lQm5cIixcclxuICAgICAgICAgICAgQ3VzdG9tZXJDb250YWN0Tm8gPSBcIkN1c3RvbWVyQ29udGFjdE5vXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyTWFpbCA9IFwiQ3VzdG9tZXJNYWlsXCIsXHJcbiAgICAgICAgICAgIEN1c3RvbWVyQWJvdXQgPSBcIkN1c3RvbWVyQWJvdXRcIixcclxuICAgICAgICAgICAgUmV0dXJuQm9va0xpc3QgPSBcIlJldHVybkJvb2tMaXN0XCIsXHJcbiAgICAgICAgICAgIE9yZGVyRGV0YWlsTGlzdCA9IFwiT3JkZXJEZXRhaWxMaXN0XCIsXHJcbiAgICAgICAgICAgIE9yZGVyUGF5TGlzdCA9IFwiT3JkZXJQYXlMaXN0XCIsXHJcbiAgICAgICAgICAgIENhc2hCYWNrTGlzdCA9IFwiQ2FzaEJhY2tMaXN0XCIsXHJcbiAgICAgICAgICAgIE9yZGVyTGVzc0xpc3QgPSBcIk9yZGVyTGVzc0xpc3RcIixcclxuICAgICAgICAgICAgQm9va0lkMiA9IFwiQm9va0lkMlwiLFxyXG4gICAgICAgICAgICBRdWFudGl0eTIgPSBcIlF1YW50aXR5MlwiLFxyXG4gICAgICAgICAgICBVbml0UHJpY2UyID0gXCJVbml0UHJpY2UyXCIsXHJcbiAgICAgICAgICAgIERpc2NvdW50MiA9IFwiRGlzY291bnQyXCIsXHJcbiAgICAgICAgICAgIExpbmVUb3RhbDIgPSBcIkxpbmVUb3RhbDJcIixcclxuICAgICAgICAgICAgQWRkT3JkZXJEZXRhaWwyID0gXCJBZGRPcmRlckRldGFpbDJcIixcclxuICAgICAgICAgICAgQm9va0lkID0gXCJCb29rSWRcIixcclxuICAgICAgICAgICAgUXVhbnRpdHkgPSBcIlF1YW50aXR5XCIsXHJcbiAgICAgICAgICAgIFVuaXRQcmljZSA9IFwiVW5pdFByaWNlXCIsXHJcbiAgICAgICAgICAgIERpc2NvdW50ID0gXCJEaXNjb3VudFwiLFxyXG4gICAgICAgICAgICBMaW5lVG90YWwgPSBcIkxpbmVUb3RhbFwiLFxyXG4gICAgICAgICAgICBBZGRPcmRlckRldGFpbCA9IFwiQWRkT3JkZXJEZXRhaWxcIixcclxuICAgICAgICAgICAgUGF5bWVudERhdGUgPSBcIlBheW1lbnREYXRlXCIsXHJcbiAgICAgICAgICAgIFBheW1lbnRBbW91bnQgPSBcIlBheW1lbnRBbW91bnRcIixcclxuICAgICAgICAgICAgUGF5bWVudFR5cGUgPSBcIlBheW1lbnRUeXBlXCIsXHJcbiAgICAgICAgICAgIEFkZFBheSA9IFwiQWRkUGF5XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIExpYnJhcnlNYW5hZ2VtZW50U29sdXRpb24uU3RhbGxDdXN0b21lciB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJldHVybk9yRXhjaGFuZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdTdGFsbEN1c3RvbWVyL1JldHVybk9yRXhjaGFuZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UmV0dXJuT3JFeGNoYW5nZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJldHVybk9yRXhjaGFuZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UmV0dXJuT3JFeGNoYW5nZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSZXR1cm5PckV4Y2hhbmdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlN0YWxsQ3VzdG9tZXIvUmV0dXJuT3JFeGNoYW5nZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJTdGFsbEN1c3RvbWVyL1JldHVybk9yRXhjaGFuZ2UvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU3RhbGxDdXN0b21lci9SZXR1cm5PckV4Y2hhbmdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU3RhbGxDdXN0b21lci9SZXR1cm5PckV4Y2hhbmdlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlN0YWxsQ3VzdG9tZXIvUmV0dXJuT3JFeGNoYW5nZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UmV0dXJuT3JFeGNoYW5nZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=