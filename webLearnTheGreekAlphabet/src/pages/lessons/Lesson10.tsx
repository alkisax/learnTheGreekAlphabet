import Lesson10Exercises from "./exercises/Lesson10Exercises"

const Lesson10 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 10 – Φ φ, Χ χ, Θ θ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Φ φ - f</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>fi</strong>. It is pronounced like
            the English <strong>f</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Χ χ - ch</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>chi</strong>. Before sounds such as
            a, o and u, it is similar to the sound in the Scottish word “loch”.
          </p>

          <p className="mt-3 text-lg leading-8">
            Before e and i sounds, it becomes softer and is produced closer to
            the front of the mouth.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Θ θ - th</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>thita</strong>. It is pronounced like
            <strong> th</strong> in “think”.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Two different th sounds</h2>

        <p className="mt-3 text-lg leading-8">
          Remember that <strong>θ</strong> sounds like the th in “think”, while
          the previously learned <strong>δ</strong> sounds like the th in
          “this”.
        </p>

        <p className="mt-4 text-2xl font-bold">
          θ → think &nbsp; | &nbsp; δ → this
        </p>
      </section>

      <Lesson10Exercises />
    </main>
  )
}

export default Lesson10