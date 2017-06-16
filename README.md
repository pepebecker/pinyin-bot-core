# Pinyin Bot Core

[![Travis Build Status](https://travis-ci.org/pepebecker/pinyin-bot-core.svg)](https://travis-ci.org/pepebecker/pinyin-bot-core)
[![Coverage Status](https://coveralls.io/repos/github/pepebecker/pinyin-bot-core/badge.svg)](https://coveralls.io/github/pepebecker/pinyin-bot-core)
[![dependency status](https://img.shields.io/david/pepebecker/pinyin-bot-core.svg)](https://david-dm.org/pepebecker/pinyin-bot-core)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/pinyin-bot-core.svg)](https://david-dm.org/pepebecker/pinyin-bot-core#info=devDependencies)
[![MIT-licensed](https://img.shields.io/github/license/pepebecker/pinyin-bot-core.svg)](https://opensource.org/licenses/MIT)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install pepebecker/pinyin-bot-core
```

## Usage

```js
const botCore = require('pinyin-bot-core')

botCore.processMessage('我是德国人', (response) => {
  console.log(response) // wǒ shì dé guó rén
}

botCore.processMessage('/p 你的中文很好啊', (response) => {
  console.log(response) // nǐ de zhōng wén hěn hǎo a
}

botCore.processMessage('/p nǐ de zhōng wén hěn hǎo a', (response) => {
  console.log(response) // ni3 de zhong1 wen2 hen3 hao3 a
}

botCore.processMessage('/p ni3 de zhong1 wen2 hen3 hao3 a', (response) => {
  console.log(response) // nǐ de zhōng wén hěn hǎo a
}

botCore.processMessage('/s wǒdemāoxǐhuānhēniúnǎi', (response) => {
  console.log(response) // wǒ de māo xǐ huān hē niú nǎi
}
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-bot-core/issues).