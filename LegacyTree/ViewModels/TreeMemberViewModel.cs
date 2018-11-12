using LegacyTree.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Web;
using Umbraco.Web.PublishedContentModels;

namespace LegacyTree.ViewModels
{
    public class TreeMemberViewModel
    {
        public int ID { get; set; }
        public String Name { get; set; }
        public String Spouse { get; set; }
        public String SpouseSecond { get; set; }
        public String BirthDate { get; set; }
        public String DeathDate { get; set; }

        public int LevelOffset { get; set; }
        public int Length { get; set; }
        public int SpouseLength { get; set; }
        public int SpouseSecondLength { get; set; }

        public List<int> Children { get; set; }
        public int ParentID { get; set; }

        public TreeMemberViewModel(){ }

        public TreeMemberViewModel(TreeMember treeMember)
        {
            if (treeMember != null)
            {
                this.ID = treeMember.Id;
                this.Name = treeMember.Name;
                this.Spouse = treeMember.Spouse.FormatSpouseName();
                this.SpouseSecond = treeMember.SpouseSecond.FormatSpouseName();
                this.BirthDate = treeMember.BirthDate != DateTime.MinValue ? treeMember.BirthDate.ToShortDateString() : String.Empty;
                this.DeathDate = treeMember.DateOfDeath != DateTime.MinValue ? treeMember.DateOfDeath.ToShortDateString() : String.Empty;
                this.Children = treeMember.Children.Where(c => c.IsDocumentType(TreeMember.ModelTypeAlias)).Select(c => c.Id).ToList();
                this.ParentID = treeMember.Parent.Id;
                this.Length = this.Name.Length;
                this.SpouseLength = this.Spouse.Length;
                this.SpouseSecondLength = this.SpouseSecond.Length;
            }
        }
    }
}