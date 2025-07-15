const styles = {
  beforeAfterSectionStyles: {
    display: 'flex',
    gap: '40px',
    'justify-content': 'center',
    margin: '25px 30px 30px',
  },
  beforeAfterCard: {
    display: 'flex',
    'flex-direction': 'column',
    background: '#F9F9F9',
    width: '50vw',
    'border-radius': '30px',
    padding: '20px',
    gap: '20px',

    cardTop: {
      display: 'flex',
      'justify-content': 'space-between',
      'align-items': 'center',
    },
    imagesContainer: {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      gap: '20px',
    },
  },
};

const cardTextStyles = {
  results: {
    padding: '5px 10px',
    border: '1px solid black',
    'border-radius': '15px',
  },
};

const imageStyles = {
  'border-radius': '10px',
  height: '300px',
};

const beforeAfterTextStyles = {
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': 'center',
  gap: '10px',
  'margin-bottom': '30px',
};

const BeforeAfterSection = () => {
  return (
    <div id="reviews" style={styles.beforeAfterSectionStyles}>
      <BeforeAfterCardOne />
      <BeforeAfterCardTwo />
    </div>
  );
};

const BeforeAfterCardOne = () => {
  return (
    <div style={styles.beforeAfterCard} className="before-after-container">
      <div style={styles.beforeAfterCard.cardTop} className="card-top">
        <p>Mark Hansen, 32</p>
        <p style={cardTextStyles.results}>3.5 month Program Results</p>
      </div>
      <div
        style={styles.beforeAfterCard.imagesContainer}
        className="images-container"
      >
        <img style={imageStyles} src="/before-man.png" />
        <img style={imageStyles} src="/after-man.png" />
      </div>
      <div style={beforeAfterTextStyles} className="before-after-text">
        <p>
          "Gentle yoga, mindful habits, and great support—no stress, no intense
          workouts. I feel stronger and more balanced every day. "
        </p>
        <p>— Mark Hansen, age–35 | Lost 9kg in 3 months</p>
      </div>
    </div>
  );
};

const BeforeAfterCardTwo = () => {
  return (
    <div style={styles.beforeAfterCard} className="before-after-container">
      <div style={styles.beforeAfterCard.cardTop} className="card-top">
        <p>Jessica Lane, 45</p>
        <p style={cardTextStyles.results}>3.5 month Program Results</p>
      </div>
      <div
        style={styles.beforeAfterCard.imagesContainer}
        className="images-container"
      >
        <img style={imageStyles} src="/before-woman.png" />
        <img style={imageStyles} src="/after-woman.png" />
      </div>
      <div style={beforeAfterTextStyles} className="before-after-text">
        <p>
          "No strict diets, just simple movement and steady support. Yoga helped
          me build healthy habits that actually stuck"
        </p>
        <p>— Jessica Lane, age–39 | Lost 10kg in 3.5 months</p>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
