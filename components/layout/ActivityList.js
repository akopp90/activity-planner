import styled from "styled-components";
import ActivityCard from "@/components/layout/ActivityCard";

export default function ActivityList({ activities }) {
  return (
    <>
      <main>
        <StyledList>
          {activities.map((activity) => (
            <li key={activity.id}>
              <ActivityCard {...activity} />
            </li>
          ))}
        </StyledList>
      </main>
    </>
  );
}

const StyledList = styled.ul`
  gap: 16px;
  padding: 24px;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(327px, 1fr));
`;