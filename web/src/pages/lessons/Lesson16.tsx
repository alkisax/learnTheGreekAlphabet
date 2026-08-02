import Lesson16Exercises from "./exercises/Lesson16Exercises"

const Lesson16 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 16 – ΤΣ τσ, ΤΖ τζ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">ΤΣ τσ - ts</h2>

          <p className="mt-2 text-lg leading-8">
            The combination <strong>τσ</strong> is pronounced like{" "}
            <strong>ts</strong> in the English word “cats”.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">ΤΖ τζ - tz / dz</h2>

          <p className="mt-2 text-lg leading-8">
            The combination <strong>τζ</strong> represents a voiced sound
            similar to <strong>dz</strong>.
          </p>

          <p className="mt-3 text-lg leading-8">
            We will write it as <strong>tz</strong>, as in the familiar word{" "}
            <strong>tzatziki</strong>.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Compare the two sounds</h2>

        <p className="mt-4 text-2xl font-bold">
          τσ → ts
          <br />
          τζ → tz
        </p>

        <p className="mt-4 text-2xl font-bold">
          πίτσα → PItsa
          <br />
          τζάμι → TZAmi
        </p>
      </section>

      <Lesson16Exercises />
    </main>
  )
}

export default Lesson16