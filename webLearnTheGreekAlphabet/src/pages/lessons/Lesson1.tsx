// webLearnTheGreekAlphabet\src\pages\lessons\Lesson1.tsx
import Lesson1Exercises from "./exercises/Lesson1Exercises"

const Lesson1 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 1 – Α α, Ι ι, Μ μ, Ν ν
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Α α - a</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>alpha</strong>. It is pronounced
            like <strong>a</strong> in “father”.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Ι ι - i</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>iota</strong>. It is pronounced
            like <strong>ee</strong> in “see”.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Μ μ - m</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>mi</strong>. It is pronounced like
            the English <strong>m</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Ν ν - n</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>ni</strong>. It is pronounced like
            the English <strong>n</strong>.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">The accent mark</h2>

        <p className="mt-3 text-lg leading-8">
          In lowercase Greek, the accent mark shows which syllable is stressed.
          For now, we will show the stressed syllable with capital letters in
          the Latin transcription:
        </p>

        <p className="mt-4 text-2xl font-bold">
          ΜΑΜΑ – μαμά → maMA
        </p>

        <p className="mt-3 text-lg">
          We will explain Greek stress more carefully in a later lesson.
        </p>
      </section>

      <Lesson1Exercises />
    </main>
  )
}

export default Lesson1