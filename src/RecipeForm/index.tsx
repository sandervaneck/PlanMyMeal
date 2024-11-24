import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ImageForRecipe } from "./Image";
import { AnswerType } from "../FullPage/types";
import { MacroTableVertical } from "../FullPage/Components/MacroTable";
import { SubmitButton } from "./Components/SubmitButton";
import { Instructions } from "./Components/Instructions";

const backgroundColor = "#fdf5e6";
const textColor = "#6d4c41";

const RecipeCardForm = ({
  answer,
  setAnswer,
  urls,
}: {
  setAnswer: (a: AnswerType) => void;
  answer: AnswerType;
  urls: string[];
}) => {
  const handleSubmit = () => {
    // Rejoin instructions into a single string
    console.log(answer); // For debugging
  };

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: backgroundColor, // Beige background
        border: "1px solid #d4c4aa",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Dancing Script', cursive",
          color: textColor, // Dark brown
        }}
      >
        Recipe Card
      </Typography>
      {/* Name of Dish */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid size={6}>
          <Grid size={12}>
            <TextField
              onChange={(e) => {
                e.target.value &&
                  setAnswer({ ...answer, name: e.target.value });
              }}
              value={answer.name}
              fullWidth
              placeholder="Name of Dish"
              variant="standard"
              InputProps={{
                style: {
                  fontFamily: "'Georgia', serif",
                  fontSize: "16px",
                  color: textColor, // Dark brown
                },
              }}
            />
          </Grid>
          <Box sx={{ borderBottom: "1px solid #6d4c41", marginTop: "4px" }} />

          {/* Category, Prep Time, Cook Time */}
          <Grid size={12}>
            <TextField
              fullWidth
              onChange={(e) => {
                e.target.value &&
                  setAnswer({ ...answer, category: e.target.value });
              }}
              placeholder="Category"
              value={answer.category}
              variant="standard"
              InputProps={{
                style: {
                  fontFamily: "'Georgia', serif",
                  fontSize: "16px",
                  color: textColor, // Dark brown
                },
              }}
            />
            <Box sx={{ borderBottom: "1px solid #6d4c41", marginTop: "4px" }} />
          </Grid>
          <Grid size={12}>
            <TextField
              onChange={(e) => {
                e.target.value &&
                  setAnswer({ ...answer, time: e.target.value });
              }}
              fullWidth
              placeholder="Cooking Time"
              value={answer.time}
              variant="standard"
              InputProps={{
                style: {
                  fontFamily: "'Georgia', serif",
                  fontSize: "16px",
                  color: textColor, // Dark brown
                },
              }}
            />
            <Box sx={{ borderBottom: "1px solid #6d4c41", marginTop: "4px" }} />
          </Grid>
        </Grid>
        <Grid size={6}>
          <ImageForRecipe urls={urls} />
        </Grid>
        <Grid size={12}>
          {/* Ingredients */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginTop: 4, color: "#6d4c41" }} // Dark brown
          >
            Ingredients
          </Typography>
          {answer.ingredients.map((ingredient, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3px",
              }}
            >
              <Typography
                variant="body1"
                sx={{ flex: "1", color: textColor }} // Dark brown
              >
                {index + 1}&#8226;
              </Typography>
              <TextField
                onChange={(e) => {
                  const old = [...answer.ingredients];
                  old[index] = {
                    ...old[index],
                    name: e.target.value,
                  };
                  e.target.value &&
                    setAnswer({
                      ...answer,
                      ingredients: old,
                    });
                }}
                value={ingredient.name}
                fullWidth
                variant="standard"
                InputProps={{
                  disableUnderline: true, // Remove default underline
                  style: {
                    borderBottom: "1px dotted #6d4c41", // Custom dotted underline
                    paddingBottom: "2px", // Adjust space between text and line
                    color: textColor, // Dark brown text color
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px", // Smaller font size
                  },
                }}
                inputProps={{
                  style: {
                    textIndent: "1px", // Small text indentation
                    height: "5px", // Adjust height for smaller text box
                  },
                }}
                sx={{
                  width: "100%",
                  marginBottom: "1px", // Add spacing below the field
                }}
              />
              <TextField
                value={String(ingredient.quantity)}
                onChange={(e) => {
                  const old = [...answer.ingredients];
                  old[index] = {
                    ...old[index],
                    quantity: Number(e.target.value),
                  };
                  e.target.value &&
                    setAnswer({
                      ...answer,
                      ingredients: old,
                    });
                }}
                fullWidth
                variant="standard"
                placeholder="Quantity"
                InputProps={{
                  disableUnderline: true, // Remove default underline
                  style: {
                    borderBottom: "1px dotted #6d4c41", // Custom dotted underline
                    paddingBottom: "2px", // Adjust space between text and line
                    color: textColor, // Dark brown text color
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px", // Smaller font size
                  },
                }}
                inputProps={{
                  style: {
                    textIndent: "1px", // Small text indentation
                    height: "5px", // Adjust height for smaller text box
                  },
                }}
                sx={{
                  width: "25%",
                  marginBottom: "1px", // Add spacing below the field
                }}
              />
              <TextField
                onChange={(e) => {
                  const old = [...answer.ingredients];
                  old[index] = {
                    ...old[index],
                    unit: e.target.value,
                  };
                  e.target.value &&
                    setAnswer({
                      ...answer,
                      ingredients: old,
                    });
                }}
                value={ingredient.unit}
                fullWidth
                variant="standard"
                placeholder="Unit"
                InputProps={{
                  disableUnderline: true, // Remove default underline
                  style: {
                    borderBottom: "1px dotted #6d4c41", // Custom dotted underline
                    paddingBottom: "2px", // Adjust space between text and line
                    color: textColor, // Dark brown text color
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px", // Smaller font size
                  },
                }}
                inputProps={{
                  style: {
                    textIndent: "1px", // Small text indentation
                    height: "5px", // Adjust height for smaller text box
                  },
                }}
                sx={{
                  width: "25%",
                  marginBottom: "1px", // Add spacing below the field
                }}
              />
            </Box>
          ))}
        </Grid>
        <Grid size={12}>
          {/* Directions */}
          <Instructions
            textColor={textColor}
            backgroundColor={backgroundColor}
            instructions={answer.instructions}
            setInstructions={(v) => setAnswer({ ...answer, instructions: v })}
          />
        </Grid>
        <Grid size={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginTop: 4, color: "#6d4c41" }} // Dark brown
          >
            Nutrition
          </Typography>
          <MacroTableVertical macros={answer.macros} color={textColor} />
        </Grid>
        <Grid size={4}>
          <SubmitButton
            textColor={textColor}
            backgroundColor={backgroundColor}
            handleSubmit={handleSubmit}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecipeCardForm;
