namespace RecipeNg.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class RecipeInstruction
    {
        public int RecipeInstructionID { get; set; }

        public int RecipeID { get; set; }

        [StringLength(250)]
        public string InstructionText { get; set; }

        public virtual Recipe Recipe { get; set; }
    }
}
