import React from "react";
import client1 from "../assets/images/client-1.png";
import client2 from "../assets/images/clienty-2.png";
import client3 from "../assets/images/clienty-3.png";
import client4 from "../assets/images/clienty-4.png";
function Clients() {
  return (
    <section>
      <div className="container container-fluid">
        <div className="row clients">
          <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center">
            <img src={client1} />
          </div>
          <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center">
            <img src={client2} />
          </div>
          <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center">
            <img src={client3} />
          </div>
          <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center">
            <img src={client4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
