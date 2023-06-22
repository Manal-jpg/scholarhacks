import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/python_dark.jpeg',
    title: 'Introduction to Programming with Python',
    rating: 5,
    ratingCount: 8,
    price: 250000,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: '/images/courses/web_dev.jpeg',
    title: 'Introduction to Web Development',
    rating: 5,
    ratingCount: 15,
    price: 250000,
    category: 'Intermediate',
  },
  {
    id: 3,
    cover: '/images/courses/app_dev.jpeg',
    title: 'Introduction to App Development',
    rating: 5,
    ratingCount: 7,
    price: 250000,
    category: 'Beginner',
  },
  {
    id: 4,
    cover: '/images/courses/college_student.png',
    title: 'University Application Process',
    rating: 5,
    ratingCount: 12,
    price: 250000,
    category: 'Intermediate',
  },
  {
    id: 5,
    cover: '/images/courses/math_logo.jpg',
    title: 'SAT Math Preparation',
    rating: 5,
    ratingCount: 32,
    price: 250000,
    category: 'Intermediate',
  },
]
