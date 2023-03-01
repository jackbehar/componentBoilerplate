import React from 'react'

export interface UxPinLayoutProps {
    style: React.CSSProperties,
    children?: React.ReactNode;
} 
export default function uxPinLayout({style, children}:UxPinLayoutProps) {
  return (
    <div style={style}>{children}</div>
  )
}
