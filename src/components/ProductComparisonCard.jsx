import ProductFeatureItem from './ProductFeatureItem';

const styles = {
  background: '#F9F9F9',
  margin: '25px 30px 30px',
  'border-radius': '30px',
  display: 'flex',
  'justify-content': 'space-between',
  alignItems: 'center',

  featureItemContainer: {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    gap: '20px',
    'margin-left': '30px',
  },
  imageContainer: {
    width: '40vw',
  },
};

const ProductComparisonTextStyle = {
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': 'center',
  gap: '30px',

  padding: '0 30px',

  minHeight: '300px',
  heading: {
    'font-size': '32px',
  },
  subheading: {
    'font-size': '18px',
  },
  width: '50vw',
  headingContainer: {
    marginBottom: '30px',
  },
};

const ImageStyle = {
  height: '350px',

  'border-radius': '30px',
  padding: '20px',
};

const ProductComparisonText = ({ subheading, heading, features }) => {
  return (
    <div style={ProductComparisonTextStyle}>
      <div style={ProductComparisonTextStyle.headingContainer}>
        <p style={ProductComparisonTextStyle.heading}>{heading}</p>
        <p style={ProductComparisonTextStyle.subheading}>{subheading}</p>
      </div>
      <div
        style={styles.featureItemContainer}
        className="feature-item-container"
      >
        {features.map((feature, index) => {
          return <ProductFeatureItem key={index} text={feature} />;
        })}
      </div>
    </div>
  );
};

const ProductComparisonCard = ({ heading, subheading, features, imageSrc }) => {
  return (
    <div style={styles}>
      <div className="product-comparison-text">
        <ProductComparisonText
          heading={heading}
          subheading={subheading}
          features={features}
        />
      </div>
      <div style={styles.imageContainer} className="image-container">
        <img style={ImageStyle} src={imageSrc} />
      </div>
    </div>
  );
};

export default ProductComparisonCard;
