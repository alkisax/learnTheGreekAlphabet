import { NavLink, Outlet } from "react-router-dom"

const lessonLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "border-b-2 border-black font-bold text-black"
    : "text-gray-500 hover:text-black"

const Learn = () => {
  return (
    <main className="mx-auto max-w-4xl px-6 py-8 text-black">
      <nav className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-300 pb-3">
        <NavLink to="lesson-1" className={lessonLinkClass}>
          Lesson 1 (Αα, Ιι, Μμ, Νν)
        </NavLink>

        <NavLink to="lesson-2" className={lessonLinkClass}>
          Lesson 2 (Εε, Οο, Λλ, Σσς)
        </NavLink>

        <NavLink to="lesson-3" className={lessonLinkClass}>
          Lesson 3 (Ττ, Κκ, Ππ, Ρρ)
        </NavLink>

        <NavLink to="lesson-4" className={lessonLinkClass}>
          Lesson 4 (Ββ, Δδ, Γγ, Ζζ)
        </NavLink>

        <NavLink to="lesson-5" className={lessonLinkClass}>
          Lesson 5 (Ηη, Υυ)
        </NavLink>

        <NavLink to="lesson-6" className={lessonLinkClass}>
          Lesson 6 (The i sound: ι, η, υ, ει, οι)
        </NavLink>

        <NavLink to="lesson-7" className={lessonLinkClass}>
          Lesson 7 (ΑΙ αι: the e sound)
        </NavLink>

        <NavLink to="lesson-8" className={lessonLinkClass}>
          Lesson 8 (Ο ο and Ω ω)
        </NavLink>

        <NavLink to="lesson-9" className={lessonLinkClass}>
          Lesson 9 (ΟΥ ου: the u sound)
        </NavLink>

        <NavLink to="lesson-10" className={lessonLinkClass}>
          Lesson 10 (Φ φ, Χ χ, Θ θ)
        </NavLink>

        <NavLink to="lesson-11" className={lessonLinkClass}>
          Lesson 11 (Ξ ξ, Ψ ψ)
        </NavLink>

        <NavLink to="lesson-12" className={lessonLinkClass}>
          Lesson 12 (The accent mark)
        </NavLink>

        <NavLink to="lesson-13" className={lessonLinkClass}>
          Lesson 13 (ΑΥ αυ, ΕΥ ευ)
        </NavLink>

        <NavLink to="lesson-14" className={lessonLinkClass}>
          Lesson 14 (ΜΠ μπ, ΝΤ ντ)
        </NavLink>

        <NavLink to="lesson-15" className={lessonLinkClass}>
          Lesson 15 (ΓΚ γκ, ΓΓ γγ)
        </NavLink>

        <NavLink to="lesson-16" className={lessonLinkClass}>
          Lesson 16 (ΤΣ τσ, ΤΖ τζ)
        </NavLink>

        <NavLink to="lesson-17" className={lessonLinkClass}>
          Lesson 17 (Separate vowel sounds)
        </NavLink>

      </nav>

      <section className="py-8">
        <Outlet />
      </section>
    </main>
  )
}

export default Learn