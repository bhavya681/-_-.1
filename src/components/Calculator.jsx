import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const clearScreen = () => {
    setResult("");
  };

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clickCalculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="">
      <div
        className="flex justify-center"
        style={{ marginTop: "12%", textAlign: "center", alignItems: "center" }}
      >
        <input
          type=""
          placeholder="0"
          value={result}
          className="text-black rounded-lg w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-2xl pt-10 placeholder-black px-1 bg-gray-100 outline-none text-right"
          style={{
            borderRadius: "6px",
            height: "90px",
            width: "291px",
            border: "1px solid black",
            textAlign: "center",
            fontSize: "33px",
            fontWeight: "bold",
            color: "black",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <p
          className="text-gray-900 text-xs font-bold text-center"
          style={{
            border: "1px solid black",
            width: "289px",
            borderRadius: "9px",
          }}
        >
          Bhavya
        </p>
      </div>
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderLeft: "1px solid black",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
              borderTop: "1px solid black",
              borderRight: "1px solid black",
            }}
            className="space-x-8 p-2"
          >
            <input
              type="button"
              className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="C"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clearScreen}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="<"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="%"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="/"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
            }}
            className="space-x-8 p-2"
          >
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="7"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="8"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="9"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-green-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="*"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
            }}
            className="space-x-8 p-2"
          >
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="4"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="5"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="6"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-blue-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="-"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
            }}
            className="space-x-8 p-2"
          >
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="1"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="2"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="3"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-purple-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              value="+"
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              onClick={clickHandle}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
              borderBottomLeftRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
            className="space-x-8 p-2"
          >
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              value="0"
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              value="00"
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-gray-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              value="."
              onClick={clickHandle}
            />
            <input
              type="button"
              className="bg-orange-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer"
              placeholder=""
              style={{
                borderRadius: "13px",
                textAlign: "center",
                alignItems: "center",
                height: "53px",
                width: "44px",
                border: "1px solid black",
              }}
              value="="
              onClick={clickCalculate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
