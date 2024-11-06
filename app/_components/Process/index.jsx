import React from 'react'
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
import { Badge, HStack } from "@chakra-ui/react"
import { LoremIpsum } from "react-lorem-ipsum"
import { Avatar } from '@/components/ui/avatar'
import { LuTrophy } from 'react-icons/lu'
const items = [
    {
        name: "Business Strategy",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "We dive deep into your brand’s identity, carefully analyzing your goals, target audience, and market trends. With this insight, we craft a strategic plan that aligns perfectly with your vision, ensuring a roadmap for lasting success."
    },
    {
        name: "Brand Deployment",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "From concept to execution, we transform your vision into reality with cutting-edge design and seamless development. We launch your product or service with precision, ensuring it stands out and shines in a competitive market."
    },
    {
        name: "Market & Grow",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "With your brand in hand, we design and implement powerful marketing campaigns that capture attention and drive engagement. We ensure your brand grows steadily, unlocking its full potential and positioning it for continued success."
    },
    {
        name: "Maintanence & Support",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "Our Maintenance and Support services ensure your systems remain up-to-date, secure, and running smoothly long after the initial project is complete. We provide proactive monitoring, troubleshooting, and timely updates to prevent issues before they arise. Whether it's routine maintenance, performance optimization, or addressing urgent concerns, our dedicated support team is always ready to assist, ensuring your operations stay efficient and uninterrupted."
    },
]
const ProcessSection = () => {
    return (
        <AccordionRoot collapsible defaultValue={[items[0].name]} className="bg-gray-700 bg-opacity-30 backdrop-blur-xl rounded-lg shadow-lg p-8 w-full">
            {items.map((item, index) => (
                <AccordionItem key={index} value={item.name} className="text-white p-4 ">
                    <AccordionItemTrigger>
                        <div className='lg:text-[36px] xs:text-[30px] text-gray-500 font-pp'>{item.num}</div>
                        <div className="lg:text-[32px] xs:text-[18px] font-poppins xs:hidden lg:block">
                            <span className="lg:text-[52px] xs:text-[32px] font-pp  m-0">{item.name.charAt(0)}</span>
                            <span className='-ml-2'>{item.name.slice(1)}</span>
                        </div>
                        <div className="font-poppins xs:block lg:hidden">
                            <span className="lg:text-[52px] xs:text-[18px] font-pp m-0">{item.name}</span>
                        </div>
                    </AccordionItemTrigger>
                    <AccordionItemContent className="font-normal xs:text-[14px] lg:text-[20px] font-text">{item.description}</AccordionItemContent>
                </AccordionItem>
            ))}
        </AccordionRoot>
    )
}

export default ProcessSection
