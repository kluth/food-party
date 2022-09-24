import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainScreen from "../../components/layout/MainScreen";

export default {
    title: 'Layout/MainScreen',
    component: MainScreen,
} as ComponentMeta<typeof MainScreen>;

const Template: ComponentStory<typeof MainScreen> = (args) => <MainScreen {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: '🎵 Food Party 🎵',
    children: 'Content',
};