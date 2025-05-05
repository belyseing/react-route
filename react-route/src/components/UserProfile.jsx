import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User: {user.id}</h2>
      <p>
        <strong>Name:</strong>
        {user.name}
      </p>
      <p>
        <strong>Username:</strong>
        {user.username}
      </p>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
    </div>
  );
}
