import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import ActivityForm from "@/components/layout/ActivityForm";
import ActivityDetails from "@/components/layout/ActivityDetails";
import { useSession } from "next-auth/react";
export default function ActivityPage({
  activities,
  handleEditActivity,
  handleDeleteActivity,
  toggleBookmark,
  bookmarks,
  showHeart = true,
}) {
  const router = useRouter();
  const { id } = router.query;
  const activity = activities.find((activity) => activity.id === id);
  const [showForm, setShowForm] = useState(false);
  const { data: session } = useSession();

  function deleteActivity(id) {
    handleDeleteActivity(id);
  }

  if (!activity) return <p>Loading...</p>;
  function handleToggleEdit() {
    setShowForm(!showForm);
  }

  const isBookmarked = bookmarks?.includes(activity.id) || false;

  return (
    <>
      <Head>
        <title>Activity Planner</title>
      </Head>
      <Header>Activity Details</Header>
      {session && (
        <>
          {!showForm ? (
            <StyledSection>
              <Button onClick={() => setShowForm(true)} isPrimary>
                Edit activity
              </Button>
            </StyledSection>
          ) : (
            <ActivityForm
              handleToggleEdit={handleToggleEdit}
              handleEditActivity={handleEditActivity}
              activity={activity}
            />
          )}
        </>
      )}
      <ActivityDetails
        {...activity}
        deleteActivity={deleteActivity}
        toggleBookmark={() => toggleBookmark(id)}
        isBookmarked={isBookmarked}
        showHeart={showHeart}
      />
    </>
  );
}
const StyledSection = styled.section`
  display: flex;
  padding: 0 24px;
  justify-content: flex-end;
`;
