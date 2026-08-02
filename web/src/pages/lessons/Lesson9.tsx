import Lesson9Exercises from "./exercises/Lesson9Exercises"

const Lesson9 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 9 – ΟΥ ου: the u sound
      </h1>

      <section>
        <h2 className="text-3xl font-bold">ΟΥ ου - u</h2>

        <p className="mt-2 text-lg leading-8">
          The combination <strong>ου</strong> represents one sound. It is
          pronounced like <strong>oo</strong> in “food”.
        </p>

        <p className="mt-3 text-lg leading-8">
          Do not pronounce the letters separately as o and i.
        </p>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Two letters, one sound</h2>

        <p className="mt-3 text-lg leading-8">
          Although <strong>ου</strong> contains two written letters, it normally
          represents the single Modern Greek sound <strong>u</strong>.
        </p>

        <p className="mt-4 text-2xl font-bold">ου → u</p>
      </section>

      <Lesson9Exercises />
    </main>
  )
}

export default Lesson9