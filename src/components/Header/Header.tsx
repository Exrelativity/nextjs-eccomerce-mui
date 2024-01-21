"use client";
import React, { CSSProperties } from 'react'
import HeaderTop from './HeaderTop'
import HeaderBody from './HeaderBody'

type Props = {
  className?: String;
  style?: CSSProperties;
}

function Header({ className, style }: Props) {
  return (
    <>
      <HeaderTop />
      <HeaderBody className={className} style={style} />
    </>
  )
}

export default Header