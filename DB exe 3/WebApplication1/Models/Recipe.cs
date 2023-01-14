namespace exe3.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string CookingMethod { get; set; }
        public double Time { get; set; }


        public List<Recipe> Read()
        {
            DBservices dbs = new DBservices();
            return dbs.ReadRecipe();
        }
        public int Insert()
        {
            DBservices dbs = new DBservices();
            return dbs.InsertRecipe(this);
        }


        
    }
}
