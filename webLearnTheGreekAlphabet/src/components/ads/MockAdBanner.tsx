const MockAdBanner = () => {
  return (
    <aside
      aria-label="Advertisement"
      className="mx-auto my-8 flex min-h-24 w-[calc(100%-2rem)] max-w-4xl items-center justify-center border border-dashed border-gray-500 bg-gray-900 px-4 text-center text-gray-300"
    >
      <div>
        <p className="text-xs uppercase tracking-widest">Advertisement</p>
        <p className="mt-2 text-sm">Mock AdSense banner — 728 × 90</p>
      </div>
    </aside>
  )
}

export default MockAdBanner