const styles = {
  beforeAfterSectionStyles: {
    display: "flex",
    gap: "40px",
    "justify-content": "center",
    margin: "25px 30px 30px"
  },
  beforeAfterCard: {
    display: "flex",
    "flex-direction": "column",
    background: "#F9F9F9",
    width: "50vw",
    "border-radius": "30px",
    padding: "20px",
    gap: "20px",

    cardTop: {
      display: "flex",
      "justify-content": "space-between",
      "align-items": "center"
    },
    imagesContainer: {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      gap: "20px"
    }
  }
};

const cardTextStyles = {
  results: {
    padding: "5px 10px",
    border: "1px solid black",
    "border-radius": "15px"
  }
};

const imageStyles = {
  "border-radius": "10px"
};

const beforeAfterTextStyles = {
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
  gap: "10px",
  "margin-bottom": "30px"
};

const BeforeAfterSection = () => {
  return (
    <div style={styles.beforeAfterSectionStyles}>
      <BeforeAfterCardOne />
      <BeforeAfterCardTwo />
    </div>
  );
};

const BeforeAfterCardOne = () => {
  return (
    <div style={styles.beforeAfterCard} className="before-after-container">
      <div style={styles.beforeAfterCard.cardTop} className="card-top">
        <p>Jason Bell, 35</p>
        <p style={cardTextStyles.results}>2.5 month Program Results</p>
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
          "I took the consultation fully online from home. No extreme workouts,
          just smart habits and regular guidance — and it worked!"
        </p>
        <p>— Jerome Bell, age–35 | Lost 10kg in 2.5 months</p>
      </div>
    </div>
  );
};

const BeforeAfterCardTwo = () => {
  return (
    <div style={styles.beforeAfterCard} className="before-after-container">
      <div style={styles.beforeAfterCard.cardTop} className="card-top">
        <p>Mickel Robert, 45</p>
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
          "I took the consultation fully online from home. No extreme workouts,
          just smart habits and regular guidance — and it worked!"
        </p>
        <p>— Mickel Robert, age–45 | Lost 10kg in 3.5 months</p>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
