import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <div className="container">
        <Link href="/homepages/homepage1">
          <a>Glossie</a>
        </Link>
      </div>
    </>
  );
}
