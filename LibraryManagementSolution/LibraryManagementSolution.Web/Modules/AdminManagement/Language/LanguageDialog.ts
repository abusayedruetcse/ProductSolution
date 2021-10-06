
namespace LibraryManagementSolution.AdminManagement {

    @Serenity.Decorators.registerClass()
    export class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey() { return LanguageForm.formKey; }
        protected getIdProperty() { return LanguageRow.idProperty; }
        protected getLocalTextPrefix() { return LanguageRow.localTextPrefix; }
        protected getNameProperty() { return LanguageRow.nameProperty; }
        protected getService() { return LanguageService.baseUrl; }
        protected getDeletePermission() { return LanguageRow.deletePermission; }
        protected getInsertPermission() { return LanguageRow.insertPermission; }
        protected getUpdatePermission() { return LanguageRow.updatePermission; }

        protected form = new LanguageForm(this.idPrefix);

    }
}