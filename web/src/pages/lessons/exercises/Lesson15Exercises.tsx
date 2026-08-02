import { useState } from "react"

type Exercise = {
  uppercase: string
  lowercase: string
  answer: string
  meaning: string
}

const exercises: Exercise[] = [
  {
    uppercase: "ΓΚΟΛ",
    lowercase: "γκολ",
    answer: "gol",
    meaning: "Goal",
  },
  {
    uppercase: "ΓΚΡΙ",
    lowercase: "γκρι",
    answer: "gri",
    meaning: "Grey",
  },
  {
    uppercase: "ΓΚΑΖΙ",
    lowercase: "γκάζι",
    answer: "GAzi",
    meaning: "Gas or accelerator",
  },
  {
    uppercase: "ΠΑΓΚΟΣ",
    lowercase: "πάγκος",
    answer: "PANgos",
    meaning: "Bench or counter",
  },
  {
    uppercase: "ΑΓΚΑΘΙ",
    lowercase: "αγκάθι",
    answer: "anGAthi",
    meaning: "Thorn",
  },
  {
    uppercase: "ΑΓΓΛΙΑ",
    lowercase: "Αγγλία",
    answer: "anGLIa",
    meaning: "England",
  },
  {
    uppercase: "ΕΓΓΟΝΙ",
    lowercase: "εγγόνι",
    answer: "enGOni",
    meaning: "Grandchild",
  },
  {
    uppercase: "ΑΓΓΟΥΡΙ",
    lowercase: "αγγούρι",
    answer: "anGUri",
    meaning: "Cucumber",
  },
]

const Lesson15Exercises = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const normalize = (value: string) =>
    value.trim().toLocaleLowerCase("en-US")

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-3xl font-bold">Exercises</h2>

      <p className="mb-8 text-gray-300">
        Use <strong>g</strong> at the beginning of a word and{" "}
        <strong>ng</strong> for the fuller sound inside a word.
      </p>

      <div className="space-y-8">
        {exercises.map((exercise, index) => {
          const userAnswer = answers[index] ?? ""
          const isCorrect =
            normalize(userAnswer) === normalize(exercise.answer)

          return (
            <div
              key={exercise.lowercase}
              className="rounded-lg border border-gray-600 p-5"
            >
              <p className="text-3xl font-bold">
                {exercise.uppercase} – {exercise.lowercase}
              </p>

              <input
                value={userAnswer}
                placeholder="Write in Latin letters"
                onChange={(event) =>
                  setAnswers((previous) => ({
                    ...previous,
                    [index]: event.target.value,
                  }))
                }
                className={`mt-4 w-full rounded-md border px-4 py-3 text-xl text-black outline-none ${
                  isCorrect
                    ? "border-green-500 bg-green-200"
                    : "border-gray-400 bg-white"
                }`}
              />

              {isCorrect && (
                <p className="mt-3 text-lg">
                  <strong className="text-green-400">Correct!</strong>{" "}
                  {exercise.meaning}
                </p>
              )}

              <button
                type="button"
                onClick={() =>
                  setRevealed((previous) => ({
                    ...previous,
                    [index]: true,
                  }))
                }
                className="mt-4 rounded-md bg-gray-600 px-4 py-2 hover:bg-gray-500"
              >
                Reveal solution
              </button>

              {revealed[index] && (
                <div className="mt-3">
                  <p className="text-xl font-bold">{exercise.answer}</p>
                  <p>{exercise.meaning}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Lesson15Exercises