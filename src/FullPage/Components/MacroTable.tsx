import {
  TableCell,
  Typography,
  TableBody,
  Table,
  TableHead,
  TableRow,
} from "@mui/material";
import { Macros } from "../types";

export const MacroTable = ({ macros }: { macros: Macros }) => {
  return (
    <Table size="small">
      <TableHead>
        <TableCell colSpan={4}>
          <Typography variant="h6">Macros:</Typography>
        </TableCell>
      </TableHead>
      <TableBody>
        <TableRow key="Macros1">
          <TableCell>Kcal</TableCell>{" "}
          <TableCell>{String(macros.kcal)}</TableCell>{" "}
          <TableCell>Fats</TableCell>
          <TableCell>{String(macros.fats)}g</TableCell>{" "}
        </TableRow>
        <TableRow key="Macros2">
          <TableCell>Protein</TableCell>{" "}
          <TableCell>{String(macros.protein)}g</TableCell>{" "}
          <TableCell>Carbs</TableCell>
          <TableCell>{String(macros.carbs)}g</TableCell>{" "}
        </TableRow>
        <TableRow key="Macros3">
          <TableCell>Salt</TableCell>{" "}
          <TableCell>{String(macros.salt)}g</TableCell>{" "}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const MacroTableVertical = ({
  macros,
  color,
}: {
  macros: Macros;
  color?: string;
}) => {
  return (
    <Table size="small">
      <TableBody>
        <TableRow key="Macros1">
          <TableCell sx={{ color: color }}>Kcal</TableCell>{" "}
          <TableCell sx={{ color: color }}>{String(macros.kcal)}</TableCell>{" "}
        </TableRow>
        <TableRow key="Macros2">
          <TableCell sx={{ color: color }}>Fats</TableCell>
          <TableCell sx={{ color: color }}>
            {String(macros.fats)}g
          </TableCell>{" "}
        </TableRow>
        <TableRow key="Macros3">
          <TableCell sx={{ color: color }}>Protein</TableCell>{" "}
          <TableCell sx={{ color: color }}>{String(macros.protein)}g</TableCell>{" "}
        </TableRow>
        <TableRow key="Macros4">
          <TableCell sx={{ color: color }}>Carbs</TableCell>
          <TableCell sx={{ color: color }}>
            {String(macros.carbs)}g
          </TableCell>{" "}
        </TableRow>
        <TableRow key="Macros5">
          <TableCell sx={{ color: color }}>Salt</TableCell>{" "}
          <TableCell sx={{ color: color }}>{String(macros.salt)}g</TableCell>{" "}
        </TableRow>
      </TableBody>
    </Table>
  );
};
