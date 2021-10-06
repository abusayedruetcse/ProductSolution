
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class AuthorDialog extends Serenity.EntityDialog<AuthorRow, any> {
        protected getFormKey() { return AuthorForm.formKey; }
        protected getIdProperty() { return AuthorRow.idProperty; }
        protected getLocalTextPrefix() { return AuthorRow.localTextPrefix; }
        protected getNameProperty() { return AuthorRow.nameProperty; }
        protected getService() { return AuthorService.baseUrl; }
        protected getDeletePermission() { return AuthorRow.deletePermission; }
        protected getInsertPermission() { return AuthorRow.insertPermission; }
        protected getUpdatePermission() { return AuthorRow.updatePermission; }

        protected form = new AuthorForm(this.idPrefix);

    }
}