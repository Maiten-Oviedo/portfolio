import { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const itemRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
      }
    )
    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])
  return (
    <section
      id="contact"
      className="relative bg-[url('/assets/images/contact.webp')] md:bg-fixed bg-center bg-cover bg-zinc-950 h-[80vh] lg:h-[95vh] flex flex-col justify-center items-center  gap-2 mb-1"
    >
      <h2
        ref={itemRef}
        className={`text-[5em] z-10 text-center font-extrabold ${
          isVisible ? 'animate-slide-up-slow' : 'opacity-0'
        }`}
      >
        ALGUNA IDEA?
      </h2>
      <h4 className="text-[1.3em] md:text-[1em] text-white/70 z-10">
        Contáctame
      </h4>
      <p className="flex flex-col gap-2 items-center text-[1.3em] md:text-[1em] z-10">
        <a href="mailto:maitenoviedo513@gmail.com">maitenoviedo513@gmail.com</a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/+5492613897545"
        >
          WhatsApp
        </a>
      </p>
      <div className="absolute inset-0 bg-black/60"></div>
    </section>
  )
}

export default Contact
