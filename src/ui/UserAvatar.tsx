import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  userName: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ userName }) => {
  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
