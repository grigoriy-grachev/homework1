/*
type HotelData = {
  img: string,
  address: string,
  phone:   number,
  weather:  {
    title: string,
    icon: string,
    water: number,
    temperature: number
  },
  social_info: {
    title:  string,
    img: string,
    followers: number,
    following: number
  },
  type: string
};*/

const data:  any[] = [
    {
      img:  '0.jpg',
      address:  'Тверская ул., 22, Москва, 125009',
      phone:   74957878887,
      weather:  {
        title:  'Солнечно',
        icon:  'cloudy.png',
        water: 20,
        temperature:  23
      },
      social_info: {
        title:  'InterContinental',
        img:  '0.jpg',
        followers:  4634,
        following: 346
      },
      type: 'Hotel'

    },

  {
    img: '2.jpg',
    address:  'Лесная ул., 15, Москва, 125047',
    phone:    74957836500,
    weather:  {
      title: 'Ветренно',
      icon: 'cloudy.png',
      water: 25,
      temperature:  24
    },
    social_info: {
      title:  'Holiday Inn Moscow',
      img: '2.jpg',
      followers: 854,
      following: 75
    },
    type:  'Fishing'

  },

  {
    img: '3.jpg',
    address: 'пр-кт Мира, 150, Москва, г. Москва, 129366',
    phone:   74952341206,
    weather:  {
      title: 'Пасмурно',
      icon: 'cloudy.png',
      water: 21,
      temperature:  23
    },
    social_info: {
      title:  'Космос',
      img: '3.jpg',
      followers: 83456,
      following: 563
    },
    type:  'Tours'

  },

  {
    img: '4.jpg',
    address: 'Ярославская ул., 15к3, Москва, 129366',
    phone:   78002008088,
    weather:  {
      title: 'Дождливо',
      icon: 'cloudy.png',
      water: 25,
      temperature: 25
    },
    social_info: {
      title:  'Золотой Колос',
      img: '4.jpg',
      followers: 363,
      following: 34
    },
    type:  'Weather'

  },

  {
    img: '5.jpg',
    address:  'ул. Сельскохозяйственная, 17, корп. 5, Москва, 129226',
    phone:   74991877793,
    weather:  {
      title: 'Светло',
      icon: 'cloudy.png',
      water: 27,
      temperature:  21
    },
    social_info: {
      title:  'Бизнес-турист' ,
      img: '5.jpg',
      followers: 568,
      following: 645
    },
    type:  'Hotel'

  },

  {
    img: '6.jpg',
    address:  'Ярославская ул., 8, к. 8, Москва, 129164',
    phone:    74994261126,
    weather:  {
      title: 'Солнечно',
      icon: 'cloudy.png',
      water: 26,
      temperature:  21
    },
    social_info: {
      title:  'Дизайн Отель',
      img: '6.jpg',
      followers: 2443,
      following: 236
    },
    type:  'Fishing'

  },

  {
    img: '7.jpg',
    address:  'Ярослаская ул., 8к2, Москва, 129164',
    phone:   74955040700,
    weather:  {
      title: 'Ветренно',
      icon: 'cloudy.png',
      water: 27,
      temperature:  21
    },
    social_info: {
      title:  'Гостиница Державная',
      img: '7.jpg',
      followers: 8435,
      following: 45
    },
    type:  'Tours'

  },

  {
    img: '8.jpg',
    address:  'Ярославское ш., 44, Москва, 129337',
    phone:   74957887272,
    weather:  {
      title: 'Пасмурно',
      icon: 'cloudy.png',
      water: 21,
      temperature:  28
    },
    social_info: {
      title:  'Maxima Slavia Hotel',
      img: '8.jpg',
      followers: 4567,
      following: 233
    },
    type:  'Weather'

  },

  {
    img: '9.jpg',
    address:  'ул. Сельскохозяйственная, 17, корпус 1, Москва, 129226',
    phone:    74959807394,
    weather:  {
      title: 'Дождливо',
      icon: 'cloudy.png',
      water: 24,
      temperature:  28
    },
    social_info: {
      title:  'Гостиница Турист Москва',
      img: '9.jpg',
      followers: 83456,
      following: 564
    },
    type:  'Hotel'

  },

  {
    img: '10.jpg',
    address: 'Будайская ул., 9, Москва, 129128',
    phone:   89671312924,
    weather:  {
      title: 'Светло',
      icon: 'cloudy.png',
      water: 23,
      temperature:  28
    },
    social_info: {
      title:  'Гостиничный комплекс ЦКБ 2 им. Н.А. Семашко',
      img: '10.jpg',
      followers: 845,
      following: 345
    },
    type:  'Fishing'

  }

];


export const hotels:  any[] = data;
