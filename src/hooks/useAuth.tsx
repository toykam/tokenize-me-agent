import { useNeynarContext } from "@neynar/react";
import { usePrivy } from "@privy-io/react-auth";

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