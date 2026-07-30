import Lesson14Exercises from "./exercises/Lesson14Exercises"

const Lesson14 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 14 – ΜΠ μπ, ΝΤ ντ
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">ΜΠ μπ - b or mb</h2>

          <p className="mt-2 text-lg leading-8">
            At the beginning of a word, <strong>μπ</strong> is normally
            pronounced like the English <strong>b</strong>.
          </p>

          <p className="mt-3 text-lg leading-8">
            Inside a word, it may sound like <strong>mb</strong> or sometimes
            simply <strong>b</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">ΝΤ ντ - d or nd</h2>

          <p className="mt-2 text-lg leading-8">
            At the beginning of a word, <strong>ντ</strong> is normally
            pronounced like the English <strong>d</strong>.
          </p>

          <p className="mt-3 text-lg leading-8">
            Inside a word, it may sound like <strong>nd</strong> or sometimes
            simply <strong>d</strong>.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">At the beginning of a word</h2>

        <p className="mt-4 text-2xl font-bold">
          μπαρ → bar
          <br />
          ντομάτα → doMAta
        </p>

        <h2 className="mt-8 text-2xl font-bold">Inside a word</h2>

        <p className="mt-4 text-2xl font-bold">
          λάμπα → LAMba
          <br />
          πάντα → PANda
        </p>
      </section>

      <Lesson14Exercises />
    </main>
  )
}

export default Lesson14