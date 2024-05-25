import type { Meta, StoryObj } from "@storybook/react";
import { PaginationControls } from "./PaginationControls";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compound/PaginationControls",
  component: PaginationControls,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    onNext: fn(),
    onPrevious: fn(),
  },
} satisfies Meta<typeof PaginationControls>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    canNavigateNext: true,
    canNavigatePrevious: true,
  },
};

export const NoNext: Story = {
  args: {
    canNavigateNext: false,
    canNavigatePrevious: true,
  },
};

export const NoPrevious: Story = {
  args: {
    canNavigateNext: true,
    canNavigatePrevious: false,
  },
};
