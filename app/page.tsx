import Image from "next/image";
import MatchContainer from "@/components/MatchContainer";
import Link from "next/link";
import champions_league from "@/app/assets/images/champions_league.webp";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, ArrowLeftIcon, ChevronRight, LineChartIcon, TimerReset } from "lucide-react";
import { ChartBarIcon } from "@heroicons/react/16/solid";
import { DropdownMenus } from "@/components/DropdownMenus";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="bg-[#F5F6F6] h-10 flex gap-2 px-3 lg:px-10 2xl:px-28  pt-2">
        <p className="text-[12px] font-semibold">Dailysports </p>
        <ChevronRight className="h-3 w-3 mt-1" />
        <p className="text-[12px] font-semi-bold">
          Mathematical Predictions </p>
      </div>


      <main className="px-3 lg:px-10 mt-10 flex flex-col ">
        <div className="">
          <div className="flex flex-col md:flex-row md:gap-4 mb-5">
            <h1 className="text-[23px] lg:text-[28px] font-extrabold">Mathematical Predictions for Today </h1>
            <div className="flex gap-1 mt-0 md:mt-2">
              <LineChartIcon className="h-4 w-4 mt-2 bg-[#faff00] border border-black mr-2 rounded-sm p-[1px]" />
              <span className="font-bold mt-1">Statistics</span>
            </div>
          </div>
          <DropdownMenus />
          <Separator className="my-7 flex md:hidden" orientation="horizontal" />
          <div className="relative flex gap-2 mb-5 mt-10">
            <Image
              src={champions_league}
              alt="champions_league"
              width={25}
              height={25}
              className="mx-2 absolute mt-1"
            />
            <Link href={"/"} className="text-[18px] ml-12 font-extrabold leading-7">
              International: Champions League Qualification
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-col gap-2 w-full">
            <MatchContainer />
            <MatchContainer />
          </div>

          <div className="relative flex gap-2 mb-5 mt-10">
            <Image
              src={champions_league}
              alt="champions_league"
              width={25}
              height={25}
              className="mx-2 absolute mt-1"
            />
            <Link href={"/"} className="text-[18px] ml-12 font-extrabold leading-7">
              Brazil: Serie A
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-col gap-2 w-full">
            <MatchContainer />
            <MatchContainer />
          </div>
          <div className="relative flex gap-2 mb-5 mt-10">
            <Image
              src={champions_league}
              alt="champions_league"
              width={25}
              height={25}
              className="mx-2 absolute mt-1"
            />
            <Link href={"/"} className="text-[18px] ml-12 font-extrabold leading-7">
              USA: MLS USA
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-col gap-2 w-full">
            <MatchContainer />
            <MatchContainer />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button variant={"default"} className="mt-10 font-extrabold px-6">
            <TimerReset className="h-5 w-5 mr-2 font-extrabold" /> Show all
          </Button>
        </div>
        <div className="mt-10">
          <div className="">
            <h2 className="text-[20px] lg:text-[22px] font-extrabold">Mathematical predictions for sports betting: how it works</h2>
            <p className="text-[14px] leading-7 mt-1">
              Mathematical prediction is an estimation of the probabilities of match outcomes performed by a computer program. Similar calculations can be found on many services specializing in bookmaking. As a rule, they are provided for free. Automated predictions simplify the analysis of a sporting event, saving the time spent on comparing the odds of the parties.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-[20px] lg:text-[22px] font-extrabold">What are Mathematical Football Prediction</h2>
            <p className="text-[14px] leading-7 mt-1">
              Assessing the opponents' chances is carried out by programs using different algorithms, but in general the model is approximately the same. When calculating probabilities, bookmaker odds are taken as a basis. The results are presented as percentages. For example, 35% for the first team to win, 18% for a draw and 47% for the opponent to win.
            </p>
            <p className="text-[14px] leading-7 mt-6">
              Of course, no mathematical prediction for today can provide 100% of a bet success. The status of a favorite and excellent stats do not yet guarantee a positive result for any team in a given match. At the same time, in order to win more or less serious money in such a bet, you have to risk a large amount. One defeat is enough to lose earnings for several bets and each successful bet takes effort and nerves. So you shouldn’t perceive free mathematical prediction as an infallible hint.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-[20px] lg:text-[22px] font-extrabold">Advantages and disadvantages of mathematical predictions</h2>
            <p className="text-[14px] leading-7 mt-1">
              We would say the main disadvantage is the limited number of betting options. As a rule, probabilities are calculated only for the main matches’ outcomes - 1, X, 2. Sometimes Double results are additionally evaluated - the non-loss of one team or the absence of a draw. Free services usually do not offer anything more, and for many players this is clearly not enough. They want to bet on totals, handicaps, exact scores and other game events.</p>
            <p className="text-[14px] leading-7 mt-6">
              But there are many more advantages. Available today mathematical prediction is characterized by:</p>

            <ul className="text-[14px] leading-7 mt-6 ml-10">
              <li className="list-disc">
                highly accurate probability estimates;
              </li>
              <li className="list-disc">
                displaying predictions in a convenient percentage format;
              </li>
              <li className="list-disc">
                public (no need to pay anything).
              </li>
            </ul>
            <p className="text-[14px] leading-7 mt-6">
              Betting tips that are made using an algorithm can be really helpful when analyzing future rates.</p>

          </div>


          <div className="mt-5">
            <h2 className="text-[20px] lg:text-[22px] font-extrabold">How to work effectively with mathematical predictions for football</h2>
            <p className="text-[14px] leading-7 mt-1">
              Among those who want to use prediction today, football is the most popular sport. At least, because it accounts for most of the events evaluated by the computer. As we have already said, when determining probabilities, the main criterion is the bookmaker’s odds. When compiling their quotes, analysts take into account many factors, but just before the start of the game, there may occur events that can affect the result.</p>
            <p className="text-[14px] leading-7 mt-6">
              Careful study of the latest news helps to pay attention in time to force majeure events such as injuries and illnesses of participants, conflicts in the team, a change of coach or a sharp deterioration in the weather. Based on the information received, you can cancel the bet, which was made according to the mathematical prediction today, or, conversely, adjust it. Of course, bookmakers also try to track everything that can influence the result, but they have to work with statistical indicators of hundreds of events simultaneously. The player almost always has time left to use an advantageous situation before the previously fixed odds change.</p>
          </div>

          <div className="mt-5">
            <h2 className="text-[20px] lg:text-[22px] font-extrabold">Can Mathematical Football Prediction Help Win Bets? for football</h2>
            <p className="text-[14px] leading-7 mt-1">
              Mathematical analysis is a powerful weapon in the hands of a bookmaker’s client, but few manage to fully master it. Every gambler dreams of an ideal program or strategy that brings a stable income. Unfortunately or fortunately, such models do not yet exist in nature. Neither human nor mathematical tips give a 100% guarantee. Otherwise, there would be no point in bookmakers accepting bets. But practice shows that only a systemic game using analysis is capable of producing results over a long distance, so there is nothing left to do but try different approaches in finding the optimal scheme for yourself.</p>
            <p className="text-[14px] leading-7 mt-6">
              Math predictions definitely help as an analysis tool. Many people try strategies based on mathematical betting tips, choosing events with the highest probability. We cannot say how effective this is. Our gaming experience suggests that the success of any system largely depends on intuition and basic luck. Hints from robotic services will not hurt, but only the one who makes the bet risks money.</p>
          </div>

          <h2 className="text-[22px] lg:text-[24px] font-extrabold mt-5">FAQ</h2>

          <div className="mt-5">
            <h2 className="text-[20px] lg:text-[22px] font-extrabold">How do math predictions work?</h2>
            <p className="text-[14px] leading-7 mt-1">
              Mathematical prediction in sports is the probability of a particular outcome of a match, calculated by the program. The odds of bookmakers are used as a basis. Data is displayed as a percentage, which allows you to immediately see the odds of the parties in a format understandable for everyone.</p>
          </div>

          <div className="mt-5">
            <h2 className="text-[20px] lg:text-[22px] font-extrabold">Are there advantages of using mathematical football predictions?</h2>
            <p className="text-[14px] leading-7 mt-1">
              There is no need to pay for mathematical prediction today. They are offered free of charge by various resources affiliated with bookmaker bets. The submission form allows you to immediately see promising options. This is a convenient auxiliary tool when analyzing statistics, but the final decision on the rate must always be made independently.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
