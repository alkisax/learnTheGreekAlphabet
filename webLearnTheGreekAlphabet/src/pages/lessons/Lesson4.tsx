import Lesson4Exercises from "./exercises/Lesson4Exercises"

const Lesson4 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 4 – Β β, Δ δ, Γ γ, Ζ ζ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Β β - v</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>vita</strong>. In Modern Greek, it is
            pronounced like the English <strong>v</strong>.
          </p>

          <p className="mt-3 text-lg leading-8">
            Be careful: it looks like the English letter B, but it does not
            represent a b sound.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Δ δ - th</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>delta</strong>. It is pronounced like
            <strong> th</strong> in “this” or “there”.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Γ γ - g / y</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>gamma</strong>. Before{" "}
            <strong>ε</strong> or <strong>ι</strong>, it sounds similar to the
            English <strong>y</strong> in “yes”.
          </p>

          <p className="mt-3 text-lg leading-8">
            Before other vowels, it has a deeper sound produced at the back of
            the mouth. English does not have an exact equivalent.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Ζ ζ - z</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>zita</strong>. It is pronounced like
            the English <strong>z</strong>.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Do not trust the shape</h2>

        <p className="mt-3 text-lg leading-8">
          Greek <strong>Β</strong> looks like the English B, but it is
          pronounced <strong>v</strong>. Learning the sound of each Greek
          letter is more important than guessing from its shape.
        </p>
      </section>

      <Lesson4Exercises />
    </main>
  )
}

export default Lesson4