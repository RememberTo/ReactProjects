import React from "react";

export function IphonePage() {
  const styles = {
    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div>
      <div style={styles.div}>
        <h2>Iphone 15</h2>
      </div>
      <div style={styles.div}>
      <img src="https://www.apple.com/ru/iphone/home/images/meta/iphone__btp62hy2cbea_og.png" />
      </div>
    </div>
  );
}
