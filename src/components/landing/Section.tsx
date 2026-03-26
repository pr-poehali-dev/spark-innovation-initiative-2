import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, cards, image, imageAlt, facts }: SectionProps) {
  const hasImage = !!image
  const hasCards = cards && cards.length > 0

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
      <div className={`flex gap-12 items-center w-full max-w-7xl ${hasImage && !hasCards ? 'flex-row' : 'flex-col items-start'}`}>
        <div className="flex-1 min-w-0">
          {subtitle && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-lg md:text-xl max-w-2xl mt-5 text-neutral-400 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.p>
          )}
          {facts && (
            <motion.ul
              className="mt-6 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {facts.map((fact, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-neutral-300 text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF4D00] shrink-0" />
                  {fact}
                </motion.li>
              ))}
            </motion.ul>
          )}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>

        {hasImage && !hasCards && (
          <motion.div
            className="hidden lg:block flex-shrink-0 w-[380px] xl:w-[440px] rounded-2xl overflow-hidden border border-neutral-800"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={image} alt={imageAlt} className="w-full h-[300px] xl:h-[340px] object-cover" />
          </motion.div>
        )}
      </div>

      {hasCards && (
        <>
          {hasImage && (
            <motion.div
              className="hidden lg:block absolute right-8 top-8 w-28 h-28 rounded-xl overflow-hidden border border-neutral-800 opacity-60"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 0.6 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
            </motion.div>
          )}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 w-full max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.abbrev}
                className="border border-neutral-700 rounded-xl p-4 bg-neutral-900/60 backdrop-blur-sm hover:border-[#FF4D00] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              >
                <div className="text-2xl font-bold text-[#FF4D00] mb-1">{card.abbrev}</div>
                <div className="text-white font-medium text-sm mb-2">{card.full}</div>
                <div className="text-neutral-500 text-xs italic">"{card.example}"</div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </section>
  )
}
