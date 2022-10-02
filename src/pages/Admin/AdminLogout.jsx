import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/reducers";

export default function AdminLogout() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken());

    sessionStorage.removeItem("token");
  }, [token, dispatch]);

  if (!token) {
    return <Navigate to="/" />;
  }
}
