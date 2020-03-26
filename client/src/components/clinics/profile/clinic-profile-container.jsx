import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import SideNavigation from './clinin-sidenav';
import ClinicProfile from './clinic-profile';
import Nav from '../../shared/nav/nav'


class ClinicProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        // this.state = {
        //     modal: false
        // }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (

            <MDBContainer>
                <Nav />
                <SideNavigation />
                <ClinicProfile data={this.props} />
            </MDBContainer>
        );
    }
}

export default ClinicProfileContainer;