export type Macros = {
  kcal: number;
  protein: number;
  carbs: number;
  fats: number;
  salt: number;
};

export type AnswerType = {
  name: string;
  ingredients: { name: string; quantity: number; unit: string }[];
  macros: Macros;
  instructions: string;
  category: string;
  time: string;
};

export type MinMax = {
  min: string;
  max: string;
};
export type MacroForm = {
  kcal: MinMax;
  carbs: MinMax;
  protein: MinMax;
  fats: MinMax;
  salt: MinMax;
};

export type ImageForm = {
  urls: string[];
  files: string[];
};

export type RequestFormType = {
  imageUrls: string[];
  ingredients: string;
  macros: MacroForm;
  maxTime: string;
  tags: string;
};
