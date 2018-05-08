'use strict'

const mdbg = require('mdbg')
const pinyinOrHanzi = require('pinyin-or-hanzi')
const convert = require('pinyin-convert')
const split = require('pinyin-split')
const zhuyin = require('zhuyin')

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

const getZhuyin = async text => {
	const type = await pinyinOrHanzi(text)
	if (type !== 'other') {
		const data = await convert(text, { segmented: true })
		if (typeof data === 'string') {
			return (await zhuyin.fromPinyin(data)).join(' ')
		} else {
			return Promise.all(data.map(async part => {
				if (typeof part === 'string') {
					return (await zhuyin.fromPinyin(part)).join(' ')
				} else {
					return (await zhuyin.fromPinyin(part[0])).join(' ')
				}
			}))
			.then(list => list.join(' '))
		}
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

const createDefinition = char => {
	let content = [char.simplified + '|' + char.traditional]
	content = content.concat(Object.keys(char.definitions).map(pinyin => {
		let trans = char.definitions[pinyin].translations
		if (trans.join(', ').length < 80) {
			trans = trans.join(', ')
		} else {
			trans = trans.join(',\n    ')
		}
		return char.definitions[pinyin].pinyin + ': ' + trans
	}))
	return content.join('\n')
}

const getDefinition = async text => {
	const data = await mdbg.get(text)
	if (data) {
		if (Array.isArray(data)) return data.map(createDefinition).join('\n\n')
		else return createDefinition(data)
	} else {
		return 'No definition found for ' + text
	}
}

const createDescription = char => {
	let content = [char.simplified + '|' + char.traditional]
	content = content.concat(Object.keys(char.definitions).map(pinyin => {
		let trans = char.definitions[pinyin].translations
		if (trans.join(', ').length < 80) {
			trans = trans.join(', ')
		} else {
			trans = trans.join(',\n    ')
		}
		return [
			'Pinyin: ' + char.definitions[pinyin].pinyin,
			'Zhuyin: ' + char.definitions[pinyin].zhuyin,
			'Definition: ' + trans
		].join('\n')
	}))
	return content.join('\n–––––––––––\n')
}

const getDescription = async text => {
	const data = await mdbg.get(text)
	if (data) {
		if (Array.isArray(data)) return data.map(createDescription).join('\n\n')
		else return createDescription(data)
	} else {
		return 'No description found for ' + text
	}
}

const processMessage = async text => {
	if (/^\/(s|split) /.test(text)) {
		text = text.replace('/split ', '')
		text = text.replace('/s ', '')
		return getSplitted(text)
	}
	else if (/^\/(p|pinyin) /.test(text)) {
		text = text.replace('/pinyin ', '')
		text = text.replace('/p ', '')
		return getPinyin(text)
	}
	else if (/^\/(z|zhuyin) /.test(text)) {
		text = text.replace('/zhuyin ', '')
		text = text.replace('/z ', '')
		return getZhuyin(text)
	}
	else if (/^\/(d|definition) /.test(text)) {
		text = text.replace('/definition ', '')
		text = text.replace('/d ', '')
		return getDefinition(text)
	}
	else if (/^\/(h|hanzi) /.test(text)) {
		text = text.replace('/hanzi ', '')
		text = text.replace('/h ', '')
		return getDescription(text)
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
