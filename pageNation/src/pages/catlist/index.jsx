import CatListItem from "../../components/catlist/catListItem";
import { useMemo } from "react";
import { CatListSection, ListContainer, ListHeader } from "./style";
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
  const { cats, loading, error } = usePageNation(page);
  const currentPageGroup = useMemo(() => Math.ceil(page / 5), [page]);

  return (
    <ListContainer>
      <ListHeader>
        <h1 className="projects_heading">Recent Projects</h1>
        <a href="" className="view-button">
          <p className="view-button_text">List View</p>
        </a>
      </ListHeader>
      <CatListSection>
        {cats && cats.map((e) => <CatListItem key={e.id} item={e} />)}
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
