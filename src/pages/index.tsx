import Router from "next/router";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useAuthentication } from "@/contexts/AuthenticationProvider/useAuthentication";
import { useMovies } from "@/contexts/MoviesProvider/useMovies";
import MoviesList from "@/components/MoviesList";
import { Container, Heading } from "@chakra-ui/react";
import { useIsMounted } from "@/contexts/AuthenticationProvider/utils";

export default function HomePage() {
  const { fetchLatest, movies, pagination, isLoading } = useMovies();
  const { username } = useAuthentication();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!username) Router.push("/login");
  }, [username]);

  useEffect(() => {
    if (isMounted()) {
      fetchLatest(pagination.page);
    }
  }, []);

  return (
    <Layout>
      <Container maxW={"container.xl"} py={10}>
        <Heading as={"h2"} py={2} size={"xl"} mb={5}>
          Latest movies
        </Heading>
        <MoviesList data={movies} isLoading={isLoading} />
      </Container>
    </Layout>
  );
}
