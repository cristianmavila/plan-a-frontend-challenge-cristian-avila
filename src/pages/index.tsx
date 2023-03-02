import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Container, Heading } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import MoviesList from "@/components/MoviesList";
import { useIsMounted } from "@/contexts/AuthenticationProvider/utils";
import { useMovies } from "@/contexts/MoviesProvider/useMovies";
import withAuthentication from "@/contexts/AuthenticationProvider/withAuthentication";
import Head from "next/head";
import { useAuthentication } from "@/contexts/AuthenticationProvider/useAuthentication";

const HomePage = () => {
  const { username } = useAuthentication();
  const { fetchLatest, movies, pagination, isLoading } = useMovies();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted() && !!username) fetchLatest(pagination.page);
  }, [username]);

  return (
    <>
      <Head>
        <title>Latest movies</title>
      </Head>
      <Layout>
        <Container maxW={"container.xl"} py={10}>
          <Heading py={2} size={"xl"} mb={5}>
            Latest movies
          </Heading>
          <MoviesList data={movies} isLoading={isLoading} />
        </Container>
      </Layout>
    </>
  );
};

export default withAuthentication(HomePage);
