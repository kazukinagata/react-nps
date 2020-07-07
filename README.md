# @kazukinagata/react-nps

> Compnent for gathering Net Promoter Score surveys. Created with [create-react-library](https://github.com/transitive-bullshit/create-react-library).

[![NPM](https://img.shields.io/npm/v/@kazukinagata/react-nps.svg)](https://www.npmjs.com/package/@kazukinagata/react-nps) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @kazukinagata/react-nps
```
or
```bash
yarn add @kazukinagata/react-nps
```

## Usage

```tsx
import React, { Component } from 'react'

import NPS from '@kazukinagata/react-nps'
import '@kazukinagata/react-nps/dist/index.css'

const Example = () => {
  const [score, setScore] = React.useState<number | null>(null)
  const [dismissed, setDismissed] = React.useState(false)

  return (
    <NPS
      score={score}
      dismissed={dismissed}
      onSubmit={(score) => {console.log(`clicked ${score}`); setScore(score)}}
      onDismissed={() => setDismissed(true)}
    />
  )
}
```

## License

MIT © [kazukinagata](https://github.com/kazukinagata)

## Thanks
Initially inspired by [react-nps-input](https://github.com/SamyPesse/react-nps-input)
