
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class AuthorGrid extends Serenity.EntityGrid<AuthorRow, any> {
        protected getColumnsKey() { return AuthorColumns.columnsKey; }
        protected getDialogType() { return AuthorDialog; }
        protected getIdProperty() { return AuthorRow.idProperty; }
        protected getInsertPermission() { return AuthorRow.insertPermission; }
        protected getLocalTextPrefix() { return AuthorRow.localTextPrefix; }
        protected getService() { return AuthorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}