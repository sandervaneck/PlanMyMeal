import { FormField } from "../../Components/FormField";
import { RequestFormType } from "../types";

interface InputFormProps {
  form: RequestFormType;
  setForm: (value: RequestFormType) => void;
}

export const InputForms: React.FC<InputFormProps> = (props) => {
  const { form, setForm } = props;
  return (
    <>
      Ingredients:
      <FormField
        label="Favorite ingredients? Please seperate with comma"
        placeholder="i.e Sweet potato, tofu, carrots"
        multiline={true}
        value={form.ingredients}
        setValue={(value) => setForm({ ...form, ingredients: value })}
      />
      Max prep time:
      <FormField
        placeholder="i.e 120"
        label="Max time"
        endAdornment="Minutes"
        value={form.maxTime}
        setValue={(value) => setForm({ ...form, maxTime: String(value) })}
      />
      Tags:
      <FormField
        placeholder="i.e vegetarian, gluten-free"
        label="Diet/Considerations? Please seperate with comma"
        multiline={true}
        value={form.tags}
        setValue={(value) => setForm({ ...form, tags: value })}
      />
    </>
  );
};
