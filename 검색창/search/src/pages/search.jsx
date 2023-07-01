/* eslint-disable no-unused-vars */
import useSearch from "../hooks/useSearch";
import useInput from "../hooks/useInput";
import { useEffect, useRef, useState } from "react";
import ListContainer from "../components/ListContainer";
import { SearchPageContainer } from "./searchStyle";

const SearchPage = () => {
  const [value, valueChange, setValue] = useInput();
  const [category, setCategory] = useState("web");
  const [data, error] = useSearch(value, category);
  const [dataList, setDataList] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([
    "web",
    "vclip",
    "image",
    "blog",
    "book",
    "cafe",
  ]);
  const itemRefs = useRef([]);

  const [arrowKeyIndex, setArrowKeyIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      e.preventDefault();
      setArrowKeyIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    } else if (e.keyCode === 40) {
      e.preventDefault();
      setArrowKeyIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [data]);

  useEffect(() => {
    if (itemRefs.current[arrowKeyIndex]) {
      itemRefs.current[arrowKeyIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [arrowKeyIndex]);
  // 인덱스의 주변으로 스크롤 할수있음

  const onSubmithandler = (event) => {
    event.preventDefault();
    const newData = data.map((e) => {
      return { ...e, type: category };
    });
    setDataList(newData);
    setValue("");
  };
  return (
    <SearchPageContainer>
      <h1>Posts</h1>
      <div className="searchFormContainer">
        <div className="flexCont">
          <form action="" className="search" onSubmit={onSubmithandler}>
            <div className="searchContainer">
              <input
                type="text"
                value={value}
                onChange={valueChange}
                className="searchInput"
              />
              {/* hidden 태그로 ref조작없이 쉽게 없앨수 있음 */}
              {category !== "image" && category !== "vclip" && (
                <ul
                  className="autoComplete"
                  hidden={!value.length}
                  role="listbox"
                >
                  {data &&
                    data.map((item, idx) => (
                      <li
                        onMouseOver={() => {
                          setArrowKeyIndex(idx);
                        }}
                        role="option"
                        ref={(el) => (itemRefs.current[idx] = el)}
                        key={item.contents + idx}
                        className={arrowKeyIndex === idx ? "selected" : ""}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    ))}
                </ul>
              )}
            </div>
          </form>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="categorySelect"
          >
            {categoryOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <ListContainer data={dataList} category={category} />
      </div>
    </SearchPageContainer>
  );
};
export default SearchPage;
