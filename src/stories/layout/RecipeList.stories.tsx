import { ComponentMeta, ComponentStory } from "@storybook/react";
import RecipeList from "../../components/layout/RecipeList";
import { recipes } from "../../example/data";

export default {
    title: 'Layout/RecipeList',
    component: RecipeList,
} as ComponentMeta<typeof RecipeList>;

const Template: ComponentStory<typeof RecipeList> = (args) => <RecipeList {...args} />;

export const Default = Template.bind({});
Default.args = {
    recipes: recipes
}