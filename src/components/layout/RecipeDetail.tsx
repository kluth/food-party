import { Grid, Button, Typography } from "@mui/material";
import { Recipe } from "../../models/recipe";
import IngredientList from "../recipe/IngredientList";
import InstructionList from "../recipe/InstructionList";

type RecipeDetailProps = {
    recipe: Recipe;
    onBackClick: () => void;
}

const RecipeDetail = (params: RecipeDetailProps) => {
    return (
        <Grid container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
            }}
            spacing={{
                xs: 1,
                sm: 2,
                md: 3,
            }}
            columns={{
                xs: 1,
                sm: 2,
                md: 3,
            }}
        >
            <Grid item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                <Button
                    onClick={params.onBackClick}
                    sx={{
                        color: 'primary.main',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        padding: '0.5rem',
                        position: 'absolute',
                        top: '0.5rem',
                        left: '0.5rem',
                        right: '0.5rem',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                    }}
                >
                    Back
                </Button>
            </Grid>
            <Grid item
                xs={3}
            >
                <img src={params.recipe.image} alt={params.recipe.name} />
            </Grid>
            <Grid item
                xs={3}
            >
                <Typography variant="h6"
                    sx={{
                        color: 'primary.main',
                    }}
                >
                    {params.recipe.name}
                </Typography>
            </Grid>
            <Grid item
                xs={6}
            />
            <Grid item
                xs={12}
            >
                <Typography variant="body1">
                    {params.recipe.description}
                </Typography>
            </Grid>
            <Grid item
                xs={12}
            >
                <IngredientList ingredients={params.recipe.ingredients} />
            </Grid>
            <Grid item
                xs={12}
            >
                <InstructionList instructions={params.recipe.instructions} />
                </Grid>
        </Grid>
    )
}

export default RecipeDetail