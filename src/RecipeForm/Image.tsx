import { Box } from "@mui/material";

export const ImageForRecipe = ({ urls }: { urls: string[] }) => {
  const columnCount = urls.length; // Number of images determines the grid layout

  return (
    <Box
      sx={{
        position: "relative",
        padding: 0,
        backgroundColor: "#fdf5e6", // Beige background
        border: "1px solid #d4c4aa",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "grid",
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`, // Equal columns based on image count
        gap: "4px", // Spacing between images
        height: "200px", // Adjust as needed for your layout
      }}
    >
      {urls.map((url, index) => (
        <Box
          key={index}
          component="img"
          alt={`Recipe Image ${index + 1}`}
          src={url}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      ))}
    </Box>
  );
};
