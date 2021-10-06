
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class BookDialog extends Serenity.EntityDialog<BookRow, any> {
        protected getFormKey() { return BookForm.formKey; }
        protected getIdProperty() { return BookRow.idProperty; }
        protected getLocalTextPrefix() { return BookRow.localTextPrefix; }
        protected getNameProperty() { return BookRow.nameProperty; }
        protected getService() { return BookService.baseUrl; }
        protected getDeletePermission() { return BookRow.deletePermission; }
        protected getInsertPermission() { return BookRow.insertPermission; }
        protected getUpdatePermission() { return BookRow.updatePermission; }

        protected form = new BookForm(this.idPrefix);

    }
}