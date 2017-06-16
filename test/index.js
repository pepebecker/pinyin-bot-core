'use strict'

const botCore = require('../index')

describe('Default', () => {
	it('should convert characters to Pinyin', (done) => {
		botCore.processMessage('我的猫喜欢喝牛奶', (data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
			done()
		})
	})
})

describe('Pinyin (/p)', () => {
	it('should convert characters to Pinyin', (done) => {
		botCore.processMessage('/p 我的猫喜欢喝牛奶', (data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
			done()
		})
	})
})

describe('Pinyin (/pinyin)', () => {
	it('should convert characters to Pinyin', (done) => {
		botCore.processMessage('/pinyin 我的猫喜欢喝牛奶', (data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
			done()
		})
	})
})

describe('Split (/s)', () => {
	it('should split the text into the correct words', (done) => {
		botCore.processMessage('/s wodemaoxihuanheniunai', (data) => {
			data.should.deepEqual('wo de mao xi huan he niu nai')
			done()
		})
	})
})

describe('Split (/split)', () => {
	it('should split the text into the correct words', (done) => {
		botCore.processMessage('/split wodemaoxihuanheniunai', (data) => {
			data.should.deepEqual('wo de mao xi huan he niu nai')
			done()
		})
	})
})
