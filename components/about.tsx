export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">About</h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a passionate Flutter Developer with experience delivering production-grade mobile applications that
              are used by thousands of users. I specialize in building scalable, maintainable, and user-friendly mobile
              apps using modern development practices.
            </p>

            <p>
              My expertise includes working with Flutter, BLoC state management, Firebase, REST APIs, and implementing
              Clean Architecture principles. I've successfully contributed to medical and commercial applications
              launched on both Google Play and App Store.
            </p>

            <p>
              I graduated with a B.Sc. in Computer and Information Science from Menofia University (2020–2024) and have
              since been focused on building elegant mobile solutions that solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">2+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">6+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">3</h3>
              <p className="text-muted-foreground">Apps on Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
