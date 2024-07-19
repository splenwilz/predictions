
import logo from "@/app/assets/images/dailylogo.svg"
import { Apple, ChevronDownIcon, CircleUser, Facebook, Globe2Icon, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import lang_logo from "@/app/assets/images/lang.svg"
export default function Footer() {

    return (
        <footer className="bg-black mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex gap-5 md:gap-20 lg:gap-40">
                    <div className="flex gap-5 md:gap-20 lg:gap-20 flex-col md:flex-row">
                        <div className="logosect mb-10">
                            <Image src={logo} alt="logo" width={204} height={40} />
                            <div className="flex gap-4 mt-5">
                                <div className="h-12 w-12 rounded-md border border-gray-800 flex justify-center items-center">
                                    <Facebook className="w-6 h-6 text-[#faff00]" />
                                </div>
                                <div className="h-12 w-12 rounded-md border border-gray-800 flex justify-center items-center">
                                    <Apple className="w-6 h-6 text-[#faff00]" />
                                </div>
                            </div>
                        </div>
                        <div className="predictions ">
                            <h2 className="font-semibold text-white">Predictions</h2>
                            <ul className="">
                                <li className="">
                                    <Link href="" className="text-gray-500 text-[13px] hover:underline" >Football Predictions</Link>
                                </li>
                                <li className="">
                                    <Link href="" className="text-gray-500 text-[13px] hover:underline" >Basketball Predictions</Link>
                                </li>
                                <li className="">
                                    <Link href="" className="text-gray-500 text-[13px] hover:underline" >Baseball Predictions</Link>
                                </li>
                                <li className="">
                                    <Link href="" className="text-gray-500 text-[13px] hover:underline" >Volleyball Predictions</Link>
                                </li>
                                <li className="">
                                    <Link href="" className="text-gray-500 text-[13px] hover:underline" >Rugby Predictions</Link>
                                </li>
                                <li className="">
                                    <Link href="" className="text-gray-500 text-[13px] hover:underline" >Soccer Predictions</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="flex gap-5 lg:gap-40 flex-col-reverse sm:flex-row">
                        <div className="flex gap-5 md:gap-20  lg:gap-40 flex-col sm:flex-row">
                            <div className="news ">
                                <h2 className="font-semibold text-white">News</h2>
                                <ul className="">
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Football news</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Tennis news</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Hockey news</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Basketball news</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Boxing News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >MMA News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Motorsport News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Biathlon News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Cricket News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Olympic Games News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Snooker News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Athletics News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Golf News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Baseball News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Cycling News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Futsal News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Esports News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >NFL News</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >News archive</Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="bettingsites ">
                                <h2 className="font-semibold text-white">Best Betting Sites</h2>
                                <ul className="">
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Bet365</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Melbet</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >1xBet</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >1Win</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Betwinner</Link>
                                    </li>
                                    <li className="">
                                        <Link href="" className="text-gray-500 text-[13px] hover:underline" >Linebet</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <div className="flex gap-2">
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
                            {/* <Button className="bg-[#2C2C2C] py-0 px-4 -mt-1 relative h-9 hover:bg-[#faff00]" >
                            <Search className="h-5 w-5 hover:text-black" />
                        </Button>
                        <Button className="bg-[#2C2C2C] hidden xl:flex py-0 px-3 -mt-1 relative h-9 hover:bg-[#faff00]" >
                            <CircleUser className="h-5 w-5 hover:text-black mr-1" />
                            <span className="">Login</span>
                        </Button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse mb-5 lg:mb-0 lg:flex-row lg:gap-48 ml-5 lg:ml-24">
                <div className="flex mt-4">
                    <Link href="" className="text-gray-500 text-[13px] hover:underline" >© 2022. All rights reserved.</Link>
                </div>
                <div className="md:flex md:gap-8 py-5 inline-block">
                    <Link href="" className="text-white text-[13px] font-semibold hover:underline mx-5 hover:text-[#faff00]" >About project</Link>
                    <Link href="" className="text-white text-[13px] font-semibold hover:underline mx-5 hover:text-[#faff00]" >Vacancies</Link>
                    <Link href="" className="text-white text-[13px] font-semibold hover:underline mx-5 hover:text-[#faff00]" >Contacts</Link>
                    <Link href="" className="text-white text-[13px] font-semibold hover:underline mx-5 hover:text-[#faff00]" >Privacy policy</Link>
                    <Link href="" className="text-white text-[13px] font-semibold hover:underline mx-5 hover:text-[#faff00]" >User agreement</Link>
                    <Link href="" className="text-white text-[13px] font-semibold hover:underline mx-5 hover:text-[#faff00]" >Authors</Link>
                    <Link href="" className="text-white text-[13px] font-semibold hover:underline mx-5 hover:text-[#faff00]" >How we rate bookmakers</Link>

                </div>
            </div>
            <div className="bg-gray-800 w-full h-[1px]"></div>

        </footer>
    )
}