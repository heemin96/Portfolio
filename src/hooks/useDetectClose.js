import { useEffect, useState, useRef } from "react";

/**
 * mount, unmount인지를 나타내주는 상태값
 * 상태 값: isOpen
 * isOpen -> 참 -> 세부 메뉴박스 -> mount
 * isOpen이 -> 거짓 세부 메뉴박스-> unmount
 * @param {*} initialState 초기값 항상 boolean 이니까 false
 * @returns
 */
const useDetectClose = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  //dropdown
  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  // dropdownmenu 이외의 공간 클릭감지 useEffect
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    //dropdownmenu가 열렸을때 클릭해서 제거해주는 함수
    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    //clean up
    //addEventListner를 통해 이벤트를 등록하고 난 뒤 이벤트 등록을 해제해주지 않으면, 계속해서 이벤트를 감지해서 성능저하 생김
    //컴포넌트가 unmount 될 때 꼭 이벤트 등록을 해제해주어야 한다.
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  /**
   * isOpen : 세부 메뉴 박스 조건부 렌더링
   * ref: dropdownmenu ref걸어주기
   * removeHandler: dropdownmenu onClick 이벤트 callback 함수
   */
  return [isOpen, ref, removeHandler];
};

export default useDetectClose;
