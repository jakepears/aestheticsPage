'use client'
import React, { useEffect } from 'react'
import Lenis from 'lenis'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return
}

export default SmoothScroll
