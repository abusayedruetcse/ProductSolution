
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class TopicDialog extends Serenity.EntityDialog<TopicRow, any> {
        protected getFormKey() { return TopicForm.formKey; }
        protected getIdProperty() { return TopicRow.idProperty; }
        protected getLocalTextPrefix() { return TopicRow.localTextPrefix; }
        protected getNameProperty() { return TopicRow.nameProperty; }
        protected getService() { return TopicService.baseUrl; }
        protected getDeletePermission() { return TopicRow.deletePermission; }
        protected getInsertPermission() { return TopicRow.insertPermission; }
        protected getUpdatePermission() { return TopicRow.updatePermission; }

        protected form = new TopicForm(this.idPrefix);

    }
}