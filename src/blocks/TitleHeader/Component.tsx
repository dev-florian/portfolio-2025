"use client"

import type {TitleHeaderBlock as TitleHeaderBlockProps} from 'src/payload-types'
import Spline from '@splinetool/react-spline';
import React, {useEffect} from 'react'
import RichText from "@/components/RichText";

type Props = {
  className?: string
} & TitleHeaderBlockProps
export const TitleHeaderBlock: React.FC<Props> = ({className, title, subTitle}) => {


  useEffect(() => {

  }, [])

  return (
    <div className="titleheader pt-10 pb-10">
      {title && (
          <div className="title">
            <RichText className="content wavy" data={title} enableGutter={false}/>
          </div>
      )}
      {subTitle && (
        <div className="subTitle">
          <RichText className="content" data={subTitle} enableGutter={false}/>
        </div>
      )}

      <div className="spline-wrapper">
        <Spline scene="/spline/background.splinecode"/>
      </div>

      <div>
        <div className="scroll-down-btn">

        </div>
      </div>
    </div>
  )
}
