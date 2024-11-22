import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { fetchWeatherData } from "@/lib/weather";
import { useSession } from "next-auth/react";
import {
  FaShoppingBag,
  FaThumbsDown,
  FaInfo,
  FaBook,
  FaCheckCircle,
  FaTimesCircle,
  FaCloudRain,
  FaMoon,
  FaSun,
  FaSnowflake,
  FaCloud,
} from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

import dynamic from "next/dynamic";
import styled from "styled-components";

const ActivityMap = dynamic(() => import("@/components/layout/ActivityMap"), {
  ssr: false,
});

function getWeatherIcon(condition) {
  switch (condition) {
    case "Sunny":
      return <FaSun color="gold" />;
    case "Cloudy":
      return <FaCloud color="gray" />;
    case "Rainy":
      return <FaCloudRain color="blue" />;
    case "Snowy":
      return <FaSnowflake color="lightblue" />;
    case "Clear Night":
      return <FaMoon color="navy" />;
    default:
      return <FaCloud color="gray" />;
  }
}

export default function ActivityDetails({
  title,
  imageUrl,
  area,
  location,
  description,
  country,
  categories,
  id,
  deleteActivity,
  duration,
  numberOfPeople,
  fullDescription,
  includes,
  notSuitableFor,
  importantInformation,
  whatToBring,
  notAllowed,
  toggleBookmark,
  isBookmarked,
  showHeart = true,
}) {
  const { data: session } = useSession();
  const {
    data: weather,
    error,
    isLoading,
  } = useSWR(
    location?.lat && location?.lon
      ? ["weather", location.lat, location.lon]
      : null,
    ([, lat, lon]) => fetchWeatherData(lat, lon)
  );

  const [showConfirm, setShowConfirm] = useState(false);
  function handleDelete() {
    setShowConfirm(true);
  }
  function cancelDelete() {
    setShowConfirm(false);
  }
  function confirmDelete() {
    deleteActivity(id);
    setShowConfirm(false);
  }

  return (
    <StyledContainer>
      <StyledDetails>
        <StyledImageContainer>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              style={{ objectFit: "cover" }}
              sizes="50vw"
              fill
            />
          ) : (
            <Image
              src="/images/no-image.svg"
              width={40}
              height={40}
              alt="Image is missing"
            />
          )}

          {showHeart && (
            <StyledHeartIconContainer onClick={() => toggleBookmark(id)}>
              {isBookmarked ? <FaHeart fill="#ff4d4d" /> : <FaRegHeart />}
            </StyledHeartIconContainer>
          )}
        </StyledImageContainer>
        <StyledContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledList>
            {categories.map((category) => (
              <StyledListItem key={category}>{category}</StyledListItem>
            ))}
          </StyledList>
          <StyledLocation>
            {area}, {country}
          </StyledLocation>
          <StyledDescription>{description}</StyledDescription>
          <StyledSubtitle>About this Activity</StyledSubtitle>
          <StyledDescription>{duration}</StyledDescription>
          <StyledDescription>{numberOfPeople}</StyledDescription>
          <StyledSubtitle>About this Experience</StyledSubtitle>

          <StyledExtraTitle>
            <FaBook /> Full Description
          </StyledExtraTitle>
          <StyledDescription>{fullDescription}</StyledDescription>

          <StyledExtraTitle>
            <FaCheckCircle /> Includes
          </StyledExtraTitle>
          <StyledExtraDescription>
            {Array.isArray(includes) ? (
              includes.map((item) => <li key={item}>{item}</li>)
            ) : (
              <li>{includes}</li>
            )}
          </StyledExtraDescription>
          {notSuitableFor && (
            <>
              <StyledExtraTitle>
                <FaThumbsDown /> Not suitable for
              </StyledExtraTitle>
              <StyledExtraDescription>
                {Array.isArray(notSuitableFor) ? (
                  notSuitableFor.map((item) => <li key={item}>{item}</li>)
                ) : (
                  <li>{notSuitableFor}</li>
                )}
              </StyledExtraDescription>
            </>
          )}

          <StyledExtraTitle>
            <FaInfo /> Important Information
          </StyledExtraTitle>
          <StyledExtraDescription>
            {Array.isArray(importantInformation) ? (
              importantInformation.map((item) => <li key={item}>{item}</li>)
            ) : (
              <li>{importantInformation}</li>
            )}
          </StyledExtraDescription>
          {whatToBring && (
            <>
              <StyledExtraTitle>
                <FaShoppingBag /> What to bring
              </StyledExtraTitle>
              <StyledExtraDescription>
                {Array.isArray(whatToBring) ? (
                  whatToBring.map((item) => <li key={item}>{item}</li>)
                ) : (
                  <li>{whatToBring}</li>
                )}
              </StyledExtraDescription>
            </>
          )}
          {notAllowed && (
            <>
              <StyledExtraTitle>
                <FaTimesCircle /> Not Allowed
              </StyledExtraTitle>
              <StyledExtraDescription>
                {Array.isArray(notAllowed) ? (
                  notAllowed.map((item) => <li key={item}>{item}</li>)
                ) : (
                  <li>{notAllowed}</li>
                )}
              </StyledExtraDescription>

              {weather ? (
                <>
                  <StyledDescription>
                    <strong>Weather: </strong>
                    {weather.temperature} {getWeatherIcon(weather.condition)}
                  </StyledDescription>
                </>
              ) : (
                <StyledDescription>Loading weather data...</StyledDescription>
              )}
            </>
          )}
          <ActivityMap {...location} />
          <StyledLink href="/" title="Back to Activities">
            Back to Activities
          </StyledLink>
        </StyledContainer>
      </StyledDetails>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 24px;
`;
const StyledDetails = styled.article`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.5);
  margin-bottom: 50px;
  background-color: white;
`;
const StyledImageContainer = styled.div`
  height: 50vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
`;
const StyledTitle = styled.h2`
  font-size: 1.5rem;
  margin: 16px 0;
`;
const StyledSubtitle = styled.h3`
  font-size: 1.2rem;
  margin: 16px 0;
`;
const StyledList = styled.ul`
  gap: 8px;
  display: flex;
  margin: 16px 0;
  list-style: none;
`;
const StyledListItem = styled.li`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #f1f1f1;
`;
const StyledLocation = styled.p`
  color: #666;
  display: flex;
  margin: 8px 0 16px;
  justify-content: flex-end;
  gap: 10px;
`;
const StyledDescription = styled.p`
  margin: 16px 0;
`;
const StyledLink = styled(Link)`
  color: inherit;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
const StyledHeartIconContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  text-shadow: 0 2px 2px #000;
  background-color: white;
  border-radius: 50%; /* Runde Form */
  width: 30px; /* Größe des Containers */
  height: 30px; /* Größe des Containers */
  display: flex; /* Flexbox zur Zentrierung */
  align-items: center; /* Vertikale Zentrierung */
  justify-content: center; /* Horizontale Zentrierung */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    color: #ff4d4d;
  }
`;

const StyledDeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  border: 1px solid ${(props) => (props.$isDelete ? "#ff0000" : "#fff")};
  padding: 8px;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  position: relative;
`;
const StyledExtraTitle = styled.h4`
  font-weight: bold;
`;

const StyledExtraDescription = styled.ul`
  margin: 16px 0;
  margin-left: 10px;
  padding: 8px;
  list-style: circle;
`;
