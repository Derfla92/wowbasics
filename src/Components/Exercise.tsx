import React, { ReactNode, useState, useEffect } from 'react'
import Walking from '../Excercises/Walking';

type ExerciseProps = {
    number: Number | string
}

const Exercise = (props: ExerciseProps) => {

    const [exercise, setExercise] = useState<ReactNode>();


    useEffect(() => {
        switch (props.number) {
            case 0:
                setExercise(
                    <>
                        <Walking />
                    </>
                );
                break;

            default:
                break;
        }
    }, [props.number])


    return (
        <>
            {exercise}
        </>
    )
}

export default Exercise