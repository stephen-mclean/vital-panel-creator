import type { Meta, StoryObj } from "@storybook/react";
import { NavItem } from "./NavItem";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Base/NavItem",
  component: NavItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Routes>
          <Route path="/*" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    to: "/some-route",
    icon: "fa-solid fa-house",
    label: "Home",
  },
};

export const Active: Story = {
  args: {
    to: "/",
    icon: "fa-solid fa-house",
    label: "Home",
  },
};
