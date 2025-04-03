'use client'

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { ThemeProvider } from "@/components/theme-provider";
import landercard from '@/public/cgi/landercard.png';
import landercardback from '@/public/cgi/landercardback.png';
import logofull from '@/public/cgi/logofull.png';
import landerfoot from '@/public/cgi/landerfoot.png';
import Link from 'next/link';
import { SetStateAction, useState } from 'react';

import backgroundImage from '@/public/cgi/bg.png';
import peechiGamesLogoText from '@/public/cgi/peechiGamesLogo.png';
import acmPinkLogo from "@/public/cgi/acm-white 1.png"
import infoLogo from "@/public/cgi/Info.png"
import acmPinkShapeLogo from '@/public/cgi/acm-pink-logo.png'

import photo1 from '@/public/cgi/photos/photo1.png'
import photo2 from '@/public/cgi/photos/photo2.png'
import photo3 from '@/public/cgi/photos/photo3.png'
import photo4 from '@/public/cgi/photos/photo4.png'

import number1 from '@/public/cgi/numbers/1.png'
import number2 from '@/public/cgi/numbers/2.png'
import number3 from '@/public/cgi/numbers/3.png'
import number4 from '@/public/cgi/numbers/4.png'

import profile from '@/public/cgi/profile.png'

import plus from '@/public/cgi/plus.png';
import minus from '@/public/cgi/minus.png';

