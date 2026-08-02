import Lesson7Exercises from "./exercises/Lesson7Exercises"

const Lesson7 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 7 – ΑΙ αι: the e sound
      </h1>

      <section>
        <h2 className="text-3xl font-bold">ΑΙ αι - e</h2>

        <p className="mt-2 text-lg leading-8">
          In Modern Greek, the combination <strong>αι</strong> is pronounced
          exactly like <strong>ε</strong>: like the <strong>e</strong> in “bed”.
        </p>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Same sound, different spelling</h2>

        <p className="mt-3 text-lg leading-8">
          In older forms of Greek, <strong>αι</strong> had a different
          pronunciation. Today, the difference remains only in spelling.
        </p>

        <p className="mt-4 text-2xl font-bold">ε = αι → e</p>

        <p className="mt-3 text-lg leading-8">
          When reading Modern Greek aloud, pronounce them in exactly the same
          way.
        </p>
      </section>

      <Lesson7Exercises />
    </main>
  )
}

export default Lesson7