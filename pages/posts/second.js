import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/alert.module.css'
export default function FirstPost() {
  return (
    <div>
    <Head>
      <title>fisrt post title</title>
      <script src="https://connect.facebook.net/en_US/sdk.js" />
      <script>
        console.log(1);
      </script>
    </Head>
      <h1>second Post</h1>
      <h2>
        <Link href="/">
          Back to Home
        </Link>
      </h2>
      </div>
  );
}