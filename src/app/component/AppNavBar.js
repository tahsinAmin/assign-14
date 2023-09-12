"use client";
import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import {useRouter} from "next/navigation";

const AppNavBar = () => {

    const router=useRouter();
    const Logout = async () => {
        const response = await fetch("/api/Login")
        const json = await response.json();
        if (json['status'] === true) {
            router.replace("/")
        }
    }

    return (
        <div>
            <Navbar expand="lg" className="shadow-sm  bg-white" variant="light">
                <div className="container">
                    <Navbar.Collapse id="navbarScroll">
                        <div className="d-flex justify-end">
                            <button onClick={Logout} className="bg-red-500 p-2 text-gray-100">Logout</button>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default AppNavBar;