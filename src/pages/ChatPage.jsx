import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
export default function ChatPage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Chat page</h1>

      <h3>Welcome {user && user.name}!</h3>
    </div>
  );
}
