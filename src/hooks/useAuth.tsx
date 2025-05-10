import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { useNeynarContext } from "@neynar/react";


interface User {
  fid?: number;
  username?: string;
  displayName?: string;
  custodyAddress?: string;
  signerUuid?: string;
  profileImageUrl?: string;
  [key: string]: any;
}

export const useAuth = () => {
  const {
    isAuthenticated,
    logoutUser,
    user: neynarUser,
  } = useNeynarContext();

  const {
    context,
  } = useMiniKit();

  // Normalize Neynar user
  const normalizedNeynarUser: User = neynarUser
    ? {
        fid: neynarUser.fid,
        username: neynarUser.username,
        displayName: neynarUser.display_name,
        custodyAddress: neynarUser.custody_address,
        signerUuid: neynarUser.signer_uuid,
        profileImageUrl: neynarUser.pfp_url, // Handle possible alias
      }
    : {};

  // Normalize MiniKit context user
  const normalizedContextUser: User = context?.user
    ? {
        fid: context.user.fid,
        username: context.user.username,
        displayName: context.user.displayName, // Map 'display_name' to 'displayName'
        profileImageUrl: context.user.pfpUrl, // Handle possible alias
        // No custodyAddress or signerUuid in MiniKit context
      }
    : {};

  // Determine authentication status
  const loading = !isAuthenticated && !context?.user;
  const authenticated = isAuthenticated != false ? isAuthenticated : context?.user != null;

  // Merge user data, prioritizing Neynar if authenticated
  const usr: User = authenticated && normalizedNeynarUser.fid ? normalizedNeynarUser : normalizedContextUser || {};

  return {
    loading,
    isAuthenticated: authenticated,
    user: usr,
    logout: logoutUser,
  };
};