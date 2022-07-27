/*
 * @Author: tohsaka888
 * @Date: 2022-07-27 08:48:40
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-27 11:50:56
 * @Description: 请填写简介
 */

import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { AxesHelper, Material, Mesh } from 'three'
import Earth from './Earth'

function Sun() {
  const sunRef = useRef<Mesh>(null!)
  const axesRef = useRef<AxesHelper>(null!)

  useFrame(() => {
    sunRef.current.rotation.y += 0.01
  })

  useEffect(() => {
    const material = axesRef.current.material as Material
    material.depthTest = false
  }, [])

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[5, 6, 6]} />
      <meshPhongMaterial emissive={0xffff00} />
      <axesHelper renderOrder={1} ref={axesRef} args={[6]} />
      <Earth />
    </mesh>
  )
}

export default Sun