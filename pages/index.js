import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date'
export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props:{
      allPostsData,
    }
  }
}
export default function Home({allPostsData}) {
  return (
    <Layout home children='1'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <h2 className={utilStyles.headingLg}>BLOG</h2>
          <ul className={utilStyles.list}>
              {allPostsData.map(({id,date,title})=>(
                  <li className={utilStyles.listItem} key={id}>
                      <Link href={`/posts/${id}`}>
                          {title}
                      </Link>
                  <br/>
                      <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                      </small>
                  </li>
              ))}
          </ul>
        <p>hello i am csx</p>
        <Link href="/posts/first-post">tolayout</Link>
        <p></p>
        {' '}
        <Link href="/posts/second">tosecond</Link>
      </section>
    </Layout>
  );
}