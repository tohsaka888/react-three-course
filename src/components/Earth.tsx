/*
 * @Author: tohsaka888
 * @Date: 2022-07-27 08:48:09
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-27 09:35:32
 * @Description: 请填写简介
 */

import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Mesh } from 'three'

function Earth() {

  const earthRef = useRef<Mesh>(null!)

  useFrame(() => earthRef.current.rotation.y += 0.01)

  return (
    <mesh position={[10, 0, 0]} ref={earthRef}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshPhongMaterial color={0x2233ff} emissive={0x112244} />
    </mesh>
  )
}

export default Earth
