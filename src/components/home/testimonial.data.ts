import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Education beyond classroom',
    content:
      'We believe that education is not just about learning, but also about applying what you have learned in the real world. Our courses are designed to help you learn and apply your knowledge in real-world scenarios.',
    user: {
      id: 1,
      name: 'MJ Munkhbayar',
      professional: 'Web Development Instructor',
      photo: '/public/images/mentors/manal.jpeg',
    },
  },
  {
    id: 2,
    title: 'Meet like minded students!',
    content:
      'At ScholarHacks, you will meet students from all over the world who share the same passion for learning as you do. Our community is a great place to make friends and learn from each other.',
    user: {
      id: 1,
      name: 'Ermuun Enkhjavkhlan',
      professional: 'Python Course Instructor',
      photo: '/public/images/mentors/meru.jpg',
    },
    // },
    // {
    //   id: 3,
    //   title: 'Very complete class',
    //   content:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   user: {
    //     id: 1,
    //     name: 'Nguyễn Văn',
    //     professional: 'FullStack Designer',
    //     photo: '3.jpg',
    //   },
    // },
    // {
    //   id: 4,
    //   title: 'Great Quality!',
    //   content:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   user: {
    //     id: 1,
    //     name: 'Diana Jordan',
    //     professional: 'SEO Expert',
    //     photo: '4.jpg',
    //   },
    // },
    // {
    //   id: 5,
    //   title: 'Detailed learning materials',
    //   content:
    //     'Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.',
    //   user: {
    //     id: 1,
    //     name: 'Ashley Graham',
    //     professional: 'Back-End Developer',
    //     photo: '5.jpg',
    //   },
  },
]
