import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AnswerType, GPTForm, ImageForm, MacroForm } from "./types";
import { emptyGptForm, emptyImageForm } from "./emptyForms";
import { getPrompt, getPromptImage } from "./openai/functions";
import { InputForms } from "./Components/Forms";
import { AnswerBox } from "./Components/AnswerBox";
import { MacroForms } from "./Components/MacroForm";
import { IconLabelTabs } from "./Components/Tabs";
import { callGpt, callGptForImages } from "./openai/calls";
import { ImageInputSection } from "./ImageInput";

const returnForTab = (
  value: number,
  textForm: GPTForm,
  setTextForm: (f: GPTForm) => void,
  setImageForm: (f: ImageForm) => void,
  imageForm: ImageForm
) => {
  switch (value) {
    case 0:
      return (
        <Stack direction={"column"}>
          <Typography variant="h5" color="white">
            The recipe should satisfy:
          </Typography>
          <InputForms form={textForm} setForm={setTextForm} />
          <MacroForms
            macros={textForm.macros}
            setForm={(f: MacroForm) => setTextForm({ ...textForm, macros: f })}
          />
        </Stack>
      );
    case 1:
      return (
        <Stack direction={"column"}>
          <ImageInputSection form={imageForm} setForm={setImageForm} />
        </Stack>
      );
    default:
      return null; // Optional: Handle cases where the value is not 0 or 1
  }
};

export const FullPage = () => {
  const [value, setValue] = useState(0);
  const [form, setForm] = useState(emptyGptForm);
  const [form2, setForm2] = useState(emptyImageForm);
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState<AnswerType | null>(null);

  const getMyMeal = (form: GPTForm) => {
    const prompt = getPrompt(form);
    callGpt(
      prompt,
      (a: any) => setAnswer(a),
      (b: boolean) => setIsLoading(b)
    );
  };
  const getMyMealForImages = (form: ImageForm) => {
    callGptForImages(
      getPromptImage(form),
      (a: any) => setAnswer(a),
      (b: boolean) => setIsLoading(b)
    );
  };
  return (
    <Grid
      container
      sx={{
        height: {
          xs: "100%",
          sm: "calc(100dvh - var(--template-frame-height, 0px))",
        },
        mt: {
          xs: 1,
          sm: 0,
        },
      }}
    >
      <Grid
        size={{ xs: 12, sm: 5, lg: 4 }}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          backgroundColor: "background.paper",
          borderRight: { sm: "none", md: "1px solid" },
          borderColor: { sm: "none", md: "divider" },
          alignItems: "start",
          pt: 16,
          px: 10,
          gap: 4,
        }}
      >
        <IconLabelTabs value={value} setValue={setValue} />
        {returnForTab(value, form, setForm, setForm2, form2)}
        <Button
          variant="contained"
          onClick={() => {
            value === 0 ? getMyMeal(form) : getMyMealForImages(form2);
          }}
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
        >
          Get My Meal
        </Button>
      </Grid>
      <Grid
        size={{ sm: 12, md: 7, lg: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          width: "100%",
          backgroundColor: { xs: "transparent", sm: "background.default" },
          alignItems: "start",
          pt: { xs: 0, sm: 16 },
          px: { xs: 2, sm: 10 },
          gap: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { sm: "space-between", md: "flex-end" },
            alignItems: "center",
            width: "100%",
            maxWidth: { sm: "100%", md: 600 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexGrow: 1,
            }}
          >
            {isLoading && <CircularProgress />}
            {answer && <AnswerBox answer={answer} />}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
