'use strict'

const mdbg = require('mdbg')
const pinyinOrHanzi = require('pinyin-or-hanzi')
const convert = require('pinyin-convert')
const split = require('pinyin-split')

const getPinyin = async text => {
	const type = await pinyinOrHanzi(text)
	if (type !== 'other') {
		return convert(text, {keepSpaces: true})
	} else {
		return text
	}
}

const getSplitted = async text => {
	const type = await pinyinOrHanzi(text)
	if (type !== 'mandarin') {
		const data = await split(text)
		return data.join(' ')
	} else {
		return text
	}
}

const getDefinition = async text => {
	const char = await mdbg.get(text)
	let content = [char.simplified + '|' + char.traditional]
	content = content.concat(Object.keys(char.data).map(pinyin => {
		let defs = char.data[pinyin].definitions
		if (defs.join(', ').length < 80) {
			defs = defs.join(', ')
		} else {
			defs = defs.join(',\n    ')
		}
		return char.data[pinyin].mandarin + ': ' + defs
	}))
	return content.join('\n')
}

const processMessage = async text => {
	if (/^\/(s|split) /.test(text))
	{
		text = text.replace('/split ', '')
		text = text.replace('/s ', '')
		return getSplitted(text)
	}
	else if (/^\/(p|pinyin) /.test(text))
	{
		text = text.replace('/pinyin ', '')
		text = text.replace('/p ', '')
		return getPinyin(text)
	}
	else if (/^\/(d|definition) /.test(text))
	{
		text = text.replace('/definition ', '')
		text = text.replace('/d ', '')
		return getDefinition(text)
	}
	else {
		return getPinyin(text)
	}
}

module.exports = { processMessage }
