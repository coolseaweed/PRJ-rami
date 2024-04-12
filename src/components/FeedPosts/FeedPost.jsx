import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
// import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  //   const { userProfile } = useGetUserProfileById(post.createdBy);

  return (
    <>
      <PostHeader post={post} />
      <Box my={3} borderRadius={10} overflow={"hidden"}>
        <Image src={post.img_url} alt={"FEED POST IMG"} />
      </Box>

      <PostFooter post={post} />
    </>
  );
};

export default FeedPost;
