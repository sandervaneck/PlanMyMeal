import { MacroForm } from "../types";
import { FormField } from "../../Components/FormField";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const MacroForms = ({
  macros,
  setForm,
}: {
  macros: MacroForm;
  setForm: (f: MacroForm) => void;
}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableCell></TableCell>
        <TableCell>Min</TableCell>
        <TableCell>Max</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Kcal</TableCell>
          <TableCell>
            <FormField
              placeholder="0"
              value={macros.kcal.min}
              setValue={(value) =>
                setForm({
                  ...macros,
                  kcal: { ...macros.kcal, min: String(value) },
                })
              }
            />
          </TableCell>
          <TableCell>
            <FormField
              placeholder="2000"
              value={macros.kcal.max}
              setValue={(value) =>
                setForm({
                  ...macros,
                  kcal: { ...macros.kcal, max: String(value) },
                })
              }
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Carbs</TableCell>
          <TableCell>
            <FormField
              placeholder="0"
              value={macros.carbs.min}
              setValue={(value) =>
                setForm({
                  ...macros,
                  carbs: { ...macros.carbs, min: String(value) },
                })
              }
            />
          </TableCell>
          <TableCell>
            <FormField
              placeholder="2000"
              value={macros.carbs.max}
              setValue={(value) =>
                setForm({
                  ...macros,
                  carbs: { ...macros.carbs, max: String(value) },
                })
              }
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fats</TableCell>
          <TableCell>
            <FormField
              placeholder="0"
              value={macros.fats.min}
              setValue={(value) =>
                setForm({
                  ...macros,
                  fats: { ...macros.fats, min: String(value) },
                })
              }
            />
          </TableCell>
          <TableCell>
            <FormField
              placeholder="2000"
              value={macros.fats.max}
              setValue={(value) =>
                setForm({
                  ...macros,
                  fats: { ...macros.fats, max: String(value) },
                })
              }
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Proteins</TableCell>
          <TableCell>
            <FormField
              placeholder="0"
              value={macros.protein.min}
              setValue={(value) =>
                setForm({
                  ...macros,
                  protein: { ...macros.protein, min: String(value) },
                })
              }
            />
          </TableCell>
          <TableCell>
            <FormField
              placeholder="2000"
              value={macros.protein.max}
              setValue={(value) =>
                setForm({
                  ...macros,
                  protein: { ...macros.protein, max: String(value) },
                })
              }
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Salt</TableCell>
          <TableCell>
            <FormField
              placeholder="0"
              value={macros.salt.min}
              setValue={(value) =>
                setForm({
                  ...macros,
                  salt: { ...macros.salt, min: String(value) },
                })
              }
            />
          </TableCell>
          <TableCell>
            <FormField
              placeholder="2000"
              value={macros.salt.max}
              setValue={(value) =>
                setForm({
                  ...macros,
                  salt: { ...macros.salt, max: String(value) },
                })
              }
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
