import { ComponentMeta, ComponentStory } from "@storybook/react";
import Notification from "../../components/common/Notification";

export default {
    title: 'Common/Notification',
    component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;
export const Error = Template.bind({});
Error.args = {
    open: true,
    children: 'Error',
    severity: 'error',
};

export const Info = Template.bind({});
Info.args = {
    open: true,
    children: 'Info',
    severity: 'info',
};

export const Success = Template.bind({});
Success.args = {
    open: true,
    children: 'Success',
    severity: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
    open: true,
    children: 'Warning',
    severity: 'warning',
};