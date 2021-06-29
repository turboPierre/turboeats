using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;

namespace Turboeat_App_Lourde.DataAccess
{
    public class Requesthttp
    {

        // use link auth_API
        //string page = "http://localhost:8080/users/login";

        // HttpClient is intended to be instantiated once per application, rather than per-use. See Remarks.
        private static readonly HttpClient client = new HttpClient();
        
        static async Task Main()
        {
            //post
            var data = new Dictionary<string, string>
            {
                { "email", "admin@turboeats.fr" },
                { "password", "admin" }
            };

            var content = new FormUrlEncodedContent(data);

            var response = await client.PostAsync("http://www.example.com/recepticle.aspx", content);

            var responseString = await response.Content.ReadAsStringAsync();
        }
        


    }

    class Customer
    {
        public string email { get; set; }
        public string passeword { get; set; }
        public string role { get; set; }
    }




}
