import { useEffect, useState } from "react";

export default function isOnline() {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
    
  });

  return online;
}
