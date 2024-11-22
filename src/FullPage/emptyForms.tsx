import { z } from "zod";
import { GPTForm, ImageForm, MinMax } from "./types";

export const emptyMinMax: MinMax = {
  min: "",
  max: "",
};

export const emptyImageForm: ImageForm = {
  urls: [""],
  files: [""],
};
export const emptyGptForm: GPTForm = {
  ingredients: "",
  macros: {
    kcal: emptyMinMax,
    protein: emptyMinMax,
    fats: emptyMinMax,
    salt: emptyMinMax,
    carbs: emptyMinMax,
  },
  maxTime: "",
  tags: "",
};

export const Output = z.object({
  name: z.string(),
  instructions: z.string(),
  ingredients: z.array(
    z.object({
      name: z.string(),
      quantity: z.number(),
      unit: z.string(),
    })
  ),
  macros: z.object({
    kcal: z.number(),
    protein: z.number(),
    carbs: z.number(),
    fats: z.number(),
    salt: z.number(),
  }),
});