import number1Photo from '@/public/cgi/number1Photo.png'
import number2Photo from '@/public/cgi/numberTwoPhoto.png'
import number3Photo from '@/public/cgi/number3Photo.png'

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "Where and when will it be?", answer: "The event will be at the multipurpose field and starts at 2:00pm." },
    { question: "How much is the prize?", answer: "The prize pool will be a dollar per participant. If 300 people play, pool would be $300.00. There is no entry fee to participate." },
    { question: "Who is hosting the event?", answer: "The event is hosted by the Association of Computing Machinery (ACM) at UTD." }
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div
        className="h-screen bg-cover bg-no-repeat bg-center px-8"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), black), url(${backgroundImage.src})`, backgroundPosition: 'center top'
        }}
      >
        <div className="flex flex-row justify-between">
          <Link href="https://acmutd.co" target="_blank" rel="noopener noreferrer" className="mx-8 mt-8" draggable="false">
            <Image src={acmPinkLogo} alt="ACM Logo" height={40} draggable="false" />
          </Link>
          <div className="flex">
            <Image src={profile} alt="PeechiProfile" width={40} height={40} className="mt-8" draggable="false" />
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-16 border-transparent border-t-white mt-12 ml-4" />
          </div>
        </div>

        <div>
          <Image src={peechiGamesLogoText} alt="PeechiGamesLogo" width={565} height={278} className="mt-32" draggable="false" />
          <h3 className="text-xl max-w-138 py-8">The Peechi Games are the first event of their kind in UT Dallas History. They are slated to be held at 2:00 PM on the 4th of April.</h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/register" draggable="false" >
            <div className="transition-transform duration-300 ease-in-out hover:scale-105 rounded-sm bg-[#E84784] flex justify-center items-center p-4 w-28 h-10">
              <div className="w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-10 border-l-white pl-2" />
              <h3>Register</h3>
            </div>
          </Link>

          <Link href="https://acmutd.co" target="_blank" rel="noopener noreferrer" draggable="false" >
            <div className="transition-transform duration-300 ease-in-out hover:scale-105 rounded-sm bg-white/30 bg-opacity-30 flex justify-center items-center p-2 w-55 h-10">
              <Image src={infoLogo} alt="Info Logo" height={20} className="mr-1" />
              <h3>Learn more about ACM</h3>
            </div>
          </Link>

        </div>

        <div className="pt-8">
          <h3 className="text-l font-semibold">What are the Games?</h3>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 pt-4">
            <div
              className="flex flex-col bg-black h-44 lg:w-1/4 justify-center rounded-xl"
              style={{ backgroundImage: `url(${photo1.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <h3 className="w-80 font-semibold text-xl px-4 break-words text-balance">A Competition of Games</h3>
            </div>

            <div
              className="flex flex-col bg-black h-44 lg:w-1/4 justify-center rounded-xl"
              style={{ backgroundImage: `url(${photo2.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <h3 className="w-80 font-semibold text-xl px-4 break-words text-balance">Opportunity for One Winner to Win a Cash Prize</h3>
            </div>

            <div
              className="flex flex-col bg-black h-44 lg:w-1/4 justify-center rounded-xl"
              style={{ backgroundImage: `url(${photo3.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <h3 className="w-96 font-semibold text-xl px-4">Cash prize amount<br />$1 per participant<br />(300 people = $300)</h3>
            </div>

            <div
              className="flex flex-col bg-black h-44 lg:w-1/4 justify-center rounded-xl"
              style={{ backgroundImage: `url(${photo4.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <h3 className="w-60 font-semibold text-xl px-4">Come to play or come to watch!</h3>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-semibold">How do I join?</h3>
          <div className="flex flex-col lg:flex-row max-lg:items-center mt-4">
            <div className="flex flex-row mt-4 ml-2">
              <Image src={number1} alt="Number 1" width={71} height={100} />
              <div className="h-38 w-40 bg-white/20 flex justify-center max-lg:ml-12 lg:ml-2 rounded-xl" style={{ backgroundImage: `url(${number1Photo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <Link href="/register" className="transition-transform duration-300 ease-in-out hover:scale-105 bg-[#E84784] text-2xl px-2 py-1 flex justify-center items-center rounded-sm font-semibold place-self-end mb-4">Register</Link>
              </div>
            </div>

            <div className="flex flex-row mt-4 lg:ml-8">
              <Image src={number2} alt="Number 2" width={115} height={100} />
              <div className="h-38 w-40 bg-white/20 flex justify-center ml-2 rounded-xl" style={{ backgroundImage: `url(${number2Photo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className="text-2xl font-bold place-self-end mb-4 bg-white/60 p-1 rounded-sm text-black">Share</h1>
              </div>
            </div>

            <div className="flex flex-row mt-4 lg:ml-8">
              <Image src={number3} alt="Number 3" width={120} height={100} />
              <div className="h-38 w-40 bg-white/20 flex justify-center ml-2 rounded-xl" style={{ backgroundImage: `url(${number3Photo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className="text-2xl font-bold place-self-end mb-4 bg-white/60 p-1 text-black rounded-sm">Practice</h1>
              </div>
            </div>

            <div className="flex flex-row mt-4 lg:ml-8">
              <Image src={number4} alt="Number 4" width={130} height={100} />
              <div className="flex mt-4 ml-2 text-2xl w-40 font-semibold justify-center items-center">
                Head to UTD Multipurpose Field at 2:00 on April 4th
              </div>
            </div>

          </div>
        </div>

        <div className="pt-8">
          <h3 className="text-l font-semibold pb-4">FAQ</h3>
          <div className="px">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className={`transition-all bg-white/20 w-full flex p-4 flex-row font-semibold justify-between cursor-pointer ${openIndex === index ? "rounded-t-xl" : "rounded-xl"}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <Image src={openIndex === index ? minus : plus} alt="Toggle" width={29} height={29} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 p-4 border-t-2 border-gray-400 bg-white/20 rounded-b-xl" : "max-h-0"}`}>
                  {openIndex === index && <p>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="border-gray-700 border-t-2 mt-16 flex justify-center py-8" >
          <Link href="https://acmutd.co" target="_blank" rel="noopener noreferrer" className="mx-8" draggable="false" >
            <Image src={acmPinkShapeLogo} alt="ACM Logo" height={40} draggable="false" />
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}