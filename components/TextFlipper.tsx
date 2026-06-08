'use client'
import {delay, motion} from 'framer-motion'

const TextFlipper = ({children}:{children:string}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative  whitespace-nowrap uppercase font-bold text-7xl text-black  overflow-hidden  "
    >
      <div
      >
        {children.split("").map((l, i) => {
          return (
              <motion.span
              className='inline-block'
                    variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{delay:0.03*i}}
                key={i}
              >
                {l}
              </motion.span>
          )
        })}
      </div>

      <div
        className="absolute inset-0 "
      >
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ delay: 0.03 * i }}
              key={i}
            >
              {l}
            </motion.span>
          )
        })}
      </div>
    </motion.div>
  )
}

export default TextFlipper