import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
    const {workouts,dispatch} = useWorkoutsContext()
    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const res = await fetch('http://localhost:4000/workout');
            const json = await res.json();
            if(res.ok){
              dispatch({type:'SET_WORKOUTS',payload:json})
            } 
        }
      
        fetchWorkouts();
    },[dispatch])
  return (
    <div className="home">
        <div className="workouts">
          {workouts && workouts.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
        <WorkoutForm />
    </div>
  )
}

export default Home