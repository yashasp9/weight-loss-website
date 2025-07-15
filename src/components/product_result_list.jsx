const ResultTexts = [
  'Lasting weight loss is about more than willpower—yoga helps balance the body and mind, addressing deep-rooted causes.',
  'Expert yoga instructors offer compassionate, personalized support on your path to better health.',
  'Yoga-based programs focus on sustainable lifestyle change, not fleeting trends, for meaningful results that last.',
];

const styles = {
  display: 'flex',
  'flex-direction': 'column',
  height: '500px',
  width: '40vw',
  overflow: 'hidden',
  justifyContent: 'center',
  padding: '0 40px',
  caption: {
    border: '1px solid black',
    width: 'fit-content',
    padding: '2px 12px',
    'border-radius': 16,
    'font-size': 14,
    color: 'black',
  },

  title: {
    'font-size': 32,
    display: 'flex',
    'flex-direction': 'column',
    margin: '32px 0',
    'font-weight': '500',
    color: 'black',
  },

  resultItem: {
    'font-size': 14,
    'line-height': '18px',
    margin: '4px 0',
    width: '75%',
    display: 'flex',
    'flex-direction': 'row',
    color: '#000000BB',
  },
};

const TextContainer = () => {
  return (
    <div style={styles}>
      <p style={styles.caption}>
        Why Diets Alone Aren’t Enough for Lasting Change
      </p>
      <div style={styles.title}>
        <p>
          When quick-fix diets fail, holistic yoga guidance transforms your
          journey
        </p>
        <p>Rediscover real, lasting well-being.</p>
      </div>
      {ResultTexts.map((item) => (
        <p className="result-entries" style={styles.resultItem}>
          <p style={{ marginRight: '4px', fontSize: 10 }}>✔</p>
          <p>{item}</p>
        </p>
      ))}
    </div>
  );
};

const ListStyle = {
  margin: '120px 32px 32px',
  'border-radius': 16,
  background: 'linear-gradient(90deg, #D8ECFF, #E9FCE6, #F6D7F8)',
  height: '500px',
  position: 'relative',

  image: {
    height: '650px',
    position: 'absolute',
    right: 40,
    top: -150,
  },
};

const ProductResultList = () => {
  return (
    <div style={ListStyle}>
      <TextContainer />

      <img src="/meditation.png" style={ListStyle.image} />
      <p
        style={{
          ...styles.caption,
          position: 'absolute',
          right: 40,
          top: 30,
        }}
      >
        Solution
      </p>
    </div>
  );
};

export default ProductResultList;
