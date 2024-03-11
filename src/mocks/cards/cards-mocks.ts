import { OfferType } from '../../types/types';

export const offers: OfferType[] = [
  {
    'id': '1',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 8
      },
      'name': 'Amsterdam',
    },
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.8,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating',
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'isPro': true,
      'name': 'Angelina',
    },
    'previewImage': 'https://www.pufikhomes.com/wp-content/uploads/2016/10/kvartira-s-vidom-na-kanal-v-amsterdame-6.jpg',
    'images': [
      'https://www.pufikhomes.com/wp-content/uploads/2016/10/kvartira-s-vidom-na-kanal-v-amsterdame-6.jpg',
      'https://www.pufikhomes.com/wp-content/uploads/2016/10/kvartira-s-vidom-na-kanal-v-amsterdame-6.jpg',
    ],
    'maxAdults': 4,
  },
  {
    'id': '2',
    'title': 'Nice, cozy, warm big bed room',
    'type': 'room',
    'price': 160,
    'city': {
      'location': {
        'latitude': 47.492653,
        'longitude': 19.051408,
        'zoom': 10,
      },
      'name': 'Budapesht',
    },
    'location': {
      'latitude': 47.492653,
      'longitude': 19.051408,
      'zoom': 10,
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4,
    'description': 'This five-star hotel with friendly staff who speaks several languages, including Russian and English.',
    'bedrooms': 1,
    'goods': [
      'Heating',
      'wi-fi',
      'parking'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'isPro': false,
      'name': 'Kirill',
    },
    'previewImage': 'img/apartment-01.jpg',
    'images': [
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    'maxAdults': 2,
  },
  {
    'id': '3',
    'title': 'These hotels are regarded perfect all over the world.',
    'type': 'hotel',
    'price': 220,
    'city': {
      'location': {
        'latitude': 48.856663,
        'longitude': 2.351556,
        'zoom': 10,
      },
      'name': 'Paris',
    },
    'location': {
      'latitude': 48.856663,
      'longitude': 2.351556,
      'zoom': 10,
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.3,
    'description': 'It is a fifteen storey building, which is located in the centre of Paris. The hotel has 100 rooms.',
    'bedrooms': 8,
    'goods': [
      'Heating',
      'TV'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'isPro': false,
      'name': 'Mark',
    },
    'previewImage': 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/123309934.jpg?k=443efb73a915424bcbe9eab440b304287a14053fd845de4585eb4b4b047de064&o=&hp=1',
    'images': [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/123309934.jpg?k=443efb73a915424bcbe9eab440b304287a14053fd845de4585eb4b4b047de064&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/123309934.jpg?k=443efb73a915424bcbe9eab440b304287a14053fd845de4585eb4b4b047de064&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/123309934.jpg?k=443efb73a915424bcbe9eab440b304287a14053fd845de4585eb4b4b047de064&o=&hp=1',
    ],
    'maxAdults': 5
  },
  {
    'id': '4',
    'title': 'Bright 3 room apartment for up to 6 people',
    'type': 'apartment',
    'price': 188,
    'city': {
      'location': {
        'latitude': 52.518621,
        'longitude': 13.375142,
        'zoom': 10,
      },
      'name': 'Berlin',
    },
    'location': {
      'latitude': 52.518621,
      'longitude': 13.375142,
      'zoom': 10,
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9,
    'description': 'The kitchen is small, but, as I said before, quite cozy. The biggest room in the apartment is the living room.',
    'bedrooms': 5,
    'goods': [
      'Heating',
      'mirrage'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'isPro': true,
      'name': 'Dmitrii',
    },
    'previewImage': 'img/apartment-02.jpg',
    'images': [
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
    ],
    'maxAdults': 1
  },
  {
    'id': '5',
    'title': 'Bright 17 room hotel for up to 155 people',
    'type': 'hotel',
    'price': 157,
    'city': {
      'location': {
        'latitude': 52.518621,
        'longitude': 13.375142,
        'zoom': 10,
      },
      'name': 'Berlin',
    },
    'location': {
      'latitude': 52.518621,
      'longitude': 13.375142,
      'zoom': 10,
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4,
    'description': 'The kitchen is small, but, as I said before, quite cozy. The biggest room in the apartment is the living room.',
    'bedrooms': 3,
    'goods': [
      'Heating',
      'mirrage',
      'nothing'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'isPro': false,
      'name': 'Valera',
    },
    'previewImage':  'img/apartment-03.jpg',
    'images': [
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg'
    ],
    'maxAdults': 2
  },
  {
    'id': '6',
    'title': 'Bright 3 room apartment for up to 6 people',
    'type': 'apartment',
    'price': 111,
    'city': {
      'location': {
        'latitude': 48.856663,
        'longitude': 2.351556,
        'zoom': 10,
      },
      'name': 'Paris',
    },
    'location': {
      'latitude': 48.856663,
      'longitude': 2.351556,
      'zoom': 10,
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.1,
    'description': 'It is a fifteen storey building, which is located in the centre of Paris. The hotel has 100 rooms.',
    'bedrooms': 8,
    'goods': [
      'Heating',
      'mirrage',
      'TV',
      'wi-fi'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'isPro': true,
      'name': 'Dmitrii',
    },
    'previewImage': 'https://kvartblog.ru/uploads/post_photo/3007/3502/5624098_original.jpg',
    'images': [
      'https://kvartblog.ru/uploads/post_photo/3007/3502/5624098_original.jpg',
      'https://kvartblog.ru/uploads/post_photo/3007/3502/5624098_original.jpg',
      'https://kvartblog.ru/uploads/post_photo/3007/3502/5624098_original.jpg'
    ],
    'maxAdults': 1
  },
];
