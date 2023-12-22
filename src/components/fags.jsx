import start from "../assets/ph_star-four-fill.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { FaMinusCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
// import App from "./../App";

const Fags = () => {
  return (
    <div
      className="relative  w-[37.5rem] m-auto bg-white shadow-2xl
 rounded-[1rem] font-worksans xl:-top-[11rem] lg:-top-[7rem] md:-top-[5rem] max-sm:w-[20.4375rem] max-sm:-top-[6rem] max-sm:rounded-[0.5rem]">
      <div className="w-[32.5rem] py-[2.5rem] m-auto max-sm:w-[17.4375rem] max-sm:py-[1.5rem]">
        <div className="flex gap-[1.5rem]">
          <img
            className="w-[2.5rem] h-[2.5rem] my-auto max-sm:w-[1.5rem] max-sm:h-[1.5rem]"
            src={start}
            alt=""
          />
          <h1 className="my-auto font-[700] text-[3.5rem] max-sm:text-[2rem]">
            FAQs
          </h1>
        </div>
        <div>
          <div className="mt-7 max-sm:mt-[1.5rem]">
            <Accordion allowMultiple w="full">
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <p
                            className="hover:text-[#AD28EB] font-[600] text-[#301534] text-[1.125rem]
                          max-sm:text-[1rem] ">
                            What is Frontend Mentor, and how will it help me?
                          </p>
                        </Box>
                        {isExpanded ? (
                          <FaMinusCircle fontSize="24px" color="#black" />
                        ) : (
                          <IoIosAddCircle fontSize="24px" color="#AD28EB" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p className="text-[#8B6990]  text-[1rem] leading-[1.5rem] max-sm:leading-[ 1.3125rem] max-sm:text-[0.857rem]">
                        Frontend Mentor offers realistic coding challenges to
                        help developers improve their frontend coding skills
                        with projects in HTML, CSS, and JavaScript. It’s
                        suitable for all levels and ideal for portfolio
                        building.
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <p className="hover:text-[#AD28EB] font-[600] text-[#301534] text-[1.125rem] max-sm:text-[1rem]">
                            Is Frontend Mentor free?
                          </p>
                        </Box>
                        {isExpanded ? (
                          <FaMinusCircle fontSize="24px" color="#black" />
                        ) : (
                          <IoIosAddCircle fontSize="24px" color="#AD28EB" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p className="text-[#8B6990] text-[1rem] leading-[1.5rem] max-sm:leading-[ 1.3125rem] max-sm:text-[0.857rem]">
                        Yes, Frontend Mentor offers both free and premium coding
                        challenges, with the free option providing access to a
                        range of projects suitable for all skill levels.
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>{" "}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <p
                            className="hover:text-[#AD28EB] font-[600] text-[#301534] text-[1.125rem]
                             max-sm:text-[1rem]">
                            Can I use Frontend Mentor projects in my portfolio?
                          </p>
                        </Box>
                        {isExpanded ? (
                          <FaMinusCircle fontSize="24px" color="#black" />
                        ) : (
                          <IoIosAddCircle fontSize="24px" color="#AD28EB" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p className="text-[#8B6990] text-[1rem] leading-[1.5rem] max-sm:leading-[ 1.3125rem] max-sm:text-[0.857rem]">
                        Yes, you can use projects completed on Frontend Mentor
                        in your portfolio. It&lsquo;s an excellent way to
                        showcase your skills to potential employers!
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>{" "}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <p
                            className="hover:text-[#AD28EB] font-[600] text-[#301534]
                          text-[1.125rem] max-sm:text-[1rem]">
                            How can I get help if I&apos;m stuck on a challenge?
                          </p>
                        </Box>
                        {isExpanded ? (
                          <FaMinusCircle fontSize="24px" color="black" />
                        ) : (
                          <IoIosAddCircle fontSize="24px" color="#AD28EB" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p className="text-[#8B6990] text-[1rem] leading-[1.5rem] max-sm:leading-[ 1.3125rem] max-sm:text-[0.857rem]">
                        The best place to get help is inside Frontend
                        Mentor&apos;s Discord community. There&apos;s a help
                        channel where you canask questions and seek support from
                        other community members.
                      </p>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fags;
