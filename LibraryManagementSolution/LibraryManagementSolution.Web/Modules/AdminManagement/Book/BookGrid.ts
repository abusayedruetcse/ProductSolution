
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class BookGrid extends Serenity.EntityGrid<BookRow, any> {
        protected getColumnsKey() { return BookColumns.columnsKey; }
        protected getDialogType() { return BookDialog; }
        protected getIdProperty() { return BookRow.idProperty; }
        protected getInsertPermission() { return BookRow.insertPermission; }
        protected getLocalTextPrefix() { return BookRow.localTextPrefix; }
        protected getService() { return BookService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}