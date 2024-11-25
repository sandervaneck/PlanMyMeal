import { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AnswerType, RequestFormType } from "./types";
import { emptyInputForm } from "./emptyForms";
import { getPrompt } from "./openai/functions";
import { callGpt } from "./openai/calls";
import { RecipeCardForm2 } from "../RecipeForm";
import { RequestForm } from "../RequestForm";
import { RecipeTable } from "../RecipeTable";
import { Account } from "../graphql/schema";

export const FullPage = ({
  value,
  user,
}: {
  value: number;
  user: Account | undefined;
}) => {
  const [form, setForm] = useState(emptyInputForm);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<AnswerType | null>(null);

  const getMyMeal = (form: RequestFormType) => {
    const prompt = getPrompt(form);
    callGpt(
      prompt,
      (a: any) => setAnswer(a),
      (b: boolean) => setLoading(b)
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
        <RequestForm form={form} setForm={setForm} />
        <Button
          variant="contained"
          onClick={() => getMyMeal(form)}
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
            {loading && <CircularProgress />}
            {answer && value === 0 && (
              <RecipeCardForm2
                answer={answer}
                urls={form.imageUrls}
                setAnswer={setAnswer}
              />
            )}
            {value == 1 &&
              (user ? (
                <RecipeTable userId={user.id} />
              ) : (
                <>Log in to see your recipes</>
              ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
