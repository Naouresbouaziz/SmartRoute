function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
               SmartRoute
            </h1>

            <p className="text-sm text-slate-500">
              Mobilité intelligente à Sousse
            </p>
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            📍 Sousse
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Trouvez le trajet qui vous correspond
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            SmartRoute ne cherche pas simplement le trajet le plus court.
            Il cherche le meilleur trajet selon votre budget,
            votre temps et vos préférences.
          </p>
        </section>

        <section className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                📍 Départ
              </label>

              <input
                type="text"
                placeholder="Ex. Hammam Sousse"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                🎯 Destination
              </label>

              <input
                type="text"
                placeholder="Ex. Sahloul"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  💰 Budget maximum
                </label>

                <input
                  type="number"
                  placeholder="3"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  🚶 Marche maximum
                </label>

                <input
                  type="number"
                  placeholder="10"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              🔎 Trouver mon trajet
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App