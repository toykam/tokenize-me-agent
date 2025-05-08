import { useNeynarContext } from "@neynar/react";

export const useAuth = () => {
    const {
        isAuthenticated,
        logoutUser,
        user
    } = useNeynarContext();

    return {
        loading: false, isAuthenticated, user, 
        logout: logoutUser
    }
}