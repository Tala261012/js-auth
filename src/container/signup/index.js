import {
  Form,
  REG_EXP_EMAIL,
  REG_EXP_PASSWORD,
} from '../../script/form'

class SignupForm extends Form {
  // в этом объекте будут все данные одного пользователя

  // тут - названия полей в верстке
  FIELD_NAME = {
    EMAIL: 'email',
    PASSWORD: 'password',
    PASSWORD_AGAIN: 'passwordAgain',
    ROLE: 'role',
    IS_CONFIRM: 'isConfirm',
  }
  // тут - заготовленные тексты на случай ошибок при валидации
  FIELD_ERROR = {
    IS_EMPTY: 'Введите значение в поле',
    IS_BIG: 'Слишком длинное значение, уберите лишнее',
    EMAIL: 'Введите корректное значение e-mail адреса',
    PASSWORD:
      'Пароль должен состоять не менее, чем из 8 символов, включая хотя бы одну цифру, строчную и заглавную букву.',
    PASSWORD_AGAIN:
      'Ваш второй пароль не совпадает с первым.',
    NOT_CONFIRM: 'Вы не согласились с правилами.',
    ROLE: 'Вы не выбрали роль.',
  }

  validate = (name, value) => {
    if (String(value).length < 1) {
      return this.FIELD_ERROR.IS_EMPTY
    }

    if (String(value).length > 20) {
      return this.FIELD_ERROR.IS_BIG
    }

    if (name === this.FIELD_NAME.EMAIL) {
      if (!REG_EXP_EMAIL.test(String(value))) {
        return this.FIELD_ERROR.EMAIL
      }
    }

    if (name === this.FIELD_NAME.PASSWORD) {
      if (!REG_EXP_PASSWORD.test(String(value))) {
        return this.FIELD_ERROR.PASSWORD
      }
    }

    if (name === this.FIELD_NAME.PASSWORD_AGAIN) {
      if (
        String(value) !==
        this.value[this.FIELD_NAME.PASSWORD]
      ) {
        return this.FIELD_ERROR.PASSWORD_AGAIN
      }
    }

    if (name === this.FIELD_NAME.ROLE) {
      // let temp = Object.entries(User.USER_ROLE)
      // let elem = temp.find((arr) => arr[1] === value)
      // if (!elem) {
      //   return this.FIELD_ERROR.ROLE
      // }

      if (isNaN(value)) {
        return this.FIELD_ERROR.ROLE
      }
    }

    if (name === this.FIELD_NAME.IS_CONFIRM) {
      // if (!value) {
      //   return this.FIELD_ERROR.NOT_CONFIRM
      // }

      if (Boolean(value) !== true) {
        return this.FIELD_ERROR.NOT_CONFIRM
      }
    }
  }

  // будет на кнопке, для отправки данных на сервер
  submit = () => {
    this.checkDisabled()

    console.log(this.value)
  }
}

window.signupForm = new SignupForm()
