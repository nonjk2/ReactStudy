import { useCallback, useEffect, useRef, useState } from "react";
import { PostItem } from "../../types/post";
import Lottie from "lottie-react";
import heart from "../../assets/heart.json";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { DelLikes, PostLikes } from "../../api/Post";
import { useAppSelector } from "../../hooks/useRedux";
import { ModalContainer, PostItemContainer } from "./DogListItemStyle";
import { useMutation, useQueryClient } from "react-query";
import { Modal } from "../../util/modal";

interface DogListItemProps {
  data: PostItem;
}

const DogListItem: React.FC<DogListItemProps> = (props) => {
  const { data } = props;
  const imageRef = useRef<HTMLImageElement>(null);
  const [play, setPlay] = useState(false);
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  const userId = useAppSelector((state) => state.user.id);
  const QueryClient = useQueryClient();

  const likeMutation = useMutation(PostLikes, {
    onSuccess: () => {
      setTimeout(() => {
        QueryClient.invalidateQueries("dogs");
        QueryClient.invalidateQueries("likes");
      }, 100);

      console.log("성공");
      setPlay(true);
    },
  });
  const unLikeMutation = useMutation(DelLikes, {
    onSuccess: () => {
      setTimeout(() => {
        QueryClient.invalidateQueries("dogs");
        QueryClient.invalidateQueries("likes");
      }, 200);
    },
  });
  useEffect(() => {
    if (play) {
      setTimeout(() => setPlay(false), 1000); // 애니메이션 1초
    }
  }, [play]);

  const likeHandler = () => {
    if (play) return;
    likeMutation.mutate({
      id: data.image.id + data.id,
      postId: data.id,
      userId: userId,
    });
  };

  const unlikeHandler = useCallback(() => {
    unLikeMutation.mutate(data.image.id + data.id);
  }, []);

  return (
    <>
      <PostItemContainer key={data.id}>
        <div className="portalTag">
          <div className="paddingDiv">
            <div className="absoluteIcon">
              {data.isLiked ? (
                <FaHeart size={30} className="heartIcon" onClick={unlikeHandler} />
              ) : (
                <FaRegHeart size={30} className="heartIcon" onClick={likeHandler} />
              )}
            </div>
            <img
              ref={imageRef}
              src={data.image.url}
              loading="lazy"
              height={data.image.height}
              alt=""
              className="myDogImage"
              onClick={() => setModalToggle(true)}
            />
            {play && <Lottie animationData={heart} className="lottie" />}
          </div>
        </div>
      </PostItemContainer>
      {modalToggle && (
        <Modal
          width="600px"
          height="600px"
          element={
            <ModalContainer>
              <img src={data.image.url} loading="lazy" alt="" className="myDogImage" />
            </ModalContainer>
          }
          setModal={setModalToggle}
        />
      )}
    </>
  );
};

export default DogListItem;
