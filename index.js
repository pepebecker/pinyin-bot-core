'use strict'

const mdbg = require('mdbg')
const pinyinOrHanzi = require('pinyin-or-hanzi')
const convert = require('pinyin-convert')
const split = require('pinyin-split')

const getPinyin = async text => {
	const type = await pinyinOrHanzi(text)
	if (type !== 'other') {
		const data = await convert(text, { segmented: true })
		return typeof data === 'string' ? data : data.map(part => {
			if (typeof part === 'string') {
				return part
			} else {
				return part[0]
			}
		}).join('')
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
	if (char) {
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
	} else {
		return 'No definition found for ' + text
	}
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
	else if (/^\/(d|definition) /.test(text)) {
		text = text.replace('/definition ', '')
		text = text.replace('/d ', '')
		return getDefinition(text)
	}
	else if (/^\/(m|mdbg) /.test(text)) {
		text = text.replace('/mdbg ', '')
		text = text.replace('/m ', '')
		return 'https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb=' + encodeURIComponent(text)
	}
	else {
		return getPinyin(text)
	}
}

module.exports = { processMessage }
