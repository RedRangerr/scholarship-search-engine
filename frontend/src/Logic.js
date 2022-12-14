import {default as axios} from "axios";

let data = [
    {
        "name of scholarship": "Niche's 50k No-Essay Scholarship",
        "link": "https://www.niche.com/colleges/scholarships/50k-no-essay-scholarship/?utm_source=bold.org&utm_medium=Referral&utm_campaign=bold_50k_202208&subId1=902463",
        "category": "No-Essay",
        "money earned": "$50,000",
        "deadline": "September 30th 2022",
        "brief description": "Apply with just a click of a button to have a chance of winning $50,000 to cover college expenses! No essay required!",
        "submitted by": "Abigail Jeffie"
    },
    {
        "name of scholarship": "Goodwall #ScholarshipNow Challenge",
        "link": "https://scholarshipusa.goodwall.io/",
        "category": "Video, No Essay",
        "money earned": "$2,500",
        "deadline": "September 30th 2022",
        "brief description": "Post 2-min video",
        "submitted by": "Abhinav Biju"
    },
    {
        "name of scholarship": "Scholarships360 $1,000 Scholarship",
        "link": "https://scholarships360.org/scholarships/search/scholarships360-1000-no-essay-scholarship/",
        "category": "No-Essay",
        "money earned": "$1,000",
        "deadline": "September 30th 2022",
        "brief description": "Create an account with Scholarships360",
        "submitted by": "Abhinav Biju"
    },
    {
        "name of scholarship": "BigFuture Scholarships for the Class of 2023",
        "link": "https://bigfuture.collegeboard.org/pay-for-college/bigfuture-scholarships?excmpid=oc453-st-33-s360",
        "category": "No-Essay",
        "money earned": "Amounts vary",
        "deadline": "Deadlines vary",
        "brief description": "Do certain tasks related to college planning",
        "submitted by": "Abhinav Biju"
    },
    {
        "name of scholarship": "Be Bold\" No-Essay Scholarship",
        "link": "https://bold.org/scholarships/the-be-bold-no-essay-scholarship/#ref=exclusive-scholarships",
        "category": "No-Essay",
        "money earned": "$25,000",
        "deadline": "September 30th 2022",
        "brief description": "Be the applicant with the 'boldest' profile",
        "submitted by": "Abhinav Biju"
    },
    {
        "name of scholarship": "No Essay Smart Owl Scholarship",
        "link": "https://scholarshipowl.com/awards/smart-owl-scholarship?transaction_id=10292ebb23d88e18d74b41c8dc3493&offer_id=24&affiliate_id=1490&aff_sub=&aff_sub2=&aff_sub3=&aff_sub4=&aff_sub5=",
        "category": "No-Essay Sweepstakes",
        "money earned": "$7,000",
        "deadline": "September 29th 2022, 11:59 PM PDT",
        "brief description": "Create an account to enter sweepstakes",
        "submitted by": "Abhinav Biju"
    },
    {
        "name of scholarship": "Create-A-Greeting-Card Scholarship",
        "link": "https://www.gallerycollection.com/greeting-cards-scholarship.htm",
        "category": "No-Essay, Artistic",
        "money earned": "$10,000",
        "deadline": "March 2nd, 2023",
        "brief description": "Submit artwork for a postcard design, judges choose the best submission to recieve the scholarship",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "ScholarshipPoints No-Essay Scholarships",
        "link": "https://www.scholarshippoints.com",
        "category": "No-Essay, Sweepstakes",
        "money earned": "Amounts vary",
        "deadline": "Deadlines vary",
        "brief description": "Sign up to enter scholarship sweepstakes, participants can increase their number of entries by completing tasks mentioned on the website",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "$2,000 Nitro Scholarship",
        "link": "https://www.nitrocollege.com/nitro-scholarship-application?utm_source=cpc&utm_medium=fastweb&utm_campaign=FW_student_yml",
        "category": "No-Essay",
        "money earned": "$2,000",
        "deadline": "September 30th 2022 (additional monthly scholarships)",
        "brief description": "Apply with basic information, sweepstakes-based scholarship",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "CollegeXpress Scholarship",
        "link": "https://www.collegexpress.com/reg/signup?campaign=10k&utm_campaign=studentscholarships&utm_medium=link&utm_source=studentscholarships",
        "category": "No-Essay",
        "money earned": "$10,000",
        "deadline": "September 30th, 2022",
        "brief description": "Register to create an account with CollegeXpress to automatically be entered into their annual scholarship and access their scholarship and college resources",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "Cirkled In \"No Sweat\" Scholarship",
        "link": "https://www.cirkledin.com/scholarships/?ref=counselor-scholarship-flyer",
        "category": "No-Essay",
        "money earned": "$2,500",
        "deadline": "September 30th, 2022",
        "brief description": "Sign up for a Cirkled In account and complete your student portfolio to enter, the more you add to your portfolio the better your chances of winning",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "Coca-Cola Scholars Foundation",
        "link": "https://www.coca-colascholarsfoundation.org/",
        "category": "No-Essay",
        "money earned": "$20,000",
        "deadline": "October 31st, 2022",
        "brief description": "Simply submit an application with your information by the deadline to be eligible to be selected as one of 150 applicants for a $20,000 scholarship",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "Unigo Shout It Out Scholarship",
        "link": "https://www.unigo.com/scholarships/our-scholarships/shout-it-out-scholarship#/fromscholarshipexperts",
        "category": "Essay (250 words)",
        "money earned": "$1,500",
        "deadline": "September 30th, 2022",
        "brief description": "Essay based scholarship for applicants to write about \"whatever they want to say to the rest of the world\", must be 250 words or less",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "JMJ Phillip Group STEM Scholarship",
        "link": "https://jmjphillip.com/jmj-phillip-stem-scholarship/",
        "category": "Essay, Letter of Reccomendation",
        "money earned": "$1,000",
        "deadline": "Deadlines vary",
        "brief description": "Scholarship offered to students in college or already accepted into college, requires a STEM-related essay submission, a letter of reccomendation, and a letter of acceptance from a college they plan on attending",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "VFW Voice of Democracy Scholarship",
        "link": "https://www.vfw.org/community/youth-and-education/youth-scholarships",
        "category": "Essay",
        "money earned": "Amounts vary",
        "deadline": "October 31st, 2022",
        "brief description": "Applicants must record a 3-5 minute audio essay and submit their audio essay along with a written copy, scholarship recipients will be judged on both the content of writing and delivery of speech",
        "submitted by": "Harshadeep Kambhampati"
    },
    {
        "name of scholarship": "Apprentice Ecologist Initiative Scholarship",
        "link": "http://www.wildernessproject.org/volunteer_apprentice_ecologist.php",
        "category": "Project, Essay",
        "money earned": "$1,750",
        "deadline": "December 31st, 2022",
        "brief description": "Conduct a basic \"environmental stewardship\" project such as recycling trash or planting trees, then submit pictures of your project and write an essay about your project",
        "submitted by": "Harshadeep Kambhampati"
    }
]





export default data;