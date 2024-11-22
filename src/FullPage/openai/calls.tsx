import { zodResponseFormat } from "openai/helpers/zod";
import { openai } from "./openai";
import { Output } from "../emptyForms";
import { AnswerType } from "../types";

export const callGptForImages = async (
  prompt: string,
  action: (a: any) => void,
  setIsLoading: (a: boolean) => void
) => {
  setIsLoading(true); // Start loading

  try {
    const completion = await openai.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        { role: "system", content: "Extract the recipe information." },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: zodResponseFormat(Output, "recipe"),
    });

    const answer: AnswerType | null = completion.choices[0].message.parsed;

    if (!answer) {
      throw new Error("Received an empty response from ChatGPT.");
    }

    action(answer);
  } catch (error) {
    console.error("Error while processing the recipe:", error);
  } finally {
    setIsLoading(false); // End loading
  }
};

export const callGpt = async (
  prompt: string,
  action: (a: any) => void,
  setIsLoading: (a: boolean) => void
) => {
  setIsLoading(true); // Start loading

  try {
    const completion = await openai.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        { role: "system", content: "Extract the recipe information." },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: zodResponseFormat(Output, "recipe"),
    });

    const answer: AnswerType | null = completion.choices[0].message.parsed;

    if (!answer) {
      throw new Error("Received an empty response from ChatGPT.");
    }

    action(answer);
  } catch (error) {
    console.error("Error while processing the recipe:", error);
  } finally {
    setIsLoading(false);
  }
};
