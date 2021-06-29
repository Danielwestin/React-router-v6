import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import {
//   useSetLocalStorage,
//   useRemoveLocalStorageItem,
// } from "../../contexts/localStorage";

const UserDetails = () => {
  let params = useParams();

  // const setLocalStorageValue = useSetLocalStorage();
  // const removeLocalStorageItem = useRemoveLocalStorageItem();

  // useEffect(() => {
  //   setLocalStorageValue("daniel", "Westin");
  // }, []);

  // const deleteLocalStorageItem = () => {
  //   removeLocalStorageItem("daniel");
  // };
  return (
    <>
      <div>User {params.id} Details</div>
      {/* <button onClick={deleteLocalStorageItem}>Delete localStorageItem</button> */}
    </>
  );
};
export default UserDetails;
