
function capitalise(string) {
	if (string === '') return ''
	if (!string) throw new Error('Invalid parameter provided to capitalize')
	return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {
	capitalise
}

