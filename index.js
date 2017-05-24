'use strict'

const pinyinOrHanzi = require('pinyin-or-hanzi')
const convert = require('pinyin-convert')
const findHanzi = require('find-hanzi')
const split = require('pinyin-split')
const so = require('so')

let platform = 'telegram'

const setPlatform = (_platform) => {
	platform = _platform.toLowerCase()
}

const send = (text, replyObject) => {
	switch (platform) {
	case 'telegram':
		replyObject.reply(text)
		console.log(`Sent message: ${text}`)
		break
	case 'messenger':
		replyObject({text}, (err) => {
			if (err) {
				console.error(err)
				process.exit(1)
			}

			console.log(`Sent message: ${text}`)
		})
		break
	default:
		console.error('Unsupported platform:', platform)
		console.log('Supported platforms are: telegram, messenger')
	}
}

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

const sendHanzi = (text, replyObject) => {
	pinyinOrHanzi(text).then((type) => {
		if (type == 1) {
			so(function*() {
				let response = ''
				const characters = text.split('')
				for (let char of characters) {
					yield findHanzi(char).then((data) => {
						response += createDescription(data)
					})
				}
				if (response.replace(/\n\ /g, '') != '') {
					send(response, replyObject)
				}
			})()
		} else {
			findHanzi(text).then((data) => {
				const response = createDescription(data)

				if (response.replace(/\n\ /g, '') != '') {
					send(response, replyObject)
				}
			}).catch((err) => {
				send(err, replyObject)
			})
		}
	}).catch((error) => {
		send(error, replyObject)
	})
}

const sendPinyin = (text, replyObject) => {
	pinyinOrHanzi(text).then((type) => {
		if (type > 0) {
			convert(text, {keepSpaces: true}).then((data) => {
				send(data, replyObject)
			}).catch((err) => {
				send(err, replyObject)
			})
		}
	}).catch((err) => {
		send(err, replyObject)
	})
}

const sendSplitted = (text, replyObject) => {
	pinyinOrHanzi(text).then((type) => {
		if (type !== 1) {
			split(text).then((data) => {
				send(data.join(' '), replyObject)
			}).catch((err) => {
				send(err, replyObject)
			})
		}
	}).catch((error) => {
		send(error, replyObject)
	})
}

const processMessage = (text, replyObject) => {
	if (/^\/(s|split) /.test(text))
	{
		console.log('Received command:', text)
		text = text.replace('/split ', '')
		text = text.replace('/s ', '')
		sendSplitted(text, replyObject)
	}
	else if (/^\/(p|pinyin) /.test(text))
	{
		console.log('Received command:', text)
		text = text.replace('/pinyin ', '')
		text = text.replace('/p ', '')
		sendPinyin(text, replyObject)
	}
	else if (/^\/(h|hanzi) /.test(text))
	{
		console.log('Received command:', text)
		text = text.replace('/hanzi ', '')
		text = text.replace('/h ', '')
		sendHanzi(text, replyObject)
	}
	else {
		console.log('Received message:', text)
		sendPinyin(text, replyObject)
	}
}

module.exports = {setPlatform, processMessage}
