import { ComponentMeta, ComponentStory } from "@storybook/react";
import RecipeDetail from "../../components/layout/RecipeDetail";
import { recipes } from "../../example/data";

export default {
    title: 'Recipe/RecipeDetail',
    component: RecipeDetail,
} as ComponentMeta<typeof RecipeDetail>;

const Template: ComponentStory<typeof RecipeDetail> = (args) => <RecipeDetail {...args} />;
export const Default = Template.bind({});
Default.args = {
    recipe: recipes[3]
};
