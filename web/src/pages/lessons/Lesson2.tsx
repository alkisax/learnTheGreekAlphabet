import Lesson2Exercises from "./exercises/Lesson2Exercises"

const Lesson2 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 2 – Ε ε, Ο ο, Λ λ, Σ σ/ς
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Ε ε - e</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>epsilon</strong>. It is pronounced
            like <strong>e</strong> in “bed”.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Ο ο - o</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>omicron</strong>. It is pronounced
            like <strong>o</strong> in “not”.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Λ λ - l</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>lambda</strong>. It is pronounced
            like the English <strong>l</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Σ σ/ς - s</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>sigma</strong>. It is pronounced
            like the English <strong>s</strong>.
          </p>

          <p className="mt-3 text-lg leading-8">
            Sigma has two lowercase forms. We write <strong>σ</strong> inside a
            word and <strong>ς</strong> at the end of a word.
          </p>

          <p className="mt-3 text-2xl font-bold">
            σόλο – ένας
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Final sigma</h2>

        <p className="mt-3 text-lg leading-8">
          The letters <strong>σ</strong> and <strong>ς</strong> represent the
          same sound. The final form <strong>ς</strong> is used only at the end
          of a word.
        </p>

        <p className="mt-4 text-2xl font-bold">
          ΜΕΣΑ – μέσα &nbsp; | &nbsp; ΕΝΑΣ – ένας
        </p>
      </section>

      <Lesson2Exercises />
    </main>
  )
}

export default Lesson2