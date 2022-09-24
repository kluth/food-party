import { ComponentMeta, ComponentStory } from "@storybook/react";
import IngredientList from "../../components/recipe/IngredientList";
import { recipes } from "../../example/data";

export default {
    title: 'Recipe/IngredientList',
    component: IngredientList,
} as ComponentMeta<typeof IngredientList>;

const Template: ComponentStory<typeof IngredientList> = (args) => <IngredientList {...args} />;
export const Default = Template.bind({});
Default.args = {
    ingredients: recipes[3].ingredients
};