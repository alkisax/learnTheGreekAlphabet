import Lesson8Exercises from "./exercises/Lesson8Exercises"

const Lesson8 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 8 – Ο ο and Ω ω
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Ο ο - o</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>omicron</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Ω ω - o</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>omega</strong>. In Modern Greek, it
            has exactly the same pronunciation as <strong>ο</strong>.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">One sound, two letters</h2>

        <p className="mt-3 text-lg leading-8">
          In Ancient Greek, omicron and omega represented different vowel
          lengths. This distinction no longer exists in Modern Greek.
        </p>

        <p className="mt-4 text-2xl font-bold">ο = ω → o</p>
      </section>

      <Lesson8Exercises />
    </main>
  )
}

export default Lesson8