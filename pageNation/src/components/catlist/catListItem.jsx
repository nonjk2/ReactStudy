import { useEffect } from "react";
import { CatListItemContainer } from "./style";

const CatListItem = ({ item }) => {
  const { breeds, height, id, url, width } = item;

  return (
    <CatListItemContainer>
      <div className="img_div">
        <img src={url} alt="" />
      </div>
      <div className="img_description">
        <p className="img_title">Designers Who Changed the Web</p>
        <p className="img_category">Post Category</p>
      </div>
    </CatListItemContainer>
  );
};
export default CatListItem;
