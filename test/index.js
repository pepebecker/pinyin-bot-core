'use strict'

const botCore = require('../index')

describe('Default', () => {
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('我的猫喜欢喝牛奶').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('wǒ de māo xǐ huān hē niú nǎi').then((data) => {
			data.should.equal('wo3 de mao1 xi3 huan1 he1 niu2 nai3')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('wo3 de mao1 xi3 huan1 he1 niu2 nai3').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
})

describe('Pinyin (/p)', () => {
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/p 我的猫喜欢喝牛奶').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/p wǒ de māo xǐ huān hē niú nǎi').then((data) => {
			data.should.equal('wo3 de mao1 xi3 huan1 he1 niu2 nai3')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/p wo3 de mao1 xi3 huan1 he1 niu2 nai3').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
})

describe('Pinyin (/pinyin)', () => {
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/pinyin 我的猫喜欢喝牛奶').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/pinyin wǒ de māo xǐ huān hē niú nǎi').then((data) => {
			data.should.equal('wo3 de mao1 xi3 huan1 he1 niu2 nai3')
		})
	})
	it('should convert characters to Pinyin', () => {
		return botCore.processMessage('/pinyin wo3 de mao1 xi3 huan1 he1 niu2 nai3').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
})

describe('Split (/s)', () => {
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/s wodemaoxihuanheniunai').then((data) => {
			data.should.equal('wo de mao xi huan he niu nai')
		})
	})
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/s wǒdemāoxǐhuānhēniúnǎi').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/s wo3demao1xi3huan1he1niu2nai3').then((data) => {
			data.should.equal('wo3 de mao1 xi3 huan1 he1 niu2 nai3')
		})
	})
})

describe('Split (/split)', () => {
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/split wodemaoxihuanheniunai').then((data) => {
			data.should.equal('wo de mao xi huan he niu nai')
		})
	})
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/split wǒdemāoxǐhuānhēniúnǎi').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		})
	})
	it('should split the text into the correct words', () => {
		return botCore.processMessage('/split wo3demao1xi3huan1he1niu2nai3').then((data) => {
			data.should.equal('wo3 de mao1 xi3 huan1 he1 niu2 nai3')
		})
	})
})

describe('Hanzi (/h)', () => {
	it('should get the right information about a Chinese character', () => {
		return botCore.processMessage('/h 乐').then((data) => {
			const lines = data.split('\n')
			lines[0].should.equal('Character: 乐')
			lines[1].should.equal('Pinyin: lè')
			lines[2].should.equal('Cangjie: HVD : 竹女木')
			lines[3].should.equal('Strokes: 5')
			lines[4].should.equal('Definition: happy, glad; enjoyable; music')
		})
	})
})
