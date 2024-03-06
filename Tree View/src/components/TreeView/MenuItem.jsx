import React from 'react'
import TreeView from './TreeView'

export default function MenuItem({item}) {
  return (
    <div>
      <p>{item.label}</p>
      {
        item && item.children && item.children.length?
        <TreeView menu={item.children} />
        :null
      }
    </div>
  )
}
