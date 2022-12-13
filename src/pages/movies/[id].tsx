import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";

import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { isContext } from "vm";
import { fetchMovie } from "../../actions";

import { useFetchMovie } from "../../hooks/useFetchMovie";

const Movie: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useFetchMovie(String(id));
  console.log(data);

  /**
   * TODO: zaimplementuj hook do pobierania filmu
   */
  // const movie = useMovie(router.query.id);

  return (
    <div>{data?.title}</div>

    //   <div className={styles.container}>
    //     <Head>
    //       <title>{movie.title}</title>
    //       <meta name="description" content="Meta description for the Home page" />
    //     </Head>
    //     <h3>Film: {movie.title}</h3>
    //     <p>{movie.opening_crawl}</p>
    //     <ul>
    //       {movie.characters.map(() => {
    //         /**
    //          * TODO: dodaj listę postaci z linkami do strony o niej
    //          */
    //       })}
    //     </ul>

    //     <h3>Recenzje</h3>
    //     <ul>
    //       {/**
    //        * TODO: dodaj listę recenzji dla zasobu, recenzje powinny być zapisane w stanie aplikacji
    //        */}
    //     </ul>
    //     <form>
    //       {/**
    //        * TODO: zaimplementuj formularz dodawania recenzji
    //        */}
    //     </form>
    //   </div>
    // );

    // return null;
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://swapi.py4e.com/api/films/${}`);
//   const data: Movies = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };string
// };
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  const params = ctx.params as { id: any };
  await queryClient.prefetchQuery(["movie", params.id], () =>
    fetchMovie(params.id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Movie;
