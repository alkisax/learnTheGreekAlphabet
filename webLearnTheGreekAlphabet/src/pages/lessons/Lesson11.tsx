import Lesson11Exercises from "./exercises/Lesson11Exercises"

const Lesson11 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 11 – Ξ ξ, Ψ ψ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Ξ ξ - ks</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>xi</strong>. It represents the two
            sounds <strong>k</strong> and <strong>s</strong> together.
          </p>

          <p className="mt-3 text-2xl font-bold">ξ → ks</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Ψ ψ - ps</h2>

          <p className="mt-2 text-lg leading-8">
            This letter is called <strong>psi</strong>. It represents the two
            sounds <strong>p</strong> and <strong>s</strong> together.
          </p>

          <p className="mt-3 text-2xl font-bold">ψ → ps</p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">One letter, two sounds</h2>

        <p className="mt-3 text-lg leading-8">
          Although each is written as one letter, <strong>ξ</strong> and{" "}
          <strong>ψ</strong> represent combinations of two consonant sounds.
        </p>
      </section>

      <Lesson11Exercises />
    </main>
  )
}

export default Lesson11