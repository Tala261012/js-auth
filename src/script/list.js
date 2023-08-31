// 1) Загрузка данных -> Отобразить _статус_ загрузки
// 2) Отобразить данные, которые загрузились (сделать конвертацию)
// 3) Если есть ошибка - вывести ее _статус_ через alert

export class List {
  STATE = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  }

  // будет принимать одно из трех значений из STATE
  status = null

  // данные, которые мы загрузили
  data = null

  // один элемент вёрстки
  element = null

  updateStatus = (status, data) => {
    this.status = status

    if (data) this.data = data

    // обновить element, изменить его innerHTML и верстку в зависимости от статуса
    this.updateView()
  }

  updateView = () => {}

  // загрузка данных
  loadData = async () => {}

  // конвертация данных в front-end-вид
  convertData = () => {}
}
