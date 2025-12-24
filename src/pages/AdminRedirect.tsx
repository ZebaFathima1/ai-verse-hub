import { useEffect } from "react";

const AdminRedirect = () => {
  useEffect(() => {
    // Navigate the browser to /admin which Vite will proxy to the Django admin
    window.location.href = '/admin';
  }, []);

  return null;
};

export default AdminRedirect;
