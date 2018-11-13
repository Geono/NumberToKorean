exports.numberToKorean = function(inputNumber) {
    const price = inputNumber.toString();
    const resultArray = [];
    for (var i = 0; i < price.length; i++) {
        const digitLocation = price.length - 1 - i;
        const ch = price.charAt(i);
        if (ch !== '0') {
            resultArray.push(ch);
        }
        switch (digitLocation % 4) {
            case 1:
                if (ch !== '0') {
                    if (ch === '1') {
                        resultArray.pop();
                    }
                    resultArray.push('십');
                }
                break;
            case 2:
                if (ch !== '0') {
                    if (ch === '1') {
                        resultArray.pop();
                    }
                    resultArray.push('백');
                }
                break;
            case 3:
                if (ch !== '0') {
                    if (ch === '1') {
                        resultArray.pop();
                    }
                    resultArray.push('천');
                }
                break;
        }
        switch (digitLocation) {
            case 4:
                resultArray.push('만');
                break;
            case 8:
                resultArray.push('억');
                break;
            case 12:
                resultArray.push('조');
                break;
        }
    }
    return resultArray.join('');
};

