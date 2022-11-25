const generate = (parameters: any): string => {
	const { length, enableUppercase, enableNumbers, enableSymbols } = parameters

	const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
	const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0'
	const numericalChars = '123456789'
	const symbolChars = '!@#$%^&*()[]{}/<>'

	// set source charset according to options
	let sourceCharset = lowercaseChars
	if (enableUppercase) sourceCharset += uppercaseChars
	if (enableNumbers) sourceCharset += numericalChars
	if (enableSymbols) sourceCharset += symbolChars

	// generate password from source charset
	let password = ''
	for (let i = 0; i < length; i++) {
		password += sourceCharset.charAt(Math.random() * sourceCharset.length)
	}

	return password
}

export default generate
