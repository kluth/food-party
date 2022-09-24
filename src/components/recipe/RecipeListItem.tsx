import { Grid, IconButton, Typography } from "@mui/material";
import { Recipe } from "../../models/recipe";
import Button from "../common/Button";

type RecipeListItemProps = {
    recipe: Recipe;
    onRecipeClick: (recipe: Recipe) => void;
}

const RecipeListItem = (params: RecipeListItemProps) => {
    return (
        <Grid item
            key={params.recipe.id}
            onClick={() => {
                params.onRecipeClick(params.recipe);
            }}
        >
            <IconButton>
                <img src={params.recipe.image} alt={params.recipe.name} />
                <Typography variant="h6"
                    sx={{
                        color: 'primary.main',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        padding: '0.5rem',
                        position: 'absolute',
                        bottom: '0.5rem',
                        left: '0.5rem',
                        right: '0.5rem',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                    }}
                >
                    {params.recipe.name}
                </Typography>
            </IconButton>
        </Grid>
    )
}

export default RecipeListItem