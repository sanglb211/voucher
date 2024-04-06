import React, { useState } from "react";
import "./App.css";

// Vouchers sample data with image URLs
const vouchers = [
  {
    id: 1,
    name: "Bạn dược nhận được 1 lần triệt lông miễn phí",
    image: "./img/1.jpg",
  },
  {
    id: 2,
    name: "Bạn dược nhận được 2 lần triệt lông miễn phí",
    image: "./img/2.jpg",
  },
  {
    id: 3,
    name: "Bạn dược nhận được 3 lần triệt lông miễn phí",
    image: "./img/3.jpg",
  },
];

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1); // Step 1 is phone number input
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextClick = () => {
    // Logic to validate phone number can go here
    setStep(2); // Go to next step which shows vouchers
  };
  const [isClicked, setIsClicked] = useState(false);
  const handleVoucherClick = () => {
    setIsClicked(true);
    if (isAnimating) return; // Prevent clicking while animating

    setIsAnimating(true);
    let selectedId = -1;
    const interval = setInterval(() => {
      // Randomly select a voucher
      selectedId = Math.floor(Math.random() * vouchers.length);
      setSelectedVoucher(vouchers[selectedId]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnimating(false);
      // Final selection
      setSelectedVoucher(vouchers[selectedId]);
      // Move to the next step or do something else
    }, 3000); // Run the animation for 3 seconds

    // setTimeout(() => {
    //   setIsClicked(false);
    // }, 1000);
  };

  return (
    <div
      className="App"
      // style={{
      //   textAlign: "center",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "50vh" /* Full view height */,
      // }}
    >
      {step === 1 && (
        <div className="btn_input">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Nhập số điện thoại"
            style={{
              padding: "10px",
              marginRight: "10px",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={handleNextClick}
            style={{
              padding: "10px 20px",
              background: "rgb(133 118 150)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Tiếp tục
          </button>
        </div>
      )}

      {step === 2 && (
        <>
          {/* <h2>Select a Voucher</h2> */}
          {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
          <div className="voucher_view">
            {vouchers.map((voucher) => (
              <div
                className="voucher_card"
                key={voucher.id}
                style={{
                  // border: '1px solid black',
                  backgroundColor:
                    voucher === selectedVoucher
                      ? "rgb(95 80 112 / 71%)"
                      : "white",
                  cursor: isAnimating ? "default" : "pointer",
                  animation:
                    voucher === selectedVoucher ? "pulse 5s infinite" : "",
                  boxShadow:
                    voucher === selectedVoucher
                      ? "rgba(0, 0, 0, 0.5) 1px 1px 20px 8px"
                      : "",
                }}
              >
                <img
                  className="voucher_img"
                  src={voucher.image}
                  alt={voucher.name}
                  // style={{
                  //   // marginBottom: "10px",
                  //   width: "450px",
                  //   border: "1px solid black",
                  // }}
                />
                {/* {voucher.name} */}
              </div>
            ))}
          </div>
          <div className="btn_container">
            <button
              onClick={!isAnimating ? handleVoucherClick : undefined}
              className="button_nhan"
              style={{
                // padding: "16px 42px",
                // boxShadow: "0px 0px 12px -2px rgba(0,0,0,0.5)",
                // lineHeight: "1.25",
                // background: "rgb(95 80 112 / 71%)",
                // textDecoration: "none",
                // color: "white",
                // fontSize: "16px",
                // border: "none",
                // textTransform: "uppercase",
                // position: "relative",
                // overflow: "hidden",
                animation: isClicked ? "" : "pulse 1.5s infinite", // Sử dụng animation pulse với thời gian 1.5s và lặp vô hạn
                // marginTop: "20px",
                // borderRadius: "4px",
              }}
            >
              Nhận phần thưởng ngẫu nhiên
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
