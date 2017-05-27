'use strict'

const pinyinOrHanzi = require('pinyin-or-hanzi')
const convert = require('pinyin-convert')
const findHanzi = require('find-hanzi')
const split = require('pinyin-split')
const so = require('so')

const createDescription = (data) => {
	let content = ''
	for (let item of data) {
		if (item.hanzi) content += `Character: ${item.hanzi}\n`
		if (item.pinyin) content += `Pinyin: ${item.pinyin}\n`
		if (item.cangjie) content += `Cangjie: ${item.cangjie} : ${item.cangjie2}\n`
		if (item.strokes) content += `Strokes: ${item.strokes}\n`
		if (item.definition) content += `Definition: ${item.definition}\n`
		content += '\n'
	}
	return content
}

const sendHanzi = (text, callback) => {
	pinyinOrHanzi(text).then((type) => {
		if (type == 1) {
			so(function*() {
				let response = ''
				const characters = text.split('')
				for (let char of characters) {
					yield findHanzi(char).then((data) => {
						response += createDescription(data)
					}).catch(callback)
				}
				if (response.replace(/\n\ /g, '') != '') {
					callback(response)
				}
			})()
		} else {
			findHanzi(text).then((data) => {
				const response = createDescription(data)

				if (response.replace(/\n\ /g, '') != '') {
					callback(response)
				}
			}).catch(callback)
		}
	}).catch(callback)
}

const sendPinyin = (text, callback) => {
	pinyinOrHanzi(text).then((type) => {
		if (type > 0) {
			convert(text, {keepSpaces: true})
			.then(callback)
			.catch(callback)
		}
	}).catch(callback)
}

const sendSplitted = (text, callback) => {
	pinyinOrHanzi(text).then((type) => {
		if (type !== 1) {
			split(text).then((data) => {
				callback(data.join(' '))
			}).catch(callback)
		}
	}).catch(callback)
}

const processMessage = (text, callback) => {
	if (/^\/(s|split) /.test(text))
	{
		console.log('Received command:', text)
		text = text.replace('/split ', '')
		text = text.replace('/s ', '')
		sendSplitted(text, callback)
	}
	else if (/^\/(p|pinyin) /.test(text))
	{
		console.log('Received command:', text)
		text = text.replace('/pinyin ', '')
		text = text.replace('/p ', '')
		sendPinyin(text, callback)
	}
	else if (/^\/(h|hanzi) /.test(text))
	{
		console.log('Received command:', text)
		text = text.replace('/hanzi ', '')
		text = text.replace('/h ', '')
		sendHanzi(text, callback)
	}
	else {
		console.log('Received message:', text)
		sendPinyin(text, callback)
	}
}

module.exports = {processMessage}
