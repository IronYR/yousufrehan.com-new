import React from 'react'
import { Card, Container, makeStyles, Typography } from '@material-ui/core/index'
import Tag from "./Tag"
const style = makeStyles((theme) => ({
    card: {
        margin: "25px 0px",
        backgroundColor: "#3A0D0D",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        borderRadius: "15px"
    },
    title: {
        color: "white",
        fontSize: 28
    },
    subtitle: {
        fontSize: 13,
        color: "#686363",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "5px auto",

    }
}))
export default function Post(props: { title: string, tags: string[], date: string }) {
    const classes = style();

    return (
        <Card className={classes.card}>
            <Container style={{ margin: "10px auto" }}>

                <div className={classes.title}>{props.title}</div>
                <div className={classes.subtitle}>
                    <span>{props.date}</span>
                    {props?.tags?.map((tag) => (
                        <Tag tag={tag} />
                    ))}
                </div>
            </Container>
        </Card>
    )
}