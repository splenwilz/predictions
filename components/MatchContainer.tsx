import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import logo from "@/app/assets/images/logo.webp";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon, LineChartIcon } from "lucide-react";

const StatDisplay = ({ description, title, bgColor }: { description: string, title: string, bgColor: string }) => (
  <Card className={`stat justify-center items-center flex flex-col px-auto lg:px-3 w-full py-1 rounded-lg h-[45px] ${bgColor}`}>
    <CardDescription className="text-[11px]">
      {description}
    </CardDescription>
    <CardTitle className="text-[16px] -mt-[1px]">
      {title}
    </CardTitle>
  </Card>
);

// Reusable component for team logo and name
const TeamInfo = ({ name }: { name: string }) => (
  <div className="flex items-center relative">
    <span className="text-sm">{name}</span>
    <Image src={logo} alt={`${name} Logo`} width={25} height={25} className="mx-2" />
  </div>
);
export default function MatchContainer() {
  return (
    <Card className="xl:h-16 w-full xl:max:w-[1350px]">
      <CardContent className="flex py-2 w-full">
        <div className="mt-3 flex flex-col xl:flex-row xl:gap-16 w-full">
          <div className="flex flex-col xl:flex-row relative w-full">
            <div className="text-sm mr-4">Today, 16:00</div>
            <div className="xl:flex hidden relative -mt-4 xl:ml-10 2xl:ml-20">
              <TeamInfo name="FK Stuga" />
              <span className="font-bold text-xl text-gray-500 mt-4 mx-3">- : -</span>
              <TeamInfo name="Slovan Bratislava" />
            </div>
            <div className="xl:hidden block">
              <div className="mt-5 flex gap-2 justify-between relative">
                <div className="flex gap-2 relative">
                  <Image src={logo} alt={` Logo`} width={25} height={25} className="absolute mx-2" />
                  <span className="text-sm ml-12">{"FK Stuga"}</span>
                </div>
                <span className="font-bold text-xl text-gray-500  mx-3">-</span>
              </div>
              <div className="mt-2 flex gap-2 justify-between relative">
                <div className="flex gap-2 relative">
                  <Image src={logo} alt={` Logo`} width={25} height={25} className="absolute mx-2" />
                  <span className="text-sm ml-12">{"Slovan Bratislava"}</span>
                </div>
                <span className="font-bold text-xl text-gray-500  mx-3">-</span>
              </div>
            </div>

            <Separator orientation="horizontal" className="mt-5 block xl:hidden" />

            <div className="flex relative mt-10 xl:mt-0 xl:ml-20">
              <Separator orientation="vertical" className="hidden xl:flex mr-2" />

              <div className="flex w-full gap-2 -mt-2">
                <StatDisplay description="3.68" title="26%" bgColor="bg-[rgba(255,230,0,.4)]" />
                <StatDisplay description="3.8" title="25%" bgColor="bg-[rgba(255,230,0,.16)]" />
                <StatDisplay description="2" title="49%" bgColor="bg-[rgba(255,230,0,.72)]" />
                <Separator orientation="vertical" className="ml-5 hidden xl:flex" />
                <StatDisplay description="1.16" title="79%" bgColor="bg-[rgba(255,230,0,.72)]" />
                <StatDisplay description="1.63" title="58%" bgColor="bg-[rgba(255,230,0,.16)]" />
                <Separator orientation="vertical" className="ml-2 hidden xl:flex" />

                <div className="flex">
                  <div className="stat flex bg-black px-3 py-1 rounded-lg h-[45px]">
                    <LineChartIcon className="h-5 w-5 mt-2 bg-[#faff00] mr-2 rounded-sm p-[1px]" />
                    <div>
                      <CardDescription className="text-[11px] text-white">
                        <span className="mr-1">TO</span>
                        1.5
                      </CardDescription>
                      <CardTitle className="text-[16px] -mt-[1px] text-white">58%</CardTitle>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex ">
                  <div className="stat flex bg-red-500 px-3 w-36 py-1 rounded-lg h-[45px]">
                    <div className="flex gap-2 mt-2">
                      <CardTitle className="text-[16px] -mt-[1px] text-white">Place a bet</CardTitle>
                      <ArrowRightIcon className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block xl:hidden w-full stats mt-5 xl:-mt-2">
              <div className="stat flex bg-red-500 px-3 py-1 rounded-lg h-[45px]">
                <div className="flex gap-2 justify-center w-full items-center mt-2">
                  <CardTitle className="text-[16px] -mt-[1px] text-white text-center">Place a bet</CardTitle>
                  <ArrowRightIcon className="text-white ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}