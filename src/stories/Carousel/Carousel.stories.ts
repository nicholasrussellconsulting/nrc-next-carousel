import type { Meta, StoryObj } from "@storybook/react";
import { CarouselStage } from "./CarouselStage";

const meta: Meta<typeof CarouselStage> = {
  title: "Carousel",
  component: CarouselStage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CarouselStage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    something: "test",
  },
};
