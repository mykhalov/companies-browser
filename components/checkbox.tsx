import { ChangeEvent, useContext } from "react";
import { stateContext } from "./state";

const SpecialitiesCheckbox: React.FC<{ value: string }> = ({ value: s }) => {
  const [, setState] = useContext(stateContext);

  return (
    <span className="first:rounded-l-lg last:rounded-r-lg">
      <input
        id={s}
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
        className="hidden peer"
      />
      <label
        htmlFor={s}
        className="p-2 bg-white shadow-inner peer-checked:bg-slate-200 peer-checked:shadow-none"
      >
        {s}
      </label>
    </span>
  );
};

export default SpecialitiesCheckbox;
