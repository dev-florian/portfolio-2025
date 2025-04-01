"use client"

import type {TitleHeaderBlock as TitleHeaderBlockProps} from 'src/payload-types'

import { motion, animate, stagger, AnimatePresence } from 'framer-motion';
import { splitText } from "motion-plus-dom"
import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';

import RichText from "@/components/RichText";

type Props = {
  className?: string
} & TitleHeaderBlockProps
export const TitleHeaderBlock: React.FC<Props> = ({ className, title, subTitle }) => {

  const transition = { duration: 3, yoyo: Infinity, ease: "easeInOut" }
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {

    window.addEventListener('scroll', e => {
      window.scrollY < 50 ? setIsVisible(true) : setIsVisible(false)
    })

    const containerRefs = document.querySelectorAll('.titleheader .title p')
    containerRefs.forEach(containerRef => {



      if (!containerRef) return

      const { chars } = splitText(
        containerRef!
      )
      const staggerDelay = 0.15

      animate(
        chars,
        { y: [-10, 10] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(
            staggerDelay,
            { startDelay: -staggerDelay * 10 }
          ),
        }
      )
    })
    }, [])

  return (
    <div className="titleheader pt-10 pb-10">
      {title && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
        >
          <div className="title">
            <RichText className="content wavy" data={title} enableGutter={false}/>
          </div>
        </motion.div>
      )}
      {subTitle && (
        <div className="subTitle">
          <RichText className="content" data={subTitle} enableGutter={false}/>
        </div>
      )}

      <div className="spline-wrapper">
      <Spline scene="/spline/smartphone.splinecode"
      />
      </div>


        {isVisible ? (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            key="scroll-btn">
            <div>
              <div className="scroll-down-btn">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={transition}
                    id="circlePath" fill="none" stroke="#ffffff" d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        "/>
                </svg>
              </div>
            </div>
          </motion.div>
        ) : null}
    </div>
  )
}
