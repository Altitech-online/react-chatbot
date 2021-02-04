import { useEffect, useState } from 'react'
import { API } from "aws-amplify";
import { useStyles } from "../../libs/hooksLib";

export default function Mood() {
    const [moods, setMoods] = useState();
    const [loading, setLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        const loadMoods = async () => {
            return API.get("lockdown", "/mood")
         }
        const fetchData = async () => {
            try {
                const result = await loadMoods();
                const { Items } = result;
                setMoods(Items);
                setLoading(false);
            } catch (e) {
                
            }
        }
        fetchData();
        console.log(moods)
    },[]);

    const reducedMoods = () => {
        let dates = [];
        moods.forEach(mood => {
            const date = new Date(mood.timestamp).toDateString()
            if(!dates.includes(date)){
                dates.push(date)
            }
        });
        return dates.map(date => {
            return (
                <div className={classes.date} key={date}>
                <h2>{date}</h2>
                {moods.map(mood => {
                    if(new Date(mood.timestamp).toDateString() === date) {
                        return (
                            <div className={`${classes.mood} ${mood.sentiment}`}>{mood.sentiment}</div>
                        )
                    }
                })}
                </div>
            )
        })
    }
    return (
    <div className={classes.moodContainer}>
        {!loading && moods && reducedMoods()}
    </div>
    );
}
