import { Stack, Typography } from "@mui/material";
import { InputForms } from "../FullPage/Components/Forms";
import { MacroForms } from "../FullPage/Components/MacroForm";
import { RequestFormType } from "../FullPage/types";
import { ImageInputSection } from "../FullPage/ImageInput";

interface RequestFormProps {
  form: RequestFormType;
  setForm: (value: RequestFormType) => void;
}

export const RequestForm: React.FC<RequestFormProps> = (props) => {
  const { form, setForm } = props;
  return (
    <Stack direction={"column"}>
      <Typography variant="h5" color="white">
        Create a recipe for me that:
      </Typography>
      <ImageInputSection form={form} setForm={setForm} />
      <InputForms form={form} setForm={setForm} />
      <MacroForms
        macros={form.macros}
        setForm={(m) => setForm({ ...form, macros: m })}
      />
    </Stack>
  );
};
