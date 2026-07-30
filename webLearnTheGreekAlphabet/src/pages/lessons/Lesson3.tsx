import Lesson3Exercises from "./exercises/Lesson3Exercises"

const Lesson3 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 3 – Τ τ, Κ κ, Π π, Ρ ρ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Τ τ - t</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>taf</strong>. It is pronounced like
            the English <strong>t</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Κ κ - k</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>kappa</strong>. It is pronounced like
            the English <strong>k</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Π π - p</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>pi</strong>. It is pronounced like
            the English <strong>p</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Ρ ρ - r</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>ro</strong>. It is pronounced like a
            tapped or lightly rolled <strong>r</strong>.
          </p>

          <p className="mt-3 text-lg leading-8">
            Be careful: the uppercase Greek letter <strong>Ρ</strong> looks
            like the English letter P, but it represents an <strong>r</strong>{" "}
            sound.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Letters that look familiar</h2>

        <p className="mt-3 text-lg leading-8">
          Some Greek letters look like Latin letters and have a similar sound,
          such as <strong>Τ</strong> and <strong>Κ</strong>. Others can be
          misleading: Greek <strong>Ρ</strong> is pronounced <strong>r</strong>,
          not p.
        </p>
      </section>

      <Lesson3Exercises />
    </main>
  )
}

export default Lesson3