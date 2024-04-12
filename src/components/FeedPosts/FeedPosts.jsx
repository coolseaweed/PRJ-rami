import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useRef, useState } from "react";
var date = new Date("2021-01-01");

console.log(date.getTime());

const FeedPosts = () => {
  const [posts, setPosts] = useState([
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-10-07.png",
      likes: 12,
      timestamp: Date.parse("2023-10-07"),
      text: "2023.10.07 청계산 한소반 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-10-14.png",
      likes: 12,
      timestamp: Date.parse("2023-10-14"),
      text: "2023.10.14 이천에서 온천하고 닭백숙 먹방",
    },

    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-10-15.png",
      likes: 12,
      timestamp: Date.parse("2023-10-15"),
      text: "2023.10.15 삼겹살 찜(?) 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-11-01.png",
      likes: 12,
      timestamp: Date.parse("2023-11-01"),
      text: "2023.11.01 인절미 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-11-04.png",
      likes: 12,
      timestamp: Date.parse("2023-11-04"),
      text: "2023.11.04 수원에서 닭꼬치 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-12-04.png",
      likes: 12,
      timestamp: Date.parse("2023-12-04"),
      text: "2023.12.04 감자탕 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-12-06.png",
      likes: 12,
      timestamp: Date.parse("2023-12-06"),
      text: "2023.12.06 곱창 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-12-10.png",
      likes: 12,
      timestamp: Date.parse("2023-12-10"),
      text: "2023.12.10 수원에서 삼겹살 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-12-12.png",
      likes: 12,
      timestamp: Date.parse("2023-12-12"),
      text: "2023.12.10 속초 순두부 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-12-24.png",
      likes: 12,
      timestamp: Date.parse("2023-12-24"),
      text: "2023.12.24 혓바닥 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-12-25.png",
      likes: 12,
      timestamp: Date.parse("2023-12-25"),
      text: "2023.12.25 상추 및 다양하게 먹방",
    },

    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-12-28.png",
      likes: 12,
      timestamp: Date.parse("2023-12-28"),
      text: "2023.12.28 필리핀 술먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2023-12-29.png",
      likes: 12,
      timestamp: Date.parse("2023-12-29"),
      text: "2023.12.29 필리핀 떠나기전 브런치",
    },

    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2024-01-04.png",
      likes: 12,
      timestamp: Date.parse("2024-01-04"),
      text: "2024.01.04 속초 옹심이 먹방 (보람이는 회덥밥)",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2024-01-07.png",
      likes: 12,
      timestamp: Date.parse("2024-01-07"),
      text: "2024.01.07 설악산 오색호수 탐방후 오리백숙 먹방",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2024-03-13.png",
      likes: 12,
      timestamp: Date.parse("2024-03-13"),
      text: "2024.03.13 보람이가 사준 바다장어(존맛탱)",
    },

    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2024-03-23.png",
      likes: 12,
      timestamp: Date.parse("2024-03-23"),
      text: "2024.03.23 인쌩~맥주 먹방 (사진보면서 나도 먹고싶어지네..)",
    },
    {
      user: "짝꿍",
      user_img:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/static/imgs/coolseaweed.png",
      img_url:
        "https://goarcade.s3.ap-northeast-2.amazonaws.com/project/rami/contents/2024-03-31.png",
      likes: 12,
      timestamp: Date.parse("2024-03-31"),
      text: "2024.03.31 수원 집밥 먹방 (보람이는 아직 꿈나라)",
    },
  ]);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {posts.map((post) => (
        <FeedPost post={post} />
      ))}

      {/* {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>

        ))} */}
      {/* {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayuum. Looks like you don&apos;t have any friends.
          </Text>
          <Text color={"red.400"}>Stop coding and go make some!!</Text>
        </>
      )} */}
    </Container>
  );
};

export default FeedPosts;
