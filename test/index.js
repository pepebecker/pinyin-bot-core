'use strict'

const botCore = require('../index')

describe('Default', () => {
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('我的猫喜欢喝牛奶').then(data => {
			data.should.equal('wǒ de māo xǐhuan hē niúnǎi')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('wǒ de māo xǐhuan hē niúnǎi').then(data => {
			data.should.equal('wo3 de mao1 xi3huan he1 niu2nai3')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('wo3 de5 mao1 xi3huan5 he1 niu2nai3').then(data => {
			data.should.equal('wǒ de māo xǐhuan hē niúnǎi')
		})
	})
})

describe('Pinyin (/p)', () => {
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/p 我的猫喜欢喝牛奶').then(data => {
			data.should.equal('wǒ de māo xǐhuan hē niúnǎi')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/p wǒ de māo xǐhuan hē niúnǎi').then(data => {
			data.should.equal('wo3 de mao1 xi3huan he1 niu2nai3')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/p wo3 de5 mao1 xi3huan5 he1 niu2nai3').then(data => {
			data.should.equal('wǒ de māo xǐhuan hē niúnǎi')
		})
	})
})

describe('Pinyin (/pinyin)', () => {
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/pinyin 我的猫喜欢喝牛奶').then(data => {
			data.should.equal('wǒ de māo xǐhuan hē niúnǎi')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/pinyin wǒ de māo xǐhuan hē niúnǎi').then(data => {
			data.should.equal('wo3 de mao1 xi3huan he1 niu2nai3')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/pinyin wo3 de5 mao1 xi3huan5 he1 niu2nai3').then(data => {
			data.should.equal('wǒ de māo xǐhuan hē niúnǎi')
		})
	})
})

describe('Split (/s)', () => {
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/s wodemaoxihuanheniunai').then(data => {
			data.should.equal('wo de mao xi huan he niu nai')
		})
	})
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/s wǒdemāoxǐhuānhēniúnǎi').then(data => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/s wo3demao1xi3huan1he1niu2nai3').then(data => {
			data.should.equal('wo3 de mao1 xi3 huan1 he1 niu2 nai3')
		})
	})
})

describe('Split (/split)', () => {
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/split wodemaoxihuanheniunai').then(data => {
			data.should.equal('wo de mao xi huan he niu nai')
		})
	})
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/split wǒdemāoxǐhuānhēniúnǎi').then(data => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/split wo3demao1xi3huan1he1niu2nai3').then(data => {
			data.should.equal('wo3 de mao1 xi3 huan1 he1 niu2 nai3')
		})
	})
})
