'use client'

import * as React from 'react'
import {Card, CardPostData} from "@/components/Card";
import {cn} from "@/utilities/ui";
import {useEffect} from "react";

export type Props = {
  posts: CardPostData[]
}

export const Teaser: React.FC<Props> = (props) => {
  const { posts } = props

  useEffect(() => {
    const articles = document.querySelectorAll('.archive-teaser article');

    let loop = 0;
    articles.forEach(article => {
      article.addEventListener('mouseover', ev => {
        articles.forEach(articleSub => {
          articleSub.classList.add('inactive')
          articleSub.classList.remove('active')
        })

        article.classList.remove('inactive');
        article.classList.add('active');
      })

      if(loop == 1){
        article.classList.add('active');
      }else{
        article.classList.add('inactive');
      }
      loop++;
    })
  })

  return (
    <div className={cn('archive-teaser')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card className="h-full" doc={result} relationTo="posts" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
