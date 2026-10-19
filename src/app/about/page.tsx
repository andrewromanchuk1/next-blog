import type { Metadata } from 'next';
import Image from 'next/image';
import profileImage from '../../assets/avatar.jpg';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Me',
};

const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS'];

const AboutMe = () => {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Image
          className={styles.avatar}
          alt="Profile picture"
          src={profileImage}
          width={160}
          height={160}
          placeholder="blur"
          priority
        />

        <div className={styles.content}>
          <p className={styles.eyebrow}>About Me</p>
          <h1 className={styles.name}>Andrii</h1>
          <p className={styles.role}>Web Developer</p>

          <p className={styles.bio}>
            I build fast, accessible and good-looking websites and web
            applications. I enjoy turning ideas into clean, maintainable code
            and care about the details that make an interface feel right.
          </p>

          <ul className={styles.skills}>
            {skills.map(skill => (
              <li key={skill} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
