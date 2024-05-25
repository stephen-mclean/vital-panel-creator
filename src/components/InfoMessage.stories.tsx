import type { Meta, StoryObj } from "@storybook/react";
import { InfoMessage } from "./InfoMessage";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Base/InfoMessage",
  component: InfoMessage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof InfoMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    type: "info",
    message: "This is an info message",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "This is an error message",
  },
};

export const Loading: Story = {
  args: {
    type: "loading",
    message: "This is a loading message",
  },
};
