# NumberToKorean

It converts numbers to Korean. I wrote this package because I needed it. Feel free to suggest anything.

숫자를 한글로 바꿔줍니다. 이런 기능을 하는 패키지가 필요했는데 없길래 간단하게 만들어봤습니다. 건의사항이나 이슈는 언제든지 환영합니다.

## Install

```npm install --save number-to-korean```

## Usage

```
- Let's say you're using es6.

const { numberToKorean } = require('number-to-korean')
const a = 123;
const str = numberToKorean(a);
console.log(str) // 백2십3
```

## Conversion Examples

* 1 -> '1'
* 21 -> '2십1'
* 321 -> '3백2십1'
* 4321 -> '4천3백2십1'
* 4001 -> '4천1'
* 3000 -> '3천'
* 30000 -> '3만'
* 54321 -> '5만4천3백2십1'
* 654321 -> '6십5만4천3백2십1'
* 7654321 -> '7백6십5만4천3백2십1'
* 87654321 -> '8천7백6십5만4천3백2십1'
* 80000000 -> '8천만'
* 80000300 -> '8천만3백'
* 80015300 -> '8천1만5천3백'
* 980000300 -> '9억8천만3백'
* 9180000300 -> '9십1억8천만3백'
* 99180000300 -> '9백9십1억8천만3백'
* 599180000300 -> '5천9백9십1억8천만3백'
* 1599180000300 -> '1조5천9백9십1억8천만3백'
* 21599180000300 -> '2십1조5천9백9십1억8천만3백'
* 321599180000300 -> '3백2십1조5천9백9십1억8천만3백'
* 4321599180000300 -> '4천3백2십1조5천9백9십1억8천만3백'

십과 백 앞에서 1은 생략됩니다.

* 1 -> '1'
* 11 -> '십1'
* 121 -> '백2십1'
* 1121 -> '천백2십1'
* 1111 -> '천백십1'
* 11111 -> '1만천백십1'
* 111111 -> '십1만천백십1'
* 1111111 -> '백십1만천백십1'
* 21111111 -> '2천백십1만천백십1'
* 1599180000300 -> '1조5천9백9십1억8천만3백'
