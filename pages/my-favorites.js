import FavoriteActivityCard from "@/components/layout/FavoriteActivityCard";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Button from "@/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

export default function MyFavoriteActivitiesPage({
  listedActivities: activities,
  bookmarks,
  toggleBookmark,
  handleShare,
  toggleTheme,
  currentTheme,
}) {
  const hasBookmarks = bookmarks.length > 0;
  const bookmarkedActivities = activities.filter((activity) =>
    bookmarks?.includes(activity._id)
  );

  return (
    <>
      <Header />
      <Container>
        <Button onClick={() => window.history.back()}>
          <FaArrowLeft />
        </Button>
        <ThemeToggle toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <StyledFavoriteList>
          {hasBookmarks ? (
            bookmarkedActivities.map((activity) => (
              <FavoriteActivityCard
              handleShare={handleShare}
                key={activity._id}
                {...activity}
                isBookmarked={true}
                toggleBookmark={toggleBookmark}
              />
            ))
          ) : (
            <NoBookmarksContainer>
              No bookmarks available...
            </NoBookmarksContainer>
          )}
        </StyledFavoriteList>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 16px;
  margin: 16px;
  margin-bottom: 50px;
`;

const NoBookmarksContainer = styled.div`
  padding: 12px;
  text-align: center;
`;
const StyledFavoriteList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 50px;
  list-style: none;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
  }
`;
