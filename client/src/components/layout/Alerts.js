import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import styled from "styled-components";
// Although we have created an entire context for alert if we really wanted to we could just put 'required' on the input tags in the register/login components. Good to know both ways of course as when we create our own context we can manipulate the alerts a lot more

const Div = styled.div`
  .alert {
    margin: 1rem 2rem;
    padding: 0.5rem 0.2rem;
    color: #fff;

    i {
      margin: 0.2rem;
    }
  }

  .alert-danger {
    border: solid 1px #000;
    background: #b76a69;
  }
`;

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    // Check if there are any alerts in the state and if there are then loop through them and find the one with the matching id and display the corresponding alert
    <Div>
      {alertContext.alerts.length > 0 &&
        alertContext.alerts.map(alert => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' /> {alert.msg}
          </div>
        ))}
    </Div>
  );
};

export default Alerts;
