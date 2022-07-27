/*
 * @Author: tohsaka888
 * @Date: 2022-07-27 09:21:58
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-27 09:22:58
 * @Description: 请填写简介
 */
import React, { useEffect, useState } from 'react'

function useScreenSize() {

  const [screenSize, setScreenSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    })

    return () => {
      window.removeEventListener('resize', () => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight })
      })
    }
  }, [])

  return screenSize
}

export default useScreenSize