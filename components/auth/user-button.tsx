"use client";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { IoExitOutline } from "react-icons/io5";
import { LogoutButton } from "./logout-button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
export const UserButton = () => {
  const user = useCurrentUser();
  const {theme,setTheme} = useTheme();
  const toggeleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-gradient">
            <FaUser className="size-4" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[40px]" align="end">
        <DropdownMenuItem>
          <FaCartShopping className="size-4 mr-4"/>
          Cart
        </DropdownMenuItem>
        <DropdownMenuItem onClick={toggeleTheme}>
        {theme === "light" ? <SunIcon className="size-4 mr-4"/> : <MoonIcon className="size-4 mr-4"/>}
          DarkMode
        </DropdownMenuItem>
        {user && <LogoutButton>
          <DropdownMenuItem>
            <IoExitOutline className="size-4 mr-4" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
