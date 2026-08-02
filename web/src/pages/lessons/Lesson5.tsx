import Lesson5Exercises from "./exercises/Lesson5Exercises"

const Lesson5 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 5 – Η η, Υ υ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Η η - i</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>ita</strong>. In Modern Greek, it is
            pronounced like <strong>ee</strong> in “see”.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Υ υ - i</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>ipsilon</strong>. When it appears on
            its own, it is also pronounced like <strong>ee</strong> in “see”.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">
          Three letters, one modern sound
        </h2>

        <p className="mt-3 text-lg leading-8">
          In Modern Greek, <strong>ι</strong>, <strong>η</strong> and{" "}
          <strong>υ</strong> are pronounced in exactly the same way.
        </p>

        <p className="mt-4 text-2xl font-bold">
          ι = η = υ → i
        </p>

        <p className="mt-3 text-lg leading-8">
          Their spelling is different, but their pronunciation is the same.
          In the next lesson, we will also learn two letter combinations that
          have this same sound.
        </p>
      </section>

      <Lesson5Exercises />
    </main>
  )
}

export default Lesson5