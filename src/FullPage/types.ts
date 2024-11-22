export type AnswerType = {
  name: string;
  ingredients: { name: string; quantity: number; unit: string }[];
  macros: {
    kcal: number;
    protein: number;
    carbs: number;
    fats: number;
    salt: number;
  };
  instructions: string;
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

export type GPTForm = {
  ingredients: string;
  macros: MacroForm;
  maxTime: string;
  tags: string;
};

export type ImageForm = {
  urls: string[];
  files: string[];
};
