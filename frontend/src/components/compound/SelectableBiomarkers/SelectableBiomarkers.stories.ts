import type { Meta, StoryObj } from "@storybook/react";
import { SelectableBiomarkers } from "./SelectableBiomarkers";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compound/SelectableBiomarkers",
  component: SelectableBiomarkers,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    onChange: fn(),
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof SelectableBiomarkers>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    selected: [],
  },
};

export const WithSelected: Story = {
  args: {
    selected: [
      {
        id: 1,
        name: "Biomarker 1",
        description: "This is the first biomarker",
      },
    ],
  },
};

export const WithMultipleSelected: Story = {
  args: {
    selected: [
      {
        id: 1,
        name: "Biomarker 1",
        description: "This is the first biomarker",
      },
      {
        id: 2,
        name: "Biomarker 2",
        description: "This is the second biomarker",
      },
      {
        id: 3,
        name: "Biomarker 3",
        description: "This is the third biomarker",
      },
      {
        id: 6,
        name: "Biomarker 6",
        description: "This is the sixth biomarker",
      },
    ],
  },
};
