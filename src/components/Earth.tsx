/*
 * @Author: tohsaka888
 * @Date: 2022-07-27 08:48:09
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-27 11:22:45
 * @Description: 请填写简介
 */

import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { AxesHelper, Material, Mesh } from 'three'

function Earth() {

  const earthRef = useRef<Mesh>(null!)
  const axesRef = useRef<AxesHelper>(null!)

  useFrame(() => earthRef.current.rotation.y += 0.01)

  useEffect(() => {
    const material = axesRef.current.material as Material
    material.depthTest = false
  }, [])

  return (
    <mesh position={[10, 0, 0]} ref={earthRef}>
      <axesHelper renderOrder={1} args={[2]} ref={axesRef} />
      <sphereGeometry args={[1, 6, 6]} />
      <meshPhongMaterial color={0x2233ff} emissive={0x112244} />
    </mesh>
  )
}

export default Earth
