import Lesson15Exercises from "./exercises/Lesson15Exercises"

const Lesson15 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 15 – ΓΚ γκ, ΓΓ γγ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">ΓΚ γκ - g or ng</h2>

          <p className="mt-2 text-lg leading-8">
            At the beginning of a word, <strong>γκ</strong> is normally
            pronounced like the English <strong>g</strong> in “go”.
          </p>

          <p className="mt-3 text-lg leading-8">
            Inside a word, it may sound like <strong>ng</strong> followed by{" "}
            <strong>g</strong>, although many speakers pronounce it simply as{" "}
            <strong>g</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">ΓΓ γγ - ng</h2>

          <p className="mt-2 text-lg leading-8">
            The combination <strong>γγ</strong> normally appears inside words.
            It is usually pronounced like <strong>ng</strong> followed by a{" "}
            <strong>g</strong> sound.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">The basic pattern</h2>

        <p className="mt-4 text-2xl font-bold">
          γκολ → gol
          <br />
          πάγκος → PANgos
          <br />
          Αγγλία → anGLIa
        </p>

        <p className="mt-4 text-lg leading-8">
          Before an <strong>e</strong> or <strong>i</strong> sound, the Greek g
          sound becomes softer.
        </p>
      </section>

      <Lesson15Exercises />
    </main>
  )
}

export default Lesson15