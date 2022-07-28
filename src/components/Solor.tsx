/*
 * @Author: tohsaka888
 * @Date: 2022-07-27 08:49:17
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-28 09:14:48
 * @Description: 请填写简介
 */

import React from 'react'
import { Canvas } from '@react-three/fiber'
import Sun from './Sun'
import useScreenSize from '../hooks/useScreenSize'

function Solor() {
  const { width, height } = useScreenSize()

  // const cameraRef = useRef<PerspectiveCamera>(null!)

  // useEffect(() => {
  //   if (cameraRef.current) {
  //     cameraRef.current.lookAt(0, 0, 0)
  //   }
  // }, [])
  return (
    <Canvas
      camera={{
        position: [0, 40, -50],
        up: [0, 0, 1],
        fov: 40,
        aspect: width / height,
        near: 0.1,
        far: 1000
      }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0)
      }}>
      <scene>
        {/* 创建一个点光源 */}
        <pointLight color={0xffffff} intensity={3} />
        <Sun />
        {/* 这么放置地球不会绕着太阳转 */}
        {/* <Earth /> */}
      </scene>
    </Canvas >
  )
}

export default Solor
