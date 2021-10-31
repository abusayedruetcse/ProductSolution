using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.StallCustomer.Forms
{
    [FormScript("StallCustomer.Customer")]
    [BasedOnRow(typeof(CustomerRow), CheckNames = true)]
    public class CustomerForm
    {
        public String Name { get; set; }
        public String NameBn { get; set; }
        public String ContactNo { get; set; }
        [EmailEditor]
        public String Mail { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String About { get; set; }
    }
}