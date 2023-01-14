using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Text;
using exe3.Models;
using static System.Net.Mime.MediaTypeNames;
using System.Xml.Linq;

/// <summary>
/// DBServices is a class created by me to provides some DataBase Services
/// </summary>
public class DBservices
{
    public SqlDataAdapter da;
    public DataTable dt;

    public DBservices()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    //--------------------------------------------------------------------------------------------------
    // This method creates a connection to the database according to the connectionString name in the web.config 
    //--------------------------------------------------------------------------------------------------
    public SqlConnection connect(String conString)
    {

        // read the connection string from the configuration file
        IConfigurationRoot configuration = new ConfigurationBuilder()
        .AddJsonFile("appsettings.json").Build();
        string cStr = configuration.GetConnectionString("myProjDB");
        SqlConnection con = new SqlConnection(cStr);
        con.Open();
        return con;
    }


    //--------------------------------------------------------------------------------------------------
    //Read Ingredient
    //--------------------------------------------------------------------------------------------------
    public List<Ingredient> ReadIngredient()
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

        cmd = CreateCommandWithStoredProcedureReadIngredient("ReadIngre", con);             // create the command


        List<Ingredient> listIngredient = new List<Ingredient>();

        try
        {


            SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

            while (dataReader.Read())
            {

                Ingredient ingredient = new Ingredient();
                ingredient.Id = Convert.ToInt32(dataReader["Id"]);
                ingredient.Name = dataReader["Name"].ToString();
                ingredient.Calories = Convert.ToDouble(dataReader["Calories"]);
                ingredient.Image = dataReader["Image"].ToString();


    listIngredient.Add(ingredient);
            }

            return listIngredient;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }
    

        private SqlCommand CreateCommandWithStoredProcedureReadIngredient(string spName, SqlConnection con)
    {
        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        return cmd;
    }


    //--------------------------------------------------------------------------------------------------
    //Read Recipe
    //--------------------------------------------------------------------------------------------------
    public List<Recipe> ReadRecipe()
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

        cmd = CreateCommandWithStoredProcedureReadRecipe("ReadRecepie", con);             // create the command


        List<Recipe> listRecipe = new List<Recipe>();

        try
        {


            SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

            while (dataReader.Read())
            {

                Recipe recipe = new Recipe();
                recipe.Id = Convert.ToInt32(dataReader["Id"]);
                recipe.Name = dataReader["Name"].ToString();
                recipe.Time = Convert.ToDouble(dataReader["Time"]);
                recipe.Image = dataReader["Image"].ToString();
                recipe.CookingMethod = dataReader["CookingMethod"].ToString();

                listRecipe.Add(recipe);
            }

            return listRecipe;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }


    private SqlCommand CreateCommandWithStoredProcedureReadRecipe(string spName, SqlConnection con)
    {
        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        return cmd;
    }


    //--------------------------------------------------------------------------------------------------
    // This method insert a order to the Ingredient 
    //--------------------------------------------------------------------------------------------------
    public int InsertIngredient(Ingredient ingredient)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

        cmd = CreateCommandWithStoredProcedureInsertIngredient("InsertIngredeint", con, ingredient);             // create the command

        try
        {
            int numEffected = cmd.ExecuteNonQuery(); // execute the command
            return numEffected;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }
    }
    private SqlCommand CreateCommandWithStoredProcedureInsertIngredient(String spName, SqlConnection con, Ingredient ingredient)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

            cmd.Parameters.AddWithValue("@NameI", ingredient.Name);

            cmd.Parameters.AddWithValue("@ImaheI", ingredient.Image);

            cmd.Parameters.AddWithValue("@CaloriesI", ingredient.Calories);


            return cmd;
        }


    //--------------------------------------------------------------------------------------------------
    // This method insert a order to the Ingredient 
    //--------------------------------------------------------------------------------------------------
    public int InsertRecipe(Recipe recipe)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

        cmd = CreateCommandWithStoredProcedureInsertIngredient("InsertRecipe", con, recipe);             // create the command

        try
        {
            int numEffected = cmd.ExecuteNonQuery(); // execute the command
            return numEffected;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }
    }
    private SqlCommand CreateCommandWithStoredProcedureInsertIngredient(String spName, SqlConnection con, Recipe recipe)
    {

        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        cmd.Parameters.AddWithValue("@NameR", recipe.Name);

        cmd.Parameters.AddWithValue("@ImageR", recipe.Image);

        cmd.Parameters.AddWithValue("@CookingMethod", recipe.CookingMethod);

        cmd.Parameters.AddWithValue("@Time", recipe.Time);

        return cmd;
    }


    //--------------------------------------------------------------------------------------------------
    // This method insert a Ingredient to the  recipe
    //--------------------------------------------------------------------------------------------------
    public int InsertIngreRecipe(IngreToRec ingreToRec)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        //String cStr = BuildUpdateCommand(student);      // helper method to build the insert string

        cmd = CreateCommandWithStoredProcedureInsertIngredientToRec("InsertIngreToRecipe", con, ingreToRec);             // create the command

        try
        {
            int numEffected = cmd.ExecuteNonQuery(); // execute the command
            return numEffected;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }
    }
    private SqlCommand CreateCommandWithStoredProcedureInsertIngredientToRec(String spName, SqlConnection con, IngreToRec ingreToRec)
    {

        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        cmd.Parameters.AddWithValue("@IdRec", ingreToRec.RecipeId);

        cmd.Parameters.AddWithValue("@Idingre", ingreToRec.IngredientId);


        return cmd;
    }
    

    //--------------------------------------------------------------------
    // TODO Build the FLight Delete command String method
    // BuildFlightDeleteCommand(int id)
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------
    // TODO Build the FLight Delete  method
    // DeleteFlight(int id)
    //--------------------------------------------------------------------

}
