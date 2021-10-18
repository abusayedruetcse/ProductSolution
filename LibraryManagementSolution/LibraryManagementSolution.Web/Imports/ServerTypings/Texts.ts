namespace LibraryManagementSolution.Texts {

    declare namespace Db {

        namespace AdminManagement {

            namespace Author {
                export const About: string;
                export const AuthorId: string;
                export const BirthDate: string;
                export const ContactNo: string;
                export const LookupText: string;
                export const Mail: string;
                export const Name: string;
                export const NameBn: string;
            }

            namespace Book {
                export const AuthorId: string;
                export const AuthorName: string;
                export const AuthorNameBn: string;
                export const Availability: string;
                export const BookId: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const CategoryNameBn: string;
                export const CategorySortOrder: string;
                export const CategoryTopicId: string;
                export const CountryId: string;
                export const CoverImage: string;
                export const Discount: string;
                export const Edition: string;
                export const LanguageId: string;
                export const LookupText: string;
                export const Name: string;
                export const NameBn: string;
                export const NumberOfPages: string;
                export const PreviewAttachment: string;
                export const Price: string;
                export const PublisherId: string;
                export const PublisherName: string;
                export const PublisherNameBn: string;
                export const SortOrder: string;
                export const Summary: string;
                export const TopicId: string;
                export const TopicName: string;
                export const TopicNameBn: string;
                export const TranslatorId: string;
                export const TranslatorName: string;
                export const TranslatorNameBn: string;
            }

            namespace Category {
                export const CategoryId: string;
                export const Name: string;
                export const NameBn: string;
                export const SortOrder: string;
                export const TopicId: string;
                export const TopicName: string;
                export const TopicNameBn: string;
            }

            namespace Country {
                export const Code: string;
                export const CountryId: string;
                export const Name: string;
                export const NameBn: string;
                export const SortOrder: string;
            }

            namespace Language {
                export const Code: string;
                export const LanguageId: string;
                export const Name: string;
                export const NameBn: string;
                export const SortOrder: string;
            }

            namespace Publisher {
                export const ContactNo: string;
                export const Description: string;
                export const LookupText: string;
                export const Mail: string;
                export const Name: string;
                export const NameBn: string;
                export const PublisherId: string;
                export const StartDate: string;
            }

            namespace Topic {
                export const Name: string;
                export const NameBn: string;
                export const TopicId: string;
            }
        }

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace PublisherStall {

            namespace PurchaseOrder {
                export const AddOrderDetail: string;
                export const AddPay: string;
                export const BookId: string;
                export const Discount: string;
                export const InitialLess: string;
                export const InitialPaid: string;
                export const LineTotal: string;
                export const OrderDate: string;
                export const OrderDetailList: string;
                export const OrderLessList: string;
                export const OrderPayList: string;
                export const Other: string;
                export const PaymentAmount: string;
                export const PaymentDate: string;
                export const PaymentType: string;
                export const PublisherContactNo: string;
                export const PublisherDescription: string;
                export const PublisherId: string;
                export const PublisherMail: string;
                export const PublisherName: string;
                export const PublisherNameBn: string;
                export const PublisherStartDate: string;
                export const PurchaseOrderId: string;
                export const Quantity: string;
                export const RemainingDue: string;
                export const ServiceCharge: string;
                export const Status: string;
                export const SubTotal: string;
                export const TokenNo: string;
                export const TotalLess: string;
                export const TotalPaid: string;
                export const TotalPayable: string;
                export const UnitPrice: string;
            }

            namespace PurchaseOrderDetailList {
                export const BookId: string;
                export const BookName: string;
                export const BookNameBn: string;
                export const Discount: string;
                export const LineTotal: string;
                export const PurchaseOrderDetailListId: string;
                export const PurchaseOrderId: string;
                export const Quantity: string;
                export const UnitPrice: string;
                export const __id: string;
            }

            namespace PurchaseOrderPayment {
                export const PaymentAmount: string;
                export const PaymentDate: string;
                export const PaymentType: string;
                export const PurchaseOrderId: string;
                export const PurchaseOrderPaymentId: string;
                export const __id: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    LibraryManagementSolution['Texts'] = Q.proxyTexts(Texts, '', {Db:{AdminManagement:{Author:{About:1,AuthorId:1,BirthDate:1,ContactNo:1,LookupText:1,Mail:1,Name:1,NameBn:1},Book:{AuthorId:1,AuthorName:1,AuthorNameBn:1,Availability:1,BookId:1,CategoryId:1,CategoryName:1,CategoryNameBn:1,CategorySortOrder:1,CategoryTopicId:1,CountryId:1,CoverImage:1,Discount:1,Edition:1,LanguageId:1,LookupText:1,Name:1,NameBn:1,NumberOfPages:1,PreviewAttachment:1,Price:1,PublisherId:1,PublisherName:1,PublisherNameBn:1,SortOrder:1,Summary:1,TopicId:1,TopicName:1,TopicNameBn:1,TranslatorId:1,TranslatorName:1,TranslatorNameBn:1},Category:{CategoryId:1,Name:1,NameBn:1,SortOrder:1,TopicId:1,TopicName:1,TopicNameBn:1},Country:{Code:1,CountryId:1,Name:1,NameBn:1,SortOrder:1},Language:{Code:1,LanguageId:1,Name:1,NameBn:1,SortOrder:1},Publisher:{ContactNo:1,Description:1,LookupText:1,Mail:1,Name:1,NameBn:1,PublisherId:1,StartDate:1},Topic:{Name:1,NameBn:1,TopicId:1}},Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},PublisherStall:{PurchaseOrder:{AddOrderDetail:1,AddPay:1,BookId:1,Discount:1,InitialLess:1,InitialPaid:1,LineTotal:1,OrderDate:1,OrderDetailList:1,OrderLessList:1,OrderPayList:1,Other:1,PaymentAmount:1,PaymentDate:1,PaymentType:1,PublisherContactNo:1,PublisherDescription:1,PublisherId:1,PublisherMail:1,PublisherName:1,PublisherNameBn:1,PublisherStartDate:1,PurchaseOrderId:1,Quantity:1,RemainingDue:1,ServiceCharge:1,Status:1,SubTotal:1,TokenNo:1,TotalLess:1,TotalPaid:1,TotalPayable:1,UnitPrice:1},PurchaseOrderDetailList:{BookId:1,BookName:1,BookNameBn:1,Discount:1,LineTotal:1,PurchaseOrderDetailListId:1,PurchaseOrderId:1,Quantity:1,UnitPrice:1,__id:1},PurchaseOrderPayment:{PaymentAmount:1,PaymentDate:1,PaymentType:1,PurchaseOrderId:1,PurchaseOrderPaymentId:1,__id:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
