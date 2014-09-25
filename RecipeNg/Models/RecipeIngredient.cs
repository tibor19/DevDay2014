namespace RecipeNg.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class RecipeIngredient
    {
        public int RecipeIngredientID { get; set; }

        public int RecipeID { get; set; }

        public int IngredientID { get; set; }

        public decimal? Amount { get; set; }

        [StringLength(50)]
        public string AmountType { get; set; }

        public virtual Ingredient Ingredient { get; set; }

        public virtual Recipe Recipe { get; set; }
    }
}
