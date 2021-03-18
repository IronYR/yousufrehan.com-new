import React from 'react'
// import Chip from "@material-ui/core/Chip"
import Link from "next/link"
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
export default function Post(props: { title: string, tags?: string[], date: string, slug: string }) {
    const classes = style();
    let date = new Date(Date.parse(props.date)).toDateString()
    return (
        <Card className={classes.card}>
            <Container style={{ margin: "10px auto" }}>

                <div className={classes.title}>
                    <Link href={`/${props.slug}`}>
                        <a>
                            {props.title}
                        </a>
                    </Link>
                </div>
                <div className={classes.subtitle}>
                    <span>{date}</span>
                    {props?.tags?.map((tag) => (
                        // <Chip color="secondary" component={
                        <Tag tag={tag} />
                        // Tag(tag)
                        // "SDFdsf"
                        // } />
                    ))}
                </div>
            </Container>
        </Card>
    )
}
