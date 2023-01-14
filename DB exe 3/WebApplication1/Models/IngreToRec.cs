namespace exe3.Models
{
    public class IngreToRec
    {
        public int RecipeId { get; set; }
        public int IngredientId { get; set; }

        public int Insert()
        {
            DBservices dbs = new DBservices();
            return dbs.InsertIngreRecipe(this);
        }

    }
}
