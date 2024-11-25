import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  TableCell,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { recipes } from "../FullPage/emptyForms";
import {
  ArrowDownward,
  ArrowUpward,
  Delete,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
import { RecipeCardForm } from "../RecipeForm";
import { AnswerType } from "../FullPage/types";
import { SearchIconWrapper, StyledInputBase } from "../Components/SearchAppBar";
import SearchIcon from "@mui/icons-material/Search";
import { MyRecipesResult, Recipe, RecipeInput } from "../graphql/schema";
import { useMyRecipesQuery } from "./api";
import { SearchBar } from "../Components/SearchBar";

const recipeToRecipeInput = (recipe: Recipe): RecipeInput => {
  return {
    quantity: {
      quantity: recipe.quantity.quantity,
      unit: recipe.quantity.unit,
    },
    name: recipe.name,
    type: recipe.type,
    method: recipe.method,
    nutrition: {
      kcal: recipe.nutrition.kcal,
      carbs: recipe.nutrition.carbs,
      protein: recipe.nutrition.protein,
      fats: recipe.nutrition.fats,
      saturedfats: recipe.nutrition.saturedfats,
      salt: recipe.nutrition.salt,
      sugar: recipe.nutrition.sugar,
      fibres: recipe.nutrition.fibres,
    },
    img: recipe.img,
    diets: recipe.diets,
    foods: recipe.foods.map((f) => ({
      food: {
        name: f.food.name,
      },
      quantity: {
        quantity: f.quantity.quantity,
        unit: f.quantity.unit,
      },
    })),
    time: recipe.time,
  };
};

export const RecipeTable = ({ userId }: { userId: string }) => {
  const [recipeIndex, setRecipeIndex] = useState<number | undefined>();
  const [recipeForms, setRecipeForms] = useState<RecipeInput[]>([]);
  const [allrecipes, setAllRecipes] = useState<RecipeInput[]>([]);
  const { data, loading } = useMyRecipesQuery({
    accountId: userId,
    onCompleted: (result: MyRecipesResult) => {
      const mapped = result.myrecipes.map((myrep) =>
        recipeToRecipeInput(myrep)
      );
      setRecipeForms(mapped);
      setAllRecipes(mapped);
    },
  });
  recipeIndex && console.log(recipeForms[recipeIndex]);
  const [searchKey, setSearchKey] = useState<string | undefined>();

  const handleFilterForSearchKey = (e: string | undefined) => {
    // Convert the search key to lowercase for case-insensitive comparison

    if (e) {
      const searchKey = e.toLowerCase();
      const filteredForms = recipeForms.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchKey)
      );
      // Update the state with the filtered list
      setRecipeForms(filteredForms);
    } else setRecipeForms(allrecipes);
    // Filter recipeForms based on the search key
  };
  if (loading) return <CircularProgress />;
  return (
    <Table>
      <TableHead>
        <TableCell colSpan={1}>
          <Typography variant="h6">Recipes</Typography>
        </TableCell>
        <TableCell>
          <SearchBar
            setValue={(e) => {
              setSearchKey(e);
              handleFilterForSearchKey(e);
            }}
            value={searchKey}
            placeholder="Search Recipe"
          />
        </TableCell>
      </TableHead>
      <TableBody>
        {recipeForms.length > 0 &&
          recipeForms.map((recipe, index) => (
            <>
              <TableRow key={index}>
                <TableCell>
                  <IconButton>
                    {recipeIndex === index ? (
                      <ArrowUpward
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={() => {
                          setRecipeIndex(undefined);
                        }}
                      />
                    ) : (
                      <ArrowDownward
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={() => {
                          setRecipeIndex(index);
                        }}
                      />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>{recipe.name}</TableCell>
                <TableCell>
                  <IconButton>
                    <Delete
                      style={{ cursor: "pointer", color: "white" }}
                      onClick={() => {
                        const old = [...recipeForms];
                        old.splice(index, 1);
                        setRecipeForms(old);
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
              {recipeIndex === index && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <RecipeCardForm
                      setRecipe={(a: RecipeInput) => {
                        const old = [...recipeForms];
                        old[index] = a;
                        setRecipeForms(old);
                      }}
                      recipe={recipe}
                      urls={recipe.img}
                    />
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
      </TableBody>
    </Table>
  );
};
