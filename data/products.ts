import { v4 as uuidv4 } from 'uuid'
import { Products } from '../src/interfaces'
import blouseWolf1a from '../src/assets/Blouses/Wolf/Wolf.1a.jpg'
import blouseWolf1b from '../src/assets/Blouses/Wolf/Wolf.1b.jpg'
import blouseBall1a from '../src/assets/Blouses/Ball/ball.1a.jpg'
import blouseRabbit1a from '../src/assets/Blouses/Rabbit/rabbit.1a.jpg'
import blouseSkateboards1a from '../src/assets/Blouses/Skateboards/skateboards.1a.jpg'
import blouseViolet from '../src/assets/Blouses/Violet/Violet.1a.jpg'
import trousersRabbit1a from '../src/assets/Trousers/trusersWithRabbit.1a.jpg'
import dressCherry1b from '../src/assets/Skirts and Dresses/Cherry/cherry.1b.jpg'

enum Collection { CHILD = 'Child', MOTHER = 'Mother', BLOUSES = 'Blouses', TROUSERS = 'TROUSERS', DRESSES = 'SKIRTS AND DRESSES' }

export const products: Products = [
  {
    name: 'Bluzy',
    id: uuidv4(),
    items: [
          {
            title: 'Blouse-wolf',
            image: blouseWolf1a,
            price: 100,
            features:  [ 'bluza wykonana z bawełny', 'lużny krój', 'ciepła' ]
          },
          {
            title: 'Blouse-ball',
            image: blouseBall1a,
            price: 90
          },
          {
            title: 'Blouse-rabbit',
            image: blouseRabbit1a,
            price: 150
          },
          {
            title: 'Blouse-skateboards',
            image: blouseSkateboards1a,
            price: 65
          },
          {
            title: 'Blouse-violet',
            image: blouseViolet,
            price: 78
          }
    ],
    background: blouseWolf1a,
    collection: ['Child', 'Blouses']
  },
  {
    name: 'Spodnie',
    id: uuidv4(),
    items: [
          {
            title: 'Trousers-rabbit',
            image: trousersRabbit1a,
            price: 100,
            features:  [ 'oryginalny krój', 'funkcjonalna kieszonka' ]
          },
    ],
    background: trousersRabbit1a,
    collection: ['Child', 'Trousers']
  },
  {
    name: 'Spódnice i Sukienki',
    id: uuidv4(),
    items: [
          {
            title: 'Skirts-cherry',
            image: dressCherry1b,
            price: 100,
            features:  [ 'oryginalny krój', 'piękne wykończenie' ]
          },
    ],
    background: dressCherry1b,
    collection: ['Child', 'SKIRTS AND DRESSES']
  },
]

export default products