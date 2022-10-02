import React from 'react'
import { Navigate } from 'react-router-dom';

import styled from 'styled-components'

import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const token = useSelector((state) => state.user.token);

  if (!token) return <Navigate to="/admin/login" />;

  return (
    <div>Admin</div>
  )
}