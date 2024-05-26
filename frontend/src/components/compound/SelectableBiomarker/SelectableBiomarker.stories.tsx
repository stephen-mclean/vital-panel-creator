import type { Meta, StoryObj } from "@storybook/react";
import { SelectableBiomarker } from "./SelectableBiomarker";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compound/SelectableBiomarker",
  component: SelectableBiomarker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    onToggle: fn(),
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof SelectableBiomarker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    name: "Acetylcholine Receptor (AChR) Antibodies, Complete Profile with Reflex to MuSK Antibodies",
    description:
      "Acetylcholine Receptor (AChR) Antibodies, Complete Profile with Reflex to MuSK Antibodies",
    selected: false,
  },
};

export const WithoutDescription: Story = {
  args: {
    name: "Acetylcholine Receptor (AChR) Antibodies, Complete Profile with Reflex to MuSK Antibodies",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    name: "Acetylcholine Receptor (AChR) Antibodies, Complete Profile with Reflex to MuSK Antibodies",
    description:
      "Acetylcholine Receptor (AChR) Antibodies, Complete Profile with Reflex to MuSK Antibodies",
    selected: true,
  },
};
