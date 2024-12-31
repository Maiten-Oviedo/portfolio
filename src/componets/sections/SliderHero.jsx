import { useState } from 'react'
import SliderImage from '../common/SliderImage'

const IMAGES = [
  {
    index: 1,
    description: 'Potrerillos',
  },
  {
    index: 2,
    description: 'Rio Ceballos',
  },
  {
    index: 3,
    description: 'Mina Clavero',
  },
]

const SliderHero = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <article className="w-max flex items-center justify-center">
      <ul className="w-[30em] h-[29em] md:w-[21.5em] md:h-[21em] flex items-center justify-center">
        {IMAGES.map(image => (
          <SliderImage
            key={image.index}
            index={image.index}
            description={image.description}
            isHover={isHover}
            setIsHover={setIsHover}
          />
        ))}
      </ul>
    </article>
  )
}

export default SliderHero
