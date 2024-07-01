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
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">All Courses</HoveredLink>
            <HoveredLink href="/individual">Introduction to Music Theory</HoveredLink>
            <HoveredLink href="/team">Fundamentals of Music Composition </HoveredLink>
            <HoveredLink href="/enterprise">Modern Music Production Techniques</HoveredLink>
            <HoveredLink href="/enterprise">Guitar Mastery</HoveredLink>
            <HoveredLink href="/enterprise">Advanced Piano Techniques</HoveredLink>
          </div>
        </MenuItem>

        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="About Us">
          </MenuItem>
        </Link>
                  
      </Menu>

    </div>
  )
}

export default Navbar