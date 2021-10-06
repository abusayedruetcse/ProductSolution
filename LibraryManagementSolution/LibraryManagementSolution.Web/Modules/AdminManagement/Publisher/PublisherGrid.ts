
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class PublisherGrid extends Serenity.EntityGrid<PublisherRow, any> {
        protected getColumnsKey() { return PublisherColumns.columnsKey; }
        protected getDialogType() { return PublisherDialog; }
        protected getIdProperty() { return PublisherRow.idProperty; }
        protected getInsertPermission() { return PublisherRow.insertPermission; }
        protected getLocalTextPrefix() { return PublisherRow.localTextPrefix; }
        protected getService() { return PublisherService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}