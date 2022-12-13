import { NextPage } from "next";
import { useRouter } from "next/router";

const Character: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Film: {id}</p>
    </div>
  );
};
