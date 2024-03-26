import { v4 as uuidv4 } from 'uuid'
import { Products } from '../src/interfaces'
import blouseWolf1a from '../src/assets/Blouses/Wolf/Wolf.1a.jpg'
import blouseWolf1b from '../src/assets/Blouses/Wolf/Wolf.1b.jpg'
import blouseBall1a from '../src/assets/Blouses/Ball/ball.1a.jpg'
import blouseRabbit1a from '../src/assets/Blouses/Rabbit/rabbit.1a.jpg'
import blouseSkateboards1a from '../src/assets/Blouses/Skateboards/skateboards.1a.jpg'
import blouseViolet from '../src/assets/Blouses/Violet/Violet.1a.jpg'

enum Collection { CHILD = 'Child', MOTHER = 'Mother', BLOUSES = 'Blouses' }

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
]

export default products