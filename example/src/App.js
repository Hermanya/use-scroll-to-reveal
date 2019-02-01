import React from 'react'

import useMyHook from 'use-scroll-to-reveal'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App