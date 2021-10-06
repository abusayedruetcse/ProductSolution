using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Forms
{
    [FormScript("AdminManagement.Author")]
    [BasedOnRow(typeof(AuthorRow), CheckNames = true)]
    public class AuthorForm
    {
        public String Name { get; set; }
        public String NameBn { get; set; }
        public String ContactNo { get; set; }
        [EmailEditor]
        public String Mail { get; set; }
        public DateTime BirthDate { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String About { get; set; }        
    }
}