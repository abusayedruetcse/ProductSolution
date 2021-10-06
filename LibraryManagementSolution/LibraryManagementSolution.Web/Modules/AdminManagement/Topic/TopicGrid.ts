
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class TopicGrid extends Serenity.EntityGrid<TopicRow, any> {
        protected getColumnsKey() { return TopicColumns.columnsKey; }
        protected getDialogType() { return TopicDialog; }
        protected getIdProperty() { return TopicRow.idProperty; }
        protected getInsertPermission() { return TopicRow.insertPermission; }
        protected getLocalTextPrefix() { return TopicRow.localTextPrefix; }
        protected getService() { return TopicService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}