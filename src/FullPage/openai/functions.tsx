import { ImageForm, RequestFormType } from "../types";

export const getPrompt = (form: RequestFormType): string => {
  const prompt = `Provide me with a dish name, recipe instructions, nutritional info, ingredient list, cooking time and category of a meal that satisfies the following conditions:
  ${displayImages(form.imageUrls)}
  Use at least the following ingredients: ${
    form.ingredients
  }, cooking time less than ${form.maxTime} minutes, diets/considerations: ${
    form.tags
  } and within the following ranges of nutritional info:
  between: ${form.macros.kcal.min} and ${form.macros.kcal.max} kcal, 
  between: ${form.macros.protein.min} and ${form.macros.protein.max} proteins, 
  between: ${form.macros.carbs.min} and ${form.macros.carbs.max} carbs, 
  between: ${form.macros.fats.min} and ${form.macros.fats.max} fats, 
  between: ${form.macros.salt.min} and ${form.macros.salt.max} salt.
  `;
  return prompt;
};

export const getPromptImage = (form: ImageForm): string => {
  const prompt = `Provide me with a dish name, recipe instructions, nutritional info, ingredient list of a meal that you van view on these images ${form.urls} & ${form.files}. Ps they all represent the same image
  `;
  return prompt;
};

const displayImages = (urls: string[]) =>
  urls.length > 0
    ? "It should be the dish you can see in these images: " + urls + ". "
    : ". ";
