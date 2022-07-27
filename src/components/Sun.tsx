/*
 * @Author: tohsaka888
 * @Date: 2022-07-27 08:48:40
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-27 09:37:27
 * @Description: 请填写简介
 */

import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Mesh } from 'three'
import Earth from './Earth'

function Sun() {
  const sunRef = useRef<Mesh>(null!)

  useFrame(() => {
    sunRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[5, 6, 6]} />
      <meshPhongMaterial emissive={0xffff00} />
      <Earth />
    </mesh>
  )
}

export default Sun