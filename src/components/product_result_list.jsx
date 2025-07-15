const ResultTexts = [
  'Weight challenges are often driven by hormonal, metabolic, or psychological factors—not a lack of willpower.',
  'Medical support can provide the breakthrough many have been searching for.',
  'Trendy diets fail to address the underlying causes of weight gain.',
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
      <p style={styles.caption}>Why Traditional Diets Miss the Mark</p>
      <div style={styles.title}>
        <p>When diets fall short, expert care makes the difference.</p>
        <p>Experience real, lasting results..</p>
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

      <img src="/art_worried_weight.png" style={ListStyle.image} />
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
