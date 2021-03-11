import { makeStyles } from '@material-ui/core'
import Link from 'next/link';
import React from 'react'
const style = makeStyles((theme) => ({
    tag: {
        backgroundColor: "#785050",
        color: "white",
        width: "auto",
        height: "auto",
        padding: "2px 6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "2px 7px",
        borderRadius: "25px",
    }
}))
export default function Tag(props: { tag: string }) {
    const classes = style();
    return (
        <span className={classes.tag}>
            <Link href="#">
                <a>
                    {props.tag}
                </a>
            </Link>
        </span>
    )
}
