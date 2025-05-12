"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
} from "lucide-react"
import { useUser } from "@clerk/nextjs"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import Logo from "@/components/logo"
import { cn } from "@/lib/utils"
// This is sample data.
const data = {
  navMain: [
    {
      title: "With Sub Items",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Sub Item 1",
          url: "#",
        },
        {
          title: "Sub Item 2",
          url: "#",
        },
        {
          title: "Sub Item 3",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: PieChart,
    },
    {
      name: "Item",
      url: "/app-page2",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()
  const { user } = useUser()
  
  if (!user) return null
  
  const userData = {
    name: user.fullName || user.username || 'Unknown',
    email: user.primaryEmailAddress?.emailAddress || 'john@doe.com',
    avatar: user.imageUrl || '/avatars/shadcn.jpg',
  }
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className={cn("group-data-[state=collapsed]:items-center group-data-[state=collapsed]:justify-center")}>
        <Logo withText={state === "expanded"} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.items} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
