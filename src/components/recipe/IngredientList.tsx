import { Box, Typography } from "@mui/material";
import { Ingredient } from "../../models/ingredient";

type IngredientListProps = {
    ingredients: Ingredient[];
}

const IngredientList = (params: IngredientListProps) => {
    return (
        <Box>
            <Typography variant="h4" sx={{ color: 'primary.main' }}>Ingredients</Typography>
        <ul>
            {params.ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.amount} {ingredient.unit} of {ingredient.name}</li>
            ))}
        </ul>
        </Box>
    )
}

export default IngredientList