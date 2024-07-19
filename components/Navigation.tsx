"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import logo from "@/app/assets/images/dailylogo.svg"
import logo2 from "@/app/assets/images/dailylogo2.svg"
import lang_logo from "@/app/assets/images/lang.svg"
import { ChevronRight, CircleUser, Globe2Icon, MenuIcon, Search, User, User2, User2Icon } from "lucide-react"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { Button } from "./ui/button"

export function Navigation() {
    return (
        <div className="bg-black justify-between w-full px-3 lg:px-10 2xl:px-28 h-[116px] xl:h-[64px] py-2 flex gap-3 pt-5 flex-col xl:flex-row">
            <div className="flex  gap-3 justify-between">
                <div className="flex gap-3 relative">
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild className="flex md:hidden">
                                <MenuIcon className="text-[#faff00] h-6 w-6" />
                            </SheetTrigger>
                            <SheetContent side="left" className="mx-0">
                                <div className="logo relative">
                                    <Image src={logo2} alt="logo" width={150} height={30} className="" />
                                </div>

                                <div className="w-full">
                                    <Button className="justify-between flex py-0 px-3 mt-5 relative w-[calc(100%-38px)] h-11" >
                                        <span className="flex gap-2">
                                            <CircleUser className="h-5 w-5 hover:text-black mr-1" />
                                            <span className="">Login</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>

                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-5 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">Main</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-1 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">Prediction</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-1 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">Mathematical Prediction</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-1 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">News</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-1 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">News Archive</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-1 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">Betting Sites</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-1 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">Bonuses</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-1 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">Scores</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                    <Button variant={"ghost"} className="justify-between flex py-0 px-3 mt-1 relative w-full h-11" >
                                        <span className="flex gap-2">
                                            <span className="">League</span>
                                        </span>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                                <SheetFooter>
                                    {/* <SheetClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </SheetClose> */}
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="logo relative">
                        <Image src={logo} alt="logo" width={150} height={30} className="" />
                    </div>
                </div>
                <div className="flex xl:hidden gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="bg-[#2C2C2C] p-4 -top-1 h-9 flex relative rounded-md">
                            <Image src={lang_logo} alt="lang_logo" width={20} height={20} className="absolute top-[8px]  -ml-2" />
                            <span className="ml-[20px] -mt-[8px] text-white font-semibold text-sm">EN</span>
                            <ChevronDownIcon className="h-5 w-5 text-[#faff00] ml-1 -mt-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#2C2C2C] ountline-none border-none w-2 p-4 ml-12">
                            <DropdownMenuItem>
                                <Globe2Icon className="h-5 w-5 text-gray-300 -ml-3 -mt-2 mr-1" />
                                <span className="ml-[2px] -mt-[8px] text-white hover:bg-transparent focus:bg-transparent font-semibold text-sm">RU</span>

                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="bg-[#2C2C2C] py-0 px-4 -mt-1 relative h-9 hover:bg-[#faff00]" >
                        <Search className="h-5 w-5 hover:text-black" />
                    </Button>
                    <Button className="bg-[#2C2C2C] hidden xl:flex py-0 px-3 -mt-1 relative h-9 hover:bg-[#faff00]" >
                        <CircleUser className="h-5 w-5 hover:text-black mr-1" />
                        <span className="">Login</span>
                    </Button>

                </div>
            </div>
            <div className="flex gap-3 ">
                <div className="flex gap-3 w-full overflow-x-auto lg:ml-10 lg:overflow-visible">
                    <div className="flex gap-4">
                        <Link href="/main" className="text-[15px] text-white font-bold leading-7">
                            Main
                        </Link>
                        <Link href="/prediction" className="text-[15px] text-white font-bold leading-7">
                            Prediction
                        </Link>
                        <Link href="/news" className="text-[15px] text-white font-bold leading-7">
                            News
                        </Link>
                    </div>
                    <NavigationMenu className="bg-black -mt-2 ml-3">
                        <NavigationMenuList className="">
                            <NavigationMenuItem >
                                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white text-[15px] font-semibold hover:text-white focus:bg-transparent focus:text-white focus:outline-none">Betting Sites</NavigationMenuTrigger>
                                <NavigationMenuContent className="">
                                    <ul className="grid  p-6 pt-2 md:w-[200px] lg:w-[300px] ">
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in Bandeglesh</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in United Kingdom</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in Kenya</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in Nigeria</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in South Africa</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in Egypt</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in France</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in Canada</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in Australia</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Sites in Spain</Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white text-[15px] font-semibold hover:text-white focus:bg-transparent focus:text-white focus:outline-none">Bonuses</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid  p-6 pt-2 md:w-[200px] lg:w-[300px] ">
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Promo Codes</Link>
                                        </li>
                                        <li className="">
                                            <Link href={"/"} className="text-[14px] font-medium leading-8">Betting Offers</Link>
                                        </li>

                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <Link href="/news" className="text-[15px] text-white font-semibold leading-7">
                                Scores
                            </Link>
                        </NavigationMenuList>
                        <Link href="/news" className="text-[15px] truncate text-clip relative -top-0 rounded-md ml-5 lg:bg-[#faff00] px-4 text-white lg:text-black py-1  font-semibold leading-7">
                            Mathematical Predictions
                        </Link>
                    </NavigationMenu>
                </div>
                <div className="hidden xl:flex gap-2 lg:ml-10">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="bg-[#2C2C2C] p-4 -top-1 flex relative rounded-md">
                            <Image src={lang_logo} alt="lang_logo" width={20} height={20} className="absolute top-[8px]  -ml-2" />
                            <span className="ml-[20px] -mt-[8px] text-white font-semibold text-sm">EN</span>
                            <ChevronDownIcon className="h-5 w-5 text-[#faff00] ml-1 -mt-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#2C2C2C] ountline-none border-none w-2 p-4 ml-12">
                            <DropdownMenuItem>
                                <Globe2Icon className="h-5 w-5 text-gray-300 -ml-3 -mt-2 mr-1" />
                                <span className="ml-[2px] -mt-[8px] text-white hover:bg-transparent focus:bg-transparent font-semibold text-sm">RU</span>

                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="bg-[#2C2C2C] py-0 px-4 -mt-1 relative h-9 hover:bg-[#faff00]" >
                        <Search className="h-5 w-5 hover:text-black" />
                    </Button>
                    <Button className="bg-[#2C2C2C] py-0 px-3 -mt-1 relative h-9 hover:bg-[#faff00]" >
                        <CircleUser className="h-5 w-5 hover:text-black mr-1" />
                        <span className="">Login</span>
                    </Button>

                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
