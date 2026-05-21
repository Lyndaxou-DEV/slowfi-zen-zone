import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Slow-Fi : Le premier débit internet qui protège votre sommeil";
const DESCRIPTION =
  "À 18h30, Slow-Fi apaise votre connexion et bride votre débit à 50Mo. Reprenez le contrôle de vos soirées, retrouvez le sommeil et préservez la planète.";
const OG_IMAGE = "/og-slowfi.svg";

export const Route = createFileRoute("/")({
  component: SlowFiLanding,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#0d1f1c" },
      // Open Graph
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Slow-Fi par Alchimy" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-aurora shadow-glow">
        <span className="absolute inset-0 rounded-full bg-aurora animate-breathe opacity-60" />
        <span className="relative h-2 w-2 rounded-full bg-background" />
      </span>
      <span>Slow<span className="text-primary">·</span>Fi</span>
    </a>
  );
}

function SlowFiLanding() {
  return (
    <div id="top" className="min-h-screen text-foreground">
      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav aria-label="Navigation principale">
            <ul className="hidden gap-8 text-sm text-muted-foreground md:flex">
              <li><a href="#concept" className="hover:text-primary transition">Concept</a></li>
              <li><a href="#bienfaits" className="hover:text-primary transition">Bienfaits</a></li>
              <li><a href="#avis" className="hover:text-primary transition">Avis</a></li>
              <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
            </ul>
          </nav>
          <a
            href="#precommande"
            className="rounded-full bg-aurora px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Pré-commander
          </a>
        </div>
      </header>

      <main>
        {/* ============ SECTION DÉCOUVERTE / HERO ============ */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-aurora opacity-20 blur-3xl animate-breathe" />
          <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-28 text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Slow-Fi par Alchimy
            </p>
            <h1 id="hero-title" className="text-5xl font-medium leading-[1.05] md:text-7xl">
              Le premier débit internet <br />
              qui <span className="text-aurora italic">protège votre sommeil</span>.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Vos nuits blanches sur les réseaux coûtent cher à votre santé et à la planète.
              À 18h30, Slow-Fi apaise votre connexion. Notre algorithme réduit votre débit à 50&nbsp;Mo
              pour rendre le scroll compulsif impossible. <strong className="text-foreground">Reprenez le contrôle. Pour vous. Pour la Terre.</strong>
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#precommande"
                className="rounded-full bg-aurora px-8 py-4 text-base font-medium text-primary-foreground shadow-zen hover:opacity-90 transition"
              >
                Je choisis la sérénité
              </a>
              <a
                href="#concept"
                className="rounded-full border border-border px-8 py-4 text-base font-medium text-foreground hover:bg-card transition"
              >
                Découvrir le concept
              </a>
            </div>
          </div>
        </section>

        {/* ============ SECTION CONSTAT ============ */}
        <section id="concept" aria-labelledby="constat-title" className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-4 text-sm uppercase tracking-widest text-primary">01 — Le constat</p>
                <h2 id="constat-title" className="text-4xl font-medium leading-tight md:text-5xl">
                  Libérez-vous du <span className="text-aurora">flux infini</span>.
                </h2>
                <h3 className="mt-6 text-xl font-medium text-foreground/90">
                  Le doomscrolling est une pollution. Pour votre esprit, et pour l'environnement.
                </h3>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Il est 1h du matin. Votre batterie est presque vide et vous n'avez pas encore fermé l'œil.
                  Chaque vidéo « recommandée » est une heure de repos perdue, et un serveur qui chauffe inutilement.
                </p>
                <p className="mt-4 text-foreground italic">
                  Est-ce vraiment ainsi que vous voulez nourrir votre esprit&nbsp;?
                </p>
              </div>

              <article className="relative rounded-3xl border border-border bg-card/60 p-8 shadow-zen backdrop-blur">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Batterie</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">01:34</span>
                </div>
                <div className="mt-4 text-6xl font-display font-medium text-destructive">1%</div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[1%] bg-destructive" />
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  « Encore une vidéo… puis je dors. »
                </p>
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-4">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-sm text-foreground">
                    Slow-Fi s'active automatiquement à 18h30.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============ SECTION BÉNÉFICES ============ */}
        <section id="bienfaits" aria-labelledby="benefices-title" className="border-t border-border bg-card/20">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <header className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-primary">02 — Les bénéfices</p>
              <h2 id="benefices-title" className="text-4xl font-medium md:text-5xl">
                Moins de connexion, <span className="text-aurora">plus de repos</span>.
              </h2>
              <p className="mt-6 text-muted-foreground">
                En choisissant un internet limité le soir, vous gagnez sur tous les tableaux et
                transformez la sobriété en une véritable victoire personnelle.
              </p>
            </header>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <article className="group rounded-3xl border border-border bg-card p-8 transition hover:shadow-zen hover:-translate-y-1">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora text-primary-foreground text-xl">♡</div>
                <h3 className="text-xl font-medium">Santé</h3>
                <h4 className="mt-2 text-sm text-primary">Mélatonine retrouvée</h4>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Votre corps produit enfin plus de mélatonine, l'hormone naturelle du sommeil,
                  sans être perturbé par l'excitation digitale.
                </p>
              </article>

              <article className="group rounded-3xl border border-border bg-card p-8 transition hover:shadow-zen hover:-translate-y-1">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora text-primary-foreground text-xl">🌿</div>
                <h3 className="text-xl font-medium">Planète</h3>
                <h4 className="mt-2 text-sm text-primary">Serveurs apaisés</h4>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Vous agissez concrètement en réduisant la charge des serveurs mondiaux
                  pendant les heures de pointe énergétique.
                </p>
              </article>

              <article className="group rounded-3xl border border-border bg-card p-8 transition hover:shadow-zen hover:-translate-y-1">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora text-primary-foreground text-xl">✦</div>
                <h3 className="text-xl font-medium">Famille</h3>
                <h4 className="mt-2 text-sm text-primary">Soirées retrouvées</h4>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Sans la tentation du Wi-Fi rapide, vous retrouvez le plaisir de discuter
                  et de partager des moments authentiques.
                </p>
              </article>
            </div>

            <div className="mt-14 text-center">
              <a
                href="#precommande"
                className="inline-flex rounded-full border border-primary/50 px-6 py-3 text-sm text-primary hover:bg-primary/10 transition"
              >
                Reprendre le contrôle →
              </a>
            </div>
          </div>
        </section>

        {/* ============ SECTION PREUVES SOCIALES ============ */}
        <section id="avis" aria-labelledby="avis-title" className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <header className="text-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-primary">03 — Témoignages</p>
              <h2 id="avis-title" className="text-4xl font-medium md:text-5xl">
                Ils ont choisi de <span className="text-aurora">ralentir</span>.
              </h2>
              <p className="mt-6 text-muted-foreground">
                La confiance se gagne dans le silence. Découvrez comment Slow-Fi a changé leur quotidien.
              </p>
            </header>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
                <blockquote className="text-lg leading-relaxed text-foreground/90">
                  « Avant, je scrollais TikTok jusqu'à l'aube. Maintenant, le ralentissement est
                  mon signal : il est temps de poser mon téléphone et de lire un livre. »
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-aurora" />
                  <div>
                    <p className="text-sm font-medium">Lucas</p>
                    <p className="text-xs text-muted-foreground">27 ans, télétravailleur</p>
                  </div>
                </footer>
              </article>

              <article className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
                <blockquote className="text-lg leading-relaxed text-foreground/90">
                  « Plus besoin de crier pour qu'ils posent leur téléphone. La box s'en occupe
                  pour nous. Nos soirées sont enfin redevenues paisibles. »
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-aurora" />
                  <div>
                    <p className="text-sm font-medium">Élodie</p>
                    <p className="text-xs text-muted-foreground">Maman de 2 ados</p>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </section>

        {/* ============ SECTION CONVERSION ============ */}
        <section id="precommande" aria-labelledby="cta-title" className="border-t border-border">
          <div className="mx-auto max-w-4xl px-6 py-28 text-center">
            <p className="mb-4 text-sm uppercase tracking-widest text-primary">04 — Passer à l'action</p>
            <h2 id="cta-title" className="text-4xl font-medium leading-tight md:text-6xl">
              Prêt à retrouver <br />
              votre <span className="text-aurora italic">sérénité</span>&nbsp;?
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
              En rejoignant la liste d'attente Slow-Fi, vous faites le premier pas vers une
              vie plus apaisée. C'est pour votre bien.
            </p>
            <form
              className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">Votre email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="votre@email.fr"
                className="flex-1 rounded-full border border-border bg-card px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-full bg-aurora px-7 py-4 text-sm font-medium text-primary-foreground shadow-zen hover:opacity-90 transition"
              >
                Je choisis la sérénité
              </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              Aucune notification. Aucun spam. Juste le calme.
            </p>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" aria-labelledby="faq-title" className="border-t border-border bg-card/20">
          <div className="mx-auto max-w-3xl px-6 py-24">
            <header className="text-center">
              <p className="mb-4 text-sm uppercase tracking-widest text-primary">Bonus — FAQ</p>
              <h2 id="faq-title" className="text-4xl font-medium md:text-5xl">
                Questions <span className="text-aurora">apaisantes</span>.
              </h2>
            </header>

            <dl className="mt-14 space-y-4">
              <details className="group rounded-2xl border border-border bg-card p-6 open:shadow-zen">
                <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                  Puis-je forcer le débit en cas d'urgence&nbsp;?
                  <span className="text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Slow-Fi est conçu pour protéger votre repos. En cas de besoin réel, une option
                  « urgence » existe, mais rappelez-vous : la planète et votre sommeil méritent aussi
                  toute votre attention.
                </p>
              </details>

              <details className="group rounded-2xl border border-border bg-card p-6 open:shadow-zen">
                <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                  À quelle heure le débit ralentit-il&nbsp;?
                  <span className="text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Chaque soir, dès 18h30, votre connexion s'apaise naturellement à 50&nbsp;Mo.
                  Lecture web, messagerie et appels restent fluides. Le streaming et le scroll infini,
                  eux, se dissolvent.
                </p>
              </details>

              <details className="group rounded-2xl border border-border bg-card p-6 open:shadow-zen">
                <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                  Est-ce vraiment bon pour la planète&nbsp;?
                  <span className="text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Les heures de pointe énergétiques pèsent lourd sur les data-centers. En ralentissant
                  votre usage à la source, vous participez à un effort collectif de sobriété numérique.
                </p>
              </details>
            </dl>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border bg-background/80">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Le débit qui vous veut du bien. Une box Alchimy pour une nuit retrouvée.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-foreground">Navigation</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#concept" className="hover:text-primary">Concept</a></li>
                <li><a href="#bienfaits" className="hover:text-primary">Bienfaits</a></li>
                <li><a href="#avis" className="hover:text-primary">Avis</a></li>
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-medium text-foreground">Mentions</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Mentions légales</a></li>
                <li><a href="#" className="hover:text-primary">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-primary">CGV</a></li>
              </ul>
            </div>
          </div>

          <aside className="mt-12 rounded-2xl border border-dashed border-primary/40 bg-card/40 p-6 text-sm text-muted-foreground">
            <p className="text-primary font-medium">Note de l'éditeur — Révélation du concept</p>
            <p className="mt-2 leading-relaxed">
              Slow-Fi est un projet éditorial fictif réalisé dans le cadre d'un TP par
              <em> Ludwig Harry &amp; Pignot Maxime</em>. Il interroge le ton « faussement bienveillant »
              de certaines marques de bien-être numérique et l'idée d'un greenwashing par la contrainte.
            </p>
          </aside>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Slow-Fi par Alchimy. Respirez. Ralentissez.
          </p>
        </div>
      </footer>
    </div>
  );
}
