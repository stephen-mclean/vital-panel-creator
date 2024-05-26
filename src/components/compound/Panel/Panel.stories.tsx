import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "./Panel";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compound/Panel",
  component: Panel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    onEdit: fn(),
    onDelete: fn(),
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    panel: {
      name: "Panel 1",
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
      method: "testkit",
    },
  },
};

export const WithALongName: Story = {
  args: {
    panel: {
      name: "This is a really long panel name that should be truncated because it is very long",
      markers: [
        {
          id: 1,
          name: "Biomarker 1",
          description: "This is the first biomarker",
        },
      ],
      method: "walk_in_test",
    },
  },
};

export const WithLotsOfMarkers: Story = {
  args: {
    panel: {
      name: "Panel 3",
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
        {
          id: 3,
          name: "Biomarker 3",
          description: "This is the third biomarker",
        },
        {
          id: 4,
          name: "Biomarker 4",
          description: "This is the fourth biomarker",
        },
        {
          id: 5,
          name: "Biomarker 5",
          description: "This is the fifth biomarker",
        },
        {
          id: 6,
          name: "Biomarker 6",
          description: "This is the sixth biomarker",
        },
        {
          id: 7,
          name: "Biomarker 7",
          description: "This is the seventh biomarker",
        },
      ],
      method: "at_home_phlebotomy",
    },
  },
};
