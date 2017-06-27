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

// Default
botCore.processMessage('你的中文很好啊')
.then(console.log)  // nǐ de zhōng wén hěn hǎo a
.catch(console.error)

// Pinyin (/p | /pinyin)
botCore.processMessage('/p 你的中文很好啊')
.then(console.log)  // nǐ de zhōng wén hěn hǎo a
.catch(console.error)

botCore.processMessage('/p nǐ de zhōng wén hěn hǎo a')
.then(console.log)  // ni3 de zhong1 wen2 hen3 hao3 a
.catch(console.error)

botCore.processMessage('/p ni3 de zhong1 wen2 hen3 hao3 a')
.then(console.log)  // nǐ de zhōng wén hěn hǎo a
.catch(console.error)

// Split (/s | /split)
botCore.processMessage('/s nidezhongwenhenhaoa')
.then(console.log)  // ni de zhong wen hen hao a
.catch(console.error)

botCore.processMessage('/s nǐdezhōngwénhěnhǎoa')
.then(console.log)  // nǐ de zhōng wén hěn hǎo a
.catch(console.error)

botCore.processMessage('/s ni3dezhong1wen2hen3hao3a')
.then(console.log)  // ni3 de zhong1 wen2 hen3 hao3 a
.catch(console.error)

// Hanzi (/h | /hanzi)
botCore.processMessage('/h 乐')
.then(console.log)
.catch(console.error)
// Character: 乐
// Pinyin: lè
// Cangjie: HVD : 竹女木
// Strokes: 5
// Definition: happy, glad; enjoyable; music
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hsk-words`](https://github.com/pepebecker/hsk-words)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-rest`](https://github.com/pepebecker/pinyin-rest)
- [`pinyin-api`](https://github.com/pepebecker/pinyin-api)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-bot-core/issues).