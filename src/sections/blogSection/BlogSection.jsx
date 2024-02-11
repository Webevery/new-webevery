import styles from './BlogSection.module.scss';
import BlogFilter from '@/components/BlogFilter/BlogFilter';
import { blog } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    } else {
      return text;
    }
  }
  return (
    <section className={styles.blog}>
      <div className={`container ${styles.blogContainer}`}>
        <div className={styles.titleBlogContainer}>
          <h1 className={styles.titleBlog}>
            <span>Webevery</span> Blog
          </h1>
          <h2 className={styles.descBlog}>
            here is you can read useful articles
          </h2>
        </div>
        <BlogFilter />
        <ul className={styles.cartContainer}>
          {blog.map(({ id, img, title, desc }) => (
            <li key={id} className={styles.cartItem}>
              <div className={styles.cartImgContainer}>
                <Image
                  src={img}
                  alt="img blog"
                  fill="true"
                  className={styles.cartImg}
                />
              </div>

              <h3 className={styles.cartTitle}>{title}</h3>
              <p className={styles.cartDesc}>{truncateText(desc, 41)}</p>
              <Link href={`/blog/${id}`} className={styles.readMore}>
                <span className={styles.readMoreTitle}>Read more</span>
                <svg className={styles.readMoreIcon}>
                  <linearGradient
                    id="paint0_linear_3004_8704"
                    x1="6.97336e-08"
                    y1="6.28477"
                    x2="11.302"
                    y2="-9.00003"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FAFF00" />
                    <stop offset="0.466629" stopColor="#00F0FF" />
                    <stop offset="1" stopColor="#0400B3" />
                  </linearGradient>
                  <use
                    href="sprite.svg#icon-arrowReadMore"
                    style={{ fill: 'url(#paint0_linear_3004_8704)' }}
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
