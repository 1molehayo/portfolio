import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import Preview from 'assets/img/preview-image.png';
import { motion, useAnimation } from 'framer-motion';

export const CustomImage = ({
  src,
  srcLarge,
  alt,
  height,
  width,
  className,
  containerClass
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const handleImageLoading = () => setImageLoading(false);
  const controls = useAnimation();

  useEffect(() => {
    if (imageLoading) {
      controls.start('visible');
      if (!(src || srcLarge)) {
        setImageError(true);
      }
      return;
    }

    controls.start('hidden');
  }, [controls, imageLoading, src, srcLarge]);

  return (
    <div
      style={{
        position: 'relative',
        height: height || 'auto',
        width: width || '100%',
        minHeight: imageLoading ? '40rem' : 'auto'
      }}
      className={containerClass}
    >
      <SkeletonTheme color="#eee" highlightColor="#235aa6">
        <motion.div
          className={classnames('custom-image-skeleton', {
            minHeight: imageLoading ? '40rem' : 'auto'
          })}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          <Skeleton
            duration={1}
            height={height || '100%'}
            width={width || '100%'}
          />
        </motion.div>
      </SkeletonTheme>

      <img
        src={imageError ? 'Preview' : srcLarge || src}
        alt={alt}
        role="presentation"
        className={className}
        onLoad={handleImageLoading}
        onError={() => setImageError(true)}
        loading="lazy"
      />
    </div>
  );
};

CustomImage.propTypes = {
  className: PropTypes.string,
  containerClass: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hasScrollEffect: PropTypes.bool,
  srcLarge: PropTypes.string
};
