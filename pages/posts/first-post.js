import Link from 'next/link';
import Head from 'next/head';
export default function FirstPost() {
  return (
    <div>
    <Head>
      <title>fisrt post title</title>
      <script src="https://connect.facebook.net/en_US/sdk.js" />
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          Back to Home
        </Link>
      </h2>
      </div>
  );
}