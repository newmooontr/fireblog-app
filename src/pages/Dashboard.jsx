import React from 'react'


import { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { Cards, HomeCon } from "../styled/DashboardStyled";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  return (
    <HomeCon>
      {modal && <Modal />}
      <h3
        onClick={(e) => {
          setModal(true);
        }}
      >
        Dashboard
      </h3>
      <Cards>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Cards>
    </HomeCon>
  );
}
  
export default Dashboard;