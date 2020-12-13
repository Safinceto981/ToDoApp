import React from "react";


export default function Footer() {
  return (
    <div className="fixed-bottom bg-light" >
      <footer className="page-footer font-small  pt-4">
        <div className="container-fluid text-center ">
          <div className="row">
            <div className="col-sm">
              <h5 className="text-uppercase">Contact</h5>

            </div>
            <div className="col-sm">
              <h5 className="text-uppercase">About</h5>
            </div>
            <div className="col-sm">
              <h5 className="text-uppercase">Terms</h5>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://safa.labash.com/" className="text-center">
              {" "}
             safa.labash
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}