"use client";
import('preline')
import Image from "next/image";
// import { useEffect } from "react";
import Team from "../components/Team";

const about = () => {
    // useEffect(() => {import('preline')}, []);
    return ( 
        <>
        {/* Mission Statement */}
        <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-[#111] mt-12">
            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="px-4 mb-10 md:text-center md:mb-20">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        About us
                    </h1>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Get to know us, take a look at we do.
                    </p>
                    {/* <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                        <div className="flex-1 h-2 bg-red-700">
                        </div>
                        <div className="flex-1 h-2 bg-red-600">
                        </div>
                        <div className="flex-1 h-2 bg-red-700">
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-wrap ">
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <Image width={500} height={500} src="/bg.jpg" className="relative z-40 object-cover w-full h-96 rounded-lg"/>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <h2
                            className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-red-500 dark:border-red-700 dark:text-gray-300">
                            We are providing a better facility
                        </h2>
                        <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            At Coporate News Africa, our mission is to serve as a leading source of insightful and unbiased media content that empowers and connects individuals across the African continent. Committed to journalistic excellence, we aim to provide timely, credible news coverage that showcases the diversity of Africa's stories, achievements, and challenges.
                            Driven by a vision of positive transformation, we pledge to uphold the highest standards of ethics, fostering a sense of community and understanding. Coporate News Africa seeks to be the trusted bridge connecting people, ideas, and opportunities, contributing to a narrative that reflects the dynamic and vibrant spirit of Africa.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQs */}
        <section className="flex items-center bg-white h-full xl:h-screen dark:bg-[#222] font-poppins">
            <div className="max-w-5xl p-4 mx-auto">
                <div className="text-center mb-14">
                    <h1 className="mb-4 text-3xl font-bold dark:text-white"> Frequently Asked Questions </h1>
                    <p className="max-w-xl mx-auto text-gray-500">
                      Below are a list of questions our customers ask Frequently.
                    </p>
                </div>
                {/*  Tab Nav */}
                <nav className="max-w-6xl mx-auto mb-14 grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4" aria-label="Tabs" role="tablist">
                    <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex justify-between items-center md:flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                    <svg className="flex-shrink-0  sm:block h-7 w-7 hs-tab-active:text-red-600 text-gray-800 dark:hs-tab-active:text-red-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
                    <span className="md:mt-5">
                        <span className=" lg:block md:mt-2 text-gray-800 dark:text-gray-200">General.</span>
                    </span>
                    </button>

                    <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex justify-between items-center md:flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                    <svg className="flex-shrink-0  sm:block h-7 w-7 hs-tab-active:text-red-600 text-gray-800 dark:hs-tab-active:text-red-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                    <span className="md:mt-5">
                        <span className=" lg:block md:mt-2 text-gray-800 dark:text-gray-200">Content Development.</span>
                    </span>
                    </button>

                    <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex justify-between items-center md:flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                    <svg className="flex-shrink-0  sm:block h-7 w-7 hs-tab-active:text-red-600 text-gray-800 dark:hs-tab-active:text-red-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                    <span className="md:mt-5">
                        <span className=" lg:block md:mt-2 text-gray-800 dark:text-gray-200">Advertisment.</span>
                    </span>
                    </button>
                </nav>
                {/*  End Tab Nav */}
                <div className="w-full">
                    {/* Tab 1 */}
                    <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        What is Coporate News Africa's mission and vision?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: Coporate News Africa is dedicated to being a leading source of insightful and unbiased media content, with a mission to empower and connect individuals across the African continent. Our vision is to contribute to a positive transformation by showcasing the diversity of Africa's stories, achievements, and challenges.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        How does Coporate News Africa differentiate itself from other media outlets?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: We stand out through our commitment to journalistic excellence, transparency, and inclusivity. Coporate News Africa aims to provide timely and credible news coverage, prioritizing the voices and narratives that reflect the dynamic and vibrant spirit of Africa.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        Who are the key figures or contributors behind Coporate News Africa's content?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: Our content is crafted by a team of experienced journalists, contributors, and thought leaders passionate about Africa. Visit our "Meet the Team" page to learn more about the individuals shaping the narrative at Coporate News Africa.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        What regions and topics does Coporate News Africa primarily cover?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: Corporate News Africa covers a wide spectrum of topics across the African continent, from economics, mining, and energy to culture and innovation. We strive to provide comprehensive coverage, ensuring a holistic representation of the diverse regions and stories within Africa.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab 2 */}
                    <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        How does Coporate News Africa ensure the accuracy and credibility of its news coverage?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: We uphold the highest standards of journalistic integrity. Our editorial process involves thorough fact-checking, verification, and adherence to ethical guidelines. Coporate News Africa is committed to delivering accurate and credible news to our readers.


                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        What is the editorial process for selecting and publishing stories?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: Our editorial process involves a careful selection of stories that align with our mission and vision. We prioritize relevance, accuracy, and diversity to offer a well-rounded perspective on the issues that matter in Africa.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        Does Coporate News Africa focus on any specific industry or sector in its reporting?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: While we cover a broad range of topics, Coporate News Africa doesn't limit its focus to a specific industry or sector. Our goal is to provide a comprehensive view of the continent, spanning politics, economics, culture, and more.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        How can readers contribute or submit story ideas to Coporate News Africa?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: We welcome reader contributions and story ideas. Please visit our "Contact Us" page for information on how to submit your ideas or get in touch with our editorial team.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        What platforms and formats does Coporate News Africa utilize to deliver its content?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: Coporate News Africa delivers content through its website, social media platforms, and newsletters. We offer a variety of formats, including articles, videos, and interactive content to cater to diverse audience preferences.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        Is there a subscription model, and how can readers support Coporate News Africa financially?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: Yes, we offer subscription plans to support our continued commitment to quality journalism. You can find information on subscription options on our "Support Us" page.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        How can users engage with Coporate News Africa through social media?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: Connect with us on social media platforms such as Twitter, Facebook, and Instagram. We encourage our readers to share, comment, and engage with our content to be part of the conversation.
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="mr-4 text-red-500 dark:text-red-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                                <div className="flex-1">
                                    <span className="font-bold dark:text-white">
                                        Are there plans for regional expansion or additional language offerings in the future?
                                    </span>
                                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                        Answer: Coporate News Africa is continually exploring opportunities for expansion. Stay tuned for updates on regional coverage and additional language offerings as we work towards making our content more accessible to a broader audience.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Team/>
        </>
     );
}
 
export default about;