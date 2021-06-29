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
    public partial class FrmTechnical : Form
    {
        public FrmTechnical()
        {
            InitializeComponent();
        }

        private void BtnDeco_Click(object sender, EventArgs e)
        {
            Frm1 frm2 = new Frm1();
            frm2.Show();
            this.Close();
        }
    }
}
