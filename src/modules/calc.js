const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcInputs = calcBlock.querySelectorAll('input');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.querySelector('#total');


    const renderNum = (num, block) => {
        const time = 500;
        const step = 50;
        let n = 0;
        let timeTotal = Math.round(time / (num / step));
        let interval = setInterval(() => {
            n = n + step;
            if (n > num) {
                clearInterval(interval);
            } else {
                block.textContent = n;
            }

        }, timeTotal);

    };


    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        renderNum(totalValue, total);

    };

    calcInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/^\D+|\D$/g, '');
        });
    });

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare || e.target === calcCount ||
            e.target === calcDay) {
            countCalc();
        }
    });


};

export default calc;