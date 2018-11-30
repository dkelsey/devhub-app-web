import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import DotDotDot from 'react-dotdotdot';
import Image from 'react-image';
import styles from './Card.module.css';
import Card from '../../../hoc/Card';
import Link from '../../UI/Link/Link';
import { CARD_CONFIG } from '../../../constants/ui';
import { ARIA_LABEL_RESOURCE, ARIA_LABEL_REPO } from '../../../constants/ariaLabels';

const ComponentCard = ({ title, description, resourcePath, image, resourceType, author }) => (
  <Card resourceType={resourceType} resourcePath={resourcePath} title={title} author={author}>
    <div className={styles.Body}>
      <DotDotDot clamp={CARD_CONFIG.maxDescriptionLines} className={styles.BodyDescription}>
        <p>{description}</p>
      </DotDotDot>
      <div className={styles.BodyImage}>
        <Link to={resourcePath} aria-label={ARIA_LABEL_RESOURCE}>
          <Image src={image} width={CARD_CONFIG.cardImageWidth} height={CARD_CONFIG.cardImageHeight} />
        </Link>
      </div>
    </div>
  </Card>
);

ComponentCard.displayName = 'Component Card Component';

ComponentCard.propTypes = {
  sourcePath: PropTypes.string.isRequired,
  sourceName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  resourcePath: PropTypes.string.isRequired,
  resourceType: PropTypes.string.isRequired,
  image: PropTypes.string,
};

ComponentCard.defaultProps = {
  image: '',
};

export default ComponentCard;
