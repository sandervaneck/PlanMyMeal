import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  TableCell,
  IconButton,
} from "@mui/material";
import { recipes } from "../FullPage/emptyForms";
import {
  ArrowDownward,
  ArrowUpward,
  Delete,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
import RecipeCardForm from "../RecipeForm";
import { AnswerType } from "../FullPage/types";
import { SearchIconWrapper, StyledInputBase } from "../Components/SearchAppBar";
import SearchIcon from "@mui/icons-material/Search";

export const RecipeTable = () => {
  const [recipeIndex, setRecipeIndex] = useState<number | undefined>();
  const [recipeForms, setRecipeForms] = useState(recipes);
  return (
    <Table>
      <TableHead>
        <TableCell colSpan={1}>
          <Typography variant="h6">Recipes</Typography>
        </TableCell>
        <TableCell>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </TableCell>
      </TableHead>
      <TableBody>
        {recipeForms.map((recipe, index) => (
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
                    setAnswer={(a: AnswerType) => {
                      const old = [...recipeForms];
                      old[index] = a;
                      setRecipeForms(old);
                    }}
                    answer={recipe}
                    urls={[]}
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
