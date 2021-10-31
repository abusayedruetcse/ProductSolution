
namespace LibraryManagementSolution.StallCustomer {

    @Serenity.Decorators.registerClass()
    export class ReturnOrExchangeGrid extends Serenity.EntityGrid<ReturnOrExchangeRow, any> {
        protected getColumnsKey() { return ReturnOrExchangeColumns.columnsKey; }
        protected getDialogType() { return ReturnOrExchangeDialog; }
        protected getIdProperty() { return ReturnOrExchangeRow.idProperty; }
        protected getInsertPermission() { return ReturnOrExchangeRow.insertPermission; }
        protected getLocalTextPrefix() { return ReturnOrExchangeRow.localTextPrefix; }
        protected getService() { return ReturnOrExchangeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}