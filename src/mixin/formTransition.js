const formTransition = {
  data: function() {
    return {
      inputSpan: true,
      inputLabel: false,
      textSpan: true,
      textLabel: false
    }
  },
  methods: {
    clickInput() {
      this.inputSpan = false;
      this.inputLabel = true;
    },
    checkInput(name) {
      if(document.getElementById(name).value === '') {
        this.inputSpan = true;
        this.inputLabel = false;
      } else {
        this.inputSpan = false;
        this.inputLabel = true;
      }
    },
    clickText() {
      this.textSpan = false;
      this.textLabel = true;
    },
    checkText(name) {
      if(document.getElementById(name).value === '') {
        this.textSpan = true;
        this.textLabel = false;
      } else {
        this.textSpan = false;
        this.textLabel = true;
      }
    }
  }
}

export default formTransition;