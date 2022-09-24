export interface Instruction {
    id: string;
    recipeId: string;
    step: number;
    text: string;
    created: Date;
    updated: Date;
}