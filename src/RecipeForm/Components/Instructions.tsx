import { TextField, Typography } from "@mui/material";

interface InstructionsProps {
  textColor: string;
  backgroundColor: string;
  instructions: string;
  setInstructions: (i: string) => void;
}

export const Instructions: React.FC<InstructionsProps> = (props) => {
  const { textColor, instructions, setInstructions } = props;

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginTop: 0, color: textColor }} // Dark brown
      >
        Instructions
      </Typography>
      <TextField
        value={instructions.replace(/\\n/g, "\n")} // Replace "\n" with actual newlines
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          e.target.value && setInstructions(e.target.value)
        }
        multiline
        rows={10}
        fullWidth
        variant="standard"
        placeholder="Unit"
        InputProps={{
          disableUnderline: true, // Remove default underline
          style: {
            border: "1px dotted #6d4c41", // Custom dotted underline
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
    </>
  );
};
