import styles from './ListitemShow.module.scss';
import Link from 'next/link';

const ListItemShow = ({ data }) => {
  return (
    <>
      <h2 className={styles.heading}>Title: - {data.title}</h2>
      <span>
        <Link href={`/blogs/${data.id}`}>More Info click here </Link>
      </span>
    </>
  );
};

export default ListItemShow;
