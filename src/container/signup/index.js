// import '../../script/test'

class SignupForm {
  // в этом объекте будут все данные одного пользователя
  //именем ключа будет имя инпута name, значением - его value
  static value = {}

  static validate = (name, value) => {
    return true
  }

  // будет на кнопке, для отправки данных на сервер
  static submit = () => {
    console.log(this.value)
  }

  static change = (name, value) => {
    console.log(name, value)
    if (this.validate(name, value)) this.value[name] = value
  }
}

window.signupForm = SignupForm
