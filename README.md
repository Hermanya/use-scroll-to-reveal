# use-scroll-to-reveal

> React hook for using scroll to reveal components

[![NPM](https://img.shields.io/npm/v/use-scroll-to-reveal.svg)](https://www.npmjs.com/package/use-scroll-to-reveal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-scroll-to-reveal
```

## Usage

```tsx
import React, { useRef } from 'react'

import { useScrollToReveal } from 'use-scroll-to-reveal'

const Example = () => {
  const ref = useRef()
  const revealed = useScrollToReveal(ref)
  return (
    <MyCompnentThatAnimatesWhenRevealedIsTrue
      ref={ref} revealed={revealed}/>
  )
}
```

## License

MIT © [Hermanya](https://github.com/Hermanya)
