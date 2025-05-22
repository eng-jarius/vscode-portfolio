import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jarius Allen</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer with extensive experience in building modern web applications
              and e-commerce platforms. I specialize in creating robust, scalable solutions using a diverse
              tech stack including React, Ruby on Rails, PHP, and Three.js.
            </p>
            <p className={styles.paragraph}>
              My expertise spans from developing enterprise-level applications to creating immersive
              e-commerce experiences with 3D visualization capabilities.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              At <span className={styles.highlight}>Allbirds</span> and{" "}
              <span className={styles.highlight}>Agzaga</span>, I&apos;ve developed sophisticated e-commerce
              platforms, implementing modern web technologies and sustainable development practices. 
              My work with <span className={styles.highlight}>Viva La Labia</span> showcases my expertise
              in creating immersive shopping experiences using Three.js for 3D product visualization.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve also contributed to enterprise solutions like{" "}
              <span className={styles.highlight}>Kallidus</span>, developing comprehensive HRM systems,
              and worked on innovative projects like <span className={styles.highlight}>Create.xyz</span>,
              an AI-powered platform for web application development.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Expertise</h2>
            <p className={styles.paragraph}>
              My technical stack includes React, Next.js, Node.js, Ruby on Rails, and Three.js.
              I specialize in building full-stack applications using modern JavaScript frameworks
              and have extensive experience with e-commerce solutions like Solidus, Shopify, and WordPress.
              I&apos;ve also implemented AI-driven solutions and real-time applications using Node.js backends.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Professional Focus</h2>
            <p className={styles.paragraph}>
              I&apos;m passionate about creating user-centric applications that combine beautiful
              design with robust functionality. My work spans from enterprise-level systems to
              cutting-edge e-commerce platforms, always focusing on delivering exceptional user
              experiences.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
