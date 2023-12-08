import React from "react";
import styles from "./aboutPage.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>BlogApp</span>, Your
          Gateway to a World of Diverse Experiences!
        </h1>
        <div className={styles.contentWrapper}>
          <p className={styles.content}>
            At BlogApp, we believe that everyone has a story worth telling. Our
            platform is a vibrant community of storytellers, explorers, and
            learners who come together to share their unique perspectives on a
            variety of topics. From the bustling street markets of Asia to the
            serene landscapes of the Scandinavian fjords, our content spans the
            globe.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Our Mission</h1>
        <div className={styles.contentWrapper}>
          <p className={styles.content}>
            Our mission is simple yet profound: to connect people through
            stories. We aim to foster a community where curiosity is encouraged,
            and diverse viewpoints are celebrated. Whether you're a seasoned
            blogger or someone who's just starting to dip their toes into the
            world of writing, BlogApp is a place for you.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What We Offer</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <ul className={styles.contentList}>
              <li>
                <span style={{ fontWeight: "bold" }}>Diverse Topics:</span> Our
                content ranges across various themes, including food, travel,
                culture, and more. There's always something new and exciting to
                discover!
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>
                  User-Generated Content:
                </span>{" "}
                At the heart of our platform are our users. You can create,
                read, and engage with content from people all around the world.
                Share your own experiences, tips, and insights, or enjoy and
                learn from the experiences of others.
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>
                  Interactive Community:
                </span>{" "}
                Engage with other users through comments and discussions. Our
                community is a space for sharing knowledge and experiences,
                sparking conversations, and making connections.
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>A Platform for All:</span>{" "}
                Whether you're looking to share your latest culinary adventure,
                travel stories, cultural insights, or anything in between, [Your
                Blog's Name] welcomes your voice.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.item} ${styles.centerd}`}>
        <h1 className={styles.title}>Join Our Journey</h1>
        <div className={styles.contentWrapper}>
          <p className={styles.content}>
            Whether you're here to explore new ideas, share your own stories, or
            simply to find inspiration, we are delighted to have you on board.
            Join BlogApp today and be a part of a community that
            celebrates diversity, creativity, and the joy of sharing
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
