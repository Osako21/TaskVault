

import React from 'react';
import { useQuery } from '@apollo/client';
import { TASK_COUNT_QUERY } from '../../queries/tasksQuery';

const Dashboard = () => {
    const { loading, error, data } = useQuery(TASK_COUNT_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
  
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
            <h2>Number of Tasks</h2>
            <p> {data.taskCount} </p>
            </div>
            <div>
            <h2>Calendar</h2>
            {/* Placeholder for calendar */}
            <p>Calendar will be here</p>
            </div>
      </div>
    )
}
export default Dashboard;
