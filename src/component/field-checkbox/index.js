// class CheckBox {
//   static value = false

//   static toggle = (target) => {
//     target.classList.toggle('checkbox__icon--off')
//     target.classList.toggle('checkbox__icon--on')

//     this.value = !this.value
//     console.log(this.value)
//   }
// }

// window.checkBox = CheckBox

class FieldCheckbox {
  static toggle = (target) => {
    target.toggleAttribute('active')
  }
}

window.fieldCheckbox = FieldCheckbox
