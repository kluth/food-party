import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppLogo from "../../components/logo/App";

export default {
    title: 'Logo/App',
    component: AppLogo,
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => <AppLogo {...args} />;
export const Default = Template.bind({});
Default.args = {
    size: 'large',
    onClick: () => { },
};