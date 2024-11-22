import { InputAdornment, InputLabel, TextField } from "@mui/material";

interface FormFieldProps {
  required?: boolean;
  value: string;
  setValue: (value: string) => void;
  label?: string;
  multiline?: boolean;
  placeholder?: string;
  endAdornment?: string;
  startAdornment?: string;
}

export const FormField: React.FC<FormFieldProps> = (props) => {
  const {
    endAdornment,
    placeholder,
    required,
    value,
    setValue,
    label,
    multiline,
    startAdornment,
  } = props;

  return (
    <>
      {label && <InputLabel variant="standard">{label}</InputLabel>}
      <TextField
        error={(required && value === "") || (required && value === String(0))}
        helperText={
          (required && value === "") ||
          (required && value === String(0) && "Fill in")
        }
        placeholder={placeholder}
        multiline={multiline}
        sx={{ height: 0.5 }}
        size="small"
        margin="dense"
        required
        fullWidth
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        value={value}
        autoFocus
        slotProps={{
          input:
            endAdornment || startAdornment
              ? {
                  startAdornment: startAdornment ? (
                    <InputAdornment position="start">
                      {startAdornment}
                    </InputAdornment>
                  ) : undefined,
                  endAdornment: endAdornment ? (
                    <InputAdornment position="end">
                      {endAdornment}
                    </InputAdornment>
                  ) : undefined,
                }
              : undefined,
        }}
      />
    </>
  );
};
