var expect = require('chai').expect;

var numberToKorean = require('../index').numberToKorean;

describe('Number To Korean', function() {

    it('천단위까지 처리 가능해야 한다', function() {
        expect(numberToKorean(1)).to.equal('1');
        expect(numberToKorean(21)).to.equal('2십1');
        expect(numberToKorean(321)).to.equal('3백2십1');
        expect(numberToKorean(4321)).to.equal('4천3백2십1');
        expect(numberToKorean(4001)).to.equal('4천1');
        expect(numberToKorean(3000)).to.equal('3천');
        expect(numberToKorean(30000)).to.equal('3만');
    });

    it('천만단위까지 처리 가능해야 한다', function() {
        expect(numberToKorean(54321)).to.equal('5만4천3백2십1');
        expect(numberToKorean(654321)).to.equal('6십5만4천3백2십1');
        expect(numberToKorean(7654321)).to.equal('7백6십5만4천3백2십1');
        expect(numberToKorean(87654321)).to.equal('8천7백6십5만4천3백2십1');
        expect(numberToKorean(80000000)).to.equal('8천만');
        expect(numberToKorean(80000300)).to.equal('8천만3백');
        expect(numberToKorean(80015300)).to.equal('8천1만5천3백');
    });

    it('천억단위까지 처리 가능해야 한다', function() {
        expect(numberToKorean(980000300)).to.equal('9억8천만3백');
        expect(numberToKorean(9180000300)).to.equal('9십1억8천만3백');
        expect(numberToKorean(99180000300)).to.equal('9백9십1억8천만3백');
        expect(numberToKorean(599180000300)).to.equal('5천9백9십1억8천만3백');
    });

    it('천조단위까지 처리 가능해야 한다', function() {
        expect(numberToKorean(1599180000300)).to.equal('1조5천9백9십1억8천만3백');
        expect(numberToKorean(21599180000300)).to.equal('2십1조5천9백9십1억8천만3백');
        expect(numberToKorean(321599180000300)).to.equal('3백2십1조5천9백9십1억8천만3백');
        expect(numberToKorean(4321599180000300)).to.equal('4천3백2십1조5천9백9십1억8천만3백');
    });

    it('1은 십과 백에서 생략해야 한다', function() {
        expect(numberToKorean(1)).to.equal('1');
        expect(numberToKorean(11)).to.equal('십1');
        expect(numberToKorean(121)).to.equal('백2십1');
        expect(numberToKorean(1121)).to.equal('천백2십1');
        expect(numberToKorean(1111)).to.equal('천백십1');
        expect(numberToKorean(11111)).to.equal('1만천백십1');
        expect(numberToKorean(111111)).to.equal('십1만천백십1');
        expect(numberToKorean(1111111)).to.equal('백십1만천백십1');
        expect(numberToKorean(21111111)).to.equal('2천백십1만천백십1');
        expect(numberToKorean(1599180000300)).to.equal('1조5천9백9십1억8천만3백');
    });

});
