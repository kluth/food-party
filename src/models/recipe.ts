import { Ingredient } from "./ingredient";
import { Instruction } from "./instruction";
import { Tag } from "./tag";

export interface Recipe {
    id: string;
    name: string;
    description: string;
    ingredients: Ingredient[];
    instructions: Instruction[];
    tags: Tag[];
    image: string;
    source: string;
    sourceUrl: string;
    servings: number;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    cholesterol: number;
    sodium: number;
    fiber: number;
    sugar: number;
    saturatedFat: number;
    transFat: number;
    unsaturatedFat: number;
    created: Date;
    updated: Date;
}