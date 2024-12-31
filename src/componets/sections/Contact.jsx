const Contact = () => {
  return (
    <section className="relative bg-[url('./assets/images/contact.jpeg')] bg-center bg-cover bg-zinc-950 h-[80vh] lg:h-[95vh] flex flex-col justify-center items-center  gap-2 mb-1">
      <h2 className="text-[5em] z-10 text-center font-extrabold">
        ALGUNA IDEA?
      </h2>
      <h4 className="text-[1.3em] md:text-[1em] text-white/70 z-10">
        Contáctame
      </h4>
      <p className="flex flex-col gap-2 items-center text-[1.3em] md:text-[1em] z-10">
        <a href="mailto:maitenoviedo513@gmail.com">maitenoviedo513@gmail.com</a>
        <a href="https://wa.me/+5492613897545">WhatsApp</a>
      </p>
      <div className="absolute inset-0 bg-black/60"></div>
    </section>
  )
}

export default Contact