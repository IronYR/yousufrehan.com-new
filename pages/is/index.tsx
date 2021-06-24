import React from 'react'

export default function index() {
    let style = {
        container: {
            backgroundColor: "black",
            color: "white",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            overflow: "none"
        },
        text: {
            fontSize: "5rem"
        }
    }
    return (
        // <div style={{ minWidth: "100%", minHeight: "100%" }}>
        <div style={style.container}>
            <h1 style={style.text}>
                Built Different
            </h1>
        </div>
        // </div > 
    )
}
