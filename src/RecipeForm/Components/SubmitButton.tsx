import { Button } from "@mui/material";

interface SubmitProps {
  textColor: string;
  backgroundColor: string;
  handleSubmit: () => void;
}

export const SubmitButton: React.FC<SubmitProps> = (props) => {
  const { textColor, backgroundColor, handleSubmit } = props;

  return (
    <Button
      variant="contained"
      onClick={handleSubmit}
      sx={{
        position: "absolute",
        bottom: "16px",
        right: "16px",
        backgroundColor: textColor,
        color: backgroundColor,
        padding: "8px 16px",
        fontFamily: "'Georgia', serif",
        fontSize: "14px",
        "&:hover": {
          backgroundColor: backgroundColor,
          color: textColor,
          border: "1px solid #6d4c41",
        },
      }}
    >
      Save
    </Button>
  );
};
