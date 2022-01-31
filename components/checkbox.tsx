import { ChangeEvent, useContext } from "react";
import { stateContext } from "./state";

const SpecialitiesCheckbox: React.FC<{ value: string }> = ({ value: s }) => {
  const [, setState] = useContext(stateContext);

  return (
    <label>
      <input
        type="checkbox"
        value={s}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setState((s) => ({
            ...s,
            specialities: new Map(s.specialities).set(
              e.target.value,
              e.target.checked
            ),
          }))
        }
      />
      {s}
    </label>
  );
};

export default SpecialitiesCheckbox;
