"use client";

import type {RelatedPostsBlock as RelatedPostsBlockProps} from 'src/payload-types';

import {cn} from '@/utilities/ui';
import React, {useState, useEffect} from 'react';
import {getClientSideURL} from "@/utilities/getURL";

type Props = RelatedPostsBlockProps & {
  className?: string;
  posts?: Post[];
};

type Post = {
  id?: number,
  title?: string,
  subTitle?: string,
  slug?: string
};

export const RelatedPostsBlock: React.FC<Props> = ({className, category}) => {
  const [posts, setPosts] = useState<Post[]>([]); // Change to use state for posts

  useEffect(() => {
    const fetchPosts = async () => {
      if (typeof category === 'object') {
        try {
          const req = await fetch(`${getClientSideURL()}/api/posts?categoryId=${category.id}`);
          const res = await req.json();

          const filteredPosts = res.docs.map((post: any) => ({
            id: post.id,
            title: post.title,
            subTitle: post.subTitle,
            slug: post.slug
          }));
          setPosts(filteredPosts);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }

        if (category.id) {
          void fetchPosts();
        }
      }
    }
  }, []);

  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <div className="subtitle">{post.subTitle}</div>
            </div>
          ))}
        </div>
      ) : (
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};
