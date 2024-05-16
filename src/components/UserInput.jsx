import { useEffect, useState } from "react";
import InputField from "./InputField";

export default function UserInput({ onInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          label="Initial Investment"
          value={userInput.initialInvestment}
          onInputChange={onInputChange}
          id="initialInvestment"
        />
        <InputField
          label="Annual Investment"
          value={userInput.annualInvestment}
          onInputChange={onInputChange}
          id="annualInvestment"
        />
      </div>
      <div className="input-group">
        <InputField
          label="Expected Return"
          value={userInput.expectedReturn}
          onInputChange={onInputChange}
          id="expectedReturn"
        />
        <InputField
          label="Duration"
          value={userInput.duration}
          onInputChange={onInputChange}
          id="duration"
        />
      </div>
    </section>
  );
}
