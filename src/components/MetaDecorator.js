import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export const MetaDecorator = ({ title, description, image, keywords }) => {
  const metaDecorator = {
    hostname: 'olusegunomilabu.com',
    twitterUsername: '@One_moole'
  };

  return (
    <Helmet>
      {/* Primary Meta Tags  */}
      <title>{title}</title>
      {title && <meta name="description" content={description} />}
      {keywords && (
        <meta
          name="keywords"
          content={`${keywords}, olusegun, omilabu, software developer, software engineer, interactive designer, ui ux, frontend engineer, frontend developer, mobile developer, nigerian dev, nigerian developer, naija frontend, frontend, react developer, vue developer, angular developer, software developer in nigeria, frontend developer in nigeria, frontend engineer in nigeria, nigerian, nigerian tech`}
        />
      )}

      {/* Open Graph / Facebook */}
      {title && <meta property="og:site_name" content={title} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && (
        <meta property="og:image" content={metaDecorator.hostname + image} />
      )}
      <meta
        property="og:url"
        content={
          metaDecorator.hostname +
          window.location.pathname +
          window.location.search
        }
      />

      {/* Twitter */}
      <meta
        name="twitter:url"
        content={
          metaDecorator.hostname +
          window.location.pathname +
          window.location.search
        }
      />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}

      {image && (
        <meta
          name="twitter:image:src"
          content={metaDecorator.hostname + image}
        />
      )}
    </Helmet>
  );
};

MetaDecorator.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string
};
