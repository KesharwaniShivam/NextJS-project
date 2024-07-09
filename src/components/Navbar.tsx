'use client'

import  { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

import Link from "next/link";
import cn from "@/utils/cn";




function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-12 inset-x-0 max-w-2xl mx-auto z-50", className)}
  >
      <Menu setActive={setActive}>
          <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home">
        
          </MenuItem>
          </Link> 
          
          <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/courses" >All Courses</HoveredLink>
            <HoveredLink href="/courses">Introduction to Music Theory</HoveredLink>
            <HoveredLink href="/courses">Fundamentals of Music Composition </HoveredLink>
            <HoveredLink href="/courses">Modern Music Production Techniques</HoveredLink>
            <HoveredLink href="/courses">Guitar Mastery</HoveredLink>
            <HoveredLink href="/courses">Advanced Piano Techniques</HoveredLink>
          </div>
        </MenuItem>

        <Link href={'/contact'}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>
                  
      </Menu>

    </div>
  )
}

export default Navbar