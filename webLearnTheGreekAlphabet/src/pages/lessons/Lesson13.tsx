import Lesson13Exercises from "./exercises/Lesson13Exercises"

const Lesson13 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 13 – ΑΥ αυ, ΕΥ ευ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">ΑΥ αυ - av or af</h2>

          <p className="mt-2 text-lg leading-8">
            The combination <strong>αυ</strong> is pronounced either{" "}
            <strong>av</strong> or <strong>af</strong>, depending on the next
            sound.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">ΕΥ ευ - ev or ef</h2>

          <p className="mt-2 text-lg leading-8">
            The combination <strong>ευ</strong> follows the same rule. It is
            pronounced either <strong>ev</strong> or <strong>ef</strong>.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">The basic rule</h2>

        <p className="mt-3 text-lg leading-8">
          Before a vowel or a voiced consonant, use <strong>v</strong>.
        </p>

        <p className="mt-3 text-lg leading-8">
          Before θ, κ, ξ, π, σ, τ, φ, χ or ψ, use <strong>f</strong>.
        </p>

        <p className="mt-4 text-2xl font-bold">
          αυγό → avGO
          <br />
          αυτό → afTO
          <br />
          ευρώ → evRO
          <br />
          εύκολο → EFkolo
        </p>
      </section>

      <Lesson13Exercises />
    </main>
  )
}

export default Lesson13