import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from '@storybook/jest';
import RecipeListItem from "../../components/recipe/RecipeListItem";
import { recipes } from "../../example/data";

export default {
    title: 'Recipe/RecipeListItem',
    component: RecipeListItem,
} as ComponentMeta<typeof RecipeListItem>;

const Template: ComponentStory<typeof RecipeListItem> = (args) => <RecipeListItem {...args} />;
export const Default = Template.bind({});
Default.args = {
    recipe: recipes[0]
};
Default.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onRecipeClick).toHaveBeenCalled()
}