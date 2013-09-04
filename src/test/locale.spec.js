define(function(require) {
  var $ = require('jquery')
  var DateLocale = require('../main/DateLocale')

  describe('Russian localizatioon', function() {
    var locale = DateLocale.RU

    it('Years', function() {
      expect(locale.yearsLabel(1)).toEqual('1 Год')
      expect(locale.yearsLabel(2)).toEqual('2 Года')
      expect(locale.yearsLabel(3)).toEqual('3 Года')
      expect(locale.yearsLabel(4)).toEqual('4 Года')
      expect(locale.yearsLabel(5)).toEqual('5 Лет')
      expect(locale.yearsLabel(6)).toEqual('6 Лет')
      expect(locale.yearsLabel(11)).toEqual('11 Лет')
      expect(locale.yearsLabel(12)).toEqual('12 Лет')
      expect(locale.yearsLabel(20)).toEqual('20 Лет')
      expect(locale.yearsLabel(21)).toEqual('21 Год')
      expect(locale.yearsLabel(22)).toEqual('22 Года')
      expect(locale.yearsLabel(31)).toEqual('31 Год')
      expect(locale.yearsLabel(32)).toEqual('32 Года')
    })

    it('Months', function() {
      expect(locale.monthsLabel(1)).toEqual('1 Месяц')
      expect(locale.monthsLabel(2)).toEqual('2 Месяца')
      expect(locale.monthsLabel(3)).toEqual('3 Месяца')
      expect(locale.monthsLabel(4)).toEqual('4 Месяца')
      expect(locale.monthsLabel(5)).toEqual('5 Месяцев')
      expect(locale.monthsLabel(6)).toEqual('6 Месяцев')
      expect(locale.monthsLabel(11)).toEqual('11 Месяцев')
      expect(locale.monthsLabel(12)).toEqual('12 Месяцев')
      expect(locale.monthsLabel(20)).toEqual('20 Месяцев')
      expect(locale.monthsLabel(21)).toEqual('21 Месяц')
      expect(locale.monthsLabel(22)).toEqual('22 Месяца')
      expect(locale.monthsLabel(31)).toEqual('31 Месяц')
      expect(locale.monthsLabel(32)).toEqual('32 Месяца')
    })

    it('Days', function() {
      expect(locale.daysLabel(1)).toEqual('1 День')
      expect(locale.daysLabel(2)).toEqual('2 Дня')
      expect(locale.daysLabel(3)).toEqual('3 Дня')
      expect(locale.daysLabel(4)).toEqual('4 Дня')
      expect(locale.daysLabel(5)).toEqual('5 Дней')
      expect(locale.daysLabel(6)).toEqual('6 Дней')
      expect(locale.daysLabel(11)).toEqual('11 Дней')
      expect(locale.daysLabel(12)).toEqual('12 Дней')
      expect(locale.daysLabel(20)).toEqual('20 Дней')
      expect(locale.daysLabel(21)).toEqual('21 День')
      expect(locale.daysLabel(22)).toEqual('22 Дня')
      expect(locale.daysLabel(31)).toEqual('31 День')
      expect(locale.daysLabel(32)).toEqual('32 Дня')
    })

    /*
     * TODO: I don't get it
     *
    it('Hours and minuts', function() {
      expect(locale.hoursLabel(0, 1)).toEqual('1 Минута')
      expect(locale.hoursLabel(0, 2)).toEqual('2 Минуты')
      expect(locale.hoursLabel(1, 3)).toEqual('63 Минуты')
      expect(locale.hoursLabel(2, 4)).toEqual('124 Минуты')
      expect(locale.hoursLabel(0, 5)).toEqual('5 Минут')
      expect(locale.hoursLabel(1, 6)).toEqual('66 Минут')
      expect(locale.hoursLabel(0, 11)).toEqual('11 Минут')
      expect(locale.hoursLabel(1, 12)).toEqual('72 Минуты')
      expect(locale.hoursLabel(1, 20)).toEqual('80 Минут')
      expect(locale.hoursLabel(0, 21)).toEqual('21 Минута')
      expect(locale.hoursLabel(1, 22)).toEqual('82 Минуты')
    })
    */
  })
})
