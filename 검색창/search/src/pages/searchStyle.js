import styled from "styled-components";

export const SearchPageContainer = styled.div`
  h1 {
    margin-top: 0px;
    margin-bottom: 2rem;
    color: #1a1a1a;
    font-size: 4rem;
    font-weight: 800;
    line-height: 44px;
  }
  .flexCont {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  .search {
    position: relative;
  }
  .searchFormContainer {
  }
  .searchContainer {
    display: inline-block;
    position: relative;
  }
  .searchInput {
    width: 400px;
    height: 40px;
    padding-left: 10px;
    font-size: 1rem;
    color: rgb(116, 116, 116);
    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    outline: none;
  }
  [hidden],
  template {
    display: none;
  }
  b {
    color: #5585e8;
  }
  .autoComplete {
    position: absolute;
    max-height: 226px;
    overflow-y: scroll;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0.5rem 0 0 0;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid rgba(33, 33, 33, 0.1);
    z-index: 1000;
    outline: none;
  }
  ul {
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    li {
      padding: 10px 20px;
      list-style: none;
      text-align: left;
      font-size: 16px;
      color: #212121;
      transition: all 0.1s ease-in-out;
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 1);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.2s ease;
      display: list-item;
      &:hover {
        cursor: pointer;
      }
    }
    .selected {
      background-color: rgba(123, 123, 123, 0.1);
    }
  }
`;
