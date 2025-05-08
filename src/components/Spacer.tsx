import React from 'react'

export function ColumnSpace({height}: {height: number}) {
  return (
    <div className={`mb-[${height}px] w-[0px]`}></div>
  )
}

export function RowSpace({width}: {width: number}) {
    return (
      <div className={`w-[${width}px] h-[0px]`}></div>
    )
  }
