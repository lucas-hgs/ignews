import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>30 de Abri de 2021</time>
            <strong>
              Lorem Ipsum
            </strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor nulla, dapibus ac congue vehicula, tincidunt in massa.</p>
          </a>
          <a>
            <time>30 de Abri de 2021</time>
            <strong>
              Lorem Ipsum
            </strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor nulla, dapibus ac congue vehicula, tincidunt in massa.</p>
          </a>
          <a>
            <time>30 de Abril de 2021</time>
            <strong>
              Lorem Ipsum
            </strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor nulla, dapibus ac congue vehicula, tincidunt in massa.</p>
          </a>
        </div>
      </main>
    </>
  )
}