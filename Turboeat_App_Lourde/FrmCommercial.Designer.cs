
namespace Turboeat_App_Lourde
{
    partial class FrmCommercial
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
            this.Btn_deco = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Btn_deco
            // 
            this.Btn_deco.Location = new System.Drawing.Point(12, 12);
            this.Btn_deco.Name = "Btn_deco";
            this.Btn_deco.Size = new System.Drawing.Size(88, 23);
            this.Btn_deco.TabIndex = 0;
            this.Btn_deco.Text = "Deconnexion";
            this.Btn_deco.UseVisualStyleBackColor = true;
            this.Btn_deco.Click += new System.EventHandler(this.button1_Click);
            // 
            // FrmCommercial
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.Btn_deco);
            this.Name = "FrmCommercial";
            this.Text = "Commercial";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button Btn_deco;
    }
}