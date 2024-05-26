import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Base/Chip",
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: { onDismiss: fn() },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Chip",
    onDismiss: undefined,
  },
};

export const Dismissible: Story = {
  args: {
    label: "Chip",
    onDismiss: fn(),
  },
};

export const LongLabel: Story = {
  args: {
    label: "This is a really long label that should be truncated",
    onDismiss: fn(),
  },
};
