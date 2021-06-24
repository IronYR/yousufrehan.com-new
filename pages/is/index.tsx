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
            padding: 20
        },
        text: {
            fontSize: "5rem"
        }
    }
    return (
        <div style={style.container}>
            <h1 style={style.text}>
                Built Different
            </h1>
        </div>
    )
}
