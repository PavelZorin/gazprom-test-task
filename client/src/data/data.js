const dataAnalytics = {
  1: [
    {
      key: '1',
      item: '1',
      journalNumber: 'ЖОС-7',
      typeOfEquipment: 'Труба',
      errorNumber: '404',
      plot: '2/89',
      breakdownCause: 'Устала',
      repairTeam: 'БУП-3',
    },
    {
      key: '2',
      item: '2',
      journalNumber: 'ЖОС-12',
      typeOfEquipment: 'Компрессор',
      errorNumber: '404',
      plot: '2/ва/9',
      breakdownCause: 'Упал',
      repairTeam: 'БУП-7',
    },
    {
      key: '3',
      item: '3',
      journalNumber: 'ЖОС-2',
      typeOfEquipment: 'Труба',
      errorNumber: '414',
      plot: '1/12',
      breakdownCause: 'Трещина',
      repairTeam: 'БУП-44',
    },
  ],
  2: [
    {
      key: '1',
      item: '1',
      percentageWorkedOut: '70%',
      compressorType: 'ККК',
      compressorPressure: '10 мПа',
      lifeTime: '7 лет',
    },
    {
      key: '2',
      item: '2',
      percentageWorkedOut: '90%',
      compressorType: 'ККК',
      compressorPressure: '12 мПа',
      lifeTime: '12 лет',
    },
    {
      key: '3',
      item: '3',
      percentageWorkedOut: '78%',
      compressorType: 'ТТТ',
      compressorPressure: '8 мПа',
      lifeTime: '10 лет',
    },
    {
      key: '4',
      item: '4',
      percentageWorkedOut: '40%',
      compressorType: 'ТТТ',
      compressorPressure: '7 мПа',
      lifeTime: '5 лет',
    },
  ],
  3: [
    {
      key: '1',
      item: '1',
      percentageWorkedOut: '50%',
      gasPipelineType: 'ГТБД5000',
      location: 'Сахалин',
    },
    {
      key: '2',
      item: '2',
      percentageWorkedOut: '80%',
      gasPipelineType: 'ГТБД7000',
      location: 'Море Баренцовых',
    },
    {
      key: '3',
      item: '3',
      percentageWorkedOut: '70%',
      gasPipelineType: 'ТТКР800',
      location: 'Карелия',
    },
    {
      key: '4',
      item: '4',
      percentageWorkedOut: '88%',
      gasPipelineType: 'ТТКР900',
      location: 'Таганрог',
    },
    {
      key: '5',
      item: '5',
      percentageWorkedOut: '76%',
      gasPipelineType: 'ГТБД7900',
      location: 'Балтийское Море',
    },
    {
      key: '6',
      item: '6',
      percentageWorkedOut: '55%',
      gasPipelineType: 'ГТБД4500',
      location: 'Якутия',
    },
    {
      key: '7',
      item: '7',
      percentageWorkedOut: '75%',
      gasPipelineType: 'ГТБД8000',
      location: 'Якутия',
    },
    {
      key: '8',
      item: '8',
      percentageWorkedOut: '50%',
      gasPipelineType: 'ГТБД5000',
      location: 'Сахалин',
    },
    {
      key: '9',
      item: '9',
      percentageWorkedOut: '80%',
      gasPipelineType: 'ГТБД7000',
      location: 'Море Баренцовых',
    },
    {
      key: '10',
      item: '10',
      percentageWorkedOut: '70%',
      gasPipelineType: 'ТТКР800',
      location: 'Карелия',
    },
    {
      key: '11',
      item: '11',
      percentageWorkedOut: '88%',
      gasPipelineType: 'ТТКР900',
      location: 'Таганрог',
    },
    {
      key: '12',
      item: '12',
      percentageWorkedOut: '76%',
      gasPipelineType: 'ГТБД7900',
      location: 'Балтийское Море',
    },
    {
      key: '13',
      item: '13',
      percentageWorkedOut: '55%',
      gasPipelineType: 'ГТБД4500',
      location: 'Якутия',
    },
    {
      key: '14',
      item: '14',
      percentageWorkedOut: '75%',
      gasPipelineType: 'ГТБД8000',
      location: 'Якутия',
    },
  ],
  4: [
    {
      key: '1',
      item: '1',
      load: '1 тонна',
      loadingPercentage: '70%',
      pipeType: 'ГТБН1',
      serviceFactor: '0.8',
      location: 'Якутия',
    },
    {
      key: '2',
      item: '2',
      load: '4 тонны',
      loadingPercentage: '50%',
      pipeType: 'ГТБН7',
      serviceFactor: '0.55',
      location: 'Сахалин',
    },
    {
      key: '3',
      item: '3',
      load: '2 тонны',
      loadingPercentage: '40%',
      pipeType: 'БРНТ2',
      serviceFactor: '0.95',
      location: 'Сахалин',
    },
    {
      key: '4',
      item: '4',
      load: '12 тонн',
      loadingPercentage: '80%',
      pipeType: 'БРНТ28',
      serviceFactor: '0.4',
      location: 'Пенза',
    },
    {
      key: '5',
      item: '5',
      load: '2 тонны',
      loadingPercentage: '77%',
      pipeType: 'БРНТ4',
      serviceFactor: '1',
      location: 'Саратов',
    },
  ],
  5: [
    {
      key: '1',
      item: '1',
      DO: 'ООО "Газпромнефть-Ямал"',
      placeOfBirth: 'Новопортовское',
      KC: 'КС-1',
      KU: 'ГПА1.1',
      date: '08.07.2020 16:28:30',
      value: 'ГДТ РАБОТА',
    },
    {
      key: '2',
      item: '2',
      DO: 'ООО "Газпромнефть-Ямал"',
      placeOfBirth: 'Новопортовское',
      KC: 'КС-2',
      KU: 'ГПА1.2',
      date: '09.07.2020 16:30:00',
      value: 'ГДТ РАБОТА',
    },
    {
      key: '2',
      item: '3',
      DO: 'ООО "Газпромнефть-Оренбург"',
      placeOfBirth: 'Новопортовское',
      KC: 'КС-2',
      KU: 'ГПА1.3',
      date: '09.07.2020 17:00:00',
      value: 'ГДТ РАБОТА',
    },
  ],
}

