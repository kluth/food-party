import { ComponentMeta, ComponentStory } from "@storybook/react";
import InstructionList from "../../components/recipe/InstructionList";
import { recipes } from "../../example/data";

export default {
    title: 'Recipe/InstructionList',
    component: InstructionList,
} as ComponentMeta<typeof InstructionList>;

const Template: ComponentStory<typeof InstructionList> = (args) => <InstructionList {...args} />;
export const Default = Template.bind({});
Default.args = {
    instructions: recipes[3].instructions
};
