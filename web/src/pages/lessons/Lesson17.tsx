import Lesson17Exercises from "./exercises/Lesson17Exercises"

const Lesson17 = () => {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Lesson 17 – Separate vowel sounds
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">
            When two vowels are read separately
          </h2>

          <p className="mt-3 text-lg leading-8">
            We have learned that combinations such as <strong>αι</strong>,{" "}
            <strong>ει</strong>, <strong>οι</strong>, <strong>αυ</strong> and{" "}
            <strong>ευ</strong> normally represent special sounds.
          </p>

          <p className="mt-3 text-lg leading-8">
            Sometimes, however, the two vowels must be pronounced separately.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Accent on the first vowel
          </h2>

          <p className="mt-3 text-lg leading-8">
            When the first vowel has the accent, the two letters are pronounced
            separately.
          </p>

          <p className="mt-4 text-2xl font-bold">
            Μάιος → MA-ios
            <br />
            κέικ → KE-ik
            <br />
            άυπνος → A-ipnos
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            The diaeresis: ϊ and ϋ
          </h2>

          <p className="mt-3 text-lg leading-8">
            The two dots are called a <strong>diaeresis</strong>, or{" "}
            <strong>διαλυτικά</strong> in Greek.
          </p>

          <p className="mt-3 text-lg leading-8">
            They show that <strong>ι</strong> or <strong>υ</strong> must be
            pronounced separately from the vowel before it.
          </p>

          <p className="mt-4 text-2xl font-bold">
            μαϊμού → mai-MU
            <br />
            προϊόν → pro-i-ON
            <br />
            προϋπόθεση → pro-i-PO-thesi
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Accent and diaeresis together
          </h2>

          <p className="mt-3 text-lg leading-8">
            When the second vowel is both separate and stressed, it carries
            both the diaeresis and the accent.
          </p>

          <p className="mt-4 text-2xl font-bold">
            καΐκι → ka-I-ki
            <br />
            ΐ &nbsp; ΰ
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-lg bg-gray-500 p-6">
        <h2 className="text-2xl font-bold">Capital letters</h2>

        <p className="mt-3 text-lg leading-8">
          Greek words written entirely in capital letters normally omit the
          accent mark. The diaeresis may remain so that the vowels are still
          read separately.
        </p>

        <p className="mt-4 text-2xl font-bold">
          Μάιος → ΜΑΪΟΣ
          <br />
          μαϊμού → ΜΑΪΜΟΥ
        </p>
      </section>

      <Lesson17Exercises />
    </main>
  )
}

export default Lesson17