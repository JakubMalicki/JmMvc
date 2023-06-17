using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JmMvc.Startup))]
namespace JmMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
