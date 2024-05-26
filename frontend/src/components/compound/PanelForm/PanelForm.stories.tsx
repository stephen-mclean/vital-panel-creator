import type { Meta, StoryObj } from "@storybook/react";
import { PanelForm } from "./PanelForm";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compound/PanelForm",
  component: PanelForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    onCancel: fn(),
    onSubmit: fn(),
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof PanelForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithExistingPanel: Story = {
  args: {
    panel: {
      name: "My panel",
      markers: [
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
      ],
      method: "at_home_phlebotomy",
    },
    isLoading: false,
  },
};

export const WithExistingPanelLoading: Story = {
  args: {
    panel: {
      name: "My panel",
      markers: [
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
      ],
      method: "at_home_phlebotomy",
    },
    isLoading: true,
  },
};
