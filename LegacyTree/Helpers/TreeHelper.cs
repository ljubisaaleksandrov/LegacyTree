﻿using System.Collections.Generic;
using Umbraco.Web;
using System.Linq;
using Umbraco.Web.PublishedContentModels;
using LegacyTree.ViewModels;

namespace LegacyTree.Helpers
{
    public static class TreeHelper
    {
        private const int CHARACTER_LENGTH = 5;
        private const int MEMBERS_DELIMITER_LENGTH = 20;
        private const int PARENT_DELIMITER_LENGTH = 50;
        private const int LEVEL_DELIMITER_LENGTH = 200;

        public static List<TreeLayerViewModel> GenerateTree(UmbracoHelper umbracoHelper)
        {
            var root = umbracoHelper.TypedContentAtRoot().FirstOrDefault(i => i.IsDocumentType(MembersContainer.ModelTypeAlias));

            if(root != null && root.Children.Any(c => c.IsDocumentType(TreeMember.ModelTypeAlias)))
            {
                var tree = InitTree((TreeMember)root.Children.FirstOrDefault(c => c.IsDocumentType(TreeMember.ModelTypeAlias)), null, 0);
                tree = InitLengths(tree);
                return tree.InitPositions();
            }
            else
            {
                return null;
            }
        }

        private static List<TreeLayerViewModel> InitTree(TreeMember currentElement, List<TreeLayerViewModel> treeLayers, int currentLevel)
        {
            if (treeLayers == null)
                treeLayers = new List<TreeLayerViewModel>();

            if(!treeLayers.Any(tl => tl.Level == currentLevel))
                treeLayers.Add(new TreeLayerViewModel()
                {
                    Level = currentLevel,
                    IsInitialized = false,
                    Members = new List<TreeMemberViewModel>()
                });

            treeLayers[currentLevel].Members.Add(new TreeMemberViewModel(currentElement));
            if(currentElement.Children.Any(c => c.IsDocumentType(TreeMember.ModelTypeAlias)))
            {
                foreach (var child in currentElement.Children.Where(c => c.IsDocumentType(TreeMember.ModelTypeAlias)).Select(c => (TreeMember)c))
                    InitTree(child, treeLayers, currentLevel + 1);
            }

            return treeLayers;
        }

        private static List<TreeLayerViewModel> InitLengths(List<TreeLayerViewModel> treeLayers)
        {
            for(int i = 0; i < treeLayers.Count; i++)
            {
                int layerLength = treeLayers[i].Members.Sum(m => m.Length) * CHARACTER_LENGTH + (treeLayers[i].Members.Count - 1) * MEMBERS_DELIMITER_LENGTH;
                if (i != 0)
                    layerLength += (treeLayers[i - 1].Members.Count) * PARENT_DELIMITER_LENGTH;

                treeLayers[i].Length = layerLength;
            }

            return treeLayers;
        }

        private static List<TreeLayerViewModel> InitPositions(this List<TreeLayerViewModel> treeLayers)
        {
            int longestLayer = treeLayers.OrderByDescending(tl => tl.Length).FirstOrDefault().Level;
            //while(treeLayers.Any(tl => !tl.IsInitialized))
            //{
                for(int i = 0; i < treeLayers.Count; i++)
                {
                    var currentLayer = treeLayers[i];
                    if (!currentLayer.IsInitialized)
                    {
                        var tmpLayer = new TreeLayerViewModel()
                        {
                            Level = currentLayer.Level,
                            Members = new List<TreeMemberViewModel>()
                        };

                        if (currentLayer.Level == longestLayer)
                        {
                            int offset = PARENT_DELIMITER_LENGTH;
                            int tmpParent = 0;

                            foreach(var member in currentLayer.Members)
                            {
                                if (tmpParent != member.ParentID)
                                    offset += PARENT_DELIMITER_LENGTH;

                                member.x = offset;
                                member.y = (treeLayers.Count - tmpLayer.Level) * LEVEL_DELIMITER_LENGTH;
                                tmpLayer.Members.Add(member);

                                offset += member.Length * CHARACTER_LENGTH + (treeLayers.Count - tmpLayer.Level) * MEMBERS_DELIMITER_LENGTH;

                                tmpParent = member.ParentID;
                            }

                            tmpLayer.Length = offset + PARENT_DELIMITER_LENGTH;
                            tmpLayer.IsInitialized = true;
                        }
                        else
                        {
                            tmpLayer = currentLayer;
                            //tmpLayer.IsInitialized = true;
                        }

                        treeLayers[i] = tmpLayer;
                    }
                }
            //}

            return treeLayers;
        }
    }
}