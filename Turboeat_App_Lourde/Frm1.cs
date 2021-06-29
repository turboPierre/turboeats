using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net.Http;

namespace Turboeat_App_Lourde
{
    public partial class Frm1 : Form
    {
        public Frm1()
        {
            InitializeComponent();

        }

        public class User
        {
            public User(string email,string password)
            {
                string Email = email;
                string Password = password;
            }
        }

        public class Requesthttp
        {


            // use link auth_API
            //string page = "http://localhost:8080/users/login";

            // HttpClient is intended to be instantiated once per application, rather than per-use. See Remarks.
            private static readonly HttpClient client = new HttpClient();

            static async Task Main()
            {
                ////post
                var data = new Dictionary<string, string>
                {
                    { "email", "admin@turboeats.fr" },
                    { "password", "admin" }
                };

                var content = new FormUrlEncodedContent(data);

                var response = await client.PostAsync("http://localhost:8080/users/login", content);

                var responseString = await response.Content.ReadAsStringAsync();

                //var userData = new UserData() { username = LoginBox.Text, password = PassewordBox.Text };
                //var response = await client.PostAsJsonAsync("auth/admin/login/APILourde", userData);
                //if (response.StatusCode != HttpStatusCode.OK)
                //{
                //    MessageBox.Show("Username or password incorrect", "Invalid credentials",
                //        MessageBoxButtons.OK, MessageBoxIcon.Error);
                //}
                //else
                //{
                //    MessageBox.Show("You are connect", "Connect",
                //    MessageBoxButtons.OK, MessageBoxIcon.Information);
                //}

            }


        }

            private void Commercial_page_Load(object sender, EventArgs e)
        {
            string login;
            string passeword;
            login = LoginBox.Text;
            passeword = PassewordBox.Text;

            if (login == "test" && passeword == "1234"){

                FrmCommercial frm2 = new FrmCommercial();
                frm2.Show();
                //this.Close();
            }
            else
            {
                MessageBox.Show(
                    "Mot de passe ou nom d'utilisateur incorrect",
                    "Erreur d'identification");
            }

        }

        private void Frm1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            //Requesthttp test = new Requesthttp("admin@turboeats.fr", "admin");
            //string msg = "erse0";
            //MessageBox.Show(msg);

            //var userData = new User() { Email = LoginBox.Text, Password = PassewordBox.Text };
            //var response = await client.PostAsJsonAsync("auth/admin/login/APILourde", userData);
            //if (response.StatusCode != HttpStatusCode.OK)
            //{
            //    MessageBox.Show("Username or password incorrect", "Invalid credentials",
            //        MessageBoxButtons.OK, MessageBoxIcon.Error);
            //}
            //else
            //{
            //    MessageBox.Show("You are connect", "Connect",
            //MessageBoxButtons.OK, MessageBoxIcon.Information);
            //}
        }
    }
}
