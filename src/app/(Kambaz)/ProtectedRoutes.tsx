import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
type RootState = {
  accountReducer: {
    currentUser: {
      role: string;
    } | null;
  };
};

export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isAdminOrFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
  if (isAdminOrFaculty) {
    return children;
  } else {
    return <Navigate to="" />;
  }
}
