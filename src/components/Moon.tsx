/*
 * @Author: tohsaka888
 * @Date: 2022-07-27 10:09:51
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-27 14:04:27
 * @Description: 请填写简介
 */

import { useFrame } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { AxesHelper, Material, Mesh } from 'three'

function Moon() {

  const axesRef = useRef<AxesHelper>(null!)
  const moonRef = useRef<Mesh>(null!)

  useEffect(() => {
    const material = axesRef.current.material as Material
    material.depthTest = false
  }, [])

  useFrame(() => moonRef.current.rotation.y += 0.01)

  return (
    <mesh position={[3, 0, 0]} ref={moonRef}>
      <sphereGeometry args={[0.5, 6, 6]} />
      <meshPhongMaterial color={0xcecece} emissive={0x222222} />
      <axesHelper renderOrder={1} ref={axesRef} args={[1]} />
    </mesh>
  )
}

export default Moon