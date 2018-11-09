using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Web;
using Umbraco.Web.PublishedContentModels;

namespace LegacyTree.ViewModels
{
    public class TreeMemberViewModel
    {
        public String Name { get; set; }
        public String Spouse { get; set; }
        public String SpouseSecond { get; set; }
        public String BirthDate { get; set; }
        public String DeathDate { get; set; }

        public int Length { get; set; }
        public int x { get; set; }
        public int y { get; set; }

        public List<int> Children { get; set; }
        public int ParentID { get; set; }

        public TreeMemberViewModel(){ }

        public TreeMemberViewModel(TreeMember treeMember)
        {
            if (treeMember != null)
            {
                this.Name = treeMember.Name;
                this.Spouse = treeMember.Spouse;
                this.SpouseSecond = treeMember.SpouseSecond;
                this.BirthDate = treeMember.BirthDate != DateTime.MinValue ? treeMember.BirthDate.ToShortDateString() : String.Empty;
                this.DeathDate = treeMember.DateOfDeath != DateTime.MinValue ? treeMember.DateOfDeath.ToShortDateString() : String.Empty;
                this.Children = treeMember.Children.Where(c => c.IsDocumentType(TreeMember.ModelTypeAlias)).Select(c => c.Id).ToList();
                this.ParentID = treeMember.Parent.Id;
                this.Length = CalculateLength(treeMember);
                this.x = 0;
                this.y = 0;
            }
        }

        private int CalculateLength(TreeMember treeMember)
        {
            int length = treeMember.Name.Length;

            if (!String.IsNullOrEmpty(treeMember.Spouse))
            {
                length = length < (treeMember.Spouse.Length + 2) ? (treeMember.Spouse.Length + 2) : length;

                if (!String.IsNullOrEmpty(treeMember.SpouseSecond))
                    length = length < (treeMember.SpouseSecond.Length + 2) ? (treeMember.SpouseSecond.Length + 2) : length;
            }

            return length;
        }
    }
}