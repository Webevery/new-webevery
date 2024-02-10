import styles from './BlogSection.module.scss';
import BlogFilter from '@/components/BlogFilter/BlogFilter';

const BlogSection = () => {
  return (
    <section className={styles.blogContainer}>
      <div className="container">
        <div className={styles.titleBlogContainer}>
          <h1 className={styles.titleBlog}>
            <span>Webevery</span> Blog
          </h1>
          <h2 className={styles.descBlog}>
            here is you can read useful articles
          </h2>
        </div>
        <BlogFilter />
      </div>
    </section>
  );
};

export default BlogSection;
