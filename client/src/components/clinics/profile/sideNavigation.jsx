import React from "react";
import logo from "../../../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

const SideNavigation = (props) => {
  return (
    <div className="sidebar-fixed position-fixed">
      <a className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <button
          onClick={() => {
            props.handleChildChange("Dashboard");
          }}
        >
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3" />
            Dashboard
          </MDBListGroupItem>
        </button>
        <button
          onClick={() => {
            props.handleChildChange("Profile");
          }}
        >
          <MDBListGroupItem>
            <MDBIcon icon="user" className="mr-3" />
            Profile
          </MDBListGroupItem>
        </button>
        <button
          onClick={() => {
            props.handleChildChange("Maps");
          }}
        >
          <MDBListGroupItem>
            <MDBIcon icon="map" className="mr-3" />
            Maps
          </MDBListGroupItem>
        </button>
        <button
          onClick={() => {
            props.handleChildChange("404");
          }}
        >
          <MDBListGroupItem>
            <MDBIcon icon="exclamation" className="mr-3" />
            404
          </MDBListGroupItem>
        </button>
      </MDBListGroup>
    </div>
  );
};

export default SideNavigation;
