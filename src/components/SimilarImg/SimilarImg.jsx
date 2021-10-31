import styles from './SimilarImg.module.scss';

const SimilarImg = ({ similarSrc }) => {
  return (
    <img src={ similarSrc } className={ styles.SimilarImg } alt=""/>
  )
}

export default SimilarImg;