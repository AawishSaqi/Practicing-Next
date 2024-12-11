'use client';
import Users from "@/component/user"; // Ensure this is a valid component
import axios from "axios";
import { useState, useEffect } from "react";

export default function UserPage() {
    const [users, setUsers] = useState([]); // Initialize users as an empty array

    // Fetch users with useEffect
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                if (response.status === 200 || response.status === 304) {
                    setUsers(response.data); // Set the user data
                } else {
                    console.log('Failed to fetch user');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser(); // Call the fetch function
    }, []); // Empty dependency array ensures it runs only once

    return (
        <div className="w-full h-full">
            <h1 className="text-4xl font-bold">This is nev</h1>
            <h1 className="text-base font-Medium">User List</h1>
            <div className="w-full flex flex-wrap gap-8 justify-center items-start">
                {users.length > 0 ? (
                    users.map((user) => (
                        <Users key={user.id} name={user.name} email={user.email} /> // Add a unique key prop
                    ))
                ) : (
                    <p>Loading users...</p>
                )}
            </div>
        </div>
    );
}