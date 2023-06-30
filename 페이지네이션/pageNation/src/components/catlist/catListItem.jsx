import { useState } from "react";
import { CatListItemContainer } from "./style";

const CatListItem = ({ item }) => {
  const { breeds, height, id, url, width, toggle } = item;
  const [load, setLoad] = useState(true);
  const handleImageLoad = () => {
    setLoad(false);
  };

  return (
    <CatListItemContainer
      style={{
        width: toggle ? "100%" : "33%",
        flexDirection: toggle ? "row" : "column",
      }}
    >
      <div className="img_div">
        {load && <div className="loading-overlay">로딩 중...</div>}
        <img src={url} alt="" onLoad={handleImageLoad} />
      </div>
      <div className="img_description">
        <p className="img_title">MrCat.{id}</p>
        <p className="img_category">Post Category</p>
      </div>
    </CatListItemContainer>
  );
};
export default CatListItem;
