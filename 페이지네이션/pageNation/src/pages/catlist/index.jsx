import CatListItem from "../../components/catlist/catListItem";
import { useCallback, useMemo, useState } from "react";
import { CatListSection, ListContainer, ListHeader, Spinner } from "./style";
import usePageNation from "../../hooks/usePageNation";
import { useParams } from "react-router-dom";
import PageNationSection from "../../components/catlist/catListPageNation";

const TotalPagesPerPage = Math.ceil(10000 / 6 / 5);

const CatList = () => {
  let { page } = useParams();
  page = parseInt(page, 10);
  if (isNaN(page) || page < 0) {
    page = 1;
  }
  const [toggle, setToggle] = useState(false);
  const { cats, loading, error } = usePageNation(page);
  const currentPageGroup = useMemo(() => Math.ceil(page / 5), [page]);
  const handleListToggle = useCallback(() => setToggle(!toggle), [toggle]);
  return (
    <ListContainer>
      <ListHeader>
        <h1 className="projects_heading">Recent Projects</h1>
        <button onClick={handleListToggle} className="view-button">
          {toggle ? (
            <p className="view-button_text">List View</p>
          ) : (
            <p className="view-button_text">Grid View</p>
          )}
        </button>
      </ListHeader>
      <CatListSection>
        {loading ? (
          <Spinner>
            <div className="loading_spinner_box">
              <div className="loading_spinner" />
            </div>
          </Spinner>
        ) : (
          cats &&
          cats.map((e) => (
            <CatListItem key={e.id} item={{ ...e, toggle: toggle }} />
          ))
        )}
      </CatListSection>
      <PageNationSection
        currentPageGroup={currentPageGroup}
        TotalPagesPerPage={TotalPagesPerPage}
        page={page}
      />
    </ListContainer>
  );
};
export default CatList;
