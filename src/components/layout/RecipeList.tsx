import { Grid } from "@mui/material";
import { Recipe } from "../../models/recipe";
import RecipeListItem from "../recipe/RecipeListItem";

type RecipeListProps = {
    recipes: Recipe[];
    onRecipeClick: (recipe: Recipe) => void;
}

const RecipeList = (params: RecipeListProps) => {
    return (
        <Grid container spacing={{
            xs: 1,
            sm: 2,
            md: 3,
        }} columns={{
            xs: 1,
            sm: 2,
            md: 3,
            }}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
            }}
        >
            {params.recipes.map((recipe) => (
                <RecipeListItem key={recipe.id} recipe={recipe} onRecipeClick={params.onRecipeClick} />
            ))}
        </Grid>
    )
}

export default RecipeList