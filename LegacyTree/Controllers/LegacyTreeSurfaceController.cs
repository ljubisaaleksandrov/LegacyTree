using LegacyTree.Helpers;
using System.Web.Mvc;
using Umbraco.Web.Mvc;

namespace LegacyTree.Controllers
{
    public class LegacyTreeSurfaceController : SurfaceController
    {
        // GET: LegacyTreeSurface
        public JsonResult Index()
        {
            var result = TreeHelper.GenerateTree(Umbraco);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Treeviz()
        {
            var result = TreeHelper.GenerateTree(Umbraco);
            var convert = TreeHelper.TreeToJson(result);
            //  [{"id":1063,"text_1":"Mile","text_2":"(Nona)","father":1061,"color":"#2196F3"}]
            //return Json(Newtonsoft.Json.JsonConvert.SerializeObject(convert).Replace("\"id\"", "id")
            //                                                                .Replace("\"text_1\"", "text_1")
            //                                                                .Replace("\"text_2\"", "text_2")
            //                                                                .Replace("\"father\"", "father")
            //                                                                .Replace("\"color\"", "color")
            //                                                                .Replace("father:1061", "father:null"), JsonRequestBehavior.AllowGet);
            return Json(convert, JsonRequestBehavior.AllowGet);
        }
    }
}