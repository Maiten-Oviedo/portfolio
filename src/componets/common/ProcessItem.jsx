import { useState } from 'react'
import PropTypes from 'prop-types'
import PlusIcon from '../../icons/PlusIcon'
import InfinityIcon from '../../icons/InfinityIcon'

const ProcessItem = process => {
  const { id, title, description, description2 } = process
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className="flex flex-col justify-center w-[90%] md:w-[65%] gap-2 border-b py-6 h-max overflow-hidden">
      <div className="flex gap-2 self-end items-center">
        <h4 className="flex items-center gap-2">
          <span className="text-white/80 text-[1em] md:text-[.7em]">
            {id === 4 ? <InfinityIcon className="size-[1.7em]" /> : `0${id}`}
          </span>
          <span className="text-[1.2em] md:text-[1em] md:font-bold">
            {title}
          </span>
        </h4>
        <button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <PlusIcon
            className={`size-8 transition-all duration-500 ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          />
        </button>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="flex flex-col gap-6 pt-4 md:text-[.9em] max-w-[80%] font-light text-pretty">
          <span>{description}</span>
          {description2 && <span>{description2}</span>}
        </p>
      </div>
    </li>
  )
}

ProcessItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  description2: PropTypes.string,
}

export default ProcessItem