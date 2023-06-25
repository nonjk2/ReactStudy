import React from "react";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageNationComponent, PagePrevButton } from "../../pages/catlist/style";

const PageNationSection = React.memo(
  ({ currentPageGroup, TotalPagesPerPage, page }) => {
    const navigate = useNavigate();

    const handleNextPageGroup = () => {
      console.log("asd");
      const nextPageGroupStart = currentPageGroup * 5 + 1;
      navigate(`/${nextPageGroupStart}`);
    };

    const handlePrevPageGroup = () => {
      const prevPageGroupStart = (currentPageGroup - 1) * 5;
      navigate(`/${prevPageGroupStart}`);
    };

    const pageNumbers = useMemo(
      () => [...Array(5)].map((_, i) => (currentPageGroup - 1) * 5 + i + 1),
      [currentPageGroup]
    );

    return (
      <PageNationComponent>
        {currentPageGroup > 1 && (
          <PagePrevButton onClick={handlePrevPageGroup}>{"<"}</PagePrevButton>
        )}
        {pageNumbers.map((pageNumber) => {
          if (pageNumber > TotalPagesPerPage) {
            return null;
          }
          return (
            <div className="pageLinkNumberCont" key={pageNumber}>
              <Link to={`/${pageNumber}`}>
                <span
                  style={{
                    color: pageNumber === page ? "#EE85E8" : "#fff",
                  }}
                >
                  {pageNumber}
                </span>
              </Link>
            </div>
          );
        })}
        {currentPageGroup * 5 < TotalPagesPerPage && (
          <PagePrevButton onClick={handleNextPageGroup}>{">"}</PagePrevButton>
        )}
      </PageNationComponent>
    );
  }
);

export default PageNationSection;
