
namespace Turboeat_App_Lourde
{
    partial class FrmTechnical
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.BtnDeco = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // BtnDeco
            // 
            this.BtnDeco.Location = new System.Drawing.Point(13, 13);
            this.BtnDeco.Name = "BtnDeco";
            this.BtnDeco.Size = new System.Drawing.Size(86, 23);
            this.BtnDeco.TabIndex = 0;
            this.BtnDeco.Text = "Deconnexion";
            this.BtnDeco.UseVisualStyleBackColor = true;
            this.BtnDeco.Click += new System.EventHandler(this.BtnDeco_Click);
            // 
            // FrmTechnical
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.BtnDeco);
            this.Name = "FrmTechnical";
            this.Text = "Technicien";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button BtnDeco;
    }
}