const columnsAnalytics = {
  1: [
    {
      title: '№',
      dataIndex: 'item',
      align: 'right'
    },
    {
      title: 'Номер журнала',
      dataIndex: 'journalNumber',
    },
    {
      title: 'Тип оборудования',
      dataIndex: 'typeOfEquipment',
    },
    {
      title: 'Номер ошибки',
      dataIndex: 'errorNumber',
    },
    {
      title: 'Участок',
      dataIndex: 'plot',
    },
    {
      title: 'Причина поломки',
      dataIndex: 'breakdownCause',
    },
    {
      title: 'Бригада ремонта',
      dataIndex: 'repairTeam',
    },
  ],
  2: [
    {
      title: '№',
      dataIndex: 'item',
      align: 'right'
    },
    {
      title: 'Выработанный процент',
      dataIndex: 'percentageWorkedOut',
    },
    {
      title: 'Тип Компрессора',
      dataIndex: 'compressorType',
    },
    {
      title: 'Давление в компрессоре',
      dataIndex: 'compressorPressure',
    },
    {
      title: 'Срок службы',
      dataIndex: 'lifeTime',
    },
  ],
  3: [
    {
      title: '№',
      dataIndex: 'item',
      align: 'right'
    },
    {
      title: 'Выработанный процент',
      dataIndex: 'percentageWorkedOut',
    },
    {
      title: 'Тип Газопровода',
      dataIndex: 'gasPipelineType',
    },
    {
      title: 'Местоположение',
      dataIndex: 'location',
    },
  ],
  4: [
    {
      title: '№',
      dataIndex: 'item',
      align: 'right'
    },
    {
      title: 'Нагрузка',
      dataIndex: 'load',
    },
    {
      title: 'Процент нагружения',
      dataIndex: 'loadingPercentage',
    },
    {
      title: 'Тип трубы',
      dataIndex: 'pipeType',
    },
    {
      title: 'Коэффициент эксплуатации',
      dataIndex: 'serviceFactor',
    },
    {
      title: 'Расположение',
      dataIndex: 'location',
    },
  ],
  5: [
    {
      title: '№',
      dataIndex: 'item',
      align: 'right'
    },
    {
      title: 'ДО',
      dataIndex: 'DO',
    },
    {
      title: 'Месторождения',
      dataIndex: 'placeOfBirth',
    },
    {
      title: 'КС',
      dataIndex: 'KC',
    },
    {
      title: 'КУ',
      dataIndex: 'KU',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
    },
    {
      title: 'Значение',
      dataIndex: 'value',
    },
  ]
}
const columnsCatalog = {
  6: [
    {
      title: '№',
      dataIndex: 'item',
      align: 'right'
    },
    {
      title: 'Поле Каталога 1',
      dataIndex: 'directoryField1',
    },
    {
      title: 'Поле Каталога 2',
      dataIndex: 'directoryField2',
    },
    {
      title: 'Поле Каталога 3',
      dataIndex: 'directoryField3',
    },
    {
      title: 'Поле Каталога 4',
      dataIndex: 'directoryField4',
    },
  ],
  7: [
    {
      title: '№',
      dataIndex: 'item',
      align: 'right'
    },
    {
      title: 'Поле Каталога 1',
      dataIndex: 'directoryField1',
    },
    {
      title: 'Поле Каталога 2',
      dataIndex: 'directoryField2',
    },
    {
      title: 'Поле Каталога 3',
      dataIndex: 'directoryField3',
    },
    {
      title: 'Поле Каталога 4',
      dataIndex: 'directoryField4',
    },
    {
      title: 'Поле Каталога 5',
      dataIndex: 'directoryField5',
    },
    {
      title: 'Поле Каталога 6',
      dataIndex: 'directoryField6',
    },
  ],
}
const dataCatalog = {
  6: [
    {
      key: '1',
      item: '1',
      directoryField1: 'Поле 1',
      directoryField2: 'Поле 2',
      directoryField3: 'Поле 3',
      directoryField4: 'Поле 4',
    },
    {
      key: '2',
      item: '2',
      directoryField1: 'Поле 1',
      directoryField2: 'Поле 2',
      directoryField3: 'Поле 3',
      directoryField4: 'Поле 4',
    },
    {
      key: '3',
      item: '3',
      directoryField1: 'Поле 1',
      directoryField2: 'Поле 2',
      directoryField3: 'Поле 3',
      directoryField4: 'Поле 4',
    },
  ],
  7: [
    {
      key: '1',
      item: '1',
      directoryField1: 'Поле 1',
      directoryField2: 'Поле 2',
      directoryField3: 'Поле 3',
      directoryField4: 'Поле 4',
      directoryField5: 'Поле 5',
      directoryField6: 'Поле 6',
    },
    {
      key: '2',
      item: '2',
      directoryField1: 'Поле 1',
      directoryField2: 'Поле 2',
      directoryField3: 'Поле 3',
      directoryField4: 'Поле 4',
      directoryField5: 'Поле 5',
      directoryField6: 'Поле 6',
    },
    {
      key: '3',
      item: '3',
      directoryField1: 'Поле 1',
      directoryField2: 'Поле 2',
      directoryField3: 'Поле 3',
      directoryField4: 'Поле 4',
      directoryField5: 'Поле 5',
      directoryField6: 'Поле 6',
    },
    {
      key: '4',
      item: '4',
      directoryField1: 'Поле 1',
      directoryField2: 'Поле 2',
      directoryField3: 'Поле 3',
      directoryField4: 'Поле 4',
      directoryField5: 'Поле 5',
      directoryField6: 'Поле 6',
    },
    {
      key: '5',
      item: '5',
      directoryField1: 'Поле 1',
      directoryField2: 'Поле 2',
      directoryField3: 'Поле 3',
      directoryField4: 'Поле 4',
      directoryField5: 'Поле 5',
      directoryField6: 'Поле 6',
    },
  ],
}

const namesAnalytics = {
  1: "Журнал останова оборудования",
  2: "Наработка компрессоров",
  3: "Наработка газопроводов",
  4: "Коэффициент эксплуатации",
  5: "История"
}

const namesCatalog = {
  6: "Каталог 1",
  7: "Каталог 2"
}

export {
  dataAnalytics,
  columnsAnalytics,
  namesAnalytics,
  namesCatalog,
  columnsCatalog,
  dataCatalog
}