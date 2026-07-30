import { useState } from "react"

type Exercise = {
  uppercase: string
  lowercase: string
  answer: string
  meaning: string
}

const exercises: Exercise[] = [
  {
    uppercase: "ΤΑΞΙ",
    lowercase: "ταξί",
    answer: "taKSI",
    meaning: "Taxi",
  },
  {
    uppercase: "ΞΕΝΟΣ",
    lowercase: "ξένος",
    answer: "KSEnos",
    meaning: "Foreigner or stranger",
  },
  {
    uppercase: "ΕΞΟΔΟΣ",
    lowercase: "έξοδος",
    answer: "EKSodos",
    meaning: "Exit",
  },
  {
    uppercase: "ΛΕΞΗ",
    lowercase: "λέξη",
    answer: "LEKsi",
    meaning: "Word",
  },
  {
    uppercase: "ΨΑΡΙ",
    lowercase: "ψάρι",
    answer: "PSAri",
    meaning: "Fish",
  },
  {
    uppercase: "ΨΩΜΙ",
    lowercase: "ψωμί",
    answer: "psoMI",
    meaning: "Bread",
  },
  {
    uppercase: "ΨΥΧΗ",
    lowercase: "ψυχή",
    answer: "psiCHI",
    meaning: "Soul",
  },
  {
    uppercase: "ΥΨΗΛΟΣ",
    lowercase: "υψηλός",
    answer: "ipsiLOS",
    meaning: "Tall or high",
  },
]

const Lesson11Exercises = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const normalize = (value: string) =>
    value.trim().toLocaleLowerCase("en-US")

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-3xl font-bold">Exercises</h2>

      <p className="mb-8 text-gray-300">
        Use <strong>ks</strong> for ξ and <strong>ps</strong> for ψ.
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

export default Lesson11Exercises