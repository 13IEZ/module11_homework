
//функция генерирующая случайное число от 1 до 10. Шанс на успех 20%
function random(num) {
	let result
	let random = Math.floor(Math.random() * 5 + 1);
	if (num === random) {
		result = +num
	} else {
		result = `Неудача, ты выбрал ${num}`
	}
	return result
}
module.exports = random;
