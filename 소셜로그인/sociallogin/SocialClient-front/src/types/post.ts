export interface Post {
  image: ImageData;
  comments: Comment[];
  id: string;
  author: string;
  description: string;
  title: string;
  like: number;
}
[];
export interface Like {
  id: string;
  userId: string;
  postId: string;
}
export interface PostItem {
  image: ImageData;
  comments: Comment[];
  id: string;
  author: string;
  description: string;
  title: string;
  like: number;
  isLiked?: boolean;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
}

export interface ImageData {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
interface Breed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  country_code: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}
