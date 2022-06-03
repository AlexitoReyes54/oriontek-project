import React from 'react'
import {BlurrySquareLoader } from 'react-loaders-kit'
export default function loader() {
    const loaderProps = {
        loading: true,
        size: 275,
        duration: 2,
        colors: ["#024c7a", "#426b85", "#024c7a"],
      };

      
  return (
    <div><BlurrySquareLoader  {...loaderProps} /></div>
  )
}