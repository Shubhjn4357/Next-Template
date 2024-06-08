"use client";
import { Menu, MenuItem, NavBarMenu } from "../ui/navbar-menu";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Button } from "../ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import dynamic from "next/dynamic";
const Drawer = dynamic(()=>import("./drawer"));
const UserButton = dynamic(()=>import("@/components/auth/user-button").then(m=>m.UserButton));

const Navbar = () => {

  const user = useCurrentUser()
  const role = user?.role;
  const [active, setActive] = useState<string | null>(null);
  
  const menuContent=(
    <>
        <MenuItem setActive={setActive} active={active} href="/shop">
          shop
        </MenuItem>
        <MenuItem setActive={setActive} active={active} href="/product">
         Product
        </MenuItem>
        <MenuItem setActive={setActive} active={active} href="/about">
          About
        </MenuItem>
       {!user && <MenuItem setActive={setActive} active={active} href="/login">
          Login
        </MenuItem>}
        {user && 
        <>
        <MenuItem setActive={setActive} active={active} href="/settings">
          Setting
        </MenuItem>
       {role==="ADMIN" && <MenuItem setActive={setActive} active={active} href="/admin/dashboard">
          Admin
        </MenuItem>}
        </>
        }
        </>
  )
  const navBrand =(
    <Drawer side="left" asChild trigger={<div><Button size="icon" radius="full" variant="ghost"><FaHamburger/></Button>Sandesh Collection</div>}>
       <Menu setActive={setActive} className="flex items-start justify-between flex-col py-10 pr-4">      
        {menuContent}
       </Menu>
    </Drawer>
  )
  return (
   <NavBarMenu navBrand={navBrand}>
      <Menu setActive={setActive} className="flex justify-between items-center">
       <div className="hidden md:flex items-center justify-between">
          {menuContent}
        </div>
        <UserButton />
      </Menu>
   </NavBarMenu>
  );
};

export default Navbar;
