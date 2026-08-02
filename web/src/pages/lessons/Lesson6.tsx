import Lesson6Exercises from "./exercises/Lesson6Exercises"

const Lesson6 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 6 – The i sound: ι, η, υ, ει, οι
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Ι ι, Η η, Υ υ - i</h2>

          <p className="mt-2 text-lg leading-8">
            We have already learned three letters that represent the same sound:
            <strong> ι</strong>, <strong>η</strong> and{" "}
            <strong>υ</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">ΕΙ ει - i</h2>

          <p className="mt-2 text-lg leading-8">
            The combination <strong>ει</strong> is also pronounced like{" "}
            <strong>ee</strong> in “see”.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">ΟΙ οι - i</h2>

          <p className="mt-2 text-lg leading-8">
            The combination <strong>οι</strong> has exactly the same{" "}
            <strong>i</strong> sound.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">
          Historical spelling
        </h2>

        <p className="mt-3 text-lg leading-8">
          Greek uses a historical spelling system. In earlier forms of Greek,
          these letters and combinations probably represented different vowel
          sounds. Over time, their pronunciation changed and they became
          identical in Modern Greek.
        </p>

        <p className="mt-4 text-2xl font-bold">
          ι = η = υ = ει = οι → i
        </p>

        <p className="mt-3 text-lg leading-8">
          Their spelling is still important. It can distinguish different
          words and grammatical forms, such as articles, nouns, adjectives and
          verbs. However, when you are simply reading aloud, they are pronounced
          in exactly the same way.
        </p>
      </section>

      <section className="mt-12 rounded-lg border border-gray-600 p-6">
        <h2 className="text-2xl font-bold">A grammatical example</h2>

        <p className="mt-4 text-xl">
          <strong>η</strong> — the, singular feminine
        </p>

        <p className="mt-2 text-xl">
          <strong>οι</strong> — the, plural
        </p>

        <p className="mt-4 text-lg leading-8">
          These forms have different grammatical meanings, but both are
          pronounced <strong>i</strong>.
        </p>
      </section>

      <Lesson6Exercises />
    </main>
  )
}

export default Lesson6