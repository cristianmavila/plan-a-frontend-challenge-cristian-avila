import { Movies } from "@/contexts/MoviesProvider/types";
import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Loading from "../Loading";

interface MoviesListProps {
  data: Movies[];
  isLoading: boolean;
}

/// for now I will use this function to return the image path
const getImageBase = (imgPath: string) => `${process.env.TMDB_IMG_PATH}/${imgPath}`;

export default function MoviesList({ data, isLoading }: MoviesListProps) {
  if (isLoading) return <Loading />;
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
      {data?.map((item) => {
        const { poster_path, title, vote_average } = item;
        return (
          <Box key={item.id}>
            <Box
              borderRadius={10}
              overflow={"hidden"}
              position={"relative"}
              transition={"all .2s ease-in-out"}
              _hover={{ lg: { transform: "scale(1.04)" } }}
              shadow={"lg"}
            >
              <Image width={"100%"} src={getImageBase(poster_path)} />
              <Box
                position={"absolute"}
                left={3}
                bottom={3}
                width={50}
                height={50}
                borderRadius={50}
                bg={"blackAlpha.700"}
                color={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={"bold"}
                fontSize={"lg"}
              >
                {vote_average}
              </Box>
            </Box>
            <Heading as={"h2"} py={3} size={"sm"}>
              {title}
            </Heading>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
