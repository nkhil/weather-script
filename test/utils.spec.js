const { convertKelvinToCelsius } = require('../src/utils/temperature');

describe('Utils', () => {
  describe('convertKelvinToCelsius', () => {
    it('Can convert Kelvin to Celcius', () => {
      expect(convertKelvinToCelsius(23)).toBe("-250.1")
      expect(convertKelvinToCelsius(50)).toBe("-223.1")
      expect(convertKelvinToCelsius(100)).toBe("-173.1")
      expect(convertKelvinToCelsius(300)).toBe("26.9")
    })
  })
})
