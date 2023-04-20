import { type User } from "@clerk/nextjs/api";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username:
      user.username ??
      user.emailAddresses[0]?.emailAddress.split("@")[0] ??
      user.firstName,
    emailAddress: user.emailAddresses[0]
      ? user.emailAddresses[0].emailAddress
      : "",
    profileImageUrl: user.profileImageUrl,
  };
};
