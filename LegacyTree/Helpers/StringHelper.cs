using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LegacyTree.Helpers
{
    public static class StringHelper
    {
        internal static string FormatSpouseName(this string name)
        {
            return !string.IsNullOrEmpty(name) ? String.Format("({0})", name) : string.Empty;
        }
    }
}