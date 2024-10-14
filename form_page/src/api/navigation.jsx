import React from 'react'
import { useNavigation } from 'react-router-dom'
function navigation() {
const naivgation = useNavigation()
naivgation("/home")
  return (
    <div>
      
    </div>
  )
}

export default navigation
