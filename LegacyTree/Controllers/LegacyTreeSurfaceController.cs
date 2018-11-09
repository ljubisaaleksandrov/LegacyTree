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
    }
}