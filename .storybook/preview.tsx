import type { Preview } from "@storybook/react";
import '../src/globals.css'
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    options: {
      storySort: {
        order: ["Introduction", "Components"],
      },
    },
  },
};

export default preview;
