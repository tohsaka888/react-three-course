/*
 * @Author: tohsaka888
 * @Date: 2022-07-27 08:48:40
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-28 09:20:01
 * @Description: 请填写简介
 */

import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { AxesHelper, GridHelper, Material, Mesh } from 'three'
import Earth from './Earth'

function Sun() {
  const sunRef = useRef<Mesh>(null!)
  const axesRef = useRef<AxesHelper>(null!)
  const gridRef = useRef<GridHelper>(null!)

  useFrame(() => {
    sunRef.current.rotation.y += 0.01
  })

  useEffect(() => {
    const axesMaterial = axesRef.current.material as Material
    axesMaterial.depthTest = false
    const gridMaterial = gridRef.current.material as Material
    gridMaterial.depthTest = false
  }, [])

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[5, 16, 16]} />
      <meshPhongMaterial emissive={0xffff00} />
      <axesHelper renderOrder={1} ref={axesRef} args={[6]} />
      <gridHelper args={[50, 50]} renderOrder={1} ref={gridRef} />
      <Earth />
    </mesh>
  )
}

export default Sun