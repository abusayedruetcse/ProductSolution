using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace LibraryManagementSolution.Administration
{
    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "LibraryManagementSolution.Administration.RoleCheckEditor";

        public RoleCheckEditorAttribute()
            : base(Key)
        {
        }
    }
}
