import { useState } from "react";

const Juunzzi = () => {
  const [state, setState] = useState(0);

  const onClickUpdateButton = () => {
    setState(state + 1);
  };

  const onClickLogButton = () => {
    const callback = () => {
      alert(state);
    };

    setTimeout(callback, 3000);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={onClickUpdateButton}>
          상태 업데이트
        </button>
        <button type="button" onClick={onClickLogButton}>
          3초 뒤에 상태를 기록해주세요
        </button>
      </div>
      <div>{state}</div>
    </div>
  );
};

export default Juunzzi;
