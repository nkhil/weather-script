const { convertKelvinToCelsius } = require('../src/utils/temperature')
const { capitalise } = require('../src/utils/capitalise')

describe('Utils', () => {
  describe('#convertKelvinToCelsius', () => {
    it('Can convert Kelvin to Celcius', () => {
      expect(convertKelvinToCelsius(23)).toBe("-250.1")
      expect(convertKelvinToCelsius(50)).toBe("-223.1")
      expect(convertKelvinToCelsius(100)).toBe("-173.1")
      expect(convertKelvinToCelsius(300)).toBe("26.9")
    })
  })

  describe('#capitalise', () => {
    it('Can capitalise the first character of a given string', () => {
      expect(capitalise('hello')).toBe('Hello')
      expect(capitalise('')).toBe('')
      expect(() => capitalise(undefined)).toThrow('Invalid parameter provided to capitalize')
    })
  })
})
