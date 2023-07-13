import { forwardRef, useCallback } from "react";
import { ImageData } from "../../types/post";
import { v4 as uuidv4 } from "uuid";
import { ItemWrraper, PostDogsItemContainer } from "../main/DogListItemStyle";
import { InfiniteData, useMutation } from "react-query";
import { PostDos } from "../../api/Dogs";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchMyDog } from "../../store/slice/dogsSlice";
import { PaperContainer, Paper, FrontAboutMeOne, PostButtonBox } from "./DogPostItemStyle";
import Button from "../../util/button";

interface DogListItemProps {
  data: InfiniteData<ImageData[]>;
  pagedata: ImageData;
  isFetching: boolean;
}

const DogPostListItem = forwardRef<HTMLDivElement, DogListItemProps>((props, ref) => {
  const { pagedata, isFetching } = props;

  const userDogs = useAppSelector((state) => state.dogs.posts);
  const user = useAppSelector((state) => state.user.id);
  const userDogsId = userDogs.map((e) => e.postImageId);
  const IsHasDogs = userDogsId.some((d) => d === pagedata.id);

  const dispatch = useAppDispatch();
  const postMutation = useMutation(PostDos, {
    onSuccess: () => {
      dispatch(fetchMyDog(user));
    },
  });

  const onPostHandelr = useCallback(() => {
    postMutation.mutate({
      author: user,
      comments: [],
      description: "",
      id: uuidv4(),
      image: pagedata,
      title: "",
      like: 0,
    });
  }, []);
  const detailDogs = (
    <div className="detailDogs">
      <p>무게 : {pagedata.breeds[0].weight.metric}</p>
      <p>키 : {pagedata.breeds[0].height.metric}</p>
      <p>수명 : {pagedata.breeds[0].life_span}</p>
      <p>품종 : {pagedata.breeds[0].bred_for}</p>
    </div>
  );
  const content = (
    <PostDogsItemContainer key={pagedata.id}>
      <PaperContainer>
        <Paper className="paper">
          <FrontAboutMeOne isHasDogs={IsHasDogs}>
            <img src={pagedata.url} loading="lazy" alt="" className="myDogImage" />
            {IsHasDogs && <div className="isHasdogs">이미 데리고 있는 강아지입니다</div>}
            <PostButtonBox className="PostButtonBox">
              {!isFetching && !IsHasDogs && (
                <div className="Button-warrper">
                  <Button
                    color="green"
                    size="small"
                    title={<>데려가기😃</>}
                    onClick={onPostHandelr}
                  />
                </div>
              )}
              {detailDogs}
            </PostButtonBox>
          </FrontAboutMeOne>
        </Paper>
      </PaperContainer>
    </PostDogsItemContainer>
  );

  const lastItem = ref ? (
    <ItemWrraper ref={ref}>{content}</ItemWrraper>
  ) : (
    <ItemWrraper>{content}</ItemWrraper>
  );

  return lastItem;
});

export default DogPostListItem;
