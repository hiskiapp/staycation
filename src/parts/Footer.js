import React from "react";

import BrandIcon from "./IconText";
import Button from "elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <BrandIcon />
            <p className="brand-tagline">
              Menyediakan berbagai kebutuhan solusi berlibur anda
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginner</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Book a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payments">
                  Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/tos">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:hi@hiskia.app">
                  hi@hiskia.app
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6281234567890">
                  021 - 3546 - 7980
                </Button>
              </li>
              <li className="list-group-item">
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 - All Rights Reserved - Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
