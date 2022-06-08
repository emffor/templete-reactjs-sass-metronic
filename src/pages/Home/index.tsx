import styles from './styles.module.scss';

export function Home(){
  return (
    <div className={styles.container}>
        <a href="/*" className="btn btn-icon btn-facebook me-5 ">
          <i className="fab fa-facebook-f fs-4"></i>
        </a>
        
        <a href="/*" className="btn btn-icon btn-google me-5 ">
          <i className="fab fa-google fs-4"></i>
        </a>

        <a href="/" className="btn btn-icon btn-twitter me-5 ">
          <i className="fab fa-twitter fs-4"></i>
        </a>

        <a href="/" className="btn btn-icon btn-instagram me-5 ">
          <i className="fab fa-instagram fs-4"></i>
        </a>

        <a href="/" className="btn btn-icon btn-youtube me-5 ">
          <i className="fab fa-youtube fs-4"></i>
        </a>

        <a href="/" className="btn btn-icon btn-linkedin me-5 ">
          <i className="fab fa-linkedin fs-4"></i>
        </a>
    </div>
  );
}