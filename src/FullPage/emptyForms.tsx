import { z } from "zod";
import {
  AnswerType,
  ImageForm,
  Macros,
  MinMax,
  RequestFormType,
} from "./types";

export const emptyMinMax: MinMax = {
  min: "",
  max: "",
};

export const emptyImageForm: ImageForm = {
  urls: [""],
  files: [""],
};
export const Output = z.object({
  category: z.string(),
  time: z.string(),
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

export const emptyMacros: Macros = {
  kcal: 100,
  protein: 13,
  carbs: 12,
  fats: 11,
  salt: 1,
};

export const emptyInputForm: RequestFormType = {
  imageUrls: [],
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

const createIngredient = (name: string, quantity: number, unit: string) => {
  return {
    name: name,
    quantity: quantity,
    unit: unit,
  };
};
export const recipes: AnswerType[] = [
  {
    ingredients: [
      createIngredient("Pasta", 200, "gram"),
      createIngredient("Guanciale", 200, "gram"),
      createIngredient("Onion", 50, "gram"),
      createIngredient("Parmesan", 20, "gram"),
    ],
    instructions: "Add all ingredients together and cook",
    time: "45",
    category: "Pastas",
    name: "Pasta Carbonara",
    macros: {
      kcal: 500,
      protein: 20,
      carbs: 10,
      fats: 6,
      salt: 1,
    },
  },
  {
    ingredients: [
      createIngredient("Pasta", 200, "gram"),
      createIngredient("Provola", 200, "gram"),
      createIngredient("Patate", 50, "gram"),
      createIngredient("Parmesan", 20, "gram"),
    ],
    instructions: "Add all ingredients together and cook",
    time: "45",
    category: "Pastas",
    name: "Pasta e patate",
    macros: {
      kcal: 500,
      protein: 20,
      carbs: 10,
      fats: 6,
      salt: 1,
    },
  },
  {
    ingredients: [
      createIngredient("Pasta", 200, "gram"),
      createIngredient("Tomato Sauce", 200, "gram"),
      createIngredient("Minced Beef", 350, "gram"),
      createIngredient("Parmesan", 20, "gram"),
    ],
    instructions: "Add all ingredients together and cook",
    time: "45",
    category: "Pastas",
    name: "Pasta Bolognese",
    macros: {
      kcal: 500,
      protein: 20,
      carbs: 10,
      fats: 6,
      salt: 1,
    },
  },
  {
    ingredients: [
      createIngredient("Pasta", 200, "gram"),
      createIngredient("Avocado", 200, "gram"),
      createIngredient("Parmesan", 20, "gram"),
    ],
    instructions: "Add all ingredients together and cook",
    time: "45",
    category: "Pastas",
    name: "Pasta Avocado",
    macros: {
      kcal: 500,
      protein: 20,
      carbs: 10,
      fats: 6,
      salt: 1,
    },
  },
  {
    ingredients: [
      createIngredient("Pasta", 200, "gram"),
      createIngredient("Garlic", 2, "cloves"),
      createIngredient("Olive oil", 2, "teaspoons"),
    ],
    instructions: "Add all ingredients together and cook",
    time: "45",
    category: "Pastas",
    name: "Pasta Aglio e Olio",
    macros: {
      kcal: 500,
      protein: 20,
      carbs: 10,
      fats: 6,
      salt: 1,
    },
  },
];
