import { render, screen } from "@testing-library/react";
import ActivityCard from "@/components/layout/ActivityCard";

// Test Case 1: Activities Rendered on Activity Page

describe("1.2 Ensure each activity displays the correct title, image, and tags", () => {
  const activity = {
    title: "Test title",
    imageUrl: "https://images.unsplash.com/photo-1486890598084-3673ba1808c1",
    categories: ["Outdoor", "Sport", "Water"],
  };

  test("Title rendering", () => {
    render(<ActivityCard {...activity} />);
    expect(screen.getByText(activity.title)).toBeInTheDocument();
  });

  test("Image rendering", () => {
    render(<ActivityCard {...activity} />);
    expect(screen.getByAltText(activity.title)).toBeInTheDocument();
  });

  test("Empty image rendering", () => {
    render(<ActivityCard {...activity} imageUrl="" />);
    expect(screen.getByAltText("Image is missing")).toBeInTheDocument();
  });

  test("Categories rendering", () => {
    render(<ActivityCard {...activity} />);
    expect(screen.getAllByTestId("category")).toHaveLength(
      activity.categories.length
    );
  });
});
