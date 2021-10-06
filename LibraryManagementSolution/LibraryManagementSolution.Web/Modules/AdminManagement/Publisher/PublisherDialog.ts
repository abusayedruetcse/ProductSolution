
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class PublisherDialog extends Serenity.EntityDialog<PublisherRow, any> {
        protected getFormKey() { return PublisherForm.formKey; }
        protected getIdProperty() { return PublisherRow.idProperty; }
        protected getLocalTextPrefix() { return PublisherRow.localTextPrefix; }
        protected getNameProperty() { return PublisherRow.nameProperty; }
        protected getService() { return PublisherService.baseUrl; }
        protected getDeletePermission() { return PublisherRow.deletePermission; }
        protected getInsertPermission() { return PublisherRow.insertPermission; }
        protected getUpdatePermission() { return PublisherRow.updatePermission; }

        protected form = new PublisherForm(this.idPrefix);

    }
}