// graphqlTypes.tsx
import { gql } from "@apollo/client";

// Types and Interfaces
export enum Contract {
  PAID = "PAID",
  FREE = "FREE",
}

export enum Lang {
  ENGLISH = "ENGLISH",
  DUTCH = "DUTCH",
}

export type Quantity = {
  quantity: number;
  unit: string;
};

export type Nutrition = {
  kcal: number;
  carbs: number;
  sugar: number;
  fats: number;
  protein: number;
  fibres: number;
  salt: number;
  saturedfats: number;
};

export type Food = {
  id: string;
  name: string;
};

export type QuantityToFood = {
  quantity: Quantity;
  food: Food;
};

export type AccountInfo = {
  phone?: string;
  email: string;
  bio?: string;
  diets?: string[];
  location?: string;
  username: string;
  language: Lang;
  likes: number;
  avatar?: string;
  recipes: number;
  id: string;
};

export type RankedAccountInfo = {
  rank: number;
  account: AccountInfo;
};

export type LoginResult = {
  login: Account;
};

export type Account = {
  __typename: "Account";
  password: string;
  accesstoken: string;
  contract: Contract;
  phone: string;
  id: string;
  email: string;
  bio: string;
  diets?: [string];
  location: String;
  username: string;
  language: Lang;
  recipes: number;
  likes: number;
  avatar: string;
};
export type MyRecipesResult = {
  myrecipes: Recipe[];
};
export type Recipe = {
  __typename: "Recipe";
  id: string;
  quantity: Quantity;
  name: string;
  type: string;
  method: string;
  nutrition: Nutrition;
  img: string[];
  diets: string[];
  foods: QuantityToFood[];
  likes: number;
  time: number;
};

// Input Types
export type AccountInput = {
  phone?: string;
  email: string;
  password: string;
  bio?: string;
  diets: string[];
  location?: string;
  username: string;
  contract: Contract;
  language: Lang;
  avatar?: string;
};

export type RecipeInput = {
  quantity: QuantityInput;
  name: string;
  type: string;
  method: string;
  nutrition: NutritionInput;
  img: string[];
  diets: string[];
  foods: QuantityToFoodInput[];
  time: number;
};

export type QuantityInput = {
  quantity: number;
  unit: string;
};

export type FoodInput = {
  name: string;
};

export type QuantityToFoodInput = {
  quantity: QuantityInput;
  food: FoodInput;
};

export type NutritionInput = {
  kcal: number;
  carbs: number;
  sugar: number;
  fats: number;
  protein: number;
  fibres: number;
  salt: number;
  saturedfats: number;
};
