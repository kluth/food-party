import { ComponentMeta, ComponentStory } from "@storybook/react";
import Notification from "../../components/common/Notification";

export default {
    title: 'Common/Notification',
    component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;
export const Error = Template.bind({});
Error.args = {
    open: false,
    children: 'Error',
    severity: 'error',
};

export const Info = Template.bind({});
Info.args = {
    open: false,
    children: 'Info',
    severity: 'info',
};

export const Success = Template.bind({});
Success.args = {
    open: false,
    children: 'Success',
    severity: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
    open: false,
    children: 'Warning',
    severity: 'warning',
};