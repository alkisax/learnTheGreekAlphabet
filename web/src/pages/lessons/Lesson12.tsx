import Lesson12Exercises from "./exercises/Lesson12Exercises"

const Lesson12 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 12 – The accent mark
      </h1>

      <section>
        <h2 className="text-3xl font-bold">The modern Greek accent</h2>

        <p className="mt-3 text-lg leading-8">
          The accent mark shows which syllable receives the stress when a Greek
          word is pronounced.
        </p>

        <p className="mt-4 text-2xl font-bold">
          μαμά → maMA
        </p>

        <p className="mt-3 text-lg leading-8">
          Changing the position of the accent can sometimes change the meaning
          of a word.
        </p>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Older Greek accent marks</h2>

        <p className="mt-3 text-lg leading-8">
          In Ancient Greek, church texts and older printed books, you may see
          additional marks such as the grave accent, circumflex and breathing
          marks.
        </p>

        <p className="mt-4 text-2xl font-bold">
          ὰ &nbsp; ᾶ &nbsp; ἀ &nbsp; ἁ
        </p>

        <p className="mt-3 text-lg leading-8">
          Modern Greek normally uses only one accent mark. You do not need to
          learn the older marks in order to read modern signs and texts.
        </p>
      </section>

      <Lesson12Exercises />
    </main>
  )
}

export default Lesson12