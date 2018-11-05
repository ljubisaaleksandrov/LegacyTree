using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LegacyTree.ViewModels
{
    public class TreeLayerViewModel
    {
        public int Level { get; set; }
        public int Length { get; set; }
        public bool IsInitialized { get; set; }
        public List<TreeMemberViewModel> Members { get; set; }
    }
}