const Success = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ecdab9",
      }}
    >
      <div
        style={{
          marginTop: "20%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <button
          style={{
            border: "none",
            width: 240,
            height: 80,
            borderRadius: "5px",
            backgroundColor: "#007a79",
            color: "white",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          Your paying succeeded!
        </button>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            marginTop: "15px"
          }}
        >
          Your order is being prepared.
          <br />
          Thank you for choosing my store!
        </p>
      </div>
    </div>
  );
};

export default Success;
