import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Base/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Select",
    options: [
      { label: "One", value: "one" },
      { label: "Two", value: "two" },
    ],
    placeholder: "Select an option",
  },
};

export const Error: Story = {
  args: {
    error: true,
    label: "Select",
    options: [
      { label: "One", value: "one" },
      { label: "Two", value: "two" },
    ],
    placeholder: "Select an option",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: "Select",
    options: [
      { label: "One", value: "one" },
      { label: "Two", value: "two" },
    ],
    placeholder: "Select an option",
  },
};

export const NoLabel: Story = {
  args: {
    options: [
      { label: "One", value: "one" },
      { label: "Two", value: "two" },
    ],
    placeholder: "Select an option",
  },
};
