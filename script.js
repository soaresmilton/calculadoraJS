function createCalculator() {
  return {
    display: document.querySelector('.display'),
    clear: document.querySelector('.btn-clear'),

    clickRecognition() {
      document.addEventListener('click', (event) => {
        const el = event.target;

        if (el.classList.contains('btn-num')) {
          this.displayValue(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (el.classList.contains('btn-del')) {
          this.deleteOne();
        }
        if (el.classList.contains('btn-eq')) {
          this.calculate();
        }
      });
    },
    init() {
      this.clickRecognition();
    },
    displayValue(value) {
      this.display.value += value
    },
    clearDisplay() {
      this.display.value = '';
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calculate() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(conta === conta * 0) {
          return this.display.value = '0';
        }
        if (!conta || conta === conta / 0) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch (error) {
        alert('Conta inválida');
      }
    }
  }
}

const calculator = createCalculator();
calculator.init();
