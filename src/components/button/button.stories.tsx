import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
    title: 'components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary-neutral', 'secondary-color', 'tertiary-neutral', 'tertiary-color'],
            description: 'Variant',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size',
        },
        asChild: {
            control: 'boolean',
            description: 'Apply component styles to children',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled',
        },
        children: {
            control: 'text',
            description: 'Content',
        },
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Основная история с дефолтными значениями
export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'sm',
    },
};

// Варианты кнопок
export const Primary: Story = {
    args: {
        ...Default.args,
        variant: 'primary',
        children: 'Primary',
    },
};

export const SecondaryNeutral: Story = {
    args: {
        ...Default.args,
        variant: 'secondary-neutral',
        children: 'Secondary neutral',
    },
};

export const SecondaryColor: Story = {
    args: {
        ...Default.args,
        variant: 'secondary-color',
        children: 'Secondary color',
    },
};

export const TertiaryNeutral: Story = {
    args: {
        ...Default.args,
        variant: 'tertiary-neutral',
        children: 'Tertiary neutral',
    },
};

export const TertiaryColor: Story = {
    args: {
        ...Default.args,
        variant: 'tertiary-color',
        children: 'Tertiary color',
    },
};

// Размеры кнопок
export const Small: Story = {
    args: {
        ...Default.args,
        size: 'sm',
        children: 'Small size',
    },
};

export const Medium: Story = {
    args: {
        ...Default.args,
        size: 'md',
        children: 'Medium size',
    },
};

export const Large: Story = {
    args: {
        ...Default.args,
        size: 'lg',
        children: 'Large size',
    },
};

// Состояния кнопок
export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
        children: 'Disabled button',
    },
};

export const WithIcon: Story = {
    args: {
        ...Default.args,
        children: (
            <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.33325V12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Кнопка с иконкой
            </>
        ),
    },
};

// Пример использования asChild
export const AsLink: Story = {
    args: {
        ...Default.args,
        asChild: true,
        children: <a href="https://example.com">Link as a button</a>,
    },
};
