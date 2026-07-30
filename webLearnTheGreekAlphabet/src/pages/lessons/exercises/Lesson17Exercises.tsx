import { useState } from "react"

type Exercise = {
  uppercase: string
  lowercase: string
  answer: string
  meaning: string
}

const exercises: Exercise[] = [
  {
    uppercase: "ΜΑΪΟΣ",
    lowercase: "Μάιος",
    answer: "MAios",
    meaning: "May",
  },
  {
    uppercase: "ΚΕΪΚ",
    lowercase: "κέικ",
    answer: "KEik",
    meaning: "Cake",
  },
  {
    uppercase: "ΜΑΪΜΟΥ",
    lowercase: "μαϊμού",
    answer: "maiMU",
    meaning: "Monkey",
  },
  {
    uppercase: "ΚΑΪΚΙ",
    lowercase: "καΐκι",
    answer: "kaIki",
    meaning: "A small traditional boat",
  },
  {
    uppercase: "ΠΡΟΪΟΝ",
    lowercase: "προϊόν",
    answer: "proiON",
    meaning: "Product",
  },
  {
    uppercase: "ΠΡΟΫΠΟΘΕΣΗ",
    lowercase: "προϋπόθεση",
    answer: "proiPOthesi",
    meaning: "Requirement or precondition",
  },
  {
    uppercase: "ΚΟΡΟΪΔΕΥΩ",
    lowercase: "κοροϊδεύω",
    answer: "koroiDEvo",
    meaning: "I tease or deceive",
  },
  {
    uppercase: "ΑΫΠΝΟΣ",
    lowercase: "άυπνος",
    answer: "Aipnos",
    meaning: "Sleepless",
  },
]

const Lesson17Exercises = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const normalize = (value: string) =>
    value.trim().toLocaleLowerCase("en-US")

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-3xl font-bold">Exercises</h2>

      <p className="mb-8 text-gray-300">
        Read the neighbouring vowels separately. Do not treat them as the usual
        αι, ει, οι, αυ or ευ combinations.
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

export default Lesson17Exercises