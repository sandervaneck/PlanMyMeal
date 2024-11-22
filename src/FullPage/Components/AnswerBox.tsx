import {
  Table,
  TableHead,
  TableCell,
  Typography,
  TableBody,
  TableRow,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AnswerType } from "../types";

export const AnswerBox = ({ answer }: { answer: AnswerType }) => {
  return (
    <Grid container spacing={1}>
      <Grid size={12}>
        <Typography variant="h6">{answer.name}</Typography>
      </Grid>
      <Grid size={6}>
        <Table size="small">
          <TableHead>
            <TableCell colSpan={3}>
              {" "}
              <Typography variant="h6">Ingredients:</Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            {answer.ingredients.map((ingredient, index) => (
              <TableRow key={index}>
                <TableCell>{ingredient.name}</TableCell>{" "}
                <TableCell>{ingredient.quantity}</TableCell>{" "}
                <TableCell>{ingredient.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <Grid size={6}>
        <Table size="small">
          <TableHead>
            <TableCell colSpan={4}>
              <Typography variant="h6">Macros:</Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableRow key="Macros1">
              <TableCell>Kcal</TableCell>{" "}
              <TableCell>{String(answer.macros.kcal)}</TableCell>{" "}
              <TableCell>Fats</TableCell>
              <TableCell>{String(answer.macros.fats)}g</TableCell>{" "}
            </TableRow>
            <TableRow key="Macros2">
              <TableCell>Protein</TableCell>{" "}
              <TableCell>{String(answer.macros.protein)}g</TableCell>{" "}
              <TableCell>Carbs</TableCell>
              <TableCell>{String(answer.macros.carbs)}g</TableCell>{" "}
            </TableRow>
            <TableRow key="Macros3">
              <TableCell>Salt</TableCell>{" "}
              <TableCell>{String(answer.macros.salt)}g</TableCell>{" "}
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
      <Grid size={12}>
        <Typography variant="h6">Instructions:</Typography>
        <Typography variant="body1">
          {answer.instructions
            .split(/(\d+\.\s)/) // Split by step numbers (e.g., "1. ", "10. ") and include them in the array
            .filter((line) => line.trim() !== "") // Remove any empty entries
            .reduce((acc, curr, index) => {
              // Combine step numbers with their text
              if (/^\d+\.\s$/.test(curr)) {
                acc.push(curr.trim() + " ");
              } else {
                acc[acc.length - 1] += curr.trim(); // Append to the last step
              }
              return acc;
            }, [] as string[]) // Initialize accumulator as an array of strings
            .map((step, index) => (
              <div key={index}>{step}</div> // Render each step in a separate <div>
            ))}
        </Typography>
      </Grid>
    </Grid>
  );
};
