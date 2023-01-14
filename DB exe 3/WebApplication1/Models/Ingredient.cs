namespace exe3.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public double Calories { get; set; }

        public List<Ingredient> Read()
        {
            DBservices dbs = new DBservices();
            return dbs.ReadIngredient();
        }

        public int Insert()
        {
            DBservices dbs = new DBservices();
            return dbs.InsertIngredient(this);
        }
        }
    }
