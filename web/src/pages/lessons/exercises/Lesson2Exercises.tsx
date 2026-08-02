import { useState } from "react"

type Exercise = {
  uppercase: string
  lowercase: string
  answer: string
  meaning: string
}

const exercises: Exercise[] = [
  {
    uppercase: "ΕΝΑ",
    lowercase: "ένα",
    answer: "Ena",
    meaning: "One",
  },
  {
    uppercase: "ΕΛΑ",
    lowercase: "έλα",
    answer: "Ela",
    meaning: "Come",
  },
  {
    uppercase: "ΟΛΑ",
    lowercase: "όλα",
    answer: "Ola",
    meaning: "Everything",
  },
  {
    uppercase: "ΜΕΣΑ",
    lowercase: "μέσα",
    answer: "MEsa",
    meaning: "Inside",
  },
  {
    uppercase: "ΜΕΛΙ",
    lowercase: "μέλι",
    answer: "MEli",
    meaning: "Honey",
  },
  {
    uppercase: "ΜΕΝΟΥ",
    lowercase: "μενού",
    answer: "meNU",
    meaning: "Menu",
  },
  {
    uppercase: "ΣΑΛΑΜΙ",
    lowercase: "σαλάμι",
    answer: "saLAmi",
    meaning: "Salami",
  },
  {
    uppercase: "ΕΝΑΣ",
    lowercase: "ένας",
    answer: "Enas",
    meaning: "One — masculine form",
  },
  {
    uppercase: "ΛΕΜΟΝΙ",
    lowercase: "λεμόνι",
    answer: "leMOni",
    meaning: "Lemon",
  },
]

const Lesson2Exercises = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const handleChange = (index: number, value: string) => {
    setAnswers((previous) => ({
      ...previous,
      [index]: value,
    }))
  }

  const revealSolution = (index: number) => {
    setRevealed((previous) => ({
      ...previous,
      [index]: true,
    }))
  }

  const normalize = (value: string) =>
    value.trim().toLocaleLowerCase("en-US")

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-3xl font-bold">Exercises</h2>

      <p className="mb-2 text-lg">
        Write how each Greek word sounds using Latin letters.
      </p>

      <p className="mb-8 text-gray-300">
        Use capital letters to show the stressed syllable.
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

              <p className="mt-3 text-lg">
                How do you read this word?
              </p>

              <input
                type="text"
                value={userAnswer}
                placeholder="Write in Latin letters"
                onChange={(event) =>
                  handleChange(index, event.target.value)
                }
                className={`mt-4 w-full rounded-md border px-4 py-3 text-xl text-black outline-none ${
                  isCorrect
                    ? "border-green-500 bg-green-200"
                    : "border-gray-400 bg-white"
                }`}
              />

              {isCorrect && (
                <div className="mt-3">
                  <p className="font-bold text-green-400">Correct!</p>

                  <p className="text-lg">
                    <strong>{exercise.lowercase}</strong> means{" "}
                    <strong>{exercise.meaning}</strong>.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => revealSolution(index)}
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

export default Lesson2Exercises