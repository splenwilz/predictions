"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
import { Calendar } from "./ui/calendar"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { CalendarRange } from "lucide-react"
import { Separator } from "./ui/separator"
import TeamSwitcher from "./team-switcher"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function DropdownMenus() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <div className="flex gap-2">
        <Menubar className="border-none outline-none mb-5">
          <MenubarMenu>
            <MenubarTrigger>
              <div className="p-1 border border-gray-300 rounded-md">
                <CalendarRange className=" border-gray-300" />
              </div>
            </MenubarTrigger>
            <MenubarContent className="rounded-md border-none">

              <MenubarItem>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </MenubarItem>

            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Button variant={"outline"}>Yesterday</Button>
        <Button variant={"default"}>Today</Button>
        <Button variant={"outline"}>Tomorrow</Button>
      </div>
      <div className="bg-gray-300 h-6 mt-2 w-[0.5px] mx-2 hidden lg:flex"></div>
      <div className="flex flex-col md:flex-row w-full gap-2">
        <Select>
          <SelectTrigger className="md:w-[180px] w-full">
            <SelectValue placeholder="All Tournaments" className="font-bold" />
          </SelectTrigger>
          <SelectContent className="px-0">
            <SelectItem className="px-2" value="Liga Profesional Argentina">Liga Profesional Argentina</SelectItem>
            <SelectItem className="px-2" value="Serie A Brazil">Serie A Brazil</SelectItem>
            <SelectItem className="px-2" value="Serie B Brazil">Serie B Brazil</SelectItem>
            <SelectItem className="px-2" value="Premier League">Premier League </SelectItem>
            <SelectItem className="px-2" value="Canada Primera A">Canada Primera A</SelectItem>
            <SelectItem className="px-2" value="Colombia Serie B Ecuador">Colombia Serie B Ecuador</SelectItem>
            <SelectItem className="px-2" value="Regionalliga Germany">Regionalliga Germany</SelectItem>
            <SelectItem className="px-2" value="1. Deild Iceland">1. Deild Iceland</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:w-[180px] w-full">
            <SelectValue placeholder="All Matches" className="font-bold" />
          </SelectTrigger>
          <SelectContent className="px-0">
            <SelectItem className="px-2" value="Live only">Live only</SelectItem>
            <SelectItem className="px-2" value="Plan only">Plan only</SelectItem>
            <SelectItem className="px-2" value="Finished only">Finished only</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:w-[180px] w-full">
            <SelectValue placeholder="All Matches" className="font-bold" />
          </SelectTrigger>
          <SelectContent className="px-0">
            <SelectItem className="px-2" value="Greater than/equal to 60%">Greater than/equal to 60%</SelectItem>
            <SelectItem className="px-2" value="Greater than/equal to 75%">Greater than/equal to 75%</SelectItem>
            <SelectItem className="px-2" value="Greater than/equal to 90% ">Greater than/equal to 90% </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-gray-300 h-6 mt-2 w-[0.5px] mx-2 hidden lg:flex"></div>
      <div className="flex gap-2">
        <Button variant={"default"}>All</Button>
        <Button variant={"outline"}>1X2</Button>
        <Button variant={"outline"}>Over/Under</Button>
      </div>
    </div>


  )
}
