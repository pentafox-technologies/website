import { createStyles } from '@mantine/core'
import React from 'react'
import { PopupButton } from 'react-calendly'

const appoinmentStyles = createStyles(() => ({
  appointmentBtn: {
    display: "inline-block",
    background: "rgba(255,245,245)",
    opacity: 0.8,
    color: "rgb(110, 12, 15)",
    padding: "5px 12px",
    border: "1px solid rgba(110, 12, 15, 0.1)",
    cursor: "pointer",
    transition: "box-shadow .4s",
    fontSize: 12,
    marginTop: 10,
    ":hover": {
      boxShadow: "2px 2px 2px 0 rgba(110, 12, 15, 0.2)",
    },
    ":focus": {
      outline: "none",
    },

    [`@media (min-width: 992px)`]: {
      fontSize: 16,
      lineHeight: "140%",
      padding: "10px 22px",
    },
  }
}))

const AppoinmentButton = () => {
  const { classes } = appoinmentStyles();
  return (
    <PopupButton
      url="https://calendly.com/vignesh-sankaran"
      className={classes.appointmentBtn}
      rootElement={document.getElementById("___gatsby")}
      text={
        <div>
          Talk to our Experts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={13}
            fill="rgb(110, 12, 15)"
            style={{ marginLeft: 12 }}
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
      }
    />
  )
}

export default AppoinmentButton