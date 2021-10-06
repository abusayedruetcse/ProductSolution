using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LibraryManagementSolution.AdminManagement.Forms
{
    [FormScript("AdminManagement.Topic")]
    [BasedOnRow(typeof(TopicRow), CheckNames = true)]
    public class TopicForm
    {
        public String Name { get; set; }
        public String NameBn { get; set; }
    }
}