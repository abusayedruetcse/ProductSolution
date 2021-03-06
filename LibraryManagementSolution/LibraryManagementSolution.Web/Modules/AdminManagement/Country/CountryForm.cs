using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Forms
{
    [FormScript("AdminManagement.Country")]
    [BasedOnRow(typeof(CountryRow), CheckNames = true)]
    public class CountryForm
    {
        public String Name { get; set; }
        public String NameBn { get; set; }
        public String Code { get; set; }
        public Int32 SortOrder { get; set; }
    }
}