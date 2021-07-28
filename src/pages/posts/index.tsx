import { GetStaticProps } from 'next';

import React from 'react';
import Head from 'next/head';

import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href=''>
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur amet recusandae porro similique maxime non iusto
              provident sed hic quis labore architecto, blanditiis modi
              consequatur? Odio consequuntur deserunt a eveniet.
            </p>
          </a>
          <a href=''>
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur amet recusandae porro similique maxime non iusto
              provident sed hic quis labore architecto, blanditiis modi
              consequatur? Odio consequuntur deserunt a eveniet.
            </p>
          </a>
          <a href=''>
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur amet recusandae porro similique maxime non iusto
              provident sed hic quis labore architecto, blanditiis modi
              consequatur? Odio consequuntur deserunt a eveniet.
            </p>
          </a>
          <a href=''>
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur amet recusandae porro similique maxime non iusto
              provident sed hic quis labore architecto, blanditiis modi
              consequatur? Odio consequuntur deserunt a eveniet.
            </p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
