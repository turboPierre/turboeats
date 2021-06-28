using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Turboeat_App_Lourde
{
    public partial class Frm1 : Form
    {
        public Frm1()
        {
            InitializeComponent();

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
    }
}
