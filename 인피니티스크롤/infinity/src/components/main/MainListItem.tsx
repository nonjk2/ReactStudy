import { forwardRef } from "react";
import styled from "styled-components";
import { DogResponeData } from "../../types/types";

const MainListItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid #0c111c;
  .list-item-content {
    display: flex;
    flex-wrap: nowrap;
    gap: 1.5rem;
    .list-item-img {
      aspect-ratio: 1.5/1;
      width: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
      max-width: 100%;
      vertical-align: middle;
      display: inline-block;
      border: 0;
    }
    .list-item-text {
      display: flex;
      max-width: 48ch;
      min-width: 48ch;
      flex-direction: column;
      justify-content: space-between;
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      .item-text-heading {
        font-size: 1.8rem;
        line-height: 1.2;
        font-weight: 600;
        letter-spacing: -0.021em;
        text-transform: uppercase;
        margin-top: 0rem;
        margin-bottom: 0rem;
      }
      .item-text-style {
        text-transform: uppercase;
        margin-bottom: 0rem;
        font-size: 1rem;
        margin-top: 0;
      }
    }
  }
`;

interface ListItemProps {
  item: DogResponeData;
  num: number;
}

const MainListItem = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const { item, num } = props;

  const itemElement = (
    <MainListItemContainer>
      <div className="list-item-content">
        <img src={item.url} alt="" className="list-item-img" width={185} height={123} />
        <div className="list-item-text">
          <h2 className="item-text-heading">{item.breeds[0].temperament}</h2>
          <p className="item-text-style">{item.breeds[0].name}</p>
        </div>
        <h3>{num}</h3>
      </div>
    </MainListItemContainer>
  );
  const isLastItem = ref ? <div ref={ref}>{itemElement}</div> : <div>{itemElement}</div>;

  return isLastItem;
});
export default MainListItem;
