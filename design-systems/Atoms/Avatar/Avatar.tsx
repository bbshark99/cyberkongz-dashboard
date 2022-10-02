import React from 'react'
import Image from 'next/image'

export interface AvatarProps {
  src: string
  alt: string
  className?: string
  width: number
  height: number
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, className: _className = '', width, height }) => {
  const className = [_className].join(' ')

  return <Image className={className} src={src} alt={alt} width={width} height={height} />
}
