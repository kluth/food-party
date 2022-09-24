import Button from "../../components/common/Button"
import {
    ComponentMeta,
    ComponentStory
} from "@storybook/react"
import {
    userEvent,
    within
} from "@storybook/testing-library"
import {
    expect
} from '@storybook/jest'

export default {
    title: 'Common/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Button',
    primary: true,
}
// TODO: Implement in all stories
Primary.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Button',
    secondary: true,
}
Secondary.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
}

export const Large = Template.bind({})
Large.args = {
    children: 'Button',
    size: 'large',
}
Large.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
}

export const Small = Template.bind({})
Small.args = {
    children: 'Button',
    size: 'small',
}
Small.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Button',
    disabled: true,
}
