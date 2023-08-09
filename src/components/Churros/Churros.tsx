import React, { useState, useEffect } from "react"
import { Autocomplete, Box, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material"
import { getChurrosCountries, getChurros } from "utils/api"
import styles from "./Churros.module.scss"

const getStar = (rating: number) => {
    const nStar2 = (rating % 1) * 2
    const nStar1 = rating - nStar2
    return "★".repeat(nStar1) + "✬".repeat(nStar2)
}

export const Churros: React.FC = () => {
    const [countries, setCountries] = useState<string[]>([])
    const [country, setCountry] = useState<string>("Brazil")
    const [players, setPlayers] = useState<any[]>([])
    const [reviews, setReviews] = useState<any[]>([])
    const [comments, setComments] = useState<any[]>([])

    useEffect(() => {
        const f = async () => {
            setCountries(await getChurrosCountries())
        }
        f()
    }, [])

    useEffect(() => {
        const f = async () => {
            const data = await getChurros({ country })
            setPlayers(data.players)
            setReviews(data.reviews)
            setComments(data.comments)
        }
        f()
    }, [country])


    return <div>
        {/* Country Select */}
        Country:
        <Autocomplete 
            id="country" 
            options={countries} 
            onChange={(e: any, newValue: string | null) => { setCountry(newValue || "Brazil") }} 
            renderInput={params => <TextField {...params} label="Country" />} 
        />
        {/* Roster Box */}
        <article className={styles.tables}>
            <div className={styles.card}>
                <Box>
                    <h2>Roster</h2>
                    <Table>
                        <TableHead>
                            <TableCell>Players</TableCell>
                            <TableCell>4K Rank</TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                players.map((player: any) => {
                                    return <TableRow>
                                        <TableCell>{player.username}</TableCell>
                                        <TableCell>{player.rank}</TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </Box>

            </div>
            {/* Analysis Box */}
            <div className={styles.card}>
                <Box>
                    <h2>Analysis</h2>
                    <Table>
                        <TableHead>
                            <TableCell>Skillset</TableCell>
                            <TableCell>Early Game</TableCell>
                            <TableCell>Late Game</TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                reviews.map((review: any) => {
                                    return <TableRow>
                                        <TableCell>{review.skill_type}</TableCell>
                                        <TableCell>{getStar(review.early_review)}</TableCell>
                                        <TableCell>{getStar(review.late_review)}</TableCell>
                                    </TableRow>
                                })
                            }
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell>{reviews.length ? reviews.map((review: any) => review.early_review + review.late_review).reduce((a: number, b: number) => a + b) : 0}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </div>
        </article>
        {/* Description Box */}
        <article className={styles.description}>
            <Box>
                <h2>Description</h2>
                {
                    comments.map((comment: any) => {
                        return <div><em>"{comment.comment}"</em> - {comment.username} <br /> <br /></div>
                    })
                }
            </Box>
        </article>
    </div>
}
