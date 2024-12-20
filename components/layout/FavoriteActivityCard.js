import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart, FaShare } from "react-icons/fa";
import styled from "styled-components";

export default function FavoriteActivityCard({
  _id,
  title,
  description,
  country,
  categories,
  imageUrl,
  toggleBookmark,
  isBookmarked,
  showHeart = true,
  handleShare,
}) {
  return (
    <StyledFavoriteCard>
      <StyledImage key={imageUrl[0]} src={imageUrl[0]} sizes="50vw" fill />

      <CardHeader>
        <div>
          {categories.map((category) => (
            <StyledTag key={category}>{category}</StyledTag>
          ))}
        </div>

        {showHeart && (
          <StyledHeartIconContainer onClick={() => toggleBookmark(_id)}>
            {isBookmarked ? <FaHeart fill="#ff4d4d" /> : <FaRegHeart />}
          </StyledHeartIconContainer>
        )}
        <StyledShareIconContainer onClick={() => handleShare(title, description)}>
          <StyledFaShare />
        </StyledShareIconContainer>
      </CardHeader>

      <CardFooter>
        <TitleContainer>
          <Link href={`/activity/${_id}`}>{title}</Link>
        </TitleContainer>
        <CountryContainer>{country}</CountryContainer>
      </CardFooter>
    </StyledFavoriteCard>
  );
}

const StyledFavoriteCard = styled.li`
  margin-bottom: 12px;
  height: 20vh;
  padding: 6px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;
const StyledTag = styled.div`
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  list-style-type: none;
  display: inline-block;
  margin-right: 6px;
`;

const TitleContainer = styled.div`
  color: #fff;
  font-size: 22px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.85);
`;

const CountryContainer = styled.div`
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 4px 8px;
  color: #000000;
  font-size: 16px;
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    color: #ff4d4d;
  }
`;

const StyledShareIconContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  text-shadow: 0 2px 2px #000;
  background-color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledFaShare = styled(FaShare)`
  path {
    stroke: black;
    stroke-width: 3rem;
    stroke-linejoin: round;
    stroke-linecap: round;
    paint-order: stroke;
  }
  overflow: visible;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

const StyledImage = styled(Image)`
  z-index: -1;
  object-fit: cover;
  object-position: 50% 30%;
`;
