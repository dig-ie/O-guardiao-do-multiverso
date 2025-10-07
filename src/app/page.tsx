export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-primary/30 elegant-glow bg-cosmos-black/50 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-title text-heading text-primary">
              THE GUARDIAN
            </h1>
            <div className="text-ui text-subheading text-accent space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                Chronicles
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Legends
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Saga
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 cosmos-gradient opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-title text-hero text-primary elegant-glow mb-6">
            THE GUARDIAN OF THE MULTIVERSE
          </h1>
          <p className="text-text text-body text-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            In the vast expanse of space and time, where dimensions collide and
            realities merge, one entity stands as the eternal protector of all
            existence. The Guardian watches, waits, and acts when the very
            fabric of reality is threatened by forces beyond mortal
            comprehension. Through countless eons, this ancient being has
            maintained the delicate balance between order and chaos.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="text-ui font-semibold px-8 py-3 bg-primary text-white rounded elegant-glow hover:bg-primary/80 transition-colors">
              Begin the Tale
            </button>
            <button className="text-ui font-semibold px-8 py-3 border border-accent text-accent rounded cosmic-border hover:bg-accent/10 transition-colors">
              Read the Chronicles
            </button>
          </div>
        </div>
      </section>

      {/* Epic Story Section */}
      <section className="py-16 px-6 bg-secondary/10 relative">
        <div className="absolute inset-0 deep-gradient opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-title text-display text-primary text-center mb-12">
            THE ETERNAL SAGA
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-title text-heading text-accent">
                The Ancient Prophecy
              </h3>
              <p className="text-text text-body text-foreground leading-relaxed">
                Long before the first stars ignited, before the cosmic dance of
                galaxies began, there existed a prophecy. It spoke of a being
                born from the very essence of creation itself—a Guardian whose
                duty would transcend time and space.
              </p>
              <p className="text-text text-body text-foreground leading-relaxed">
                This entity would stand as the last line of defense against the
                primordial darkness that seeks to unravel the tapestry of
                existence. Through countless millennia, the Guardian has watched
                over countless worlds, civilizations, and realities.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-title text-heading text-accent">
                The Cosmic Balance
              </h3>
              <p className="text-text text-body text-foreground leading-relaxed">
                In the infinite multiverse, where every choice creates new
                realities and every moment spawns alternate timelines, the
                Guardian maintains the delicate equilibrium that allows
                existence to flourish.
              </p>
              <p className="text-text text-body text-foreground leading-relaxed">
                When reality itself trembles under the weight of cosmic forces,
                when the very laws of physics begin to unravel, it is the
                Guardian who steps forth to restore order from chaos, light from
                darkness, hope from despair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme Showcase */}
      <section className="py-16 px-6 bg-cosmos-black">
        <div className="container mx-auto">
          <h2 className="text-title text-display text-primary text-center mb-12">
            COSMIC REALM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Purple Card */}
            <div className="bg-primary/20 border border-primary/30 text-text text-body cosmic-border p-6 rounded">
              <h3 className="text-ui text-subheading text-primary mb-4">
                DIMENSIONAL CORE
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Quantum Flux:
                  </span>
                  <span className="text-text text-body font-bold text-primary">
                    98.7%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Reality Anchors:
                  </span>
                  <span className="text-text text-body font-bold text-accent">
                    Active
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Status:
                  </span>
                  <span className="text-text text-body font-bold text-primary">
                    Stable
                  </span>
                </div>
              </div>
            </div>

            {/* Navy Card */}
            <div className="bg-secondary/20 border border-secondary/30 text-text text-body elegant-glow p-6 rounded">
              <h3 className="text-ui text-subheading text-accent mb-4">
                COSMIC NAVIGATION
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Coordinates:
                  </span>
                  <span className="text-text text-body font-bold text-accent">
                    Locked
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Portal Status:
                  </span>
                  <span className="text-text text-body font-bold text-primary">
                    Open
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Destination:
                  </span>
                  <span className="text-text text-body font-bold text-accent">
                    Unknown
                  </span>
                </div>
              </div>
            </div>

            {/* Blue Card */}
            <div className="bg-accent/20 border border-accent/30 text-text text-body tech-glow p-6 rounded">
              <h3 className="text-ui text-subheading text-accent mb-4">
                ENERGY MATRIX
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Power Level:
                  </span>
                  <span className="text-text text-body font-bold text-accent">
                    Maximum
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Frequency:
                  </span>
                  <span className="text-text text-body font-bold text-primary">
                    Stable
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text text-caption text-muted">
                    Output:
                  </span>
                  <span className="text-text text-body font-bold text-accent">
                    Optimal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-title text-display text-primary text-center mb-12">
            TYPOGRAPHY SHOWCASE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Titles */}
            <div className="space-y-6">
              <h3 className="text-ui text-heading text-accent mb-6">
                TITLES & HEADINGS
              </h3>
              <div className="space-y-4">
                <h1 className="text-title text-hero text-primary">
                  Epic Hero Title
                </h1>
                <h2 className="text-title text-display text-secondary">
                  Legendary Display
                </h2>
                <h3 className="text-title text-heading text-accent">
                  Chapter Heading
                </h3>
                <h4 className="text-title text-subheading text-primary">
                  Section Title
                </h4>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-ui text-heading text-accent mb-6">
                NARRATIVE TEXT
              </h3>
              <div className="space-y-4">
                <p className="text-text text-body text-foreground leading-relaxed">
                  This is body text using Merriweather Sans. It's elegant,
                  sophisticated, and perfect for reading epic narratives,
                  chronicles, and literary content. The serif design adds a
                  classical touch to the storytelling.
                </p>
                <p className="text-text text-caption text-muted leading-relaxed">
                  This is caption text for additional information, footnotes,
                  and supplementary details that enhance the main narrative.
                </p>
                <div className="text-ui text-subheading text-primary">
                  UI Elements & Navigation
                </div>
                <div className="text-ui text-body text-accent">
                  Button Text & Interface Labels
                </div>
              </div>
            </div>
          </div>

          {/* Effects Showcase */}
          <div className="mt-16">
            <h3 className="text-ui text-heading text-accent mb-8 text-center">
              VISUAL EFFECTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-title text-heading text-primary elegant-glow p-4 rounded text-center bg-primary/10">
                Elegant Glow
              </div>
              <div className="text-title text-heading text-accent cosmic-border p-4 rounded text-center bg-accent/10">
                Cosmic Border
              </div>
              <div className="text-title text-heading text-primary classic-shadow p-4 rounded text-center bg-secondary/10">
                Classic Shadow
              </div>
              <div className="text-title text-heading text-secondary elegant-glow p-4 rounded text-center bg-primary/10">
                Sophisticated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/30 py-8 px-6 bg-cosmos-black/50">
        <div className="container mx-auto text-center">
          <div className="text-ui text-caption text-muted space-x-6">
            <span>© 2024 Guardian Chronicles</span>
            <span>•</span>
            <span>Epic Division</span>
            <span>•</span>
            <span>Narrative Protocol v2.1</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
