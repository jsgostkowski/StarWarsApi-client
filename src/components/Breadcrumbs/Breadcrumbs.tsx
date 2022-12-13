import React from "react";
import Link from "next/link";
import type { Breadcrumb } from "../../types";
import layout from "../../styles/Layout.module.css";
import { useRouter } from "next/router";

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  // router.pathname.split("/") // /movies/123
  /**
   * TODO: dodaj listę breadcrumbów dla aktualnej strony    Home > films > asd {url: name:}
   */
  const items: Breadcrumb[] = [];

  return (
    <ul className={layout.breadcrumbs}>
      <li>
        <Link href="/">Strona główna</Link>
      </li>
      {items.map(() => {
        /**
         * TODO: wyświetl linki do nawigacji po breadcrumbach
         */
        return <></>;
      })}
    </ul>
  );
};

export default Breadcrumbs;
