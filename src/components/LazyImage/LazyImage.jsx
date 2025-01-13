/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the image only once
  });

  return (
    <img
      ref={ref}
      src={inView ? src : ''}
      alt={alt || 'Lazy loaded image'}
      {...props}
      loading="lazy"
    />
  );
};


export default LazyImage;
