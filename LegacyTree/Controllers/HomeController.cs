using LegacyTree.Helpers;
using System.Web.Mvc;
using Umbraco.Web.Models;

namespace LegacyTree.Controllers
{
    public class HomeController : Umbraco.Web.Mvc.RenderMvcController
    {
        public override ActionResult Index(RenderModel model)
        {
            return View("~/Views/Pages/Home.cshtml", model);
        }
    }
}