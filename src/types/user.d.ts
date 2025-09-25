export type TUser = {
  id: string;
  email: string;
  fullName: string;
  role: "USER" | "ADMIN" | string;
  isVerified: boolean;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string; 
  deletedAt: string | null;
  profilePhoto: string;
};
