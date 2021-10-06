
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey() { return LanguageColumns.columnsKey; }
        protected getDialogType() { return LanguageDialog; }
        protected getIdProperty() { return LanguageRow.idProperty; }
        protected getInsertPermission() { return LanguageRow.insertPermission; }
        protected getLocalTextPrefix() { return LanguageRow.localTextPrefix; }
        protected getService() { return LanguageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}