import { Comments } from '../types/comment';
export const mockComments: Comments = [
  {
    comment: 'Отличный, очень понравился!',
    date: '2023-10-01',
    id: 1,
    rating: 5,
    user: {
      id: 101,
      name: 'Иван Иванов'
    }
  },
  {
    comment: 'Ну, так себе. Ожидал большего.',
    date: '2023-10-02',
    id: 2,
    rating: 3,
    user: {
      id: 102,
      name: 'Анна Смирнова'

    }
  },
  {
    comment: 'Приятно удивлён качеством. Рекомендую!',
    date: '2023-10-03',
    id: 3,
    rating: 4,
    user: {
      id: 103,
      name: 'Сергей Петров'
    }
  },
  {
    comment: 'Не рекомендую, разочарован.',
    date: '2023-10-04',
    id: 4,
    rating: 2,
    user: {
      id: 104,
      name: 'Ольга Кузнецова'
    }
  },
  {
    comment: 'Просто супер! Обязательно к просмотру.',
    date: '2023-10-05',
    id: 5,
    rating: 5,
    user: {
      id: 105,
      name: 'Дмитрий Лебедев'
    }
  }
];
