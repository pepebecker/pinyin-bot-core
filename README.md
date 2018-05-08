# Pinyin Bot Core

[![npm version](https://img.shields.io/npm/v/pinyin-bot-core.svg)](https://www.npmjs.com/package/pinyin-bot-core)
[![Travis Build Status](https://travis-ci.org/pepebecker/pinyin-bot-core.svg)](https://travis-ci.org/pepebecker/pinyin-bot-core)
[![Greenkeeper badge](https://badges.greenkeeper.io/pepebecker/pinyin-bot-core.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/pepebecker/pinyin-bot-core.svg)](https://david-dm.org/pepebecker/pinyin-bot-core)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/pinyin-bot-core.svg)](https://david-dm.org/pepebecker/pinyin-bot-core#info=devDependencies)
[![MIT-licensed](https://img.shields.io/github/license/pepebecker/pinyin-bot-core.svg)](https://opensource.org/licenses/MIT)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install pinyin-bot-core
```

## Usage

```js
const botCore = require('pinyin-bot-core')

// Default
botCore.processMessage('你的中文很好啊')
.then(console.log)  // nǐ de zhōng wén hěn hǎo a

// Pinyin (/p | /pinyin)
botCore.processMessage('/p 你的中文很好啊')
.then(console.log)  // nǐ de zhōng wén hěn hǎo a

botCore.processMessage('/p nǐ de zhōng wén hěn hǎo a')
.then(console.log)  // ni3 de zhong1 wen2 hen3 hao3 a

botCore.processMessage('/p ni3 de zhong1 wen2 hen3 hao3 a')
.then(console.log)  // nǐ de zhōng wén hěn hǎo a

// Split (/s | /split)
botCore.processMessage('/s nidezhongwenhenhaoa')
.then(console.log)  // ni de zhong wen hen hao a

botCore.processMessage('/s nǐdezhōngwénhěnhǎoa')
.then(console.log)  // nǐ de zhōng wén hěn hǎo a

botCore.processMessage('/s ni3dezhong1wen2hen3hao3a')
.then(console.log)  // ni3 de zhong1 wen2 hen3 hao3 a
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`zhuyin`](https://github.com/pepebecker/zhuyin)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hsk-words`](https://github.com/pepebecker/hsk-words)
- [`cedict`](https://github.com/pepebecker/cedict)
- [`mdbg`](https://github.com/pepebecker/mdbg)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-rest`](https://github.com/pepebecker/pinyin-rest)
- [`pinyin-api`](https://github.com/pepebecker/pinyin-api)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)
- [`pinyin-line`](https://github.com/pepebecker/pinyin-line)
- [`pinyin-chrome`](https://github.com/pepebecker/pinyin-chrome)
- [`pinyin-cli`](https://github.com/pepebecker/pinyin-cli)
- [`hanzi-cli`](https://github.com/pepebecker/hanzi-cli)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-bot-core/issues).
